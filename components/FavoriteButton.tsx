"use client";

import { Movie } from "@/types/movie";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

type FavoriteButtonProps = {
  movie: Movie;
};

export function FavoriteButton({ movie }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const checkFavorite = () => {
      const favorites: Movie[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

      setIsFavorite(
        favorites.some((favorite) => favorite.id === movie.id)
      );

      setIsHydrated(true);
    };

    checkFavorite();
  }, [movie.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (isFavorite) {
      const updatedFavorites: Movie[] = favorites.filter(
        (favorite: Movie) => favorite.id !== movie.id
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      setIsFavorite(false);
    } else {
      const updatedFavorites = [...favorites, movie];

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      setIsFavorite(true);
    }
  }

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
