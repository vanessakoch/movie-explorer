const BASE_URL = "https://api.themoviedb.org/3";

type FetchOptions = {
  revalidate?: number;
  signal?: AbortSignal;
  retries?: number;
};

const RETRYABLE_STATUS = new Set([
  408,
  429,
  500,
  502,
  503,
  504,
]);

export async function apiFetch<T>(
  path: string,
  options: FetchOptions= {}
): Promise<T> {
  const {
    revalidate,
    signal,
    retries = 2,
  } = options;

  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
        accept: "application/json",
      },
      ...(revalidate !== undefined && {
          next: {
            revalidate,
          },
        }),
      signal: signal ?? AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      if (RETRYABLE_STATUS.has(response.status) && retries > 0) {
        return apiFetch<T>(path, {
          ...options,
          retries: retries - 1,
        });
      }

      throw new Error(
        `TMDB API error: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  } catch (error) {
    if (retries > 0) {
      return apiFetch<T>(path, {
        ...options,
        retries: retries - 1,
      });
    }

    throw error;
  }
}