import useUserStore from "../store/userStore.js";

export default function Home() {
  const user = useUserStore((state) => state.user);
  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-6 font-sans">
      <h2 className="text-2xl font-bold text-green-700 mb-3 text-center">
        Marhbé bik fi l'app React mta3 Fares Brayek!
      </h2>
      <p className="text-gray-700 mb-2 font-medium">
        Hédi démo sghira taawed fonctionnalités el matloubin:
      </p>
      <ul className="list-disc ml-6 text-gray-800 mb-4 leading-relaxed">
        <li>
          Navigation b{" "}
          <span className="font-semibold text-blue-700">react-router-dom</span>
        </li>
        <li>
          Appels API b{" "}
          <span className="font-semibold text-blue-700">axios</span>
        </li>
        <li>
          Formulaire b{" "}
          <span className="font-semibold text-blue-700">react-hook-form</span>,{" "}
          <span className="font-semibold text-blue-700">zod</span> w resolvers
        </li>
        <li>
          Etat global b{" "}
          <span className="font-semibold text-blue-700">zustand</span>
        </li>
        <li>
          Backend fake b{" "}
          <span className="font-semibold text-blue-700">json-server</span>
        </li>
      </ul>
      {user ? (
        <div className="p-3 bg-green-50 border border-green-200 rounded text-green-800 text-center font-semibold">
          Utilisateur connecté : {user.nom} {user.prenom}
        </div>
      ) : (
        <div className="p-3 bg-red-50 border border-red-200 rounded text-red-800 text-center font-semibold">
          Aucun utilisateur connecté.
        </div>
      )}
    </div>
  );
}
