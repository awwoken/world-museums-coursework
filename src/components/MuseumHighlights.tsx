"use client";

import type { Museum } from "@/lib/types";
import { useApiData } from "@/hooks/useApiData";
import { DataState } from "@/components/DataState";
import { MuseumImage } from "@/components/MuseumImage";

export function MuseumHighlights() {
  const museumsState = useApiData<Museum[]>("/api/museums");

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-jade">Музеї</p>
          <h2 className="mt-2 text-3xl font-bold text-ink">Культурні центри світового рівня</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-600">
          Добірка охоплює музеї, які стали символами своїх міст і важливими освітніми просторами.
        </p>
      </div>

      <div className="mt-8">
        {museumsState.status === "loading" && (
          <DataState title="Завантаження музеїв" message="Готуємо музейну добірку." />
        )}
        {museumsState.status === "error" && (
          <DataState title="Дані недоступні" message={museumsState.error} />
        )}
        {museumsState.status === "success" && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {museumsState.data.slice(0, 4).map((museum) => (
              <article key={museum.id} className="bg-white shadow-soft">
                <div className="relative h-48">
                  <MuseumImage src={museum.imageUrl} alt={museum.name} />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-jade">
                    {museum.city}, {museum.country}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{museum.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{museum.shortDescription}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
