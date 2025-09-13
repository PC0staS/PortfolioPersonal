import Image from "next/image";

export default function ExperienceWith() {
    const technologiesSVG = [
        { name: "React", icon: "/svg/react.svg" },
        { name: "html", icon: "/svg/html5.svg" },
        { name: "css", icon: "/svg/css3.svg" },
        { name: "typescript", icon: "/svg/typescript.svg" },
        { name: "docker", icon: "/svg/docker.svg" },
        { name: "astro", icon: "/svg/astro.svg" },
        { name: "postgres", icon: "/svg/postgres.svg" },
        { name: "python", icon: "/svg/python.svg" },
    ];

  return (
    <div className="mt-20 text-center">
      <h2 className="text-xl font-semibold text-gray-400">Tengo experiencia con:</h2>
      <ul className="grid grid-cols-4 gap-8 mt-6">
        {technologiesSVG.map((tech) => (
          <li key={tech.name} className="flex flex-col items-center">
            <Image src={tech.icon} alt={tech.name} width={60} height={60} className="hover:scale-110 transition-all" />
          </li>
        ))}
      </ul>
    </div>
  );
}
