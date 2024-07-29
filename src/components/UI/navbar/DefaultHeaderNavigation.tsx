"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import { DarkThemeToggle } from "flowbite-react";

export function DefaultHeaderNavigation() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <Image
          src="/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Logo"
          width={50}
          height={50}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Avtosklad86
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Главная
        </Navbar.Link>
        <Navbar.Link href="#">О нас</Navbar.Link>
        <Navbar.Link href="#">Каталог</Navbar.Link>
        <Navbar.Link href="#">Цены</Navbar.Link>
        <Navbar.Link href="#">Контакты</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
