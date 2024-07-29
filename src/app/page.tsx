import LandingPage from "@/components/mainComponents/LandingPage";
import CardWithDetails from "@/components/mainComponents/supportedComponents/CardWithDetails";
import HeroCarousel from "@/components/mainComponents/supportedComponents/HeroCarousel";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <CardWithDetails />
    </>
  );
}
