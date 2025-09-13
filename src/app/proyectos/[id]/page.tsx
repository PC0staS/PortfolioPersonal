
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
    return <div className="text-center mt-20 text-2xl">Proyecto no encontrado</div>;
  }

  return (
    <div>
        <Navbar />
        <div className="max-w-3xl mx-auto mt-12 p-4">
          <Link href={`/`+'#proyectos'}>
            <h1 className="text-gray-400 hover:underline transition-all">Volver a los proyectos</h1>
          </Link>
            <div className="flex flex-col items-center">
            <ProyectoHeroImage src={proyecto.heroImage} alt={proyecto.title}  />
            <h1 className="text-4xl font-bold mb-8 text-center">{proyecto.title}</h1>
            </div>
        <article className="prose prose-lg mx-auto">
            <RenderMDX source={proyecto.content} />
        </article>
        </div>
    </div>
  );
}


