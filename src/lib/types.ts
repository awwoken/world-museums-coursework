export type Museum = {
  id: number;
  slug: string;
  name: string;
  city: string;
  country: string;
  founded: string;
  imageUrl: string;
  shortDescription: string;
  details: string;
  highlights: string[];
};

export type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  publishedAt: string;
  museumName: string | null;
  museumSlug: string | null;
};

export type ApiError = {
  error: string;
};
