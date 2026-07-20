import { apiFetch } from "./api";
import { Movie } from "@/types/movie";
import { PaginatedResponse } from "@/types/api";

export async function getTrendingMovies(): Promise<Movie[]> {
  const response = await apiFetch<PaginatedResponse<Movie>>(
    "/trending/movie/week", {
    revalidate: 1800,
  });

  return response.results;
}

export async function getPopularMovies(): Promise<Movie[]> {
  const response = await apiFetch<PaginatedResponse<Movie>>(
    "/movie/popular", {
    revalidate: 3600,
  });

  return response.results;
}

export async function getTopRatedMovies(): Promise<Movie[]> {
  const response = await apiFetch<PaginatedResponse<Movie>>(
    "/movie/top_rated?language=pt-BR&page=1", {
    revalidate: 3600,
  });

  return response.results;
}

export async function getNewMovies(): Promise<Movie[]> {
  const response = await apiFetch<PaginatedResponse<Movie>>(
    "/movie/now_playing?language=pt-BR&page=1", {
    revalidate: 3600,
  });

  return response.results;
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 5000);

  try {
    const response = await apiFetch<PaginatedResponse<Movie>>(
      `/search/movie?query=${encodeURIComponent(query)}`,{
      signal: controller.signal,
    });
  
    if (!response) {
      throw new Error("Search error.");
    }

    return response.results
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("TMDB takes too long to answer");
    } else {
      console.error("Search error:", error);
    }

    return [];
  } finally {
    clearTimeout(timeout);
  }
}

export async function getMovie(id: number): Promise<Movie> {
  const response: Movie = await apiFetch(`/movie/${id}`);
  return response;
}