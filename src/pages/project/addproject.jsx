import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import useProjectStore from "../store/projectStore.js"; // Only if you need it

const schema = z.object({
  name: z
    .string()
    .min(
      3,
      "LE NOM DOIT AVOIR AU MOINS 3 CARACTERES ET IL DOIT COMMENCER PAR UN MAJUSCULE"
    )
    .regex(/^[A-Z].*/, "Le nom doit commencer par une majuscule"),
  deadline: z.string().min(2, "Deadline requise"),
  priority: z.string().min(2, "Priorité requise"),
  status: z.string().min(2, "Status requis"),
});

export default function AddProject() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  // const setUser = useProjectStore((state) => state.setUser);

  const onSubmit = async (data) => {
    await axios.post("http://localhost:3001/projects", data);
    // setUser && setUser(res.data); // Only if you use a global store
    reset();
    navigate("/projects");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md p-8 font-sans">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex items-center">
          <label className="w-24">Nom</label>
          <input
            {...register("name")}
            placeholder="name"
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.name ? "border-red-400" : "border-gray-300"
            }`}
            autoComplete="off"
          />
        </div>
        {errors.name && (
          <span className="text-sm text-red-600">{errors.name.message}</span>
        )}

        <div className="flex items-center">
          <label className="w-24">Deadline</label>
          <input
            {...register("deadline")}
            placeholder="deadline"
            type="date"
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.deadline ? "border-red-400" : "border-gray-300"
            }`}
            autoComplete="off"
          />
        </div>
        {errors.deadline && (
          <span className="text-sm text-red-600">
            {errors.deadline.message}
          </span>
        )}

        <div className="flex items-center">
          <label className="w-24">Priorité</label>
          <select
            {...register("priority")}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.priority ? "border-red-400" : "border-gray-300"
            }`}
          >
            <option value="">Choisir...</option>
            <option value="haute">Haute</option>
            <option value="moyenne">Moyenne</option>
            <option value="basse">Basse</option>
          </select>
        </div>
        {errors.priority && (
          <span className="text-sm text-red-600">
            {errors.priority.message}
          </span>
        )}

        <div className="flex items-center">
          <label className="w-24">Status</label>
          <select
            {...register("status")}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.status ? "border-red-400" : "border-gray-300"
            }`}
          >
            <option value="">Choisir...</option>
            <option value="en cours">En cours</option>
            <option value="termine">Terminé</option>
            <option value="archive">Archivé</option>
          </select>
        </div>
        {errors.status && (
          <span className="text-sm text-red-600">{errors.status.message}</span>
        )}

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
