import { useState, useEffect, use } from "react";
import { useParams, Link } from "react-router-dom";

function FilmDetails() {
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchFilmData();
  }, [filmId]);

  async function fetchFilmData() {
    try {
      const response = await fetch(`https://swapi.dev/api/films/${filmId}/`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setFilm(data);
    } catch (error) {
      setError(error.message);
      console.error("error al traer los datos", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Cargando...</h2>;
  }
  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Detalles: {film.title}</h2>
      <p>
        <strong>Episodio:</strong> {film.episode_id}
      </p>
      <p>
        <strong>Director:</strong> {film.director}
      </p>
      <p>
        <strong>Productor:</strong> {film.producer}
      </p>
      <p>
        <strong>Fecha de Estreno:</strong> {film.release_date}
      </p>
    </div>
  );
}

export default FilmDetails;
