import { useState, useEffect } from "react"; //le hooks
import { Link } from "react-router-dom";
import { fetchDataFromApi } from "../services/swapiService.js";

function Vehicles() {
  const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/vehicles/");
  const [vehicleList, setVehicleList] = useState([]);
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
        setVehicleList(data.results);
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
      <h2>Lista de Vehiculos</h2>
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
