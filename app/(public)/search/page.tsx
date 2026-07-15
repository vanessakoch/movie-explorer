import { MovieCard } from "@/components/MovieCard";
import { searchMovies } from "@/services/tmdb";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;

  if (!q) {
    return <p>Nenhum termo informado.</p>;
  }

  const movies = await searchMovies(q);

  if (movies.length === 0 || !movies.length) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold">
          Nenhum filme encontrado para `{q}`.
        </h1>
      </main>
    );
  }

  return (
     <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">
        Resultados para `{q}`
      </h1>

      <div className="
        grid
        justify-center
        grid-cols-2
        gap-4
        sm:grid-cols-3
        lg:grid-cols-5
      ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}