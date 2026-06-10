import nextEnv from "@next/env";
import { neon } from "@neondatabase/serverless";

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is missing. Add it to .env.local before running npm run db:setup.");
}

const sql = neon(databaseUrl);

const museumImages = {
  louvre:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg",
  britishMuseum:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/British_Museum_%28aerial%29.jpg/960px-British_Museum_%28aerial%29.jpg",
  vaticanMuseums:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Vatican_Museums_-_Entrance.jpg/960px-Vatican_Museums_-_Entrance.jpg",
  metropolitanMuseum:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg/960px-Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg",
  prado:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/330px-Museo_del_Prado_2016_%2825185969599%29.jpg",
  uffizi:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Florence%2C_Italy_-_panoramio_%28125%29.jpg/330px-Florence%2C_Italy_-_panoramio_%28125%29.jpg",
  acropolisMuseum:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/New_Acropolis_Museum_building_in_Athens%2C_Greece.jpg/960px-New_Acropolis_Museum_building_in_Athens%2C_Greece.jpg",
  rijksmuseum:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg/330px-South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg",
  orsee:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Mus%C3%A9e_d%27Orsay_and_the_Seine%2C_5_October_2014.jpg/330px-Mus%C3%A9e_d%27Orsay_and_the_Seine%2C_5_October_2014.jpg",
  nationalGallery:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Galer%C3%ADa_Nacional%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_036.JPG/330px-Galer%C3%ADa_Nacional%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_036.JPG"
};

const museums = [
  {
    slug: "louvre",
    name: "Лувр",
    city: "Париж",
    country: "Франція",
    founded: "1793",
    imageUrl: museumImages.louvre,
    shortDescription:
      "Один із найвідвідуваніших музеїв світу, відомий колекціями європейського живопису, античного мистецтва та історичним палацовим комплексом.",
    details:
      "Лувр поєднує музей, архітектурну пам'ятку та символ Парижа. Його експозиції охоплюють тисячоліття історії мистецтва, а серед найвідоміших творів є «Мона Ліза» та «Венера Мілоська».",
    highlights: ["Мона Ліза", "Венера Мілоська", "скляна піраміда"]
  },
  {
    slug: "british-museum",
    name: "Британський музей",
    city: "Лондон",
    country: "Велика Британія",
    founded: "1753",
    imageUrl: museumImages.britishMuseum,
    shortDescription:
      "Музей історії та культури людства з великими колекціями археології, стародавнього мистецтва та рукописів.",
    details:
      "Британський музей демонструє пам'ятки різних цивілізацій: від Давнього Єгипту до античної Греції та Азії. Його Великий двір став одним із найвідоміших музейних просторів Європи.",
    highlights: ["Розетський камінь", "єгипетські мумії", "Великий двір"]
  },
  {
    slug: "vatican-museums",
    name: "Ватиканські музеї",
    city: "Ватикан",
    country: "Ватикан",
    founded: "1506",
    imageUrl: museumImages.vaticanMuseums,
    shortDescription:
      "Комплекс музеїв із папськими колекціями, античною скульптурою, ренесансним мистецтвом і Сикстинською капелою.",
    details:
      "Ватиканські музеї формувалися протягом століть і стали одним із головних центрів світового мистецтва. Відвідувачі проходять через галереї карт, зали Рафаеля та Сикстинську капелу.",
    highlights: ["Сикстинська капела", "станци Рафаеля", "галерея карт"]
  },
  {
    slug: "metropolitan-museum",
    name: "Метрополітен-музей",
    city: "Нью-Йорк",
    country: "США",
    founded: "1870",
    imageUrl: museumImages.metropolitanMuseum,
    shortDescription:
      "Найбільший художній музей США з колекціями від античності до сучасного мистецтва.",
    details:
      "Метрополітен-музей займає важливе місце в культурному житті Нью-Йорка. Його експозиції охоплюють живопис, скульптуру, костюм, зброю, декоративне мистецтво та стародавні цивілізації.",
    highlights: ["єгипетський храм Дендура", "європейський живопис", "костюмний інститут"]
  },
  {
    slug: "prado",
    name: "Музей Прадо",
    city: "Мадрид",
    country: "Іспанія",
    founded: "1819",
    imageUrl: museumImages.prado,
    shortDescription:
      "Провідний музей іспанського та європейського живопису з роботами Веласкеса, Гойї, Ель Греко та Рубенса.",
    details:
      "Прадо є центральною частиною мадридського мистецького маршруту. Його колекція особливо цінна для вивчення іспанського живопису та придворної культури.",
    highlights: ["Веласкес", "Гойя", "Ель Греко"]
  },
  {
    slug: "uffizi",
    name: "Галерея Уффіці",
    city: "Флоренція",
    country: "Італія",
    founded: "1581",
    imageUrl: museumImages.uffizi,
    shortDescription:
      "Один із головних музеїв італійського Відродження з роботами Боттічеллі, Леонардо да Вінчі та Мікеланджело.",
    details:
      "Галерея Уффіці виникла як частина адміністративного комплексу Медічі. Сьогодні вона відома послідовною історією ренесансного мистецтва та видом на історичний центр Флоренції.",
    highlights: ["Боттічеллі", "ренесансний живопис", "колекція Медічі"]
  },
  {
    slug: "acropolis-museum",
    name: "Музей Акрополя",
    city: "Афіни",
    country: "Греція",
    founded: "2009",
    imageUrl: museumImages.acropolisMuseum,
    shortDescription:
      "Сучасний археологічний музей біля Афінського Акрополя, присвячений пам'яткам античної Греції.",
    details:
      "Музей Акрополя демонструє археологічні знахідки з Афінського Акрополя та його схилів. Будівля поєднує сучасну архітектуру, відкриті археологічні розкопки і вид на Парфенон.",
    highlights: ["Парфенон", "антична скульптура", "археологічні розкопки"]
  },
  {
    slug: "rijksmuseum",
    name: "Рейксмузей",
    city: "Амстердам",
    country: "Нідерланди",
    founded: "1800",
    imageUrl: museumImages.rijksmuseum,
    shortDescription:
      "Національний музей Нідерландів, присвячений голландському мистецтву та історії.",
    details:
      "Рейксмузей представляє «Золоту добу» нідерландського живопису. Його центральною роботою є «Нічна варта» Рембрандта, а будівля стала символом Амстердама.",
    highlights: ["Рембрандт", "Вермер", "Нічна варта"]
  },
  {
    slug: "orsee",
    name: "Музей Орсе",
    city: "Париж",
    country: "Франція",
    founded: "1986",
    imageUrl: museumImages.orsee,
    shortDescription:
      "Музей у будівлі колишнього вокзалу, відомий колекціями імпресіонізму та постімпресіонізму.",
    details:
      "Музей Орсе демонструє мистецтво другої половини XIX - початку XX століття. Він особливо важливий для розуміння Моне, Ренуара, Дега, Ван Гога та Сезанна.",
    highlights: ["імпресіонізм", "колишній вокзал", "Ван Гог"]
  },
  {
    slug: "national-gallery",
    name: "Національна галерея",
    city: "Лондон",
    country: "Велика Британія",
    founded: "1824",
    imageUrl: museumImages.nationalGallery,
    shortDescription:
      "Художній музей на Трафальгарській площі з європейським живописом XIII-XIX століть.",
    details:
      "Національна галерея Лондона зберігає колекцію європейського живопису, доступну для широкої аудиторії. У музеї представлені твори Леонардо да Вінчі, Тиціана, Тернера та Ван Гога.",
    highlights: ["Трафальгарська площа", "європейський живопис", "Тернер"]
  }
];

const news = [
  {
    museumSlug: "louvre",
    title: "Лувр як символ музейної культури Європи",
    excerpt:
      "Короткий огляд того, чому Лувр залишається одним із головних орієнтирів для світових музеїв.",
    content:
      "Лувр поєднує історичну архітектуру, палацову спадщину та масштабні мистецькі колекції. Для порталу він є прикладом музею, що формує уявлення про європейську культуру.",
    category: "Огляд",
    imageUrl: museumImages.louvre,
    publishedAt: "2026-05-01"
  },
  {
    museumSlug: "british-museum",
    title: "Британський музей і спадщина давніх цивілізацій",
    excerpt: "Матеріал про те, як музей представляє історію людства через археологічні пам'ятки.",
    content:
      "Колекції Британського музею допомагають порівнювати культури різних регіонів світу. Саме тому музей часто використовують як приклад універсального історичного зібрання.",
    category: "Історія",
    imageUrl: museumImages.britishMuseum,
    publishedAt: "2026-04-28"
  },
  {
    museumSlug: "vatican-museums",
    title: "Ватиканські музеї: маршрут крізь мистецтво Ренесансу",
    excerpt:
      "Портал пояснює, чому Ватиканські музеї є важливими для вивчення ренесансної культури.",
    content:
      "Сикстинська капела, станци Рафаеля і галерея карт демонструють зв'язок мистецтва, науки та релігійної історії. Це робить музейний комплекс унікальним.",
    category: "Мистецтво",
    imageUrl: museumImages.vaticanMuseums,
    publishedAt: "2026-04-20"
  },
  {
    museumSlug: "metropolitan-museum",
    title: "Метрополітен-музей як культурна енциклопедія Нью-Йорка",
    excerpt:
      "Матеріал про універсальність колекцій Метрополітен-музею та його роль у міському просторі.",
    content:
      "Метрополітен-музей охоплює багато епох і регіонів, тому його експозиції можна розглядати як велику культурну енциклопедію.",
    category: "Огляд",
    imageUrl: museumImages.metropolitanMuseum,
    publishedAt: "2026-04-14"
  },
  {
    museumSlug: "prado",
    title: "Прадо і школа іспанського живопису",
    excerpt: "Публікація присвячена ролі Прадо у збереженні творів Веласкеса, Гойї та Ель Греко.",
    content:
      "Музей Прадо дозволяє простежити розвиток іспанського живопису через твори майстрів, які вплинули на всю європейську традицію.",
    category: "Живопис",
    imageUrl: museumImages.prado,
    publishedAt: "2026-04-06"
  },
  {
    museumSlug: "uffizi",
    title: "Уффіці та мистецтво італійського Відродження",
    excerpt:
      "Огляд галереї, де зібрані ключові твори флорентійського та італійського ренесансного мистецтва.",
    content:
      "Уффіці допомагає побачити, як формувалася мова Відродження: від релігійних сюжетів до нового розуміння людини та простору.",
    category: "Ренесанс",
    imageUrl: museumImages.uffizi,
    publishedAt: "2026-03-29"
  },
  {
    museumSlug: "acropolis-museum",
    title: "Музей Акрополя: антична спадщина у сучасному просторі",
    excerpt:
      "Матеріал про музей, який поєднує археологічні знахідки, сучасну архітектуру та вид на Парфенон.",
    content:
      "Музей Акрополя показує, як антична спадщина може бути представлена в сучасному музейному просторі. Його експозиція допомагає краще зрозуміти Афіни, Парфенон і культуру класичної Греції.",
    category: "Античність",
    imageUrl: museumImages.acropolisMuseum,
    publishedAt: "2026-03-21"
  },
  {
    museumSlug: "rijksmuseum",
    title: "Рейксмузей і нідерландська Золота доба",
    excerpt:
      "Публікація про Рембрандта, Вермера та роль музею у представленні історії Нідерландів.",
    content:
      "Рейксмузей концентрує увагу на мистецтві та історії країни. Його експозиції показують, як живопис пов'язаний із торгівлею, містами та побутом.",
    category: "Національна спадщина",
    imageUrl: museumImages.rijksmuseum,
    publishedAt: "2026-03-15"
  },
  {
    museumSlug: "orsee",
    title: "Музей Орсе: імпресіонізм у будівлі старого вокзалу",
    excerpt: "Огляд музею, який поєднує промислову архітектуру та мистецтво модерної епохи.",
    content:
      "Музей Орсе показує, як простір колишнього вокзалу може працювати для експозицій живопису, скульптури й декоративного мистецтва.",
    category: "Імпресіонізм",
    imageUrl: museumImages.orsee,
    publishedAt: "2026-03-08"
  },
  {
    museumSlug: "national-gallery",
    title: "Національна галерея Лондона і доступність мистецтва",
    excerpt: "Матеріал про музей, який став важливою публічною колекцією європейського живопису.",
    content:
      "Національна галерея показує, що великі мистецькі зібрання можуть бути частиною відкритого міського простору й освітнього середовища.",
    category: "Освіта",
    imageUrl: museumImages.nationalGallery,
    publishedAt: "2026-02-25"
  },
  {
    museumSlug: "louvre",
    title: "Як музейні портали допомагають планувати культурні подорожі",
    excerpt:
      "Пояснення, чому інформаційні сайти про музеї корисні для туристів, студентів і дослідників.",
    content:
      "Портал про музеї може об'єднати короткі описи, галерею, новини та контактну інформацію. Це робить підготовку до відвідування зручнішою.",
    category: "Портал",
    imageUrl: museumImages.louvre,
    publishedAt: "2026-02-17"
  },
  {
    museumSlug: "metropolitan-museum",
    title: "Чому світові музеї варто порівнювати між собою",
    excerpt:
      "Публікація пояснює, як порівняння музеїв допомагає краще розуміти культурні відмінності.",
    content:
      "Коли музейні колекції розглядаються поруч, легше побачити спільні теми: збереження спадщини, освітню функцію та роль архітектури.",
    category: "Аналітика",
    imageUrl: museumImages.metropolitanMuseum,
    publishedAt: "2026-02-10"
  }
];

async function setup() {
  await sql`
    CREATE TABLE IF NOT EXISTS museums (
      id SERIAL PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      city TEXT NOT NULL,
      country TEXT NOT NULL,
      founded TEXT NOT NULL,
      image_url TEXT NOT NULL,
      short_description TEXT NOT NULL,
      details TEXT NOT NULL,
      highlights JSONB NOT NULL DEFAULT '[]'::jsonb,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS news (
      id SERIAL PRIMARY KEY,
      museum_id INTEGER REFERENCES museums(id) ON DELETE SET NULL,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      category TEXT NOT NULL,
      image_url TEXT NOT NULL,
      published_at DATE NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`TRUNCATE TABLE news, museums RESTART IDENTITY CASCADE`;

  const museumIds = new Map();

  for (const museum of museums) {
    const rows = await sql`
      INSERT INTO museums (
        slug,
        name,
        city,
        country,
        founded,
        image_url,
        short_description,
        details,
        highlights
      )
      VALUES (
        ${museum.slug},
        ${museum.name},
        ${museum.city},
        ${museum.country},
        ${museum.founded},
        ${museum.imageUrl},
        ${museum.shortDescription},
        ${museum.details},
        ${JSON.stringify(museum.highlights)}::jsonb
      )
      RETURNING id, slug
    `;

    museumIds.set(rows[0].slug, rows[0].id);
  }

  for (const item of news) {
    await sql`
      INSERT INTO news (
        museum_id,
        title,
        excerpt,
        content,
        category,
        image_url,
        published_at
      )
      VALUES (
        ${museumIds.get(item.museumSlug)},
        ${item.title},
        ${item.excerpt},
        ${item.content},
        ${item.category},
        ${item.imageUrl},
        ${item.publishedAt}
      )
    `;
  }

  console.log(`Created ${museums.length} museums and ${news.length} news records.`);
}

setup().catch((error) => {
  console.error(error);
  process.exit(1);
});
