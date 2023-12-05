import Navbar from "@/Components/Navbar";
import Image from "next/image";
import HeaderSection from "./Section/Header";
import FeaturesSection from "./Section/Features";
import LearningSection from "./Section/Learning";
import PromoSection from "./Section/Promo";
import CategorySection from "./Section/Category";
import BusinessSection from "./Section/Business";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeaderSection />
      <FeaturesSection />
      <LearningSection />
      <PromoSection />
      <CategorySection />
      <BusinessSection />
    </main>
  );
}
