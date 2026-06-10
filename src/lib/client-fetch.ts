import type { ApiError } from "@/lib/types";

export async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { cache: "no-store" });
  const data = (await response.json()) as T | ApiError;

  if (!response.ok) {
    const hasMessage =
      typeof data === "object" &&
      data !== null &&
      "error" in data &&
      typeof data.error === "string";

    throw new Error(hasMessage ? data.error : "Не вдалося завантажити дані.");
  }

  return data as T;
}
