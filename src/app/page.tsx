import Contacto from "@/components/Contacto";
import ExperienceWith from "@/components/ExpWith";
import MainScreen from "@/components/MainScreen";
import Navbar from "@/components/Navbar";
import ProyectosSection from "@/components/Proyectos";



export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
        <MainScreen />
        <ExperienceWith />
        <ProyectosSection />
      </div>
      <Contacto />
    </div>
  );
}