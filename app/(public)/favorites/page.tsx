"use client";

import { MovieCard } from "@/components/MovieCard";
import { BackButton } from "@/components/BackButton";
import { useFavorites } from "@/hooks/useFavorites";

export default function Favorite() {
  const { favorites } = useFavorites();

  return (
    <main className="py-8 px-13 gap-2">
      <BackButton />

      <div className="grid grid-cols-5 gap-6 sm:grid-cols-3 lg:grid-cols-5 m-12">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
