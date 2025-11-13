import { useState, useEffect } from "react"; //le hooks
import { Link } from "react-router-dom"; //para importar los enlces

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
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setPeopleList(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (error) {
        setError(error.message);
        console.error("Error al traer los datos", error);
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
