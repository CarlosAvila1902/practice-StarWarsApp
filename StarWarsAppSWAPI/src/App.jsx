import NavBar from "./components/navbar";
import People from "./pages/People.jsx";
import PersonDetails from "./pages/PeopleDetails.jsx";
import Films from "./pages/Films.jsx";
import Starships from "./pages/Starships.jsx";
import FilmDetails from "./pages/FilmDetails.jsx";
import StarshipDetails from "./pages/StarshipDetails.jsx"; // Importa el detalle de la nave

import { Routes, Route } from "react-router-dom"; // No necesitas NavLink aquí
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<h2>¡Bienvenido! Elige un recurso.</h2>} />

          <Route path="/people" element={<People />} />
          <Route path="/people/:personId" element={<PersonDetails />} />

          <Route path="/films" element={<Films />} />
          <Route path="/films/:filmId" element={<FilmDetails />} />

          <Route path="/starships" element={<Starships />} />

          {/* CORRECCIÓN: :starshipId debe estar en minúscula para coincidir con useParams() */}
          <Route path="/starships/:starshipId" element={<StarshipDetails />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;
