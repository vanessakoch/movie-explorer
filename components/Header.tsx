import { Film, Heart } from "lucide-react";
import { SearchInput } from "./SearchInput";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-zinc-700">
      <div className="
        mx-auto
        flex
        max-w-7xl
        flex-col
        items-center
        gap-4
        px-4
        py-4
        sm:px-6
        md:h-24
        md:flex-row
        md:justify-between
      ">
        
        <Link
          href="/"
          className="flex items-center text-2xl font-extrabold text-white"
        >
          <Film
            size={32}
            className="
              mr-3
              text-amber-400
              sm:mr-6
            "
          />
          <span>Movie Explorer</span>
        </Link>

        <nav className="flex items-center gap-5 font-medium text-white">
        <SearchInput />

        <Link
          href="/favorites"
          className="flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-white/10"
        >
          <Heart
            size={18}
            className="text-red-500"
            fill="currentColor"
          />
          <span>Favoritos</span>
        </Link>
      </nav>

      </div>
    </header>
  );
}