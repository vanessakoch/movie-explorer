"use client";

import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Movie[] | null>(null);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");

    const initialFavorites: Movie[] = storedFavorites
      ? JSON.parse(storedFavorites)
      : [];

    setFavorites(initialFavorites);

    const handleFavoritesChange = () => {
      const storedFavorites = localStorage.getItem("favorites");

      const updatedFavorites: Movie[] = storedFavorites
        ? JSON.parse(storedFavorites)
        : [];

      setFavorites(updatedFavorites);
    };

    window.addEventListener(
      "favoritesChanged",
      handleFavoritesChange
    );

    return () => {
      window.removeEventListener(
        "favoritesChanged",
        handleFavoritesChange
      );
    };
  }, []);

  return {
    favorites,
  };
}