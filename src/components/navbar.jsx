import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark align-center">
      <div classname="container-fluid">
          <div className="navbar-nav">
        <NavLink className="nav-link" to="/">
          Inicio
        </NavLink>
        <NavLink className="nav-link" to="/planets">
          Planetas
        </NavLink>
        <NavLink className="nav-link" to="/films">
          Películas
        </NavLink>
        <NavLink className="nav-link" to="/people">
          Personajes
        </NavLink>
        <NavLink className="nav-link" to="/species">
          Especies
        </NavLink>
        <NavLink className="nav-link" to="/starships">
          Naves Estelares
        </NavLink>
        <NavLink className="nav-link" to="/vehicles">
          Vehiculos
        </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
