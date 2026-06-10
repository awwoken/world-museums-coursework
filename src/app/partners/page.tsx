export default function PartnersPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 lg:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-jade">Партнери</p>
      <h1 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Освітнє середовище проєкту</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
        Навчальний проєкт «Museum World» виконано в межах дисципліни «Веб-програмування та
        веб-дизайн» у Національному університеті «Полтавська політехніка імені Юрія Кондратюка».
      </p>

      <div className="mt-8 border-l-4 border-museum bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-jade">
          Офіційний сайт університету
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-ink">
          Національний університет «Полтавська політехніка імені Юрія Кондратюка»
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
          На сторінці університету можна ознайомитися з інформацією про навчальний заклад, освітні
          програми, інститути, кафедри та актуальні новини університетського життя.
        </p>
        <a
          href="https://nupp.edu.ua/"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex bg-museum px-5 py-3 text-sm font-semibold text-white! transition hover:bg-ink"
        >
          Перейти на сайт університету
        </a>
      </div>
    </section>
  );
}
