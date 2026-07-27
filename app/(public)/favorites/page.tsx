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
    <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-12">
      <BackButton />

      <div className="mt-8 grid grid-cols-2 justify-items-center gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-6 lg:mt-12 lg:grid-cols-5">
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