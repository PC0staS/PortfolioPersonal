import { useState } from "react";

const categories = [
  {
    label: "Frontend",
    techs: [
      {
        name: "React",
        icon: "/svg/react.svg",
        description: "Interfaz y componentes",
      },
      {
        name: "TypeScript",
        icon: "/svg/typescript.svg",
        description: "Tipado",
      },
      {
        name: "Expo",
        icon: "/svg/expo.png",
        description: "Apps móviles (React Native)",
      },
      {
        name: "Angular",
        icon: "/svg/angular.svg",
        description: "Framework SPA",
      },
      {
        name: "HTML5",
        icon: "/svg/html5.svg",
        description: "Maquetación semántica",
      },
      {
        name: "Tailwind CSS",
        icon: "/svg/tailwindcss.png",
        description: "Estilos utilitarios",
      },
      {
        name: "Astro",
        icon: "/svg/astro.svg",
        description: "Contenido estático",
      },
      {
        name: "GSAP",
        icon: "/svg/gsap.webp",
        description: "Animaciones avanzadas",
      },
    ],
  },
  {
    label: "Backend / CLI",
    techs: [
      {
        name: "FastAPI",
        icon: "/svg/fastapi.webp",
        description: "APIs rápidas",
      },
      {
        name: "Python",
        icon: "/svg/python.svg",
        description: "Backend y herramientas",
      },
      {
        name: "Go",
        icon: "/svg/golang.svg",
        description: "Servicios concurrentes",
      },
      {
        name: "Shell",
        icon: "/svg/bash-icon.svg",
        description: "Scripting y CLI",
      },
      {
        name: "Docker",
        icon: "/svg/docker.svg",
        description: "Contenerización",
      },
      {
        name: "PostgreSQL",
        icon: "/svg/postgres.svg",
        description: "Bases de datos",
      },
      {
        name: "Package Managers",
        icon: "/svg/package.png",
        description: "Publicación de paquetes",
      },
      {
        name: "Auth / JWT",
        icon: "/svg/jwt.svg",
        description: "Autenticación",
      },
    ],
  },
  {
    label: "Sistemas / Automatización",
    techs: [
      {
        name: "Linux",
        icon: "/svg/linux.svg",
        description: "Servidores y CLI",
      },
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
      {
        name: "Wazuh",
        icon: "/svg/wazuh.png",
        description: "Seguridad y alertas",
      },
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
      {
        name: "GitHub",
        icon: "/svg/github.svg",
        description: "Repos, Actions y CI/CD",
      },
    ],
  },
  {
    label: "Hardware / IoT",
    techs: [
      {
        name: "Arduino",
        icon: "/svg/arduino.png",
        description: "Microcontroladores",
      },
      {
        name: "ESP32",
        icon: "/svg/esp32.png",
        description: "Microcontrolador WiFi/BLE",
      },
      {
        name: "PlatformIO",
        icon: "/svg/platformio.png",
        description: "Toolchain de firmware",
      },
      {
        name: "Raspberry Pi",
        icon: "/svg/raspberry-pi.png",
        description: "SBC y servidores",
      },
      {
        name: "C++",
        icon: "/svg/cpp.png",
        description: "Código embebido",
      },
      {
        name: "3D Printing",
        icon: "/svg/3d-printing.png",
        description: "Diseño e impresión 3D",
      },
      {
        name: "Redes IoT",
        icon: "/svg/networking.svg",
        description: "Dispositivos conectados",
      },
      {
        name: "Jetson / CUDA",
        icon: "/svg/gpu-ai.png",
        description: "IA acelerada por GPU",
      },
    ],
  },
  {
    label: "Ciberseguridad",
    techs: [
      {
        name: "Kali Linux",
        icon: "/svg/kali-linux.png",
        description: "Pentesting",
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
      { name: "CAIDO", icon: "/svg/caido.png", description: "Seguridad web" },
      {
        name: "bettercap",
        icon: "/svg/bettercap.png",
        description: "Manipulación de tráfico",
      },
      {
        name: "WireGuard",
        icon: "/svg/wireguard.png",
        description: "VPN segura y ligera",
      },
    ],
  },
];

export default function ExpWith() {
  const [active, setActive] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const switchCategory = (index: number) => {
    if (index === active) return;
    setFadeOut(true);
    setTimeout(() => {
      setActive(index);
      setFadeOut(false);
    }, 150);
  };

  return (
    <section id="tecnologias" className="mt-20 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-2">
          Tecnologías
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
          Con lo que trabajo en el día a día, organizado por disciplinas.
        </p>
      </div>

      {/* Pestañas de categorías */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat, i) => (
          <button
            key={cat.label}
            onClick={() => switchCategory(i)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all cursor-pointer border ${
              active === i
                ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black dark:border-white"
                : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500"
            }`}
          >
            {cat.label}
            <span className="ml-1.5 text-xs opacity-60">
              {cat.techs.length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid de tecnologías */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto transition-opacity duration-150 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {categories[active].techs.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center gap-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <p className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {tech.name}
              </p>
              <p className="text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-500 mt-0.5 line-clamp-1">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
