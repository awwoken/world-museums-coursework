import { NewsList } from "@/components/NewsList";

export default function NewsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-jade">Новини</p>
      <h1 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Новини та матеріали порталу</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
        Розділ містить освітні публікації про музеї, їхні колекції та роль у світовій культурі.
      </p>
      <NewsList />
    </section>
  );
}
