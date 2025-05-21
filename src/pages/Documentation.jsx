import React from "react";

// Documentation page bel Tunisien + UI mzyena b Tailwind

export default function Documentation() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">
        React + Vite : Exam Reference Documentation
      </h1>
      <p className="mb-4 text-gray-700 text-center">
        Hadhy page tlakhess el librairies el mohimma fil projet, wen
        tasta3mlhom, w kol code exemple.
      </p>
      <hr className="my-4" />

      {/* Vite */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Vite</h2>
        <p>
          <b>Alech :</b> Vite houwa tool barcha sra3 fil build w server mte3
          développement. Instant start, hot reload (HMR) sra3, w setup simple
          barcha m3a React.
        </p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`npm create vite@latest . -- --template react`}
        </pre>
      </section>

      {/* react-router-dom */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. <code>react-router-dom</code>
        </h2>
        <p>
          <b>Alech :</b> T7eb taawed projet b plusieurs pages w routing, hedhya
          t7ell beha.
        </p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}
        </pre>
        <p className="text-gray-500 text-sm">
          Tasta3mlha ki t7eb user y7awes bin pages b URL.
        </p>
      </section>

      {/* json-server */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. <code>json-server</code>
        </h2>
        <p>
          <b>Alech :</b> T7eb API fake barka lel test w développement, bla
          backend 9awi.
        </p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`npx json-server --watch db.json --port 3001`}
        </pre>
        <p className="text-gray-600 mb-2">
          <b>db.json :</b>
        </p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`{
  "users": [
    { "id": 1, "nom": "Brayek", "prenom": "Fares" }
  ]
}`}
        </pre>
        <p className="text-gray-500 text-sm">
          Tasta3mlha local mta3k, ki t7eb taawed API (GET, POST, etc.) bel
          click.
        </p>
      </section>

      {/* axios */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          4. <code>axios</code>
        </h2>
        <p>
          <b>Alech :</b> T7eb taawed HTTP requests lel API (ex:{" "}
          <code>json-server</code>).
        </p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import axios from "axios";

// GET request
axios.get("http://localhost:3001/users")
  .then(res => console.log(res.data));

// POST request
axios.post("http://localhost:3001/users", { nom: "Brayek", prenom: "Fares" })
  .then(res => console.log(res.data));
`}
        </pre>
        <p className="text-gray-500 text-sm">
          Kol API call b axios, s7el w barcha options.
        </p>
      </section>

      {/* react-hook-form, zod, @hookform/resolvers */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          5. <code>react-hook-form</code>, <code>zod</code>,{" "}
          <code>@hookform/resolvers</code>
        </h2>
        <p>
          <b>Alech :</b> Tsta3mlhom lel forms, state management, w validation
          9awya barcha.
        </p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nom: z.string().min(2, "Nom requis"),
  prenom: z.string().min(2, "Prénom requis"),
});

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Valid data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nom")} placeholder="Nom" />
      {errors.nom && <span>{errors.nom.message}</span>}
      <input {...register("prenom")} placeholder="Prénom" />
      {errors.prenom && <span>{errors.prenom.message}</span>}
      <button type="submit">Envoyer</button>
    </form>
  );
}
`}
        </pre>
        <p className="text-gray-500 text-sm">
          Kol forma t7eb validation w user input tasta3mlhom.
        </p>
      </section>

      {/* zustand */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          6. <code>zustand</code>
        </h2>
        <p>
          <b>Alech :</b> State global s7el barcha (ex: user connecté).
        </p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import { create } from "zustand";

// Store
const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

// Usage in component
function Profile() {
  const user = useUserStore(state => state.user);
  const setUser = useUserStore(state => state.setUser);

  return (
    <div>
      {user ? (
        <div>Connecté: {user.nom} {user.prenom}</div>
      ) : (
        <div>Aucun utilisateur connecté.</div>
      )}
    </div>
  );
}
`}
        </pre>
        <p className="text-gray-500 text-sm">
          Tsta3mlha ki t7eb state m3a barcha components.
        </p>
      </section>

      {/* Tips & Resources */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Tips & Best Practices</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            <b>File structure :</b> db.json fil racine, pages fil{" "}
            <code>src/pages/</code>
          </li>
          <li>
            <b>Router :</b> lzem <code>&lt;App /&gt;</code> ykoun m3a{" "}
            <code>&lt;BrowserRouter&gt;</code> (fil <code>main.jsx</code>)
          </li>
          <li>
            <b>Form validation :</b> dima resolver m3a schema.
          </li>
          <li>
            <b>API errors :</b> dima handli b <code>.catch()</code>
          </li>
          <li>
            <b>Test CRUD operations</b> (Create, Read, Update, Delete) fil API.
          </li>
        </ul>
        <p className="text-gray-600 mt-1">
          <b>Exercice :</b> Amel user list b add, delete, w validation b kol
          hadhya.
        </p>
      </section>

      {/* Resources */}
      <div className="mt-8 text-center text-xs text-gray-500">
        Mrigla! Kol chay f hadhy el page.
      </div>
    </div>
  );
}
