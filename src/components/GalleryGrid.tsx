"use client";

import type { Museum } from "@/lib/types";
import { useApiData } from "@/hooks/useApiData";
import { DataState } from "@/components/DataState";
import { MuseumImage } from "@/components/MuseumImage";

export function GalleryGrid() {
  const museumsState = useApiData<Museum[]>("/api/museums");

  if (museumsState.status === "loading") {
    return (
      <div className="mt-8">
        <DataState title="Завантаження галереї" message="Готуємо зображення музеїв." />
      </div>
    );
  }

  if (museumsState.status === "error") {
    return (
      <div className="mt-8">
        <DataState title="Галерея недоступна" message={museumsState.error} />
      </div>
    );
  }

  const museums = museumsState.data;

  return (
    <div className="mt-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {museums.map((museum) => (
          <figure key={museum.id} className="bg-white shadow-soft">
            <div className="relative aspect-[4/3]">
              <MuseumImage src={museum.imageUrl} alt={museum.name} />
            </div>
            <figcaption className="p-4">
              <p className="font-semibold text-ink">{museum.name}</p>
              <p className="mt-1 text-sm text-slate-600">
                {museum.city}, {museum.country}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
