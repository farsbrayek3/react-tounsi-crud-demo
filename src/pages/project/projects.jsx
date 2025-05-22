import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/projects")
      .then((res) => setProjects(res.data))
      .catch(() => setProjects([]));
  }, []);

  // Filter projects based on selected status and priority
  const filteredProjects = projects.filter((project) => {
    const statusMatch = statusFilter ? project.status === statusFilter : true;
    const priorityMatch = priorityFilter
      ? project.priority === priorityFilter
      : true;
    return statusMatch && priorityMatch;
  });

  return (
    <div className="max-w-md mx-auto ">
      <div className="flex gap-4 mb-4">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">Tous les statuts</option>
          <option value="archive">archive</option>
          <option value="termine">termine</option>
          <option value="en retard">en retard</option>
          <option value="en cours">en cours</option>
        </select>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">Toutes les priorités</option>
          <option value="basse">basse</option>
          <option value="moyenne">moyenne</option>
          <option value="haute">haute</option>
        </select>
      </div>
      <table>
        <thead className="bg-gray-100">
          <tr>
            <th>Nom</th>
            <th>Stuts</th>
            <th>Periorite</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center text-gray-500">
                Aucun projects trouvé.
              </td>
            </tr>
          ) : (
            filteredProjects.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50">
                <td
                  className="px-4 py-2 underline border-b cursor-pointer text-blue-600"
                  onClick={() => navigate(`/project/${u.id}`)}
                >
                  {u.name}
                </td>
                <td className="px-4 py-2 border-b">{u.status}</td>
                <td className="px-4 py-2 border-b">{u.priority}</td>
                <td className="px-4 py-2 border-b">{u.deadline}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
