import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3 border border-warning">
        <h1 className="text-warning display-4 fw-bold">STAR WARS</h1>
        <p className="lead text-white">
          Explora la galaxia muy, muy lejana. Descubre información sobre tus personajes, naves, películas y planetas favoritos.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/people" className="btn btn-outline-warning btn-lg px-4 gap-3">
            Ver Personajes
          </Link>
          <Link to="/starships" className="btn btn-outline-light btn-lg px-4">
            Ver Naves
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;