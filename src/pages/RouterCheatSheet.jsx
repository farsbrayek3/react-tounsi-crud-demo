import React from "react";

// Cheat Sheet React Router Dom bel Tounsi + Tailwind UI

export default function RouterCheatSheet() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 font-sans bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-blue-600 text-center">
        React Router Dom Cheat Sheet
      </h1>
      <p className="text-gray-700 mb-6 text-center">
        Routing fil React, navigation s7el barcha w bech URL tbadel component.
      </p>
      <hr className="my-4" />

      {/* Install */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Installation</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`npm install react-router-dom`}
        </pre>
      </section>

      {/* Basic Usage */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Basic Routing</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4">
        <Link to="/">Accueil</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
`}
        </pre>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>
            <b>&lt;Link&gt;</b> tbadl page b click, ma yrafrech l'App.
          </li>
          <li>
            <b>&lt;Routes&gt;</b> w <b>&lt;Route&gt;</b> mapping bin URL w page.
          </li>
        </ul>
      </section>

      {/* useNavigate */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. useNavigate</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import { useNavigate } from "react-router-dom";

function Example() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/about")}>Go to About</button>
}
`}
        </pre>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>Bech tzid navigation mil code, t7ot navigate("/route").</li>
        </ul>
      </section>

      {/* Dynamic Param */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. URL Paramètres</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`<Route path="/user/:id" element={<UserDetails />} />

// Fel UserDetails.jsx
import { useParams } from "react-router-dom";
const { id } = useParams();
`}
        </pre>
      </section>

      <div className="mt-8 text-center text-xs text-gray-500">
        Navigation s7el w mrigla! 🇹🇳
      </div>
    </div>
  );
}
