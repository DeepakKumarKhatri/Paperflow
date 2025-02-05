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
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 113.01 122.88"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m44.13 102.06c-1.14.03-2.14-.81-2.3-1.96-.17-1.2.64-2.31 1.82-2.54-1.3-7.37-4.85-11.43-8.6-15.72-2.92-3.34-5.95-6.81-8.34-11.92-2.35-5.03-3.64-10.23-3.6-15.63.05-5.4 1.42-10.96 4.4-16.71.02-.04.04-.07.06-.11 3.91-6.62 9.38-11.04 15.47-13.52 5.11-2.09 10.66-2.8 16.1-2.3 5.42.5 10.73 2.2 15.37 4.94 5.9 3.49 10.75 8.67 13.42 15.21 1.44 3.54 2.42 7.49 2.54 11.82.12 4.31-.62 8.96-2.61 13.88-2.66 6.59-6.18 10.68-9.47 14.51-3.03 3.53-5.85 6.81-7.42 11.84.89.21 1.59.94 1.73 1.9.17 1.24-.7 2.39-1.94 2.56l-.77.11c-.14 1.09-.23 2.26-.27 3.51l.25-.04c1.24-.17 2.39.7 2.56 1.94s-.7 2.39-1.94 2.56l-.78.11c.01.15.02.3.03.45.07.88.08 1.73.03 2.54l.13-.02c1.25-.15 2.38.74 2.54 1.98.15 1.25-.74 2.38-1.98 2.54l-1.68.21c-1.2 3.11-3.34 5.48-5.87 6.94-1.74 1.01-3.67 1.59-5.61 1.71-1.97.12-3.96-.25-5.78-1.13-2.08-1.02-3.94-2.71-5.29-5.14-.65-.33-1.13-.97-1.23-1.75-.04-.31-.01-.61.07-.89-.39-1.16-.68-2.43-.87-3.83l-.07.01c-1.24.17-2.39-.7-2.56-1.94s.7-2.39 1.94-2.56l.54-.08c.04-1.22.03-2.38-.02-3.48zm-41.95-43.2c-1.17.03-2.14-.88-2.18-2.05s.88-2.14 2.05-2.18l8.7-.3c1.17-.04 2.14.88 2.18 2.05s-.88 2.14-2.05 2.18zm108.5-8.61c1.16-.12 2.2.73 2.32 1.89s-.73 2.2-1.89 2.32l-8.66.91c-1.16.12-2.2-.73-2.32-1.89s.73-2.2 1.89-2.32zm-15.77-35.47c.65-.97 1.96-1.23 2.93-.58s1.23 1.96.58 2.93l-4.84 7.24c-.65.97-1.96 1.23-2.93.58s-1.23-1.96-.58-2.93zm-37.28-12.72c.03-1.17 1-2.09 2.16-2.06 1.17.03 2.09 1 2.06 2.16l-.22 8.7c-.03 1.17-1 2.09-2.16 2.06-1.17-.03-2.09-1-2.06-2.16zm-43.75 13.47c-.86-.8-.9-2.14-.11-2.99.8-.86 2.14-.9 2.99-.11l6.37 5.94c.86.8.9 2.14.11 2.99-.8.86-2.14.9-2.99.11zm34 81.42 18.49-2.63c1.59-6.7 5.05-10.73 8.8-15.08 3.08-3.58 6.36-7.4 8.76-13.34 1.76-4.35 2.41-8.43 2.31-12.19-.1-3.75-.96-7.21-2.24-10.34-2.3-5.63-6.51-10.11-11.65-13.15-4.11-2.43-8.8-3.94-13.59-4.37-4.77-.44-9.64.19-14.13 2.02-5.26 2.15-9.99 5.97-13.39 11.72-2.64 5.12-3.86 10.02-3.9 14.73-.04 4.74 1.11 9.33 3.2 13.8 2.13 4.56 4.97 7.8 7.69 10.92 4.24 4.86 8.25 9.45 9.65 17.91zm17.74 2.07-17.27 2.45c.05 1.1.07 2.25.05 3.47l17.05-2.42c.02-1.23.07-2.4.17-3.5zm-17.13 10.5c.12.92.3 1.76.53 2.54l16.55-2.04c.11-.86.13-1.77.05-2.74v-.02l-.01-.17zm2.88 6.84c.64.67 1.35 1.19 2.1 1.55 1.15.56 2.42.79 3.67.72 1.29-.08 2.57-.47 3.74-1.15 1.1-.64 2.09-1.53 2.88-2.65z" />
    </svg>
  );
}
