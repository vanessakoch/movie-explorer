"use client";

import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const storedFavorites = localStorage.getItem("favorites");

    return storedFavorites
      ? JSON.parse(storedFavorites)
      : [];
  });

  useEffect(() => {
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