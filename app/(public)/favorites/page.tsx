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
    <main className="px-4 py-8 md:px-12">
      <BackButton />

      <div className="ml-12 grid grid-cols-2 gap-4 sm:m-12 sm:gap-6 lg:grid-cols-5">
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