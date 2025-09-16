import Contacto from "@/components/Contacto";
import ExperienceWith from "@/components/ExpWith";
import MainScreen from "@/components/MainScreen";
import Navbar from "@/components/Navbar";
import ProyectosSection from "@/components/Proyectos";

export default function Home() {
  // Ensure the homepage is statically rendered to avoid runtime fs access
  // from serverless functions in environments like Netlify.
  // This helps prevent sporadic 5xx during crawls.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const __staticHint = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
        <MainScreen />
        <ExperienceWith />
        <ProyectosSection />
      </div>
      <Contacto />
    </div>
  );
}

export const dynamic = "force-static";
