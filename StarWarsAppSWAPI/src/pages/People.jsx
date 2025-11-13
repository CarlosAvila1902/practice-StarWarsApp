import { useState, useEffect } from "react"; //le hooks
import { Link } from "react-router-dom"; //para importar los enlces

//acuerdate de las mayusculas en los nombres de los componentes...
function People() {
  const [peopleList, setPeopleList] = useState([]); //estado para guardar la lista de personajes
  const [loading, setLoading] = useState(true); //estado para manejar la carga

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      setPeopleList(data.results);
      setLoading(false);
    }
    fetchData(); //llamamos para traer datos
  }, []);

  

  if (loading) {
    return <h2>cargando...</h2>;
  }

  return (
    <div>
      <h2>Lista de Personajes</h2>
      <ul>
        {peopleList.map((person) => {
          const urlParts = person.url.split("/");
          const personId = urlParts[urlParts.length - 2];
          return (
            <li key={person.name}>
              <Link to={`/people/${personId}`}>{person.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default People;
