"use client";

import Image from "next/image";

type MuseumImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function MuseumImage({ src, alt, priority = false }: MuseumImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      unoptimized
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="object-cover"
    />
  );
}
