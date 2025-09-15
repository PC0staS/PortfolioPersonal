
import { getProyectos } from "@/lib/proyectos";
import ProyectoHeroImage from "@/components/ProyectoHeroImage";
import RenderMDX from "@/components/renderMDX";
import Link from 'next/link';

import "./mdx.css";
import Navbar from "@/components/Navbar";


export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const proyectos = getProyectos();
  const proyecto = proyectos.find((p) => p.route === params.id);
  if (!proyecto) return { title: "Proyecto no encontrado" };
  return { title: proyecto.title };
}

export default function ProyectoPage({ params }: { params: { id: string } }) {
  const proyectos = getProyectos();
  const proyecto = proyectos.find((p) => p.route === params.id);
  if (!proyecto) {
    // Not found pattern for Next.js app router
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-black dark:text-white">
        <h1 className="text-3xl font-bold mb-4 text-center text-red-500">
          Proyecto no encontrado
        </h1>
        <p className="mb-6 text-center text-gray-500 dark:text-gray-400">
          El proyecto que buscas no existe o ha sido eliminado.
        </p>
        <Link href="/#proyectos" className="inline-block px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition">
          Volver a los proyectos
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-12 p-4 text-black dark:text-white">
        <Link href={`/` + "#proyectos"}>
          <h1 className="text-gray-600 dark:text-gray-400 hover:underline transition-all">
            Volver a los proyectos
          </h1>
        </Link>
        <div className="flex flex-col items-center">
          <ProyectoHeroImage src={proyecto.heroImage} alt={proyecto.title} />
          <h1
            className="text-4xl font-bold mb-8 text-center"
            style={{ viewTransitionName: `proyecto-title-${proyecto.title}` }}
          >
            {proyecto.title}
          </h1>
        </div>
        <article className="prose prose-lg mx-auto">
          <RenderMDX source={proyecto.content} />
        </article>
      </div>
    </div>
  );
}


