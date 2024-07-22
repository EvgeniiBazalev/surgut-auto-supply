"use client";

import { Button, Navbar } from "flowbite-react";
import type { FC } from "react";
import Image from "next/image";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header>
      <Navbar fluid>
        <Navbar.Brand href="/">
          <Image
            src="logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
            width={100}
            height={100}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Surgut Auto Supply
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-3 lg:order-2">
          {/* <Button
            color="gray"
            href="#"
            className="border-0 hover:bg-gray-50 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Log in
          </Button>
          <Button color="info" href="#">
            Get started
          </Button> */}
          <Navbar.Toggle theme={{ icon: "h-5 w-5 shrink-0" }} />
        </div>
        <Navbar.Collapse
          theme={{
            list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium",
          }}
          className="lg:order-1"
        >
          <Navbar.Link active href="#" className="rounded-lg">
            Главная
          </Navbar.Link>

          <Navbar.Link href="#">Каталог</Navbar.Link>
          <Navbar.Link href="#">О нас</Navbar.Link>
          <Navbar.Link href="#">Контакты</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default DefaultHeaderNavigation;
