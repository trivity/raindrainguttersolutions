import Image from "next/image";
import Link from "next/link";

const BANNER     = "https://www.figma.com/api/mcp/asset/2d53f8be-59e0-4a25-b34b-055de4183b6b";
const ARROW_W    = "https://www.figma.com/api/mcp/asset/37904bf4-8800-4d4c-b28e-e1714b600703";
const MAP_IMG    = "https://www.figma.com/api/mcp/asset/ca5dfa36-c937-4c91-b269-48cc69db5f31";
const FORM_BG    = "https://www.figma.com/api/mcp/asset/edb361fa-5384-4957-a0ef-6edf4fd0578e";
const MASCOT     = "https://www.figma.com/api/mcp/asset/7bfdb5bd-55b4-47a4-b6c3-0c3f048f8be9";
const ICON_ADDR  = "https://www.figma.com/api/mcp/asset/e14bb083-4706-43c5-aa28-58047ba3a495";
const ICON_PHONE = "https://www.figma.com/api/mcp/asset/5b5c2b51-e89b-4fd5-9049-dee033d20a9d";
const ICON_HOURS = "https://www.figma.com/api/mcp/asset/4650695e-6fa2-436a-b068-635aebc77bdf";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 lg:px-[135px] py-[74px]">
        <div className="absolute inset-0">
          <Image src={BANNER} alt="Contact" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-l from-[38.462%] from-[rgba(255,255,255,0.09)] to-[69.712%] to-[rgba(255,255,255,0.9)]" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <h1 className="text-[#242424] text-[60px] font-bold leading-[72px]">Contact Us</h1>
        </div>
      </section>

      {/* Get In Touch — 3 floating-icon cards */}
      <section className="px-6 lg:px-[135px] py-[100px] bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-[80px]">
            <h2 className="text-[#242424] text-[42px] leading-[52px]">
              <span className="font-bold">Get In </span><span className="font-normal">Touch</span>
            </h2>
            <p className="text-[#242424] text-[16px] font-medium leading-[28px] mt-2 max-w-[624px] mx-auto">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
            {/* Address */}
            <div className="relative bg-[rgba(238,242,245,0.4)] rounded-[10px] pt-[85px] pb-[40px] px-[30px] flex flex-col items-center gap-[15px] text-center">
              <div className="absolute -top-[43px] left-1/2 -translate-x-1/2 size-[85px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_ADDR} alt="" className="w-full h-full object-contain" />
              </div>
              <p className="text-[#077bce] text-[16px] font-medium tracking-[2.4px] uppercase leading-[20px]">Address</p>
              <p className="text-[#242424] text-[18px] font-semibold tracking-[0.9px] leading-[30px]">
                9 stonebrook Ct,<br />Little Rock AR 72211
              </p>
            </div>

            {/* Contact */}
            <div className="relative bg-[rgba(238,242,245,0.4)] rounded-[10px] pt-[85px] pb-[40px] px-[30px] flex flex-col items-center gap-[15px] text-center">
              <div className="absolute -top-[43px] left-1/2 -translate-x-1/2 size-[85px] bg-white border-2 border-[#eef2f5] rounded-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_PHONE} alt="" className="size-[48px] object-contain" />
              </div>
              <p className="text-[#077bce] text-[16px] font-medium tracking-[2.4px] uppercase leading-[20px]">Contact Us</p>
              <div className="text-[#242424] font-semibold tracking-[0.9px] leading-[30px]">
                <p className="text-[18px]">(501) 722-3455</p>
                <p className="text-[16px]">probertson@raindrainsolutions.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="relative bg-[rgba(238,242,245,0.4)] rounded-[10px] pt-[85px] pb-[40px] px-[30px] flex flex-col items-center gap-[15px] text-center">
              <div className="absolute -top-[43px] left-1/2 -translate-x-1/2 size-[85px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_HOURS} alt="" className="w-full h-full object-contain" />
              </div>
              <p className="text-[#077bce] text-[16px] font-medium tracking-[2.4px] uppercase leading-[20px]">Working Hours</p>
              <div className="text-[#242424] text-[18px] font-semibold tracking-[0.9px] leading-[30px]">
                <p>Mon – Sat 6:00am – 8:00pm</p>
                <p>Sunday – CLOSED</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="flex flex-col lg:flex-row">
        {/* Map */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[693px]">
          <Image src={MAP_IMG} alt="Map" fill className="object-cover" />
        </div>

        {/* Form */}
        <div className="relative w-full lg:w-1/2 h-[693px] flex flex-col justify-center px-[50px] lg:px-[80px] py-[69px]">
          <div className="absolute inset-0">
            <Image src={FORM_BG} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(7,123,206,0.7)]" />
          </div>

          <div className="relative z-10 flex flex-col gap-[25px]">
            <h2 className="text-white text-[42px] leading-[52px]">
              <span className="font-bold">Lets </span><span className="font-normal">Contact.</span>
            </h2>

            <div className="flex flex-col gap-[15px]">
              <div className="flex gap-[15px]">
                <input type="text" placeholder="First Name *"
                  className="flex-1 bg-white border border-black rounded-[5px] px-[20px] py-[10px] text-[14px] text-[#303030] tracking-[0.7px] shadow-[0px_22px_18px_0px_rgba(0,0,0,0.2)] focus:outline-none" />
                <input type="text" placeholder="Last Name *"
                  className="flex-1 bg-white rounded-[5px] px-[20px] py-[10px] text-[14px] text-[#303030] tracking-[0.7px] focus:outline-none" />
              </div>
              <input type="tel" placeholder="Phone *"
                className="w-full bg-white rounded-[5px] px-[20px] py-[10px] text-[14px] text-[#303030] tracking-[0.7px] focus:outline-none" />
              <input type="email" placeholder="Email *"
                className="w-full bg-white rounded-[5px] px-[20px] py-[10px] text-[14px] text-[#303030] tracking-[0.7px] focus:outline-none" />
              <textarea placeholder="Message here..." rows={4}
                className="w-full bg-white rounded-[5px] px-[20px] py-[20px] text-[14px] text-[#303030] tracking-[0.7px] focus:outline-none resize-none" />
            </div>

            <button type="submit"
              className="bg-black hover:bg-gray-900 inline-flex items-center gap-2 px-[25px] py-[10px] rounded-[8px] text-white text-[16px] font-semibold transition-colors self-start">
              Send Message
              <span className="relative h-[14px] w-[21px] inline-block">
                <Image src={ARROW_W} alt="" fill className="object-contain" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-[135px] py-[100px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-[#077bce] rounded-[30px] relative flex flex-col gap-[25px] items-start pl-[135px] lg:pl-[500px] pr-[60px] lg:pr-[100px] py-[60px] overflow-hidden min-h-[320px]">
            <div className="absolute left-[46px] top-[-47px] size-[398px] rounded-full border-[15px] border-white overflow-hidden">
              <Image src={MASCOT} alt="mascot" fill className="object-cover" />
            </div>
            <p className="text-white text-[42px] leading-[52px]">
              <span className="font-bold">Schedule Your Gutter </span><span className="font-normal">Inspection Today</span>
            </p>
            <div className="flex gap-[25px] flex-wrap">
              <Link href="/contact"
                className="bg-black hover:bg-gray-900 flex items-center gap-2 px-[25px] py-[15px] rounded-[8px] text-white text-[16px] font-semibold transition-colors">
                Schedule an Inspection
                <span className="relative h-[14px] w-[21px] inline-block"><Image src={ARROW_W} alt="" fill className="object-contain" /></span>
              </Link>
              <a href="tel:5017223455"
                className="border border-white flex items-center gap-2 px-[25px] py-[15px] rounded-[8px] text-white text-[16px] font-semibold hover:bg-white/10 transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
