import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StarshipDetails() {
  const { starshipId } = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchStarshipData() {
    const response = await fetch(
      `https://swapi.dev/api/starships/${starshipId}/`
    );
    const data = await response.json();
    setStarship(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchStarshipData();
  }, [starshipId]);

  if (loading) {
    return <h2>Cargando detalles de la nave...</h2>;
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
