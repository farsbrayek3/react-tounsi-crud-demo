import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  nom: z.string().min(2, "L'ism yelzem ykoun akther mel 2 caractères"),
  prenom: z.string().min(2, "Le prénom yelzem ykoun akther mel 2 caractères"),
});

const API_URL = "http://localhost:3001/users";

export default function CrudApp() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  function fetchUsers() {
    axios.get(API_URL).then((res) => setUsers(res.data));
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    if (editingUser) {
      axios
        .put(`${API_URL}/${editingUser.id}`, { ...editingUser, ...data })
        .then(() => {
          setEditingUser(null);
          reset();
          fetchUsers();
        });
    } else {
      // Remove id if present
      const { id: _ignore, ...rest } = data;
      axios.post(API_URL, { ...rest, vue: 0 }).then(() => {
        reset();
        fetchUsers();
      });
    }
  }

  function handleEdit(user) {
    setEditingUser(user);
    setValue("nom", user.nom);
    setValue("prenom", user.prenom);
  }

  function handleDelete(id) {
    if (window.confirm("T7eb temsah user?")) {
      axios.delete(`${API_URL}/${id}`).then(() => fetchUsers());
    }
  }

  function handleAddVue(user) {
    axios
      .patch(`${API_URL}/${user.id}`, { vue: (user.vue || 0) + 1 })
      .then(() => fetchUsers());
  }

  function handleCancelEdit() {
    setEditingUser(null);
    reset();
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row gap-2 mb-6 items-center"
      >
        <input
          {...register("nom")}
          placeholder="Nom"
          className="border px-2 py-1 rounded w-full sm:w-auto"
        />
        {errors.nom && (
          <span className="text-red-600 text-xs">{errors.nom.message}</span>
        )}
        <input
          {...register("prenom")}
          placeholder="Prénom"
          className="border px-2 py-1 rounded w-full sm:w-auto"
        />
        {errors.prenom && (
          <span className="text-red-600 text-xs">{errors.prenom.message}</span>
        )}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
        >
          {editingUser ? "Mettre à jour" : "Ajouter"}
        </button>
        {editingUser && (
          <button
            type="button"
            onClick={handleCancelEdit}
            className="bg-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
          >
            Annuler
          </button>
        )}
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">Nom</th>
              <th className="px-4 py-2 border-b">Prénom</th>
              <th className="px-4 py-2 border-b">Vues</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{u.nom}</td>
                <td className="px-4 py-2 border-b">{u.prenom}</td>
                <td className="px-4 py-2 border-b text-center">
                  {u.vue || 0}
                  <button
                    className="ml-2 bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded text-xs"
                    onClick={() => handleAddVue(u)}
                  >
                    +1 vue
                  </button>
                </td>
                <td className="px-4 py-2 border-b text-center">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-1"
                    onClick={() => handleEdit(u)}
                  >
                    Modifier
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded text-xs"
                    onClick={() => handleDelete(u.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center text-gray-500 py-6">
                  Aucun utilisateur.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
