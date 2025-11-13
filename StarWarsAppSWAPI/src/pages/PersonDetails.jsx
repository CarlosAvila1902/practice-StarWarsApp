import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function PersonDetails() {
  const { personId } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchPersonData() {
    const response = await fetch(`https://swapi.dev/api/people/${personId}/`);
    const data = await response.json();

    setPerson(data);
    setLoading(false);
  }
  //no olvidar usar useEffect para llamar a fetchPersonData
  useEffect(() => {
    fetchPersonData();
  }, [personId]);

  if (loading) {
    return <h2>Cargando...</h2>;
  }
  return (
    <div>
      <h2>Detalles: {person.name}</h2>
      <p>
        <strong>Altura:</strong> {person.height} cm
      </p>
      <p>
        <strong>Año de Nacimiento:</strong> {person.birth_year}
      </p>
      <p>
        <strong>Color de Pelo:</strong> {person.hair_color}
      </p>
      <p>
        <strong>Color de ojos:</strong> {person.eye_color}
      </p>
      <p>
        <strong>Género:</strong> {person.eye_color}
      </p>
      <p>
        <strong>Peso:</strong> {person.mass} kg
      </p>
      <p>
        <strong>Mundo Natal:</strong> {person.homeworld}
      </p>
      <p>
        <strong>Color de piel:</strong> {person.skin_color}
      </p>
      <p>
        <strong>Mundo Natal:</strong> {person.homeworld}
      </p>
      <h4>Peliculas donde aparece</h4>
      <ul>
        {person.films.map((filmUrl, index) => {
          //extraer el id de la pelicula de la url
          const urlParts = filmUrl.split("/");
          const filmsId = urlParts[urlParts.length - 2];

          return (
            <li key={index}>
              <Link to={`/films/${filmsId}`}>Película ID: {filmsId}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PersonDetails;
