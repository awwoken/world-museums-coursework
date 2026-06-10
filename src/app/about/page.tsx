export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 lg:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-jade">Про сайт</p>
      <h1 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
        Портал про музеї як простір культурної навігації
      </h1>
      <div className="mt-8 grid gap-7 text-base leading-8 text-slate-700 md:grid-cols-2">
        <div>
          <p>
            Сайт присвячений найвідомішим музеям світу. Його мета — коротко показати, чим важливі ці
            установи, які колекції вони зберігають і чому вони стали символами своїх міст.
          </p>
          <p className="mt-5">
            Тема поєднує мистецтво, історію, туризм і вебтехнології. Користувач може переглянути
            добірку музеїв, галерею зображень, новини порталу та контактну сторінку з картою.
          </p>
        </div>
        <div className="border-l-4 border-museum bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-ink">Призначення порталу</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>Ознайомити з провідними музеями світу.</li>
            <li>Показати приклади музейних колекцій і культурних центрів.</li>
            <li>Надати зручний огляд музеїв, новин і зображень.</li>
            <li>Надати адаптивний інтерфейс для мобільних і настільних екранів.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
