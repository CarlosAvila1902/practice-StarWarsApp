export async function fetchDataFromApi(url) {
  
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return data;
}