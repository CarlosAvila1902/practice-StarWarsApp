//es para resolver los links a otros recursos

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchDataFromApi } from "../services/swapiService.js";

function ResourceLink({ resourceUrl, resourceType }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResource() {
      if (!resourceUrl) return;
      setLoading(true);
      try {
        const resourceData = await fetchDataFromApi(resourceUrl);
        setData(resourceData);

      } catch (error) {
        console.error("error Fetching resource:",error);
      } finally {
        setLoading(false);
      }
    }
    fetchResource();
  },[resourceUrl]);
  if (loading) {
    return <li>Cargando...</li>
  };
  if(!data){
    return null;
  }

const urlParts = resourceUrl.split("/");
const resourceId = urlParts[urlParts.length - 2];
const displayName = data.name || data.title || "Ver recurso";

return(
    <li>
        <Link to={`/${resourceType}/${resourceId}`}>{displayName}</Link>
    </li>
);
}

export default ResourceLink;

