export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#1e1e1e] text-white px-50">
      <div className="text-lg font-bold">Explora mi Portafolio</div>
      <div className="space-x-4">
        <a href={`/` + '#proyectos'} className="hover:underline">Proyectos</a>
        <a href={`/` + '#experiencia'} className="cursor-not-allowed">Experiencia</a>
        <a href={`/` + '#contacto'} className="hover:underline">Contacto</a>
      </div>
    </nav>
  );
}
