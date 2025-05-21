export default function ZustandCheatSheet() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 font-sans bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-rose-600 text-center">
        Zustand Cheat Sheet
      </h1>
      <p className="text-gray-700 mb-6 text-center">
        State management mrigla, s7el barcha, bl hooks w bla boilerplate.
      </p>
      <hr className="my-4" />

      {/* Install */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Installation</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`npm install zustand`}
        </pre>
      </section>

      {/* Store */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Store b setup s7el</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import { create } from "zustand";

// Store
const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
`}
        </pre>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>Kol state t7eb t7otou fil object.</li>
          <li>set() tbadlou state.</li>
        </ul>
      </section>

      {/* Usage */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Fil component</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`function Profile() {
  const user = useUserStore(state => state.user);
  const setUser = useUserStore(state => state.setUser);

  return user ? (
    <div>Connecté: {user.nom} {user.prenom}</div>
  ) : (
    <button onClick={() => setUser({ nom: "Brayek", prenom: "Fares" })}>
      Connecter
    </button>
  );
}
`}
        </pre>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>Tnaajem tsta3mlou fil barcha components, state global.</li>
        </ul>
      </section>

      {/* Tips */}
      <section>
        <h2 className="text-xl font-semibold mb-2">4. Tips & Liens</h2>
        <ul className="list-disc ml-6 text-blue-700">
          <li>State yb9a preserve, barch t7eb tsta3mlou fi apps kbira.</li>
          <li>
            <a
              href="https://docs.pmnd.rs/zustand"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zustand Docs
            </a>
          </li>
        </ul>
      </section>
      <div className="mt-8 text-center text-xs text-gray-500">
        State management mrigla! 🇹🇳
      </div>
    </div>
  );
}
