export function Header() {
  return (
    <header className="bg-amber-400 shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-black">
          🎬 Movie Explorer
        </h1>

        <nav className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Favoritos</a>
        </nav>
      </div>
    </header>
  );
}