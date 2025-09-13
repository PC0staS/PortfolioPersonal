import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#1e1e1e] text-white px-50">
      <div className="text-lg font-bold">Explora mi Portfolio</div>
      <div className="space-x-4">
        <Link scroll href={'/' + '#proyectos'} className="hover:underline">Proyectos</Link>
        <Link scroll href={'/' + '#experiencia'} className="cursor-not-allowed">Experiencia</Link>
        <Link scroll href={'/' + '#contacto'} className="hover:underline">Contacto</Link>
      </div>
    </nav>
  );
}
