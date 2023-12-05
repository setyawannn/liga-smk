import Navbar from "@/Components/Navbar";
import Image from "next/image";
import HeaderSection from "./Section/Header";
import FeaturesSection from "./Section/Features";
import LearningSection from "./Section/Learning";
import PromoSection from "./Section/Promo";
import CategorySection from "./Section/Category";
import BusinessSection from "./Section/Business";
import EventSection from "./Section/Event";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <FeaturesSection />
      <LearningSection />
      <PromoSection />
      <CategorySection />
      <BusinessSection />
      <EventSection />
    </main>
  );
}
