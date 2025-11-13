import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      const response = await fetch(
        `https://swapi.dev/api/starships/${starshipId}/`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setStarship(data);
    } catch (error) {
      setError(error.message);
      console.error("Error al traer los datos", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Cargando detalles de la nave...</h2>;
  } if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }
  return (
    <div>
      <h2>Detalles: {starship.name}</h2>
      <p>
        <strong>Modelo:</strong> {starship.model}
      </p>
      <p>
        <strong>Fabricante:</strong> {starship.manufacturer}
      </p>
      <p>
        <strong>Costo:</strong> {starship.cost_in_credits} créditos
      </p>
      <p>
        <strong>Pasajeros:</strong> {starship.passengers}
      </p>
    </div>
  );
}

export default StarshipDetails;
