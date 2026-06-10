import { ContactForm } from "@/components/ContactForm";

export default function ContactsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-jade">Контакти</p>
      <h1 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Зв'язок із порталом</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-ink">Контактна інформація</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Звертайтеся з питаннями про матеріали порталу, музейні добірки або пропозиції щодо нових
            культурних локацій.
          </p>
          <dl className="mt-5 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-ink">Email</dt>
              <dd>museum.portal@example.com</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Телефон</dt>
              <dd>+380 50 000 00 00</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Адреса</dt>
              <dd>Мистецький арсенал, Київ</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Графік</dt>
              <dd>Пн-Пт, 09:00-18:00</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Відповідь</dt>
              <dd>Протягом 1 робочого дня</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Тематика</dt>
              <dd>Музеї, галереї, культурна спадщина</dd>
            </div>
          </dl>
          <div className="mt-6 border-t border-slate-100 pt-5">
            <p className="text-sm font-semibold text-ink">Для відвідувачів</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Портал допомагає швидко знайти базову інформацію про відомі музеї, переглянути
              зображення та зорієнтуватися перед культурною подорожжю.
            </p>
          </div>
        </div>
        <ContactForm />
        <div className="overflow-hidden bg-white shadow-soft lg:col-span-2">
          <iframe
            title="Google Map Мистецький арсенал, Київ"
            src="https://www.google.com/maps?q=Mystetskyi%20Arsenal%2C%20Kyiv%2C%20Ukraine&output=embed"
            className="aspect-[16/7] min-h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
