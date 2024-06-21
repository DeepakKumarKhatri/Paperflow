"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-400 to-purple-500 border-b shadow-sm rounded-b-lg h-16">
      <div className="container mx-auto px-4 py-3 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <MountainIcon className="w-8 h-8 text-white" />
              <div className="font-bold text-xl text-white">Paperflow</div>
            </Link>
            <div className="hidden md:block text-md text-white font-bold">
              Access Resources, Anytime, Anywhere.
            </div>
          </div>

          <nav className="hidden md:flex gap-4">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
          </nav>

          <div className="md:hidden">
            <Button variant="outline" size="icon" onClick={toggleMenu}>
              <MenuIcon className="w-6 h-6 text-black" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-2 md:hidden">
            <nav className="flex flex-col gap-4">
              <NavLink href="#" onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink href="#" onClick={toggleMenu}>
                About
              </NavLink>
              <NavLink href="#" onClick={toggleMenu}>
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      passHref
      onClick={onClick}
      className="text-sm font-medium text-black hover:text-gray-100 transition-colors rounded-md px-2 py-1 inline-block hover:underline"
    >
      {children}
    </Link>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
