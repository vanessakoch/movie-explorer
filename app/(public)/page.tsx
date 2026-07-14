import { Carousel } from "@/components/Carousel";
import { MovieCard } from "@/components/MovieCard";
import { Section } from "@/components/Section";
import { getTrendingMovies } from "@/services/tmdb";
import { Star, Flame, Trophy, Calendar } from "lucide-react";

export default async function Home() {
  const movies = await getTrendingMovies();

  return (
    <main className="mx-auto max-w-7xl p-6">
      <Section title="Em alta">
          <Flame
            className="
              h-6
              w-6
              fill-orange-500
              text-orange-500
            "
          />        
      </Section>
      <Carousel>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Carousel>

      <Section title="Populares">
        <Star
            className="
              h-6
              w-6
              fill-yellow-500
              text-yellow-500
            "
          />     
      </Section>
      <Carousel>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Carousel>

      <Section title="Mais bem avaliados">
        <Trophy
            className="
              h-6
              w-6
              fill-orange-500
              text-orange-500
            "
          />     
      </Section>
      <Carousel>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Carousel>

      <Section title="Próximos lançamentos">
        <Calendar
            className="
              h-6
              w-6
              fill-yellow-500
              text-yellow-500
            "
          />     
      </Section>
      <Carousel>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Carousel>
    </main>
  );
}