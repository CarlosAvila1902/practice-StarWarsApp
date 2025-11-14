import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchDataFromApi } from "../services/swapiService";

function VehicleDetails() {
  const { vehicleId } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchVehicleData();
  }, [vehicleId]);

  async function fetchVehicleData() {
    try {
      const url = `https://swapi.dev/api/vehicles/${vehicleId}/`;
      const data = await fetchDataFromApi(url);
      setVehicle(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Cargando detalles de vehiculos...</h2>;
  }
  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }
  return (
    <div>
      <h2>Detalles: {vehicle.name}</h2>
      <p>
        <strong>Modelo:</strong> {vehicle.model}
      </p>
      <p>
        <strong>Fabricante:</strong> {vehicle.manufacturer}
      </p>
      <p>
        <strong>Costo:</strong> {vehicle.cost_in_credits} créditos
      </p>
      <p>
        <strong>Pasajeros:</strong> {vehicle.passengers}
      </p>
      <p>
        <strong>Personal:</strong> {vehicle.crew}
      </p>
      <p>
        <strong>capacidad maxima:</strong> {vehicle.cargo_capacity} KG
      </p>
      <p>
        <strong>consumibles: hasta</strong> {vehicle.consumables} meses
      </p>
      <h4>
      Pilotos que han usado este vehiculo:
      </h4>
      <ul>
        {vehicle.pilots.map((pilotUrl, index) =>{
          const urlParts = pilotUrl.split("/");
          const pilotId = urlParts[urlParts.length - 2];
          return (
            <li key={index}>
              <Link to={`/people/${pilotId}`}>
                Piloto ID: {pilotId}
              </Link>
            </li>
          )
        })}
      </ul>
      <h4>Filmes (Donde aparece este vehiculo):</h4>
      <ul>
        {vehicle.films.map((filmUrl, index) => {
          const urlParts = filmUrl.split("/");
          const filmId = urlParts[urlParts.length - 2];

          return (
            <li key={index}>
              <Link to={`/films/${filmId}`}>Película ID: {filmId}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default VehicleDetails;
