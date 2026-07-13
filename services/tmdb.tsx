import { api } from "./api";
import { Movie } from "@/types/movie";
import { PaginatedResponse } from "@/types/api";

export async function getTrendingMovies(): Promise<PaginatedResponse<Movie>> {
  return api("/trending/movie/week");
}

export function searchMovies(query: string) {
  return api(`/search/movie?query=${encodeURIComponent(query)}`);
}

export function getMovie(id: number) {
  return api(`/movie/${id}`);
}