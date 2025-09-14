import { getProyectos } from "@/lib/proyectos";
import ProyectoCard from "./cards/proyectoCard";

export default function ProyectosSection() {
  const proyectos = getProyectos();
  
  return (
    <div id="proyectos" className="mt-20 text-center px-4">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-400">
        Proyectos que he realizado:
      </h2>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 max-w-6xl mx-auto">
        {proyectos.map((proyecto) => (
          <ProyectoCard
            key={proyecto.slug}
            title={proyecto.title}
            photo={proyecto.heroImage ?? ""}
            repo={proyecto.githubRepo ?? ""}
            demolink={proyecto.demoLink ?? ""}
            route={proyecto.route ?? ""}
          />
        ))}
      </ul>
    </div>
  );
}
