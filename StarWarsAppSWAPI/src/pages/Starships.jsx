import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchDataFromApi } from "../services/swapiService.js";

function Starships() {
  const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/starships/");
  const [starshipList, setStarshipList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    async function fetchData() {
      try {
        const data = await fetchDataFromApi(apiUrl);
        setStarshipList(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [apiUrl]);

  const handleNext = () => {
    setApiUrl(nextUrl);
  };

  const handlePrev = () => {
    setApiUrl(prevUrl);
  };

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div>
      <h2>Lista de Naves</h2>
      <div className="pagination-controls" style={{ margin: "1rem 0" }}>
        <button onClick={handlePrev} disabled={!prevUrl}>
          Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={!nextUrl}
          style={{ marginLeft: "1rem" }}
        >
          Siguiente
        </button>
      </div>
      <ul>
        {starshipList.map((starship) => {
          const urlParts = starship.url.split("/");
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
