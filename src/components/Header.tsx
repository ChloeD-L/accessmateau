"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { Button } from "./ui/button";
import { DropdownButton } from "./DropdownButton";

interface HeaderProps {
  children?: ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const rootClassNames = className ? className : "";

  return (
    <header id="header" className={`bg-white shadow-lg md:fixed py-5 h-30 z-50 top-0 left-0 right-0 ${className}`}>
      <nav className="container mx-auto flex items-center justify-between md:px-10 px-4">
        <Link href="/">
          <img src="/logo.svg" alt="logo" className="w-24 cursor-pointer" />
        </Link>
        {/* Navigation Links */}
        <div className="flex space-x-8 mr-10 text-lg">
          <Button className="border-0 bg-white shadow-none hover:bg-white">
            <Link href="/">
              <span className="tracking-wider inline-block text-textColor text-base font-normal hover:text-customTertiary ">
                HOME
              </span>
            </Link>
          </Button>

          <Button className="border-0 bg-white shadow-none hover:bg-white">
            <Link href="/contact">
              <text className="tracking-wider inline-block text-textColor text-base font-normal hover:text-customTertiary">
                CONTACT
              </text>
            </Link>
          </Button>
          <DropdownButton />
        </div>
        {children} {/* This is where the children will be rendered */}
      </nav>
    </header>
  );
};

export default Header;
