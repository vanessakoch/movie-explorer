const BASE_URL = "https://api.themoviedb.org/3";

export async function api(path: string) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Erro na API");
  }

  return response.json();
}