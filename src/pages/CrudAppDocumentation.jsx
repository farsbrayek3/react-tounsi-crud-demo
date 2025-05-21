import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Zod schema for validation
const schema = z.object({
  nom: z.string().min(2, "L'ism yelzem ykoun akther mel 2 caractères"),
  prenom: z.string().min(2, "Le prénom yelzem ykoun akther mel 2 caractères"),
});

// API URL
const API_URL = "http://localhost:3001/users";

export default function CrudAppDocumentation() {
  // --- State management ---
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // --- Fetch users ---
  function fetchUsers() {
    axios.get(API_URL).then((res) => setUsers(res.data));
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  // --- Form (add/update) ---
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
        .put(`${API_URL}/${editingUser.id}`, {
          ...editingUser,
          ...data,
        })
        .then(() => {
          setEditingUser(null);
          reset();
          fetchUsers();
        });
    } else {
      axios.post(API_URL, { ...data, vue: 0 }).then(() => {
        reset();
        fetchUsers();
      });
    }
  }
  // --- Edit user ---
  function handleEdit(user) {
    setEditingUser(user);
    setValue("nom", user.nom);
    setValue("prenom", user.prenom);
  }

  // --- Delete user ---
  function handleDelete(id) {
    if (window.confirm("T7eb temsah user?")) {
      axios.delete(`${API_URL}/${id}`).then(() => fetchUsers());
    }
  }

  // --- Increment "vue" for a user ---
  function handleAddVue(user) {
    axios
      .patch(`${API_URL}/${user.id}`, { vue: (user.vue || 0) + 1 })
      .then(() => fetchUsers());
  }

  // --- Cancel edit ---
  function handleCancelEdit() {
    setEditingUser(null);
    reset();
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 font-sans bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-green-700 text-center">
        Documentation: Kifeh taamel CRUD App bel React (b Tounsi)
      </h1>
      <p className="text-gray-700 mb-6">
        Houni bech tlawjih l’steps w l-code l-lazem bech taamel CRUD (Create,
        Read, Update, Delete) app mrigla bel React, JSON Server, Axios,
        Tailwind, zod w react-hook-form. Kol step mfassra b tounsi w m3aha code
        exemple. Louta taawed code complet mrigl, ready to use!
      </p>
      <hr className="my-4" />

      {/* 1. Setup */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-green-700">
          1. Initialisation
        </h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>
            <b>React:</b>{" "}
            <code>npm create vite@latest my-crud-app -- --template react</code>
          </li>
          <li>
            <b>Install packages:</b>{" "}
            <code>
              npm i axios json-server tailwindcss react-hook-form zod
              @hookform/resolvers
            </code>
          </li>
          <li>
            <b>Start Tailwind:</b> suivre{" "}
            <a
              href="https://tailwindcss.com/docs/installation"
              className="text-green-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              docs
            </a>
          </li>
        </ul>
      </section>

      {/* 2. Fake Backend */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-green-700">
          2. Backend bidha7ka (json-server)
        </h2>
        <p className="text-gray-700 text-sm mb-2">
          T7ot fichier <code>db.json</code> fil racine, exemple:
        </p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`{
  "users": [
    { "id": 1, "nom": "Brayek", "prenom": "Fares", "vue": 0 }
  ]
}
`}
        </pre>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>
            <b>Run server:</b>{" "}
            <code>npx json-server --watch db.json --port 3001</code>
          </li>
        </ul>
      </section>

      {/* 3. Full CRUD App Example */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-green-700">
          3. Code complet CRUD (Create, Read, Update, Delete)
        </h2>
        <p className="text-gray-700 text-sm mb-2">
          Hedha code kammel li t7eb taawed bih CRUD, formulaire mrigla b{" "}
          <b>react-hook-form</b> w <b>zod</b> l'validation, lkol b Tailwind.
        </p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto mb-2">
          {`import { useEffect, useState } from "react";
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
  useEffect(() => { fetchUsers(); }, []);

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
        .put(\`\${API_URL}/\${editingUser.id}\`, {
          ...editingUser,
          ...data,
        })
        .then(() => {
          setEditingUser(null); reset(); fetchUsers();
        });
    } else {
      axios
        .post(API_URL, { ...data, vue: 0 })
        .then(() => { reset(); fetchUsers(); });
    }
  }

  function handleEdit(user) {
    setEditingUser(user);
    setValue("nom", user.nom);
    setValue("prenom", user.prenom);
  }

  function handleDelete(id) {
    if (window.confirm("T7eb temsah user?")) {
      axios.delete(\`\${API_URL}/\${id}\`).then(() => fetchUsers());
    }
  }

  function handleAddVue(user) {
    axios
      .patch(\`\${API_URL}/\${user.id}\`, { vue: (user.vue || 0) + 1 })
      .then(() => fetchUsers());
  }

  function handleCancelEdit() {
    setEditingUser(null);
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2 mb-6 items-center">
        <input {...register("nom")} placeholder="Nom" className="border px-2 py-1 rounded w-full sm:w-auto" />
        {errors.nom && <span className="text-red-600 text-xs">{errors.nom.message}</span>}
        <input {...register("prenom")} placeholder="Prénom" className="border px-2 py-1 rounded w-full sm:w-auto" />
        {errors.prenom && <span className="text-red-600 text-xs">{errors.prenom.message}</span>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
          {editingUser ? "Mettre à jour" : "Ajouter"}
        </button>
        {editingUser && (
          <button type="button" onClick={handleCancelEdit}
            className="bg-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-400 transition-colors">
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
`}
        </pre>
        <div className="text-gray-500 text-sm mb-2">
          <b>Chnoua t9dar taawed b hedha?</b>
          <ul className="list-disc ml-6">
            <li>
              CRUD mrigla: affichage, ajout, modification, suppression, w
              incrémentation de vue.
            </li>
            <li>
              Formulaire validé b react-hook-form + zod (errors tbeyyen direct).
            </li>
            <li>
              Kol action immediately y7adeth el state (affichage yitbadel
              direct).
            </li>
            <li>Styling b Tailwind lkol.</li>
          </ul>
        </div>
      </section>

      <div className="mt-8 text-center text-xs text-gray-500">
        Hakka tkoun 3amlit CRUD mrigla b React, Axios, JSON Server,
        react-hook-form w zod! 🇹🇳 <br />
        (Nass9i tbadlou API_URL si t7eb, w amael npm run dev + json-server pour
        tester.)
      </div>

      {/* Live Example */}
      <hr className="my-8" />
      <h2 className="text-xl font-semibold mb-4 text-green-700 text-center">
        Exemple vivant fil page hedhi (test directly!)
      </h2>
      {/* --- LIVE CRUD DEMO --- */}
      <div className="border-2 border-green-200 rounded-lg p-4 my-4">
        {/* Add/Edit Form */}
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
            <span className="text-red-600 text-xs">
              {errors.prenom.message}
            </span>
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
        {/* Users Table */}
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
                      title="Ajouter une vue"
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
        <div className="text-xs text-gray-400 mt-6 text-center">
          CRUD complet (live demo fil même page!). 🇹🇳
        </div>
      </div>
    </div>
  );
}
