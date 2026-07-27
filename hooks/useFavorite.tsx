"use client";

import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";

export function useFavorite(movie: Movie) {
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
    const favorites: Movie[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    let updatedFavorites: Movie[];

    if (isFavorite) {
      updatedFavorites = favorites.filter(
        (favorite) => favorite.id !== movie.id
      );

      setIsFavorite(false);
    } else {
      updatedFavorites = [...favorites, movie];

      setIsFavorite(true);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    window.dispatchEvent(new Event("favoritesChanged"));
  };

  return {
    isFavorite,
    toggleFavorite,
    isHydrated,
  };
}