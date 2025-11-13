import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // No necesitas 'useParams' ni 'use' aquí

function Starships() {
  // CORRECCIÓN 1: El nombre de la variable de estado es 'starshipList'
  const [starshipList, setStarshipList] = useState([]);
  const [loading, setLoading] = useState(true); // 'true' en minúscula

  useEffect(() => {
    async function fetchData() {
      // 'fetch' no necesita backticks (`) si no hay variables
      const response = await fetch("https://swapi.dev/api/starships/");
      const data = await response.json();
      setStarshipList(data.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  // CORRECCIÓN 2: Añadimos el .map() de vuelta
  return (
    <div>
      <h2>Lista de Naves</h2>
      <ul>
        {starshipList.map((starship) => {
          
          const urlParts = starship.url.split('/');
          const starshipId = urlParts[urlParts.length - 2];

          return (
            <li key={starship.name}>
              <Link to={`/starships/${starshipId}`}>{starship.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Starships;