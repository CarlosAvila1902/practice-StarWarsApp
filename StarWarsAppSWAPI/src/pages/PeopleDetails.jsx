import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../services/swapiService";
import ResourceLink from "../components/ResourceLink.jsx";

function PeopleDetails() {
  const { peopleId } = useParams();
  const [people, setPeople] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchPeopleData();
  }, [peopleId]);

  async function fetchPeopleData() {
    try {
      const url = `https://swapi.dev/api/people/${peopleId}/`;
      const data = await fetchDataFromApi(url);
      setPeople(data);
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
      <h2>Detalles: {people.name}</h2>
      <p>
        <strong>Altura:</strong> {people.height} cm
      </p>
      <p>
        <strong>Año de Nacimiento:</strong> {people.birth_year}
      </p>
      <p>
        <strong>Color de Pelo:</strong> {people.hair_color}
      </p>
      <p>
        <strong>Color de ojos:</strong> {people.eye_color}
      </p>
      <p>
        <strong>Género:</strong> {people.gender}
      </p>
      <p>
        <strong>Peso:</strong> {people.mass} kg
      </p>
      <p>
        <strong>Mundo Natal:</strong> {people.homeworld}
      </p>
      <p>
        <strong>Color de piel:</strong> {people.skin_color}
      </p>

      <h4>Peliculas donde aparece</h4>
      <ul>
        {people.films.length > 0 ? (
          people.films.map((filmUrl, index) => (
            <ResourceLink
              key={filmUrl || index}
              resourceUrl={filmUrl}
              resourceType="films"
            />
          ))
        ) : (
          <li>No aparece en películas conocidas.</li>
        )}
      </ul>
    </div>
  );
}

export default PeopleDetails;
