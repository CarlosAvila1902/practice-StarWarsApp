import { Link } from "react-router-dom";
import useSwapiList  from "../hooks/useSwapiList.jsx";
import PaginationControls from "../components/PaginationControl.jsx";


function Vehicles() {
const { data: vehicleList, loading, error, handleNext, handlePrev, prevUrl, nextUrl } = useSwapiList("https://swapi.dev/api/people/");

  if (loading) {
    return <h2>cargando...</h2>;
  }
  if (error) {
    return <h2 style={{ color: "red" }}>wait holdup: {error}</h2>;
  }
  return (
    <div>
      <h2>Lista de Vehiculos</h2>
      <div className="pagination-controls btn-group my-3">
         <PaginationControls
          handlePrev={handlePrev}
          handleNext={handleNext}
          prevUrl={prevUrl}
          nextUrl={nextUrl}
        />
      </div>
      <ul>
        {vehicleList.map((vehicle) => {
          const urlParts = vehicle.url.split("/");
          const vehicleId = urlParts[urlParts.length - 2];
          return (
            <li key={vehicle.name}>
              <Link to={`/vehicles/${vehicleId}`}>{vehicle.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Vehicles;
