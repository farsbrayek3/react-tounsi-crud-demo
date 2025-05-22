import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3001/projects");
        setProjects(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // Helper functions for counts
  const now = new Date();
  const countByStatus = (status) =>
    projects.filter((p) => p.status && p.status.toLowerCase() === status)
      .length;

  // "en cours": status is "en cours"
  const enCours = countByStatus("en cours");

  // "termine": status is "termine"
  const termine = countByStatus("termine");

  // "archive": status is "archive"
  const archive = countByStatus("archive");

  // "en retard": not termine or archive, deadline in the past
  const enRetard = projects.filter(
    (p) =>
      p.status &&
      p.status.toLowerCase() !== "termine" &&
      p.status.toLowerCase() !== "archive" &&
      p.deadline &&
      new Date(p.deadline) < now
  ).length;

  return (
    <div>
      <h1>Dashboard</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-danger">{error}</div>
      ) : (
        <>
          <div>
            <label>en cours : </label>
            <span>{enCours}</span>
          </div>
          <div>
            <label>termine :</label>
            <span>{termine}</span>
          </div>
          <div>
            <label>en retard :</label>
            <span>{enRetard}</span>
          </div>
          <div>
            <label>archive :</label>
            <span>{archive}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
