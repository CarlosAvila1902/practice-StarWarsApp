import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../services/swapiService";

function useSwapiList(url) {
  const [apiUrl, setApiUrl] = useState(url);
  //estados de datos
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //estados de paginacion
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    async function fetchData() {
      try {
        const data = await fetchDataFromApi(apiUrl);
        setData(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [apiUrl]);

  const handleNext = () => {
    setApiUrl(nextUrl);
  };
  const handlePrev = () => {
    setApiUrl(prevUrl);
  };

  return{
    data,
    loading,
    error,
    handleNext,
    handlePrev,
    nextUrl,
    prevUrl
  }

}

export default useSwapiList;