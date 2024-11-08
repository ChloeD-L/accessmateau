"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";

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
    <header id="header" className={"bg-white shadow-lg md:fixed py-5 h-30 z-50 top-0 left-0 right-0" + ` ${className}`}>
      <nav className="container mx-auto flex items-center justify-between md:px-10 px-4">
        <Link href="/">
          <img src="/logo.svg" alt="logo" className="w-24 cursor-pointer" />
        </Link>
        {/* Navigation Links */}
        <div className="flex space-x-8 mr-10 text-lg">
          <Link href="/" className="hover:text-tertiary ">
            <text className="tracking-widest"></text>HOME
          </Link>
          <Link href="/contact" className="hover:text-tertiary ">
            <text className="tracking-widest">CONTACT</text>
          </Link>

          {/* Services Dropdown */}
          {/* <div className="relative cursor-pointer " onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <span className="hover:text-tertiary font-medium">Services</span>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg z-10">
                <Link href="/web-design" className="block px-4 py-2 hover:bg-gray-200">
                  Web Design
                </Link>
                <Link href="/app-development" className="block px-4 py-2 hover:bg-gray-200">
                  App Development
                </Link>
                <Link href="/seo" className="block px-4 py-2 hover:bg-gray-200">
                  SEO Services
                </Link>
              </div>
            )}
          </div> */}

          {/* <Link href="/contact" className="hover:text-tertiary font-medium">
            Contact Us
          </Link> */}
        </div>
        {children} {/* This is where the children will be rendered */}
      </nav>
    </header>
  );
};

export default Header;
