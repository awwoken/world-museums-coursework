"use client";

import { useEffect, useState } from "react";
import type { Museum } from "@/lib/types";
import { useApiData } from "@/hooks/useApiData";
import { MuseumImage } from "@/components/MuseumImage";
import { DataState } from "@/components/DataState";

export function MuseumSlider() {
  const [index, setIndex] = useState(0);
  const museumsState = useApiData<Museum[]>("/api/museums");
  const museumCount = museumsState.status === "success" ? museumsState.data.length : 0;

  useEffect(() => {
    if (museumCount < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % museumCount);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [museumCount]);

  if (museumsState.status === "loading") {
    return <DataState title="Завантаження слайдера" message="Готуємо музейну добірку." />;
  }

  if (museumsState.status === "error") {
    return <DataState title="Дані недоступні" message={museumsState.error} />;
  }

  const museums = museumsState.data;
  const currentMuseum = museums[index];
  const total = museums.length;

  if (!currentMuseum) {
    return <DataState title="Немає даних" message="Музейна добірка поки порожня." />;
  }

  const highlights = currentMuseum.highlights.slice(0, 3).join(" • ");

  return (
    <div className="overflow-hidden bg-ink text-white shadow-soft">
      <div className="relative min-h-[360px]">
        <MuseumImage src={currentMuseum.imageUrl} alt={currentMuseum.name} priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
        <div className="absolute right-4 top-4 z-10 flex gap-2">
          <button
            type="button"
            aria-label="Попередній музей"
            onClick={() => setIndex((current) => (current - 1 + total) % total)}
            className="grid h-10 w-10 place-items-center bg-white/90 text-2xl text-ink transition hover:bg-white"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Наступний музей"
            onClick={() => setIndex((current) => (current + 1) % total)}
            className="grid h-10 w-10 place-items-center bg-white/90 text-2xl text-ink transition hover:bg-white"
          >
            ›
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            {currentMuseum.city}, {currentMuseum.country}
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">{currentMuseum.name}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/90 md:text-base">
            {currentMuseum.shortDescription}
          </p>
          <p className="mt-4 text-sm font-semibold text-white">{highlights}</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-white/15 px-6 py-4">
        <p className="text-sm text-white/80">
          {index + 1} / {total}
        </p>
        <div className="flex gap-2">
          {museums.map((museum, museumIndex) => (
            <button
              key={museum.slug}
              type="button"
              aria-label={`Показати ${museum.name}`}
              onClick={() => setIndex(museumIndex)}
              className={
                museumIndex === index
                  ? "h-2.5 w-8 bg-white"
                  : "h-2.5 w-2.5 bg-white/45 transition hover:bg-white/75"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
