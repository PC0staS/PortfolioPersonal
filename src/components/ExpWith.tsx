"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";

// Tipado para facilitar mantenimiento y posibles ampliaciones
interface Technology {
  name: string;
  icon: string;
  description?: string;
}

const frontend: Technology[] = [
  {
    name: "React",
    icon: "/svg/react.svg",
    description: "Interfaz y componentes",
  },
  { name: "TypeScript", icon: "/svg/typescript.svg", description: "Tipado" },
  {
    name: "Expo",
    icon: "/svg/expo.png",
    description: "Desarrollo de apps móviles (React Native)",
  },
  { name: "Angular", icon: "/svg/angular.svg", description: "Framework SPA" },
  {
    name: "HTML5",
    icon: "/svg/html5.svg",
    description: "Maquetación semántica",
  },
  { name: "CSS3", icon: "/svg/css3.svg", description: "Estilos y diseño" },
  {
    name: "Astro",
    icon: "/svg/astro.svg",
    description: "Contenido estático y rendimiento",
  },
  {
    name: "GSAP",
    icon: "/svg/gsap.webp",
    description: "Animaciones avanzadas",
  },
];

const backendCli: Technology[] = [
  { name: "FastAPI", icon: "/svg/fastapi.webp", description: "APIs rápidas" },
  {
    name: "Python",
    icon: "/svg/python.svg",
    description: "Scripting y automatización",
  },
  {
    name: "Go",
    icon: "/svg/golang.svg",
    description: "Servicios concurrentes",
  },
  {
    name: "Makefile",
    icon: "/svg/makefile.png",
    description: "Automatización de tareas (Make)",
  },
  { name: "Docker", icon: "/svg/docker.svg", description: "Contenerización" },
  {
    name: "PostgreSQL",
    icon: "/svg/postgres.svg",
    description: "Bases de datos",
  },
  {
    name: "Packet Managers",
    icon: "/svg/package.png",
    description: "npm / pnpm / yarn / brew",
  },
  {
    name: "GitHub",
    icon: "/svg/github-mark.png",
    description: "Repos, Actions, branches y CI/CD",
  },
];

const systemsAutomation: Technology[] = [
  { name: "Ubuntu Server", icon: "/svg/ubuntu.svg", description: "Servidores" },
  {
    name: "n8n",
    icon: "/svg/n8n-color.svg",
    description: "Automatización de flujos",
  },
  {
    name: "Grafana",
    icon: "/svg/grafana.svg",
    description: "Monitoreo y dashboards",
  },
  { name: "Wazuh", icon: "/svg/wazuh.png", description: "Seguridad y alertas" },
  {
    name: "Ansible",
    icon: "/svg/ansible.png",
    description: "Configuración de infra",
  },
  {
    name: "Prometheus",
    icon: "/svg/prometheus.png",
    description: "Métricas y scraping",
  },
  {
    name: "Active Directory",
    icon: "/svg/active-directory.svg",
    description: "IAM y post-explotación",
  },
  // Docker eliminado aquí porque ya está listado en `backendCli`
  {
    name: "Networking",
    icon: "/svg/networking.svg",
    description: "Redes y entornos",
  },
];

const cybersecurity: Technology[] = [
  {
    name: "Kali Linux",
    icon: "/svg/kali-linux.png",
    description: "Pentesting y herramientas",
  },
  {
    name: "Nmap",
    icon: "/svg/nmap.png",
    description: "Reconocimiento de red",
  },
  {
    name: "Burp Suite",
    icon: "/svg/burp-suite.png",
    description: "Proxy y análisis web",
  },
  {
    name: "Metasploit",
    icon: "/svg/metasploit.png",
    description: "Explotación y pruebas",
  },
  {
    name: "Wireshark",
    icon: "/svg/wireshark.webp",
    description: "Análisis de tráfico",
  },
  {
    name: "CAIDO",
    icon: "/svg/caido.png",
    description: "Herramienta de seguridad web",
  },
  {
    name: "Recon & PrivEsc",
    icon: "/svg/cybersecurity.svg",
    description: "Enumeración y elevación de privilegios",
  },
  {
    name: "WireGuard",
    icon: "/svg/wireguard.png",
    description: "VPN segura y ligera",
  },
];

export default function ExperienceWith() {
  const [currentTech, setCurrentTech] = useState(frontend);
  const containerRef = useRef<HTMLUListElement>(null);
  const isAnimating = useRef(false);
  const isFirstRender = useRef(true);

  // Animación inicial
  useGSAP(() => {
    if (containerRef.current && isFirstRender.current) {
      gsap.from(containerRef.current.children, {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(1.7)",
      });
      isFirstRender.current = false;
    }
  }, []);

  // Animación de entrada después de cambiar contenido
  useEffect(() => {
    if (containerRef.current && !isFirstRender.current && isAnimating.current) {
      gsap.fromTo(
        containerRef.current.children,
        {
          opacity: 0,
          y: -20,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "back.out(1.4)",
          onComplete: () => {
            isAnimating.current = false;
          },
        },
      );
    }
  }, [currentTech]);

  const handleTechChange = (newTech: Technology[]) => {
    if (newTech === currentTech || isAnimating.current) return;

    isAnimating.current = true;

    // Animación de salida
    if (containerRef.current) {
      gsap.to(containerRef.current.children, {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.3,
        stagger: 0.04,
        ease: "power2.in",
        onComplete: () => {
          // Cambiar el contenido
          setCurrentTech(newTech);
        },
      });
    }
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 bg-gray-700/40 mx-auto max-w-[640px] w-full p-3 rounded-xl justify-center items-center shadow-sm backdrop-blur-sm border border-gray-200/5">
          <button
            onClick={() => handleTechChange(frontend)}
            className={`cursor-pointer w-full flex items-center justify-center gap-2 text-base px-6 py-3 rounded-full font-medium transition transform duration-150 hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400 active:translate-y-[2px] active:scale-95 ${
              currentTech === frontend
                ? "bg-white text-gray-900 dark:bg-white/10 dark:text-white border border-gray-300/30"
                : "text-gray-100 hover:bg-white/5"
            }`}
          >
            Desarrollo frontend
          </button>

          <button
            onClick={() => handleTechChange(backendCli)}
            className={`cursor-pointer w-full flex items-center justify-center gap-2 text-base px-6 py-3 rounded-full font-medium transition transform duration-150 hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400 active:translate-y-[2px] active:scale-95 ${
              currentTech === backendCli
                ? "bg-white text-gray-900 dark:bg-white/10 dark:text-white border border-gray-300/30"
                : "text-gray-100 hover:bg-white/5"
            }`}
          >
            Desarrollo backend/cli
          </button>

          <button
            onClick={() => handleTechChange(systemsAutomation)}
            className={`cursor-pointer w-full flex items-center justify-center gap-2 text-base px-6 py-3 rounded-full font-medium transition transform duration-150 hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400 active:translate-y-[2px] active:scale-95 ${
              currentTech === systemsAutomation
                ? "bg-white text-gray-900 dark:bg-white/10 dark:text-white border border-gray-300/30"
                : "text-gray-100 hover:bg-white/5"
            }`}
          >
            Sistemas/Automatización
          </button>

          <button
            onClick={() => handleTechChange(cybersecurity)}
            className={`cursor-pointer w-full flex items-center justify-center gap-2 text-base px-6 py-3 rounded-full font-medium transition transform duration-150 hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400 active:translate-y-[2px] active:scale-95 ${
              currentTech === cybersecurity
                ? "bg-white text-gray-900 dark:bg-white/10 dark:text-white border border-gray-300/30"
                : "text-gray-100 hover:bg-white/5"
            }`}
          >
            Ciberseguridad/Pentesting
          </button>
        </div>
      </div>
      <ul
        ref={containerRef}
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
