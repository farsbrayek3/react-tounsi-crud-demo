import React from "react";

// React + Vite Cheat Sheet: Imports, Features, and Best Practices

export default function ReactViteCheatSheet() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 font-sans bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-violet-600 text-center">
        React + Vite Cheat Sheet
      </h1>
      <p className="text-gray-700 mb-6 text-center">
        Kol chay t7eb taawed bih import fel React project mte3ek (m3a Vite):
        components, hooks, images, assets, styles, env, dynamic imports... w
        kifeh Vite y3awd loading w HMR.
      </p>
      <hr className="my-4" />

      {/* React Imports */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. React Imports</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MyComponent from "./components/MyComponent.jsx";
`}
        </pre>
        <div className="text-gray-500 text-sm mt-1">
          <b>React:</b> Import default <code>React</code> (not always required
          for JSX, but best practice), w hooks (useState, useEffect...), w
          components (App, MyComponent...).
        </div>
      </section>

      {/* Vite Imports: Assets */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. Import Assets (Images, SVG, etc.)
        </h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import logo from "./assets/logo.png";
import { ReactComponent as Icon } from "./assets/icon.svg";

<img src={logo} alt="Logo" />
<Icon className="w-6 h-6 text-blue-500" />
`}
        </pre>
        <div className="text-gray-500 text-sm mt-1">
          <b>Images:</b> Vite yhandle images, svg, mp3, mp4, ... (tnaajem
          timporti w tsta3ml src).
          <br />
          <b>SVGs:</b> Tnaajem timporti svg as React component (yismahlek
          tbadlou color/size b class).
        </div>
      </section>

      {/* CSS & Styles */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Import CSS & Styles</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import "./index.css";
import "./App.css";
import styles from "./MyComponent.module.css";

<div className={styles.specialCard}>Content</div>
`}
        </pre>
        <div className="text-gray-500 text-sm mt-1">
          <b>Global CSS:</b> timporti fil main.jsx.
          <br />
          <b>CSS Modules:</b> syntax <code>mystyle.module.css</code> yjib object
          styles, ykhalik styling scoped.
        </div>
      </section>

      {/* Env Variables */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Env Variables (Vite)</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`// .env
VITE_API_URL=http://localhost:3001

// Fel code
const api = import.meta.env.VITE_API_URL;
`}
        </pre>
        <div className="text-gray-500 text-sm mt-1">
          <b>Vite:</b> variable taawed b <code>VITE_</code> devant, w taccessi b{" "}
          <code>import.meta.env</code>.
        </div>
      </section>

      {/* Dynamic Imports */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          5. Dynamic Imports (Code Splitting)
        </h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`const LazyComponent = React.lazy(() => import("./components/LazyComponent.jsx"));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
`}
        </pre>
        <div className="text-gray-500 text-sm mt-1">
          <b>React.lazy:</b> dynamic import, ykhalik tloadi component ki yelzem
          (code splitting, faster load).
        </div>
      </section>

      {/* Aliases */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Path Aliases (Vite)</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

// Fel code
import Home from "@/pages/Home.jsx";
`}
        </pre>
        <div className="text-gray-500 text-sm mt-1">
          <b>Aliasing:</b> tnaajem timporti b @/pages/Home.jsx au lieu men
          ../../pages/Home.jsx.
        </div>
      </section>

      {/* Vite HMR & Fast Refresh */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          7. Vite HMR (Hot Module Replacement)
        </h2>
        <div className="bg-gray-100 p-2 rounded text-xs overflow-x-auto mb-2">
          <code>npm run dev</code> or <code>yarn dev</code>
        </div>
        <div className="text-gray-500 text-sm mt-1">
          <b>Vite:</b> kol marra tabdel fichier, l'app taawed reload auto (Hot
          Reload), sra3 barcha, state yb9a preserve.
        </div>
      </section>

      {/* Export Patterns */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          8. Export/Import Patterns
        </h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`// Default export
export default function MyComponent() { ... }
import MyComponent from "./MyComponent.jsx";

// Named export
export function util() { ... }
import { util } from "./utils.js";
`}
        </pre>
        <div className="text-gray-500 text-sm mt-1">
          <b>Default export:</b> yesta3mlou 9otlek import name.
          <br />
          <b>Named export:</b> yesta3mlou import bel accolades.
        </div>
      </section>

      {/* Other Useful Imports */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Other Useful Imports</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>
            <b>JSON:</b> <code>import data from "./data.json";</code> (yimporti
            json kima js object)
          </li>
          <li>
            <b>Fonts:</b> <code>import "@fontsource/roboto";</code> (npm i
            @fontsource/roboto)
          </li>
          <li>
            <b>Libs:</b> <code>import axios from "axios";</code> (ay package
            mte3 npm)
          </li>
        </ul>
      </section>

      <div className="mt-8 text-center text-xs text-gray-500">
        Imports, assets, env, splitting, kol chay fel React + Vite! 🇹🇳
      </div>
    </div>
  );
}
