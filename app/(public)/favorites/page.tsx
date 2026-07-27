"use client";

import { MovieCard } from "@/components/MovieCard";
import { BackButton } from "@/components/BackButton";
import { useFavorites } from "@/hooks/useFavorites";

export default function Favorite() {
  const { favorites } = useFavorites();

  if (favorites === null) {
    return null;
  }

  if (favorites.length === 0) {
    return (
      <main className="min-h-[calc(100vh-4rem)]">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <BackButton />

          <h1 className="m-6 text-2xl font-bold">
            Nenhum filme favoritado.
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="py-8 px-13 gap-2">
      <BackButton />

      <div className="grid grid-cols-5 gap-6 sm:grid-cols-3 lg:grid-cols-5 m-12">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </main>
  );
}