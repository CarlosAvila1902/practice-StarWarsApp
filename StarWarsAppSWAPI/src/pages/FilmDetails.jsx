import { useState, useEffect, use } from "react";
import { useParams, Link } from "react-router-dom";

function FilmDetails() {
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchFilmData() {
    const response = await fetch(`https://swapi.dev/api/films/${filmId}/`);
    const data = await response.json();
    setFilm(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchFilmData();
  }, [filmId]);

  if (loading) {
    return <h2>Cargando...</h2>;
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
