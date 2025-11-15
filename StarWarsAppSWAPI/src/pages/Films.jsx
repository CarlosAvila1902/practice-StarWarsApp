import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchDataFromApi } from "../services/swapiService.js";

function Films() {
  const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/films/");
  const [filmsList, setFilmsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    async function fetchData() {
      try{
        const data= await fetchDataFromApi(apiUrl);
        setFilmsList(data.results);
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
  } if (error) {
    return <h2 style={{ color: "red" }}>wait holdup: {error}</h2>;
  }
  return (
    <div>
      <h2>Lista de Peliculas</h2>
      <div className="pagination-controls btn-group my-3">
        <button className="btn btn-outline-warning" onClick={handlePrev} disabled={!prevUrl}>
          Anterior
        </button>
        <button className="btn btn-outline-warning" onClick={handleNext} disabled={!nextUrl}>
          Siguiente
        </button>
        <div>
          <ul>
            {filmsList.map((film) => {
              const urlParts = film.url.split("/");
              const filmId = urlParts[urlParts.length - 2];
              return (
                <li key={film.title}>
                  <Link to={`/films/${filmId}`}>{film.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Films;
