import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function PersonDetails() {
  const { personId } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchPersonData();
  }, [personId]);

  async function fetchPersonData() {
    try {
      const response = await fetch(`https://swapi.dev/api/people/${personId}/`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setPerson(data);
    } catch (error) {
      setError(error.message);
      console.error("Error al traer los datos", error);
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
      <h2>Detalles: {person.name}</h2>
      <p>
        <strong>Altura:</strong> {person.height} cm
      </p>
      <p>
        <strong>Año de Nacimiento:</strong> {person.birth_year}
      </p>
      <p>
        <strong>Color de Pelo:</strong> {person.hair_color}
      </p>
      <p>
        <strong>Color de ojos:</strong> {person.eye_color}
      </p>
      <p>
        <strong>Género:</strong> {person.gender}
      </p>
      <p>
        <strong>Peso:</strong> {person.mass} kg
      </p>
      <p>
        <strong>Mundo Natal:</strong> {person.homeworld}
      </p>
      <p>
        <strong>Color de piel:</strong> {person.skin_color}
      </p>

      {/* (Vi que tenías 'Mundo Natal' repetido, borré uno) */}

      <h4>Peliculas donde aparece</h4>
      <ul>
        {person.films.map((filmUrl, index) => {
          const urlParts = filmUrl.split("/");
          const filmsId = urlParts[urlParts.length - 2];
          return (
            <li key={index}>
              <Link to={`/films/${filmsId}`}>Película ID: {filmsId}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PersonDetails;
