import { Film } from "lucide-react";

export function EmptyPoster() {
  return (
    <div className="absolute inset-0 flex object-cover h-full w-full flex-col items-center justify-center bg-zinc-800 text-zinc-500">
      <Film className="h-12 w-12 mb-4" />
      <span className="mt-2 text-lg">
        Sem imagem
      </span>
    </div>
  );
}