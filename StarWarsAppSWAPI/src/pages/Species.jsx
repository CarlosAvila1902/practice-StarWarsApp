import { Link } from "react-router-dom";
import useSwapiList  from "../hooks/useSwapiList.jsx";
import PaginationControls from "../components/PaginationControl.jsx";



function Species() {
  const { data: speciesList, loading, error, handleNext, handlePrev, prevUrl, nextUrl } = useSwapiList("https://swapi.dev/api/species/");

  if (loading) {
    return <h2>cargando...</h2>;
  }
  if (error) {
    return <h2 style={{ color: "red" }}>wait holdup: {error}</h2>;
  }
  return (
    <div>
      <h2>Lista de Especies</h2>
      <div className="pagination-controls btn-group my-3">
         <PaginationControls
          handlePrev={handlePrev}
          handleNext={handleNext}
          prevUrl={prevUrl}
          nextUrl={nextUrl}
        />
      </div>
      <ul>
        {speciesList.map((species) => {
          const urlParts = species.url.split("/");
          const speciesId = urlParts[urlParts.length - 2];
          return (
            <li key={species.name}>
              <Link to={`/species/${speciesId}`}>{species.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Species;
