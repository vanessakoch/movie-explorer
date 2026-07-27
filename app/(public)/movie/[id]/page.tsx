import { BackButton } from "@/components/BackButton";
import { EmptyPoster } from "@/components/EmptyPoster";
import { FavoriteButton } from "@/components/FavoriteButton";
import { getMovie } from "@/services/tmdb";
import Image from "next/image";

type Props = {
  params: {
    id?: number
  }
}

export default async function MovieDetail({ params }: Props) {
  const { id } = await params;

  if (!id) {
    return
  }

  const movie = await getMovie(id);

  return (
    <main className="relative overflow-hidden px-6 py-8 md:px-12">
      <BackButton />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {movie.backdrop_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
            alt=""
            fill
            className="object-cover opacity-30"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950" />
      </div>

      <section className="mx-auto flex max-w-6xl flex-col gap-8 p-8 md:flex-row sm:items-center">
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              priority
              className="rounded-xl"
            />
          ):(
          <EmptyPoster />
        )}

        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold">
            {movie.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-200">
              ⭐ {movie.vote_average.toFixed(1)}
            </span>

            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <FavoriteButton movie={movie} />
              <span>Favorito</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-300"
              >
                {genre.name}
              </span>
            ))}
          </div>
            <div className="mt-8">
              <h2 className="mb-3 text-lg font-semibold text-white">
                Sinopse
              </h2>

              <p className="leading-7 text-zinc-300">
                {movie.overview || "Sinopse não disponível."}
              </p>
            </div>
        </div>
      </section>
    </main>
  );
}