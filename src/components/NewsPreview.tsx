"use client";

import type { NewsItem } from "@/lib/types";
import { useApiData } from "@/hooks/useApiData";
import { DataState } from "@/components/DataState";
import { NewsCard } from "@/components/NewsCard";

export function NewsPreview() {
  const newsState = useApiData<NewsItem[]>("/api/news?limit=10");

  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-jade">
              Головні новини
            </p>
            <h2 className="mt-2 text-3xl font-bold text-ink">10 матеріалів порталу</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            На головній сторінці зібрано десять коротких матеріалів про музеї, колекції та культурні
            маршрути.
          </p>
        </div>

        <div className="mt-8">
          {newsState.status === "loading" && (
            <DataState title="Завантаження новин" message="Готуємо матеріали порталу." />
          )}
          {newsState.status === "error" && (
            <DataState title="Новини недоступні" message={newsState.error} />
          )}
          {newsState.status === "success" && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {newsState.data.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
