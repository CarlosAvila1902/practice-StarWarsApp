import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchDataFromApi } from "../services/swapiService";
import ResourceLink from "../components/ResourceLink.jsx";

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
        <strong>Clase de vehiculo:</strong> {vehicle.vehicle_class}
      </p>
      <p>
        <strong>Fabricante:</strong> {vehicle.manufacturer}
      </p>
      <p>
        <strong>Dimensiones (largo):</strong> {vehicle.length} mts
      </p>
      <p>
        <strong>Costo:</strong> {vehicle.cost_in_credits} créditos
      </p>
      <p>
        <strong>maximo pasajeros:</strong> {vehicle.passengers} pasajeros
      </p>
      <p>
        <strong>Tripulacion esencial:</strong> {vehicle.crew} tripulantes
      </p>
      <p>
        <strong>capacidad maxima:</strong> {vehicle.cargo_capacity} KG
      </p>
      <p>
        <strong>consumibles: hasta</strong> {vehicle.consumables} meses
      </p>
      <p>
        <strong>Velocidad maxima en atmosfera</strong>{" "}
        {vehicle.max_atmosphering_speed} km/h
      </p>
      <h4>Pilotos que han usado este vehiculo:</h4>
      <ul>
        {vehicle.pilots.length > 0 ? (
          vehicle.pilots.map((pilotUrl, index) => (
            <ResourceLink
              key={pilotUrl || index}
              resourceUrl={pilotUrl}
              resourceType="people"
            />
          ))
        ) : (
          <li>No se encontraron pilotos.</li>
        )}
      </ul>
      <h4>Filmes (Donde aparece este vehiculo):</h4>
      <ul>
        {vehicle.films.length > 0 ? (
          vehicle.films.map((filmUrl, index) => (
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

export default VehicleDetails;
