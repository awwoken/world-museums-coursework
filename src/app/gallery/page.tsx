import { GalleryGrid } from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-jade">Галерея</p>
      <h1 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
        Зображення найвідоміших музеїв
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
        Добірка світлин показує архітектуру, головні входи та атмосферу музейних просторів із різних
        країн.
      </p>
      <GalleryGrid />
    </section>
  );
}
