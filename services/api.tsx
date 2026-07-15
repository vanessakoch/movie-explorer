const BASE_URL = "https://api.themoviedb.org/3";

type FetchOptions = {
  revalidate?: number;
  signal?: AbortSignal;
};

export async function apiFetch<T>(
  path: string,
  options?: FetchOptions
): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
      accept: "application/json",
    },
    ...(options?.revalidate && {
      next: {
        revalidate: options.revalidate,
      },
    }),

    signal: options?.signal,
  });

  if (!response.ok) {
    throw new Error("API error");
  }

  return response.json();
}