import { Link } from "react-router-dom";
import useSwapiList  from "../hooks/useSwapiList.jsx";
import PaginationControls from "../components/PaginationControl.jsx";


function Films() {
const { data: filmsList, loading, error, handleNext, handlePrev, prevUrl, nextUrl } = useSwapiList("https://swapi.dev/api/films/");

  if (loading) {
    return <h2>Cargando...</h2>;
  } if (error) {
    return <h2 style={{ color: "red" }}>wait holdup: {error}</h2>;
  }
  return (
    <div>
      <h2>Lista de Peliculas</h2>
         <PaginationControls
          handlePrev={handlePrev}
          handleNext={handleNext}
          prevUrl={prevUrl}
          nextUrl={nextUrl}
        />
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
  );
}
export default Films;
