import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../services/swapiService";

function StarshipDetails() {
  const { starshipId } = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchStarshipData();
  }, [starshipId]);

  async function fetchStarshipData() {
    try {
      const url=`https://swapi.dev/api/starships/${starshipId}/`;
      const data = await fetchDataFromApi(url);
      setStarship(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Cargando detalles de la nave...</h2>;
  }
  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }
  return (
    <div>
      <h2>Detalles: {starship.name}</h2>
      <p>
        <strong>Modelo:</strong> {starship.model}
      </p>
      <p>
        <strong>Clase de nave: </strong>{starship.starship_class}
      </p>
      <p>
        <strong>Fabricante:</strong> {starship.manufacturer}
      </p>
      <p>
        <strong>Costo:</strong> {starship.cost_in_credits} créditos
      </p>
      <p>
        <strong>Dimensiones: </strong>{starship.length} metros
      </p>
      <p>
        <strong>Tripulacion escencial</strong>{starship.crew}
      </p>
      <p>
        <strong>Pasajeros:</strong> {starship.passengers}
      </p>
      <p>
        <strong>Maxima velocidad en atmosfera:</strong> {starship.max_atmosphering_speed} km/h
      </p>
      <p>
        <strong>Hiperimpulsor:</strong>{starship.hyperdrive_rating}
      </p>
      <p>
        <strong>MGLT:</strong> {starship.MGLT}
      </p>
      <p>
        <strong>Capacidad de carga:</strong> {starship.cargo_capacity} KG
      </p>
      <p>
        <strong>Duracion de raciones:</strong> {starship.consumables} KG
      </p>

    </div>
  );
}

export default StarshipDetails;
