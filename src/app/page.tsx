import HeroCarousel from "@/components/mainComponents/HeroCarousel";
import Product from "@/components/mainComponents/Product";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroCarousel></HeroCarousel>
      <Product></Product>
      <div>start</div>
    </div>
  );
}
