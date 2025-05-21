import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore.js";

const schema = z.object({
  nom: z.string().min(2, "Nom requis"),
  prenom: z.string().min(2, "Prénom requis"),
});

export default function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const onSubmit = async (data) => {
    const res = await axios.post("http://localhost:3001/users", data);
    setUser(res.data);
    reset();
    navigate("/users");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md p-8 font-sans">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Ajouter un utilisateur
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <input
            {...register("nom")}
            placeholder="Nom"
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.nom ? "border-red-400" : "border-gray-300"
            }`}
            autoComplete="off"
          />
          {errors.nom && (
            <span className="text-sm text-red-600">{errors.nom.message}</span>
          )}
        </div>
        <div>
          <input
            {...register("prenom")}
            placeholder="Prénom"
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.prenom ? "border-red-400" : "border-gray-300"
            }`}
            autoComplete="off"
          />
          {errors.prenom && (
            <span className="text-sm text-red-600">
              {errors.prenom.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors disabled:opacity-60"
        >
          {isSubmitting ? "Ajout..." : "Ajouter"}
        </button>
      </form>
    </div>
  );
}
