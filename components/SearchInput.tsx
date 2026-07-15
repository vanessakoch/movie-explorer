"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchInput() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const search = query.trim();

    if (!search) return;

    router.push(`/search?q=${encodeURIComponent(search)}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar filmes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-lg bg-zinc-800 px-4 py-2 text-white placeholder:text-zinc-400"
      />
    </form>
  );
}