import { getProyectos } from "@/lib/proyectos";
import ProyectoHeroImage from "@/components/ProyectoHeroImage";
import RenderMDX from "@/components/renderMDX";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";

import "./mdx.css";
import Navbar from "@/components/Navbar";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

// Ensure all dynamic routes are statically generated
export function generateStaticParams() {
  const proyectos = getProyectos();
  return proyectos.map((p) => ({ id: p.route ?? p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const proyectos = getProyectos();
    const proyecto = proyectos.find((p) => p.route === id);
    if (!proyecto) return { title: "Proyecto no encontrado" };
    const url = `https://pablocostas.dev/proyectos/${id}`;
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const ogImage =
      proyecto.heroImage && cloudName
        ? `https://res.cloudinary.com/${cloudName}/image/upload/${proyecto.heroImage}.jpg`
        : "/img/me.jpeg";
    return {
      title: proyecto.title,
      description: proyecto.description,
      alternates: { canonical: url },
      openGraph: {
        type: "article",
        url,
        title: proyecto.title,
        description: proyecto.description,
        images: [{ url: ogImage }],
      },
      twitter: {
        card: "summary_large_image",
        title: proyecto.title,
        description: proyecto.description,
        images: [ogImage],
      },
    };
  } catch (e) {
    console.warn("[generateMetadata] fallback for proyectos/[id]:", e);
    return { title: "Proyecto", description: "Detalle del proyecto" };
  }
}

export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const proyectos = getProyectos();
  const proyecto = proyectos.find((p) => p.route === id);
  if (!proyecto) {
    return notFound();
  }

  return (
    <ViewTransition>
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
    </ViewTransition>
  );
}
