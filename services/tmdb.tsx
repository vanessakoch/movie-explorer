import { api } from "./api";
import { Movie } from "@/types/movie";
import { PaginatedResponse } from "@/types/api";

export async function getTrendingMovies(): Promise<Movie[]> {
  const response = await api<PaginatedResponse<Movie>>(
    "/trending/movie/week"
  );

  return response.results;
}

export function searchMovies(query: string) {
  return api(`/search/movie?query=${encodeURIComponent(query)}`);
}

export function getMovie(id: number) {
  return api(`/movie/${id}`);
}