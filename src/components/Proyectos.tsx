import { getProyectos } from "@/lib/proyectos";
import ProyectoCard from "./cards/proyectoCard";

export default function ProyectosSection() {
  const proyectos = getProyectos();

  return (
    <div id="proyectos" className="mt-20 text-center">
      <h2 className="text-xl font-semibold text-gray-400">Proyectos que he realizado:</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        {proyectos.map((proyecto) => (
          <ProyectoCard key={proyecto.slug} title={proyecto.title} photo={proyecto.heroImage ?? ""} repo={proyecto.githubRepo ?? ""} demolink={proyecto.demoLink ?? ""} route={proyecto.route ?? ""} />
        ))}
      </ul>
    </div>
  );
}
