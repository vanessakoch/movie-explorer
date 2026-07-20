"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
        className="
          cursor-pointer
          flex 
          items-center
          gap-2
          rounded-lg
          px-4
          py-2
          hover:bg-zinc-800
          transition
          font-bold
        ">
      <ArrowLeft size={24}/>
      Voltar
    </button>
  )
};