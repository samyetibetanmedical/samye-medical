"use client";

import { useState } from "react";
import { navItems } from "@/config/common";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-2 z-50 mx-5">
      <div className="max-w-7xl mx-auto bg-primary rounded-xl px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <ul className="flex gap-6 items-center text-white font-medium">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>

            <a
              href="/#book-appointment"
              className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 border-t border-white/20 pt-4">
            <ul className="flex flex-col gap-4 text-white font-medium">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="#book-appointment"
              onClick={() => setIsOpen(false)}
              className="mt-5 block w-full text-center bg-white text-primary px-4 py-2 rounded-lg font-semibold"
            >
              Book Appointment
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
