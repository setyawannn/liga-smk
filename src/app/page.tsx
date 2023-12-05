import Navbar from "@/Components/Navbar";
import Image from "next/image";
import HeaderSection from "./Section/Header";
import FeaturesSection from "./Section/Features";
import LearningSection from "./Section/Learning";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeaderSection />
      <FeaturesSection />
      <LearningSection />
    </main>
  );
}
