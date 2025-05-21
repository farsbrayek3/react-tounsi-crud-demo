import React from "react";

// Tailwind CSS: Cheat Sheet (Components & Examples) + Tounsi explanations

export default function TailwindCheatSheet() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 font-sans bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-teal-600 text-center">
        Tailwind CSS Cheat Sheet
      </h1>
      <p className="text-gray-700 mb-6 text-center">
        Exemples mrigla b classes Tailwind: cards, tables, alerts, buttons w
        barcha 7wajet akther! Kol code m3a chnoua ya3mel, bel Tounsi.
      </p>
      <hr className="my-4" />

      {/* Card Example */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Card mzyena</h2>
        <div className="bg-white rounded-xl shadow-md p-4 mb-2">
          <h3 className="text-lg font-bold mb-1">Titre Card</h3>
          <p className="text-gray-700 mb-2">Description sghira l'card.</p>
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800">
            Action
          </button>
        </div>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`<div className="bg-white rounded-xl shadow-md p-4">
  <h3 className="text-lg font-bold mb-1">Titre Card</h3>
  <p className="text-gray-700 mb-2">Description sghira l'card.</p>
  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800">Action</button>
</div>`}
        </pre>
        <div className="text-gray-500 text-sm mt-1">
          Card: zwin, shadow, border radius, couleur bouton.
        </div>
      </section>

      {/* Table Example */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Table responsive</h2>
        <div className="overflow-x-auto mb-2">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b">Nom</th>
                <th className="px-4 py-2 border-b">Prénom</th>
                <th className="px-4 py-2 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">Brayek</td>
                <td className="px-4 py-2 border-b">Fares</td>
                <td className="px-4 py-2 border-b">
                  <button className="bg-teal-600 text-white px-2 py-1 rounded hover:bg-teal-800 text-xs">
                    Voir
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">Doe</td>
                <td className="px-4 py-2 border-b">Jane</td>
                <td className="px-4 py-2 border-b">
                  <button className="bg-teal-600 text-white px-2 py-1 rounded hover:bg-teal-800 text-xs">
                    Voir
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`<div className="overflow-x-auto">
  <table className="min-w-full border border-gray-200 text-sm">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 border-b">Nom</th>
        <th className="px-4 py-2 border-b">Prénom</th>
        <th className="px-4 py-2 border-b">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-2 border-b">Brayek</td>
        <td className="px-4 py-2 border-b">Fares</td>
        <td className="px-4 py-2 border-b">
          <button className="bg-teal-600 text-white px-2 py-1 rounded hover:bg-teal-800 text-xs">Voir</button>
        </td>
      </tr>
      {/* ... */}
    </tbody>
  </table>
</div>`}
        </pre>
        <div className="text-gray-500 text-sm mt-1">
          Table: responsive, borders, hover effect, bouton sghir.
        </div>
      </section>

      {/* Alert Example */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. Alert (success/warning/error)
        </h2>
        <div className="mb-2">
          <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-2 rounded mb-2">
            ✔️ Succès! Action mrigla.
          </div>
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-2 rounded mb-2">
            ⚠️ Attention! Famma warning.
          </div>
          <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-2 rounded">
            ❌ Erreur! Famma problème.
          </div>
        </div>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`<div className="bg-green-100 border border-green-400 text-green-800 px-4 py-2 rounded">✔️ Succès! Action mrigla.</div>
<div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-2 rounded">⚠️ Attention! Famma warning.</div>
<div className="bg-red-100 border border-red-400 text-red-800 px-4 py-2 rounded">❌ Erreur! Famma problème.</div>
`}
        </pre>
        <div className="text-gray-500 text-sm mt-1">
          Alerts: couleur w icon, border, padding, radius.
        </div>
      </section>

      {/* Button Variants */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Boutons (variants)</h2>
        <div className="flex gap-3 mb-2 flex-wrap">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
            Principal
          </button>
          <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded hover:bg-gray-300 transition-colors">
            Secondaire
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors">
            Danger
          </button>
          <button className="border border-gray-400 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
            Outline
          </button>
        </div>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`<button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">Principal</button>
<button className="bg-gray-200 text-gray-900 px-4 py-2 rounded hover:bg-gray-300">Secondaire</button>
<button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800">Danger</button>
<button className="border border-gray-400 text-gray-800 px-4 py-2 rounded hover:bg-gray-100">Outline</button>
`}
        </pre>
        <div className="text-gray-500 text-sm mt-1">
          Boutons: couleurs, outline, hover, radius.
        </div>
      </section>

      {/* Grid Example */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          5. Grid cards (responsive)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
          <div className="bg-white rounded shadow p-4">Card 1</div>
          <div className="bg-white rounded shadow p-4">Card 2</div>
        </div>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div className="bg-white rounded shadow p-4">Card 1</div>
  <div className="bg-white rounded shadow p-4">Card 2</div>
</div>`}
        </pre>
        <div className="text-gray-500 text-sm mt-1">
          Grid: responsive, 1 colonne fel tel, 2 fel desktop.
        </div>
      </section>

      {/* Input Example */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Input stylé</h2>
        <input
          className="border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          placeholder="Votre nom..."
        />
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`<input
  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
  placeholder="Votre nom..."
/>`}
        </pre>
        <div className="text-gray-500 text-sm mt-1">
          Input: border, radius, focus ring, full width.
        </div>
      </section>

      <div className="mt-8 text-center text-xs text-gray-500">
        Components, grid, table, bouton w barcha akther! 🇹🇳
      </div>
    </div>
  );
}
