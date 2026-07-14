import { Film } from "lucide-react";

export function Header() {
  return (
    <header className="bg-zinc-900 border-b border-zinc-800">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        <h1 className="flex items-center gap-2 text-xl font-extrabold text-white sm:text-3xl">
          <Film
            className="
              h-7
              w-7
            text-amber-400
              sm:h-10
              sm:w-10
            "
          />
          <span>Movie Explorer</span>
        </h1>

        <nav className="flex gap-3 text-sm font-medium text-white sm:gap-6 sm:text-base">
          <a href="#">Home</a>
          <a href="#">Favoritos</a>
        </nav>

      </div>
    </header>
  );
}