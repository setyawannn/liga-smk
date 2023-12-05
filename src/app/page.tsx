import Navbar from "@/Components/Navbar";
import Image from "next/image";
import HeaderSection from "./Section/Header";
import Features from "./Section/Features";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeaderSection />
      <Features />
    </main>
  );
}
