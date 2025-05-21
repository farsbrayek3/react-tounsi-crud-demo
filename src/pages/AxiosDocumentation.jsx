import React from "react";

// Cheat Sheet Axios bel Tunisien + UI mzyena b Tailwind

export default function AxiosDocumentation() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Axios : Cheat Sheet & Advanced Usage
      </h1>
      <p className="mb-4 text-gray-700 text-center">
        <b>Axios</b> houwa HTTP client sahel barcha, tnaajem t3ayet bih l API
        fil browser w fil Node.js. Tnaajem t3ayet, tab3ath, tupdate, twarri
        errors, w taawed configuration mta3 request b barcha tor9.
      </p>
      <hr className="my-4" />

      {/* Basic Usage */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Basic Usage</h2>
        <div className="mb-2 font-bold text-gray-700">GET request :</div>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import axios from "axios";

axios.get("http://localhost:3001/users")
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`}
        </pre>
        <div className="mb-2 font-bold text-gray-700 mt-3">POST request :</div>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`axios.post("http://localhost:3001/users", { nom: "Brayek", prenom: "Fares" })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`}
        </pre>
        <div className="mb-2 font-bold text-gray-700 mt-3">PUT request :</div>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`axios.put("http://localhost:3001/users/1", { nom: "Brayek", prenom: "Fares Updated" })
  .then(response => console.log(response.data));`}
        </pre>
        <div className="mb-2 font-bold text-gray-700 mt-3">PATCH request :</div>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`axios.patch("http://localhost:3001/users/1", { prenom: "NouveauPrenom" })
  .then(response => console.log(response.data));`}
        </pre>
        <div className="mb-2 font-bold text-gray-700 mt-3">
          DELETE request :
        </div>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`axios.delete("http://localhost:3001/users/1")
  .then(response => console.log("Deleted!"));`}
        </pre>
        <p className="text-gray-500 text-sm mt-2">
          GET tlawa9 bih data, POST tab3ath data, PUT/ PATCH tbadlou, DELETE
          tna7i.
        </p>
      </section>

      {/* Request with Config */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Request with Config</h2>
        <p className="text-gray-600">Tnaajem tzid headers, params, etc.</p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`axios.get("http://localhost:3001/users", {
  headers: { Authorization: "Bearer token" },
  params: { search: "Brayek" }
}).then(res => console.log(res.data));`}
        </pre>
      </section>

      {/* Global Defaults */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Global Defaults</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.common["Authorization"] = "Bearer token";`}
        </pre>
        <p className="text-gray-500 text-sm mt-2">
          Kol request baad bech ywarrek l baseURL w header hedhom, illa ki
          tbadlou manually.
        </p>
      </section>

      {/* Axios Instance */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Axios Instance</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" }
});

api.get("/users").then(res => console.log(res.data));`}
        </pre>
        <p className="text-gray-500 text-sm">
          Instance ykhalik taawed config wa7da w t3ayet biha barcha marat f
          projet.
        </p>
      </section>

      {/* Interceptors */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          5. Interceptors (Advanced)
        </h2>
        <p className="text-gray-600">
          Interceptors ykhalik tzid logique 9bal request w ba3d response: t7ot
          token, taawed error global, etc.
        </p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`// Request interceptor
api.interceptors.request.use(
  function(config) {
    config.headers["X-Request-Id"] = Math.random().toString(36).substring(7);
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response && error.response.status === 401) {
      alert("Unauthorized!");
    }
    return Promise.reject(error);
  }
);`}
        </pre>
      </section>

      {/* Async/Await */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Async/Await</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`async function fetchUsers() {
  try {
    const response = await axios.get("http://localhost:3001/users");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}`}
        </pre>
      </section>

      {/* Handling Errors */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Handling Errors</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`axios.get("/bad-url")
  .catch(error => {
    if (error.response) {
      // Server response
      console.error("Error response:", error.response.data);
    } else if (error.request) {
      // No response
      console.error("No response received", error.request);
    } else {
      // Setup error
      console.error("Error", error.message);
    }
  });`}
        </pre>
        <p className="text-gray-500 text-sm">
          Error ykoun f response, wala request, wala setup.
        </p>
      </section>

      {/* Concurrent Requests */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Concurrent Requests</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`Promise.all([
  axios.get("/users/1"),
  axios.get("/users/2")
]).then(([user1, user2]) => {
  console.log(user1.data, user2.data);
});`}
        </pre>
      </section>

      {/* Cancel Request */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Canceling Requests</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`const controller = new AbortController();
axios.get("/users", { signal: controller.signal })
  .catch(err => {
    if (axios.isCancel(err)) {
      console.log("Request canceled:", err.message);
    }
  });
// To cancel:
controller.abort();`}
        </pre>
      </section>

      {/* Uploading Files */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          10. Upload Files (FormData)
        </h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`const formData = new FormData();
formData.append("avatar", fileInput.files[0]);

axios.post("/upload", formData, {
  headers: { "Content-Type": "multipart/form-data" }
});`}
        </pre>
      </section>

      {/* Downloading Files */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          11. Download Files (Blob)
        </h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`axios.get("/file.pdf", { responseType: "blob" })
  .then(response => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "file.pdf");
    document.body.appendChild(link);
    link.click();
  });`}
        </pre>
      </section>

      {/* Transform Request/Response */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          12. Transform Request & Response
        </h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`axios.post("/users", { name: "Fares" }, {
  transformRequest: [(data, headers) => {
    data.timestamp = Date.now();
    return JSON.stringify(data);
  }],
  transformResponse: [data => {
    const json = JSON.parse(data);
    json.transformed = true;
    return json;
  }]
});`}
        </pre>
      </section>

      {/* Params */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">13. Query Params</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`axios.get("/users", {
  params: {
    nom: "Brayek",
    sort: "asc"
  }
});
// /users?nom=Brayek&sort=asc`}
        </pre>
      </section>

      {/* Timeout */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">14. Timeout</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`axios.get("/users", { timeout: 2000 })
  .catch(error => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out");
    }
  });`}
        </pre>
      </section>

      {/* useEffect Example */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          15. React useEffect Example
        </h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import { useEffect, useState } from "react";
import axios from "axios";

function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("/users").then(res => setUsers(res.data));
  }, []);
  return <ul>{users.map(u => <li key={u.id}>{u.nom}</li>)}</ul>
}`}
        </pre>
      </section>

      {/* Advanced Exercises */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          16. Exercices mzyanin (Advanced)
        </h2>
        <ol className="list-decimal ml-5 space-y-6">
          <li>
            <span className="font-bold">
              Global Error Handling with Interceptors
            </span>
            <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
              {`const api = axios.create({ baseURL: "http://localhost:3001" });

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 404) {
      alert("Resource not found!");
    }
    return Promise.reject(error);
  }
);

api.get("/wrong-url").catch(err => console.error(err));`}
            </pre>
          </li>
          <li>
            <span className="font-bold">
              Retry Failed Requests Automatically
            </span>
            <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
              {`function retryAxiosRequest(request, retries = 3) {
  return request().catch(error => {
    if (retries > 0) {
      return retryAxiosRequest(request, retries - 1);
    }
    return Promise.reject(error);
  });
}

retryAxiosRequest(() => axios.get("http://localhost:3001/flaky-endpoint"))
  .then(res => console.log(res.data))
  .catch(err => console.error("Failed after retries:", err));`}
            </pre>
          </li>
          <li>
            <span className="font-bold">
              Dynamic Base URL Based on Environment
            </span>
            <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
              {`const baseURL = process.env.NODE_ENV === "production"
  ? "https://api.myapp.com"
  : "http://localhost:3001";

const api = axios.create({ baseURL });

api.get("/users").then(res => console.log(res.data));`}
            </pre>
          </li>
          <li>
            <span className="font-bold">
              Chaining Multiple Requests (Dependent Calls)
            </span>
            <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
              {`axios.get("/users/1")
  .then(userRes => axios.get(\`/posts?userId=\${userRes.data.id}\`))
  .then(postsRes => console.log(postsRes.data))
  .catch(err => console.error(err));`}
            </pre>
          </li>
          <li>
            <span className="font-bold">
              Paginated API Requests (Load More)
            </span>
            <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
              {`import { useState } from "react";
import axios from "axios";

function PaginatedUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const loadMore = () => {
    axios.get("/users", { params: { _page: page, _limit: 5 } })
      .then(res => {
        setUsers(prev => [...prev, ...res.data]);
        setPage(page + 1);
      });
  };

  return (
    <div>
      <ul>{users.map(u => <li key={u.id}>{u.nom}</li>)}</ul>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}`}
            </pre>
          </li>
        </ol>
      </section>

      <div className="mt-8 text-center text-xs text-gray-500">
        Lkol chay shel b Axios!
      </div>
    </div>
  );
}
