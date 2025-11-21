import { Link } from "react-router-dom";
import useSwapiList from "../hooks/useSwapiList.jsx";
import PaginationControls from "../components/PaginationControl.jsx";

function People() {
  const {
    data: peopleList,
    loading,
    error,
    handleNext,
    handlePrev,
    prevUrl,
    nextUrl,
  } = useSwapiList("https://swapi.dev/api/people/");

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
        <PaginationControls
          handlePrev={handlePrev}
          handleNext={handleNext}
          prevUrl={prevUrl}
          nextUrl={nextUrl}
        />
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
