import { useState, useEffect } from "react"; //le hooks
import { Link } from "react-router-dom";
import { fetchDataFromApi } from "../services/swapiService.js";

function People() {
  const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/people/");
  const [peopleList, setPeopleList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    async function fetchData() {
      try {
        const data = await fetchDataFromApi(apiUrl);
        setPeopleList(data.results);
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
    return <h2>cargando...</h2>;
  }
  if (error) {
    return <h2 style={{ color: "red" }}>wait holdup: {error}</h2>;
  }
  return (
    <div>
      <h2>Lista de Personajes</h2>
      <div className="pagination-controls btn-group my-3">
        <button className="btn btn-outline-warning" onClick={handlePrev} disabled={!prevUrl}>
          Anterior
        </button>
        <button className="btn btn-outline-warning" onClick={handleNext} disabled={!nextUrl}>
          Siguiente
        </button>
      </div>
      <ul>
        {peopleList.map((person) => {
          const urlParts = person.url.split("/");
          const personId = urlParts[urlParts.length - 2];
          return (
            <li key={person.name}>
              <Link to={`/people/${personId}`}>{person.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default People;
