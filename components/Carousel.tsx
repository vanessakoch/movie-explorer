"use client";

import { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = carouselRef.current;

    if (!container) return;

    const amount = container.clientWidth * 0.9;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-8">
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="
            absolute
            left-2
            top-1/2
            z-10
            -translate-y-1/2
            rounded-full
            bg-black/60
            p-3
            text-white
            transition-transform
            duration-200
            hover:scale-110
            hover:bg-black/80
          "
        >
          <ArrowLeft className="h-6 w-6"/>
        </button>

        <div
          ref={carouselRef}
          className="
            carousel-scroll
            flex
            gap-4
            overflow-x-auto
            scroll-smooth
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {children}
        </div>

        <button
          onClick={() => scroll("right")}
          className="
            absolute
            right-2
            top-1/2
            z-10
            -translate-y-1/2
            rounded-full
            bg-black/60
            p-3
            text-white
            transition-transform
            duration-200
            hover:scale-110
            hover:bg-black/80
          "
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}