export async function fetchDataFromApi(url) {
  
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`algo anda mal, Error:${response.status}`);
  }

  const data = await response.json();
  return data;
}