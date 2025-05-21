import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Users from "./pages/Users.jsx";
import AddUser from "./pages/AddUser.jsx";
import useUserStore from "./store/userStore.js";
import Documentation from "./pages/Documentation.jsx";
import AxiosDocumentation from "./pages/AxiosDocumentation.jsx";
import ReactHookFormCheatSheet from "./pages/ReactHookFormCheatSheet.jsx";
import ZustandCheatSheet from "./pages/ZustandCheatSheet.jsx";
import TailwindCheatSheet from "./pages/TailwindCheatSheet.jsx";
import RouterCheatSheet from "./pages/RouterCheatSheet.jsx";
import ReactViteCheatSheet from "./pages/ReactViteCheatSheet.jsx";
import CrudAppDocumentation from "./pages/CrudAppDocumentation.jsx";

import "../src/App.css";

// route lil CRUD app wahadha
import CrudApp from "./pages/crudapp.jsx";
// List of navigation links
const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/users", label: "Liste des utilisateurs" },
  { to: "/add", label: "Ajouter un utilisateur" },
  { to: "/doc", label: "Documentation" },
  { to: "/doc/axios", label: "Axios" },
  { to: "/rhf-cheat", label: "React Hook Form" },
  { to: "/zustand-cheat", label: "Zustand" },
  { to: "/tailwind-cheat", label: "Tailwind CSS" },
  { to: "/router-cheat", label: "React Router Dom" },
  { to: "/react-vite-cheat", label: "React Vite" },
  { to: "/crud-app-doc", label: "CRUD App" },
  { to: "/crud-app", label: "CRUD App" }, // link lil CRUD app
];

function NavBar({ user }) {
  const location = useLocation();

  return (
    <nav className="flex flex-wrap gap-x-4 gap-y-2 mb-6 items-center bg-gray-50 rounded-lg px-4 py-3 shadow-md relative">
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`font-medium px-2 py-1 rounded transition-colors duration-150 ${
              location.pathname === link.to
                ? "bg-blue-100 text-blue-900"
                : "text-blue-700 hover:bg-blue-50"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      {user ? (
        <span className="ml-auto text-sm bg-blue-50 text-blue-800 px-3 py-1 rounded shadow font-semibold">
          Connecté: {user.nom} {user.prenom}
        </span>
      ) : null}
    </nav>
  );
}

export default function App() {
  const user = useUserStore((state) => state.user);

  const location = useLocation();
  const noLayoutRoutes = ["/crud-app"];

  const isNoLayout = noLayoutRoutes.includes(location.pathname);

  if (isNoLayout) {
    return (
      <Routes>
        <Route path="/crud-app" element={<CrudApp />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-50 to-blue-50">
      <div className="max-w-3xl mx-auto p-4">
        <NavBar user={user} />
        <main className="bg-white rounded-xl shadow-lg p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/doc" element={<Documentation />} />
            <Route path="/doc/axios" element={<AxiosDocumentation />} />
            <Route path="/rhf-cheat" element={<ReactHookFormCheatSheet />} />
            <Route path="/zustand-cheat" element={<ZustandCheatSheet />} />
            <Route path="/tailwind-cheat" element={<TailwindCheatSheet />} />
            <Route path="/router-cheat" element={<RouterCheatSheet />} />
            <Route path="/react-vite-cheat" element={<ReactViteCheatSheet />} />
            <Route path="/crud-app-doc" element={<CrudAppDocumentation />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
