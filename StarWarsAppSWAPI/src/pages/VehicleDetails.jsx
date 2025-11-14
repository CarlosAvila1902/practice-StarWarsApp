import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      const url=`https://swapi.dev/api/vehicles/${vehicleId}/`;
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
        <strong>Fabricante:</strong> {vehicle.length}
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
      <p>
        <strong>Pilotos:</strong> {vehicle.consumables}
      </p>
      <p>
        <strong>Peliculas donde aparece:</strong> {vehicle.films}
      </p>
    </div>
  );
}

export default VehicleDetails;
