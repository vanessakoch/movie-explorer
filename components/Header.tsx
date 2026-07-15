import { Film } from "lucide-react";
import { SearchInput } from "./SearchInput";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-zinc-900 border-b border-zinc-700">
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
            className="
              mr-3
              h-7
              w-7
              text-amber-400
              sm:h-10
              sm:w-10
              sm:mr-6
            "
          />
          <span>Movie Explorer</span>
        </Link>

        <nav className="flex gap-3 font-medium text-white sm:gap-6 sm:text-base">
          <SearchInput />
          <a className="mt-2" href="#">Favoritos</a>
        </nav>

      </div>
    </header>
  );
}