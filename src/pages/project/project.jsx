import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function formatTimeRemaining(ms) {
  if (ms <= 0) return "Terminé";

  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}j ${hours}h ${minutes}m ${seconds}s`;
}

function Project() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3001/projects/${id}`
        );
        setProject(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  // Update countdown
  useEffect(() => {
    if (!project || !project.deadline) return;

    const deadline = new Date(project.deadline).getTime();
    function updateTimeLeft() {
      setTimeLeft(deadline - Date.now());
    }
    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [project]);

  const handleDelete = async () => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?"))
      return;
    setDeleting(true);
    setDeleteError(null);
    try {
      await axios.delete(`http://localhost:3001/projects/${id}`);
      navigate("/projects");
    } catch {
      setDeleteError("Erreur lors de la suppression.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="text-center">loading ....</div>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : project ? (
        <div key={project.id}>
          <h1>{project.name}</h1>
          <label>Status : </label> {project.status} <br />
          <label>Priorité : </label>
          {project.priority}
          <br />
          <label>Deadline : </label>
          {project.deadline}
          <br />
          <label>Temps restant:</label>{" "}
          {timeLeft !== null ? formatTimeRemaining(timeLeft) : "N/A"}
          <br />
          <br />
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors disabled:opacity-60"
          >
            {deleting ? "Suppression..." : "Supprimer"}
          </button>
          {deleteError && (
            <div className="text-red-600 mt-2">{deleteError}</div>
          )}
        </div>
      ) : (
        <p>No project with this id available.</p>
      )}
    </div>
  );
}

export default Project;
