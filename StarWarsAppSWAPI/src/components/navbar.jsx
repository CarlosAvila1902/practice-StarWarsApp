import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar text-center navbar-dark bg-dark">
      <h3>STARWARS</h3>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/people">Personajes</NavLink>
      <NavLink to="/species">Especies</NavLink>
      <NavLink to="/films">Películas</NavLink>
      <NavLink to="/vehicles">Vehiculos</NavLink>
      <NavLink to="/starships">Naves Estelares</NavLink>
    </nav>
  );
}

export default NavBar;
