import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../services/swapiService";
import ResourceLink from "../components/ResourceLink.jsx";

function PlanetDetails() {
  const { planetId } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchPlanetData();
  }, [planetId]);

  async function fetchPlanetData() {
    try {
      const url = `https://swapi.dev/api/planets/${planetId}/`;
      const data = await fetchDataFromApi(url);
      setPlanet(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Cargando detalles del Planeta...</h2>;
  }
  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }
  return (
    <div>
      <h2>Detalles: {planet.name}</h2>
      <p>
        <strong>Diametro:</strong> {planet.diameter}
      </p>
      <p>
        <strong>Periodo de rotacion:</strong> {planet.rotation_period}
      </p>
      <p>
        <strong>Periodo orbital:</strong> {planet.orbital_period}
      </p>
      <p>
        <strong>Gravedad:</strong> {planet.gravity}
      </p>
      <p>
        <strong>Poblacion:</strong> {planet.population}
      </p>
      <p>
        <strong>Clima:</strong> {planet.climate}
      </p>
      <p>
        <strong>Terreno:</strong> {planet.terrain}
      </p>
      <p>
        <strong>Superficie acuatica:</strong> {planet.surface_water}
      </p>
      <h4>Residentes del planeta:</h4>
      <ul>
        {planet.residents.length > 0 ? (
          planet.residents.map((planetUrl, index) => (
            <ResourceLink
              key={planetUrl || index}
              resourceUrl={planetUrl}
              resourceType="people"
            />
          ))
        ) : (
          <li>No se encontraron residentes.</li>
        )}
      </ul>
      <h4>Filmes (Donde aparece este planeta):</h4>
      <ul>
        {planet.films.length > 0 ? (
          planet.films.map((filmUrl, index) => (
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

export default PlanetDetails;
