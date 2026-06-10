import { NextRequest, NextResponse } from "next/server";
import { getNews } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const limitParam = request.nextUrl.searchParams.get("limit");
  const limit = limitParam ? Number(limitParam) : undefined;

  if (limitParam && (!Number.isInteger(limit) || !limit || limit < 1 || limit > 50)) {
    return NextResponse.json({ error: "Некоректний параметр limit." }, { status: 400 });
  }

  try {
    const news = await getNews(limit);

    return NextResponse.json(news);
  } catch {
    return NextResponse.json({ error: "Не вдалося отримати новини порталу." }, { status: 500 });
  }
}
