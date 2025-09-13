import ExperienceWith from "@/components/ExpWith";
import MainScreen from "@/components/MainScreen";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto min-h-screen">
        <MainScreen />
        <ExperienceWith />
      </div>
    </div>
  );
}