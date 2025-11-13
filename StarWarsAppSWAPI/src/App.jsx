import NavBar from "./components/navbar";
import { Routes, Route, NavLink } from "react-router-dom"; //importamos los componentes que necesitamos.....
import "./App.css"; //estilos de la app


function App() {
  return (
  <div className="App">
    <NavBar />
    {/* Aquí es donde React Router mostrará la página correcta */}
    <main>
      <Routes>
        {/* Definimos las rutas */}
        <Route path="/" element={<h2>¡Bienvenido! Elige un recurso.</h2>} />
        <Route path="/characters" element={<h2>Aquí va la lista de Personajes</h2>} />
        <Route path="/films" element={<h2>Aquí va la lista de Películas</h2>} />
        <Route path="/starships" element={<h2>Aquí va la lista de Naves</h2>} />
      </Routes>
    </main>
  </div>
);
}

function Nav() {}

export default App;
