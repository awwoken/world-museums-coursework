import type { NewsItem } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { MuseumImage } from "@/components/MuseumImage";

type NewsCardProps = {
  item: NewsItem;
  showContent?: boolean;
};

export function NewsCard({ item, showContent = false }: NewsCardProps) {
  return (
    <article className="bg-white shadow-soft">
      <div className="relative h-48">
        <MuseumImage src={item.imageUrl} alt={item.title} />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-jade">
          <span>{item.category}</span>
          <span className="text-slate-300">/</span>
          <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time>
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-7 text-ink">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{item.excerpt}</p>
        {showContent && <p className="mt-4 text-sm leading-6 text-slate-700">{item.content}</p>}
        {item.museumName && (
          <p className="mt-4 border-t border-slate-100 pt-3 text-sm font-semibold text-museum">
            {item.museumName}
          </p>
        )}
      </div>
    </article>
  );
}
