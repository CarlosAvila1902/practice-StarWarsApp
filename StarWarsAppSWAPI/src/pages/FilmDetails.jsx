import { useState, useEffect, use } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchDataFromApi } from "../services/swapiService";

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
      const url=`https://swapi.dev/api/films/${filmId}/`;
      const data = await fetchDataFromApi(url);
      setFilm(data);
    } catch (err) {
      setError(err.message);
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
