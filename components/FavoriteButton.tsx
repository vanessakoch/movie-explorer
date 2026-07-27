"use client";

import { useFavorite } from "@/hooks/useFavorite";
import { Movie } from "@/types/movie";
import { Heart } from "lucide-react";

type FavoriteButtonProps = {
  movie: Movie;
};

export function FavoriteButton({ movie }: FavoriteButtonProps) {
  const {
  isFavorite,
  toggleFavorite,
  isHydrated,
} = useFavorite(movie);

  return (
    <button className="cursor-pointer" onClick={toggleFavorite}>
      {isHydrated && (
        <Heart
          size={18}
          className={isFavorite ? "text-red-500" : "text-white"}
          fill={isFavorite ? "currentColor" : "none"}
        />
      )}
    </button>
  )
}
