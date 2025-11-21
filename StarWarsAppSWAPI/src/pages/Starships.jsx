import { Link } from "react-router-dom";
import useSwapiList  from "../hooks/useSwapiList.jsx";

function Starships() {
const { data: starshipList, loading, error, handleNext, handlePrev, prevUrl, nextUrl } = useSwapiList("https://swapi.dev/api/people/");


  if (loading) {
    return <h2>Cargando...</h2>;
  } if (error) {
    return <h2 style={{ color: "red" }}>wait holdup: {error}</h2>;
  }

  return (
    <div>
      <h2>Lista de Naves</h2>
      <div className="pagination-controls btn-group my-3">
        <button className="btn btn-outline-warning" onClick={handlePrev} disabled={!prevUrl}>
          Anterior
        </button>
        <button className="btn btn-outline-warning" onClick={handleNext} disabled={!nextUrl}>
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
