"use client";

import { Carousel } from "flowbite-react";

import React from "react";
import Image from "next/image";

type Props = {};

const HeroCarousel = (props: Props) => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <Image src="/HeroCarousel/1.jpg" alt="..." width={1920} height={400} />
        <Image src="/HeroCarousel/2.jpeg" alt="..." width={1920} height={400} />
        <Image src="/HeroCarousel/1.jpg" alt="..." width={1920} height={400} />
        <Image src="/HeroCarousel/2.jpeg" alt="..." width={1920} height={400} />
        <Image src="/HeroCarousel/1.jpg" alt="..." width={1920} height={400} />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
