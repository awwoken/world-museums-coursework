import { neon } from "@neondatabase/serverless";
import type { Museum, NewsItem } from "@/lib/types";

type MuseumRow = {
  id: number;
  slug: string;
  name: string;
  city: string;
  country: string;
  founded: string;
  image_url: string;
  short_description: string;
  details: string;
  highlights: string[];
};

type NewsRow = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image_url: string;
  published_at: string | Date;
  museum_name: string | null;
  museum_slug: string | null;
};

function getSql() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }

  return neon(databaseUrl);
}

function mapMuseum(row: MuseumRow): Museum {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    city: row.city,
    country: row.country,
    founded: row.founded,
    imageUrl: row.image_url,
    shortDescription: row.short_description,
    details: row.details,
    highlights: row.highlights
  };
}

function mapNews(row: NewsRow): NewsItem {
  const date =
    row.published_at instanceof Date
      ? row.published_at.toISOString().slice(0, 10)
      : String(row.published_at).slice(0, 10);

  return {
    id: row.id,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    imageUrl: row.image_url,
    publishedAt: date,
    museumName: row.museum_name,
    museumSlug: row.museum_slug
  };
}

export async function getMuseums(): Promise<Museum[]> {
  const sql = getSql();
  const rows = await sql`
    SELECT
      id,
      slug,
      name,
      city,
      country,
      founded,
      image_url,
      short_description,
      details,
      highlights
    FROM museums
    ORDER BY name ASC
  `;

  return rows.map((row) => mapMuseum(row as MuseumRow));
}

export async function getNews(limit?: number): Promise<NewsItem[]> {
  const sql = getSql();

  if (limit) {
    const rows = await sql`
      SELECT
        news.id,
        news.title,
        news.excerpt,
        news.content,
        news.category,
        news.image_url,
        news.published_at,
        museums.name AS museum_name,
        museums.slug AS museum_slug
      FROM news
      LEFT JOIN museums ON museums.id = news.museum_id
      ORDER BY news.published_at DESC, news.id DESC
      LIMIT ${limit}
    `;

    return rows.map((row) => mapNews(row as NewsRow));
  }

  const rows = await sql`
    SELECT
      news.id,
      news.title,
      news.excerpt,
      news.content,
      news.category,
      news.image_url,
      news.published_at,
      museums.name AS museum_name,
      museums.slug AS museum_slug
    FROM news
    LEFT JOIN museums ON museums.id = news.museum_id
    ORDER BY news.published_at DESC, news.id DESC
  `;

  return rows.map((row) => mapNews(row as NewsRow));
}
