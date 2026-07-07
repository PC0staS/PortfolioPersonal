import { useState, useCallback, useMemo } from "react";
import ProyectoCard from "@/components/proyectoCards";

interface Proyecto {
  slug: string;
  title: string;
  description: string;
  heroImage?: string;
  githubRepo?: string;
  demoLink?: string;
  route?: string;
  tags: string[];
  pubDate: Date;
}

interface Props {
  proyectos: Proyecto[];
  allTags: string[];
}

export default function ProyectosAnimated({ proyectos, allTags }: Props) {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allTags.forEach((tag) => {
      counts[tag] = proyectos.filter((p) => p.tags.includes(tag)).length;
    });
    return counts;
  }, [proyectos, allTags]);

  const toggleTag = useCallback((tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }, []);

  const filtered = useMemo(() => {
    let result = proyectos;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }

    if (activeTags.length > 0) {
      result = result.filter((p) => p.tags.some((t) => activeTags.includes(t)));
    }

    return result;
  }, [proyectos, searchQuery, activeTags]);

  return (
    <section id="proyectos" className="mt-20 px-4">
      {/* Encabezado */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-2">
          Proyectos
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
          Una selección de lo que he construido. Usa los filtros o el buscador
          para encontrar algo concreto.
        </p>
      </div>

      {/* Barra de búsqueda */}
      <div className="max-w-md mx-auto mb-5">
        <div className="relative">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Buscar por nombre, tecnología..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 pl-10 pr-10 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 focus:border-zinc-400 dark:focus:border-zinc-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
              aria-label="Limpiar búsqueda"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Filtros por tag */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <button
          onClick={() => setActiveTags([])}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all cursor-pointer border ${
            activeTags.length === 0
              ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black dark:border-white"
              : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500"
          }`}
        >
          Todos
          <span className="ml-1.5 text-xs opacity-60">{proyectos.length}</span>
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all cursor-pointer border ${
              activeTags.includes(tag)
                ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black dark:border-white"
                : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500"
            }`}
          >
            {tag}
            <span className="ml-1.5 text-xs opacity-60">{tagCounts[tag]}</span>
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-zinc-400 dark:text-zinc-500 text-lg font-medium">
            No se encontraron proyectos
          </p>
          <p className="text-zinc-400/70 dark:text-zinc-500/70 text-sm mt-1">
            Prueba con otros filtros o términos de búsqueda
          </p>
          <button
            onClick={() => {
              setActiveTags([]);
              setSearchQuery("");
            }}
            className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white underline cursor-pointer transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        <>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-4">
            Mostrando {filtered.length} de {proyectos.length} proyectos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {filtered.map((proyecto) => (
              <ProyectoCard
                key={proyecto.slug}
                title={proyecto.title}
                photo={proyecto.heroImage ?? ""}
                repo={proyecto.githubRepo ?? ""}
                demolink={proyecto.demoLink ?? ""}
                route={proyecto.route ?? ""}
                tags={proyecto.tags}
                pubDate={proyecto.pubDate}
                description={proyecto.description}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
