"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useState } from "react";

gsap.registerPlugin(useGSAP);
// Tipado para facilitar mantenimiento y posibles ampliaciones
interface Technology {
  name: string;
  icon: string;
  description?: string; // descripción breve opcional
}

// Fuente de datos: fácil de reutilizar en otras partes (por ejemplo, para SEO / JSON-LD)
const technologies: Technology[] = [
  {
    name: "React",
    icon: "/svg/react.svg",
    description: "Framework UI basado en componentes",
  },
  {
    name: "HTML",
    icon: "/svg/html5.svg",
    description: "Estructura semántica de la web",
  },
  {
    name: "CSS",
    icon: "/svg/css3.svg",
    description: "Estilos responsivos y animaciones",
  },
  {
    name: "TypeScript",
    icon: "/svg/typescript.svg",
    description: "JavaScript tipado para escalabilidad",
  },
  {
    name: "Docker",
    icon: "/svg/docker.svg",
    description: "Contenerización y entornos reproducibles",
  },
  {
    name: "Astro",
    icon: "/svg/astro.svg",
    description: "Sitios rápidos orientados a contenido",
  },
  {
    name: "PostgreSQL",
    icon: "/svg/postgres.svg",
    description: "Base de datos relacional robusta",
  },
  {
    name: "Python",
    icon: "/svg/python.svg",
    description: "Automatización y scripting backend",
  },
];
const asir: Technology[] = [
  {
    name: "Grafana",
    icon: "/svg/grafana.svg",
    description: "Visualización y monitoreo de datos",
  },
  {
    name: "Ubuntu Server",
    icon: "/svg/ubuntu.svg",
    description: "Sistema operativo para servidores",
  },
  {
    name: "Wazuh",
    icon: "/svg/wazuh.png",
    description: "Plataforma de seguridad y monitoreo",
  },
  {
    name: "Kali Linux",
    icon: "/svg/kali-linux.png",
    description: "Distribución para pruebas de penetración",
  },
  {
    name: "Active Directory",
    icon: "/svg/active-directory.svg",
    description: "Gestión de identidades y accesos",
  },
  {
    name: "VMware",
    icon: "/svg/vmware.svg",
    description: "Virtualización de servidores y escritorios",
  },
  {
    name: "Redes TCP/IP",
    icon: "/svg/networking.svg",
    description: "Fundamentos de redes y protocolos",
  },
  {
    name: "Seguridad Informática",
    icon: "/svg/cybersecurity.svg",
    description: "Protección de sistemas y datos",
  },
];

export default function ExperienceWith() {
  useGSAP(() => {});
  const [currentTech, setCurrentTech] = useState(technologies);
  return (
    <section
      className="mt-20 px-4"
      aria-labelledby="exp-tech-heading"
      role="region"
    >
      <h2
        id="exp-tech-heading"
        className="text-lg sm:text-xl font-semibold text-center text-gray-700 dark:text-gray-300"
      >
        Tengo experiencia con:
      </h2>
      <div>
        <div className="flex justify-center mt-4 space-x-4 bg-gray-700/40 mx-auto w-max p-2 rounded-full">
          <button
            onClick={() => setCurrentTech(technologies)}
            className={`px-4 py-2 rounded-full font-medium focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer ${
              currentTech === technologies
                ? " bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                : ""
            }`}
          >
            Desarrollo Web
          </button>
          <button
            onClick={() => setCurrentTech(asir)}
            className={`px-4 py-2 rounded-full font-medium focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer ${
              currentTech === asir
                ? "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                : ""
            }`}
          >
            Sistemas Informáticos
          </button>
        </div>
      </div>
      <ul
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-8 max-w-3xl mx-auto"
        role="list"
        id="tech-list"
      >
        {currentTech.map((tech) => (
          <li
            key={tech.name}
            data-tech-item
            className="group relative flex flex-col items-center mb-4"
          >
            <figure className="flex flex-col items-center">
              <div
                className="rounded-xl bg-gray-50 dark:bg-zinc-800/60 backdrop-blur-sm p-4 shadow-sm ring-1 ring-gray-200/60 dark:ring-white/10 hover:shadow-md transition-all w-24 h-24 flex items-center justify-center"
                aria-hidden="true"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {tech.name}
              </div>
            </figure>

            {/* Tooltip accesible (aparece en hover/focus) */}
            <div
              className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-900 px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-zinc-700"
              role="tooltip"
            >
              {tech.description || tech.name}
            </div>

            {/* Anillo de foco accesible para teclado */}
            <span className="absolute inset-0 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900" />
          </li>
        ))}
      </ul>
    </section>
  );
}
