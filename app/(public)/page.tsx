import { MovieCard } from "@/components/MovieCard";
import { Section } from "@/components/Section";
import { getTrendingMovies } from "@/services/tmdb";

export default async function Home() {
  const movies = await getTrendingMovies();

  return (
    <main className="mx-auto max-w-7xl p-6">
      <Section title="🔥 Em alta">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </Section>
      <Section title="⭐ Populares">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {/* Cards */}
        </div>
      </Section>
            <Section title="🏆 Mais bem avaliados">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {/* Cards */}
        </div>
      </Section>
      <Section title="📅 Próximos lançamentos">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {/* Cards */}
        </div>
      </Section>
    </main>
  );
}