import { NavLink } from "react-router-dom"


function NavBar() {
    return (
    <nav>
      <h3>Navegación SWAPI</h3>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/characters">Personajes</NavLink>
      <NavLink to="/films">Películas</NavLink>
      <NavLink to="/starships">Naves Estelares</NavLink>
    </nav>
    );
}

export default NavBar;