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
  const data = query.trim();

  if (!data) {
    return [];
  }

  const response = await apiFetch<PaginatedResponse<Movie>>(
    `/search/movie?query=${encodeURIComponent(data)}`
  );

  return response.results;  
}

export async function getMovie(id: number): Promise<Movie> {
  const response: Movie = await apiFetch(`/movie/${id}`, {
    revalidate: 3600}
  );
  return response;
}