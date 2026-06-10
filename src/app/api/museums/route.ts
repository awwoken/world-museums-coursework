import { NextResponse } from "next/server";
import { getMuseums } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const museums = await getMuseums();

    return NextResponse.json(museums);
  } catch {
    return NextResponse.json({ error: "Не вдалося отримати список музеїв." }, { status: 500 });
  }
}
