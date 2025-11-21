import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../services/swapiService";
import ResourceLink from "../components/ResourceLink.jsx";

function SpeciesDetails() {
  const { speciesId } = useParams();
  const [species, setSpecies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchSpeciesData();
  }, [speciesId]);

  async function fetchSpeciesData() {
    try {
      const url = `https://swapi.dev/api/species/${speciesId}/`;
      const data = await fetchDataFromApi(url);
      setSpecies(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Cargando detalles de la especie...</h2>;
  }
  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }
  return (
    <div>
      <h2>Detalles: {species.name}</h2>
      <p>
        <strong>Clasificacion:</strong> {species.classification}
      </p>
      <p>
        <strong>Designacion:</strong> {species.designation}
      </p>
      <p>
        <strong>Esperanza de vida:</strong> {species.average_lifespan} años
      </p>
      <p>
        <strong>Color de ojos:</strong> {species.eye_colors}
      </p>
      <p>
        <strong>Color de pelo:</strong> {species.hair_colors}
      </p>
      <p>
        <strong>Color de piel:</strong> {species.skin_colors}
      </p>
      <p>
        <strong>lenguaje:</strong> {species.language}
      </p>
      <p>
        <strong>mundo natal:</strong> {species.homeworld}
      </p>
      <h4>Personajes de esta especie:</h4>
      <ul>
        {species.people.length > 0 ? (
          species.people.map((peopleUrl, index) => (
            <ResourceLink
              key={peopleUrl || index}
              resourceUrl={peopleUrl}
              resourceType="people"
            />
          ))
        ) : (
          <li>No se encontraron pilotos.</li>
        )}
      </ul>
      <h4>Filmes (Donde aparece esta especie):</h4>
      <ul>
        {species.films.length > 0 ? (
          species.films.map((filmUrl, index) => (
            <ResourceLink
              key={filmUrl || index}
              resourceUrl={filmUrl}
              resourceType="films"
            />
          ))
        ) : (
          <li>No aparece en películas.</li>
        )}
      </ul>
    </div>
  );
}

export default SpeciesDetails;
