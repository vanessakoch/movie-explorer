import Image from "next/image";
import { Movie } from "@/types/movie";
import { EmptyPoster } from "./EmptyPoster";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div
      className="
        snap-start
        shrink-0
        w-44
        sm:w-44
        md:w-52
        lg:w-56
        overflow-hidden
        rounded-xl
        bg-zinc-900
        shadow-md
        transition-shadow
        duration-300
        hover:shadow-xl
        mb-6
      "
    >
      <div className="relative aspect-2/3 overflow-hidden rounded-xl">
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="
              w-full
              object-cover
              transition-transform
              duration-300
              hover:scale-105
            "
          />
        ):(
        <EmptyPoster />
      )}
      </div>

      <div className="p-3">
        <h3 className="line-clamp-2 min-h-12 text-base font-semibold text-white">
          {movie.title}
        </h3>

        <div className="flex mb-1 items-center justify-between text-sm text-zinc-400">
          <span>⭐ {movie.vote_average.toFixed(1)}</span>
          <span>{movie.release_date.substring(0, 4)}</span>
        </div>
      </div>
    </div>
  );
}