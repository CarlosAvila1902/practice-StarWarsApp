import { Link } from "react-router-dom";
import useSwapiList  from "../hooks/useSwapiList.jsx";
import PaginationControls from "../components/PaginationControl.jsx";


function Starships() {
const { data: starshipList, loading, error, handleNext, handlePrev, prevUrl, nextUrl } = useSwapiList("https://swapi.dev/api/starships/");


  if (loading) {
    return <h2>Cargando...</h2>;
  } if (error) {
    return <h2 style={{ color: "red" }}>wait holdup: {error}</h2>;
  }

  return (
    <div>
      <h2>Lista de Naves</h2>
         <PaginationControls
          handlePrev={handlePrev}
          handleNext={handleNext}
          prevUrl={prevUrl}
          nextUrl={nextUrl}
        />
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
