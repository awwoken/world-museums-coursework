import { MuseumHighlights } from "@/components/MuseumHighlights";
import { MuseumSlider } from "@/components/MuseumSlider";
import { NewsPreview } from "@/components/NewsPreview";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-6 lg:py-14">
          <div>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-ink md:text-5xl">
              Найвідоміші музеї світу
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Інформаційний портал про музеї, що зберігають ключові колекції мистецтва, історії та
              культурної спадщини різних країн.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
              <span className="border border-slate-200 bg-slate-50 px-4 py-2">10 музеїв</span>
              <span className="border border-slate-200 bg-slate-50 px-4 py-2">Мистецтво</span>
              <span className="border border-slate-200 bg-slate-50 px-4 py-2">Галерея</span>
            </div>
          </div>
          <MuseumSlider />
        </div>
      </section>

      <MuseumHighlights />
      <NewsPreview />
    </>
  );
}
