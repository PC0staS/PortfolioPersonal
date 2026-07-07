import { getProyectos } from "@/lib/proyectos";
import ProyectosAnimated from "@/components/ProyectosAnimated";

// Componente server-side que obtiene los datos
export default function ProyectosSection() {
  const proyectos = getProyectos();

  return <ProyectosAnimated proyectos={proyectos} />;
}
