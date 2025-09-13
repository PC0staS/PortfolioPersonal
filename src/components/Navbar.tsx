export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#1e1e1e] text-white px-50">
      <div className="text-lg font-bold">Explora mi Portafolio</div>
      <div className="space-x-4">
        <a href="#about" className="hover:underline">Sobre mí</a>
        <a href="#projects" className="hover:underline">Proyectos</a>
        <a href="#contact" className="hover:underline">Contacto</a>
      </div>
    </nav>
  );
}
