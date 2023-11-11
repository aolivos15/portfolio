'use client'

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react";

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Inicio",
    "Sobre mí",
    "Proyectos",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-blue-900 text-white">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        {/* <NavbarBrand>
          {/* <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand> */}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        <NavbarItem>
          <Link className="text-white text-lg" href="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white text-lg" href="about">
            Sobre mí
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white text-lg" href="proyectos">
            Proyectos
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-8">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-white text-2xl" href="http://github.com/aolivos15" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link className="text-white text-2xl" href="https://www.linkedin.com/in/andrea-olivos-bustamante-8a6117230/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;