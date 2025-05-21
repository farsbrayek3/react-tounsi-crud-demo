import { useEffect, useState } from "react";
import axios from "axios";
import useUserStore from "../store/userStore.js";

export default function Users() {
  const [users, setUsers] = useState([]);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => setUsers(res.data))
      .catch(() => setUsers([]));
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md p-8 font-sans">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Liste des utilisateurs
      </h2>
      {users.length === 0 ? (
        <p className="text-center text-gray-500">Aucun utilisateur trouvé.</p>
      ) : (
        <ul className="space-y-3">
          {users.map((u) => (
            <li
              key={u.id}
              className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded shadow-sm"
            >
              <span>
                <span className="font-semibold">{u.nom}</span>{" "}
                <span className="text-gray-700">{u.prenom}</span>
              </span>
              <button
                className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1 rounded transition-colors"
                onClick={() => setUser(u)}
              >
                Se connecter
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
