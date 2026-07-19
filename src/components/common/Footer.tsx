"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import { scrollTo } from "@/lib/scroll";

const companyLinks = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Book Appointment",
    href: "#book-appointment",
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/sttmtcsamye",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/sttmt_centre",
  },
  {
    icon: FaGoogle,
    href: "https://share.google/Yi978CytSo3DjjKSh",
  },
];

const Footer = () => {
  return (
    <footer className="mt-24" id="footer">
      <Container className="bg-primary text-white rounded-t-4xl px-10 py-10">
        <div className="grid md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/logo.avif"
                width={70}
                height={70}
                alt="Logo"
              />

              <Heading
                as="h3"
                className="text-left max-w-none text-3xl leading-tight"
              >
                Samye Tibetan Traditional Medical Treatment Centre
              </Heading>
            </div>

            <p className="mt-6 text-lg text-white/90 max-w-md">
              Ancient Tibetan medicine for modern healing, across India.
            </p>

            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
                  >
                    <Icon size={24} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-3xl mb-5">Company</h4>

            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-white/80 hover:underline underline-offset-2 transition cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="font-semibold text-3xl mb-5">Reach Us</h4>

            <div className="space-y-3">
              <p>
                <button
                  onClick={() => scrollTo("locations")}
                  className="hover:underline underline-offset-2 transition duration-200 cursor-pointer"
                >
                  4 Clinic Locations
                </button>
              </p>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=samyetibetanmedical@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-2 transition duration-200 cursor-pointer"
              >
                samyetibetanmedical@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/90">
            © 2026 Samye Medical. All rights reserved.
          </p>

          <p className="font-semibold">
            Designed & Developed By{" "}
            <Link
              href={"https://monxdev.vercel.app/"}
              target="_blank"
              className="underline cursor-pointer hover:text-green-500"
            >
              Mohan
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
