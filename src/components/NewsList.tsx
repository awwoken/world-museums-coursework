"use client";

import type { NewsItem } from "@/lib/types";
import { useApiData } from "@/hooks/useApiData";
import { DataState } from "@/components/DataState";
import { NewsCard } from "@/components/NewsCard";

export function NewsList() {
  const newsState = useApiData<NewsItem[]>("/api/news");

  if (newsState.status === "loading") {
    return (
      <div className="mt-8">
        <DataState title="Завантаження новин" message="Готуємо повний список матеріалів." />
      </div>
    );
  }

  if (newsState.status === "error") {
    return (
      <div className="mt-8">
        <DataState title="Новини недоступні" message={newsState.error} />
      </div>
    );
  }

  const news = newsState.data;

  return (
    <div className="mt-8">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} showContent />
        ))}
      </div>
    </div>
  );
}
