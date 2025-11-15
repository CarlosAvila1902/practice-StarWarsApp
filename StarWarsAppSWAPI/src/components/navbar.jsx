import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div classname="container-fluid">
        <h3 classname="navbar-brand mb-0 h1">STARWARS</h3>
          <div className="navbar-nav">
        <NavLink className="nav-link" to="/">
          Inicio
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
