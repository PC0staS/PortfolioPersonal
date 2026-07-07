"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProyectoCard from "./cards/proyectoCard";

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

interface Proyecto {
  slug: string;
  title: string;
  heroImage?: string;
  githubRepo?: string;
  demoLink?: string;
  route?: string;
}

interface ProyectosAnimatedProps {
  proyectos: Proyecto[];
}

// Componente client-side que maneja las animaciones
export default function ProyectosAnimated({
  proyectos,
}: ProyectosAnimatedProps) {
  useGSAP(() => {
    // Configurar estado inicial de todos los elementos
    gsap.set("#proyectos-list li", { opacity: 0, y: 50 });

    // Usar ScrollTrigger.batch para animar cada li individualmente
    ScrollTrigger.batch("#proyectos-list li", {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1, // Pequeño delay entre elementos que entran al mismo tiempo
        });
      },
      onLeave: (elements) => {
        // Animar al salir de la vista
        gsap.to(elements, {
          opacity: 0.1,
          y: -50,
          duration: 0.3,
        });
      },
      onEnterBack: (elements) => {
        // Re-animar al volver a entrar
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
      },
      start: "top 85%", // Inicia cuando el elemento está al 85% de la ventana
      end: "bottom 20%", // Termina cuando sale por arriba
    });
  });

  return (
    <div id="proyectos" className="mt-20 text-center px-4">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-400">
        Proyectos que he realizado:
      </h2>
      <ul
        id="proyectos-list"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 max-w-6xl mx-auto"
      >
        {proyectos.map((proyecto) => (
          <li key={proyecto.slug}>
            <ProyectoCard
              title={proyecto.title}
              photo={proyecto.heroImage ?? ""}
              repo={proyecto.githubRepo ?? ""}
              demolink={proyecto.demoLink ?? ""}
              route={proyecto.route ?? ""}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
