"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LOGO = "https://www.figma.com/api/mcp/asset/8962c0d9-8044-441e-a40f-c196130ecf9c";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1f1f26] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[135px] flex items-center justify-between h-[80px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-[46px] w-[230px]">
            <Image src={LOGO} alt="Rain Drain Gutter Solutions" fill className="object-contain object-left" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[35px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[16px] font-medium transition-colors ${
                pathname === link.href ? "text-[#077bce]" : "text-white hover:text-[#077bce]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="bg-[#077bce] hover:bg-[#0568b0] text-white text-[16px] font-semibold px-[25px] py-[10px] rounded-[8px] transition-colors whitespace-nowrap"
          >
            Schedule an Inspection
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1f1f26] border-t border-white/10 px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-[16px] font-medium border-b border-white/10 ${
                pathname === link.href ? "text-[#077bce]" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center bg-[#077bce] text-white text-[16px] font-semibold px-5 py-3 rounded-[8px]"
          >
            Schedule an Inspection
          </Link>
        </div>
      )}
    </header>
  );
}
