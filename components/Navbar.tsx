"use client";
import React from "react";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen ? false : true);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      {!isMenuOpen ? (
        <Image
          src="/menu.svg"
          alt="menu"
          height={32}
          width={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
      ) : (
        <Image
          src="/cross.svg"
          alt="menu"
          height={32}
          width={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
      )}
      {isMenuOpen && (
        <div className="relative">
          <div className="absolute top-0 right-0 z-50 w-[300px] h-full lg:h-auto transform transition-transform duration-500 ease-in-out">
            <ul className="h-full gap-2 flex flex-col mt-2">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-16 text-gray-50 flexCenter cursor-pointer mt-1.5 hover:font-bold bg-green-50 p-1 rounded-xl"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            <div className="lg:flexCenter hidden">
              <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
