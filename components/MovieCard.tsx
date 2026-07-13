import Image from "next/image";
import { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {

  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={750}
        className="h-auto w-full object-cover"
      />

      <div className="p-4">
        <h2 className="line-clamp-2 text-lg font-semibold">
          {movie.title}
        </h2>

        <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
          <span>⭐ {movie.vote_average.toFixed(1)}</span>
          <span>{movie.release_date.substring(0, 4)}</span>
        </div>
      </div>
    </article>
  );
}