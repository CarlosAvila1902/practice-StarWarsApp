import { Link } from "react-router-dom";
import useSwapiList  from "../hooks/useSwapiList.jsx";
import PaginationControls from "../components/PaginationControl.jsx";


function Planets() {
const { data: planetList, loading, error, handleNext, handlePrev, prevUrl, nextUrl } = useSwapiList("https://swapi.dev/api/planets/");

  if (loading) {
    return <h2>cargando...</h2>;
  }
  if (error) {
    return <h2 style={{ color: "red" }}>wait holdup: {error}</h2>;
  }
  return (
    <div>
      <h2>Lista de Planetas</h2>
      <div className="pagination-controls btn-group my-3">
        <button
          className="btn btn-outline-warning"
          onClick={handlePrev}
          disabled={!prevUrl}
        >
          Anterior
        </button>
        <button
          className="btn btn-outline-warning"
          onClick={handleNext}
          disabled={!nextUrl}
        >
          Siguiente
        </button>
      </div>
      <ul>
        {planetList.map((planet) => {
          const urlParts = planet.url.split("/");
          const planetId = urlParts[urlParts.length - 2];
          return (
            <li key={planet.name}>
              <Link to={`/planets/${planetId}`}>{planet.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Planets;
