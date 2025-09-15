"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

export default function ProyectoCards({
  route,
  title,
  photo,
  repo,
  demolink,
}: {
  route: string;
  title: string;
  photo: string;
  repo: string;
  demolink: string;
}) {
  const decodedTitle = decodeURIComponent(title);
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  const goRepo = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    window.open(repo, "_blank", "noopener,noreferrer");
  };

  const goDemo = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (demolink) window.open(demolink, "_blank", "noopener,noreferrer");
  };

  return (
    <Link
      href={`/proyectos/${route}`}
      aria-label={`Abrir ${decodedTitle}`}
      className="group flex flex-col mt-3 w-full max-w-md mx-auto items-center justify-center rounded-xl cursor-pointer border border-black dark:border-zinc-700 bg-[#2e2e2e] transition-all shadow-sm hover:shadow-xl hover:-translate-y-0.5 hover:border-black dark:hover:border-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300/60"
    >
      <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden rounded-t-xl">
        {photo && cloudName ? (
          <CldImage
            src={photo}
            alt={decodedTitle}
            width={1000}
            height={1000}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            style={{ viewTransitionName: `proyecto-hero-${photo}` }}
            sizes="(max-width: 640px) 100vw, 450px"
          />
        ) : (
          <div
            className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200"
            aria-label="Sin imagen"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="pointer-events-none absolute bottom-2 right-2 rounded-md bg-black/50 px-2 py-0.5 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Ver proyecto →
        </span>
      </div>

      <div className="flex items-center justify-between w-full px-3 py-2">
        <h3
          className="text-lg sm:text-xl font-semibold text-white/95 leading-tight line-clamp-1"
          style={{ viewTransitionName: `proyecto-title-${title}` }}
        >
          {decodedTitle}
        </h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goRepo}
            aria-label="Abrir repositorio en GitHub"
            title="GitHub"
            className="inline-flex items-center justify-center rounded-full cursor-pointer p-1 hover:scale-105 hover:bg-white/5 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300/60"
          >
            <Image
              src="/svg/github-mark.png"
              alt="GitHub"
              width={22}
              height={22}
            />
          </button>
          {demolink ? (
            <button
              type="button"
              onClick={goDemo}
              aria-label="Abrir demo"
              title="Demo"
              className="inline-flex items-center justify-center rounded-full cursor-pointer p-1 hover:scale-105 hover:bg-white/5 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300/60"
            >
              <Image
                src="/svg/hyperlink.png"
                alt="Demo"
                width={26}
                height={26}
              />
            </button>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
