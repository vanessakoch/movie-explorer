import { BackButton } from "@/components/BackButton";
import { EmptyPoster } from "@/components/EmptyPoster";
import { getMovie } from "@/services/tmdb";
import { ArrowLeft, ArrowLeftCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <main className="bg-zinc-900 py-8 px-13 gap-2">
      <BackButton />

      <section className="mx-auto flex max-w-6xl flex-col gap-8 p-8 md:flex-row sm:items-center">
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              className="rounded-xl"
            />
          ):(
          <EmptyPoster />
        )}

        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold">
            {movie.title}
          </h1>

          <span className="mt-3 text-zinc-400">
            ⭐ {movie.vote_average}
          </span>

          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
                <div key={genre.id} 
                  className="
                    px-3
                    py-1
                    mt-6
                    bg-purple-400 
                    rounded-full 
                    text-gray-800
                  ">
                  <p>{genre.name}</p>
                </div>
              ))}
          </div>
            <p className="mt-6 leading-7 text-zinc-300">
              {movie.overview}
            </p>
        </div>
      </section>
    </main>
  );
}