import Image from "next/image";
import Link from "next/link";

const LOGO = "https://www.figma.com/api/mcp/asset/8962c0d9-8044-441e-a40f-c196130ecf9c";
const SOCIAL_FB = "https://www.figma.com/api/mcp/asset/27ab9c90-44a0-4e45-82e1-91daeb986abb";
const SOCIAL_IG = "https://www.figma.com/api/mcp/asset/5eead75b-d82b-4e70-a431-43e95e825073";
const SOCIAL_TW = "https://www.figma.com/api/mcp/asset/d3229842-05f1-4f7f-b319-f5efbcca3154";
const SOCIAL_YT = "https://www.figma.com/api/mcp/asset/819b9419-b330-4587-9637-33f920dd5026";
const DIVIDER = "https://www.figma.com/api/mcp/asset/bdfb5dd4-283f-462a-8506-e5f8f5ec287a";

export default function Footer() {
  return (
    <footer className="bg-black text-white overflow-hidden pt-[100px] pb-[20px] px-6 lg:px-[135px] relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 pb-10 relative">
          {/* Logo + Description */}
          <div className="flex flex-col gap-[30px] w-full lg:w-[268px] shrink-0">
            <Link href="/" className="block">
              <div className="relative h-[52px] w-[260px]">
                <Image src={LOGO} alt="Rain Drain Logo" fill className="object-contain object-left" />
              </div>
            </Link>
            <p className="text-white text-[16px] leading-[28px] font-light">
              We specialize in gutter installation, repair, and cleaning services designed to keep your home safe, dry, and worry-free year-round.
            </p>
            <div className="flex gap-[15px] items-center">
              {[SOCIAL_FB, SOCIAL_IG, SOCIAL_TW, SOCIAL_YT].map((src, i) => (
                <a key={i} href="#" className="relative w-[40px] h-[40px] shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="Social" className="w-full h-full object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-[18px]">
            <div className="flex flex-col gap-[13px]">
              <p className="text-[rgba(255,255,255,0.5)] text-[18px] font-semibold capitalize">Quick Links</p>
              <div className="bg-[rgba(255,255,255,0.36)] h-[2px] rounded-[99px] w-[30px]" />
            </div>
            <div className="flex flex-col gap-0">
              {[
                { href: "/", label: "Home", active: true },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className={`text-[16px] font-medium leading-[40px] ${link.active ? "text-[#077bce]" : "text-white hover:text-[#077bce]"} transition-colors`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-[18px]">
            <div className="flex flex-col gap-[13px]">
              <p className="text-[rgba(255,255,255,0.5)] text-[18px] font-semibold capitalize">Services</p>
              <div className="bg-[rgba(255,255,255,0.36)] h-[2px] rounded-[99px] w-[30px]" />
            </div>
            <div className="flex flex-col gap-0">
              {["Gutter Installation", "Gutter Repair", "Gutter Cleaning", "Downspout Repair", "Gutter Guards", "Pressure Washing"].map((s) => (
                <Link key={s} href="/services" className="text-white text-[16px] font-medium leading-[40px] hover:text-[#077bce] transition-colors capitalize">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[30px] lg:w-[289px]">
            <div className="flex flex-col gap-[13px]">
              <p className="text-[rgba(255,255,255,0.5)] text-[18px] font-semibold capitalize">Contact Us</p>
              <div className="bg-[rgba(255,255,255,0.36)] h-[2px] rounded-[99px] w-[30px]" />
            </div>
            <div className="flex flex-col gap-[15px] text-[16px]">
              <div>
                <p className="font-bold leading-[24px]">Phone:</p>
                <p className="font-medium leading-[24px]">(501) 722-3455</p>
              </div>
              <div>
                <p className="font-bold leading-[24px]">Email:</p>
                <p className="font-medium leading-[24px]">probertson@raindrainsolutions.com</p>
              </div>
              <div>
                <p className="font-bold leading-[24px]">Address:</p>
                <p className="font-medium leading-[24px]">9 stonebrook Ct, Little Rock AR 72211</p>
              </div>
              <div>
                <p className="font-bold leading-[24px]">Working Hours:</p>
                <p className="font-medium leading-[24px]">Mon – Sat 6:00am – 8:00pm</p>
                <p className="font-medium leading-[24px]">Sunday – CLOSED</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full mb-5 bg-white/20" />

        {/* Copyright */}
        <div className="text-center pb-5">
          <p className="text-white text-[16px] leading-[25px]">
            Copyright © 2026 <strong>Rain Drain .</strong> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
