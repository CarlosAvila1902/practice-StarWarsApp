import NavBar from "./components/Navbar.jsx";
import People from "./pages/People.jsx";
import PeopleDetails from "./pages/PeopleDetails.jsx";
import Films from "./pages/Films.jsx";
import Starships from "./pages/Starships.jsx";
import FilmDetails from "./pages/FilmDetails.jsx";
import StarshipDetails from "./pages/StarshipDetails.jsx"; // Importa el detalle de la nave
import Species from "./pages/Species.jsx";
import SpeciesDetails from "./pages/SpeciesDetails.jsx";
import Vehicles from "./pages/vehicles.jsx";
import VehicleDetails from "./pages/VehicleDetails.jsx";
import { Routes, Route } from "react-router-dom"; // No necesitas NavLink aquí
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<h2>Welcome! Elige un recurso.</h2>} />

          <Route path="/species" element={<Species />} />
          <Route path="/species/:speciesId" element={<SpeciesDetails />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:peopleId" element={<PeopleDetails />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:filmId" element={<FilmDetails />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:starshipId" element={<StarshipDetails />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:vehicleId" element={<VehicleDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
