import type { MouseEvent } from "react";
import { cloudinaryUrl } from "@/lib/cloudinary";

function formatDate(date: Date): string {
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

interface Props {
  route: string;
  title: string;
  photo: string;
  repo: string;
  demolink: string;
  tags: string[];
  pubDate: Date;
  description: string;
}

export default function ProyectoCards({
  route,
  title,
  photo,
  repo,
  demolink,
  tags,
  pubDate,
  description,
}: Props) {
  const goRepo = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(repo, "_blank", "noopener,noreferrer");
  };

  const goDemo = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (demolink) window.open(demolink, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={`/proyectos/${route}`}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/30 transition-all duration-300"
    >
      {/* Imagen */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {photo ? (
          <img
            src={cloudinaryUrl(photo, "c_scale,w_600")}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-zinc-300 dark:text-zinc-600 text-sm font-medium">
              Sin imagen
            </span>
          </div>
        )}
        {/* Badge de fecha */}
        <div className="absolute top-3 left-3">
          <span className="rounded-lg bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:text-zinc-300 shadow-sm">
            {formatDate(new Date(pubDate))}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Título + botones */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white leading-snug">
            {title}
          </h3>
          <div className="flex items-center gap-0.5 shrink-0">
            <button
              type="button"
              onClick={goRepo}
              className="rounded-lg p-1.5 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="GitHub"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="currentColor"
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </button>
            {demolink ? (
              <button
                type="button"
                onClick={goDemo}
                className="rounded-lg p-1.5 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Demo"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </button>
            ) : null}
          </div>
        </div>

        {/* Descripción */}
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-3">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
