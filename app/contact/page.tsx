import Image from "next/image";
import Link from "next/link";

const BANNER = "https://www.figma.com/api/mcp/asset/4bd4eda4-f85c-4d64-b019-5f6672de47cf";
const ARROW_W = "https://www.figma.com/api/mcp/asset/37904bf4-8800-4d4c-b28e-e1714b600703";
const MAP_IMG = "https://www.figma.com/api/mcp/asset/01450fc4-53ba-41c7-943f-2fd6afe74b9b";
const FORM_BG = "https://www.figma.com/api/mcp/asset/2ffdda63-6ab9-4e72-bdde-ed8f1e60bfcc";
const MASCOT = "https://www.figma.com/api/mcp/asset/8d3905ad-8dbe-4213-a5c0-0fff4b9b4e31";

const INFO_ICONS = [
  "https://www.figma.com/api/mcp/asset/538ca0c9-c2e5-4ddb-ad97-cb0c46a3a3b6",
  "https://www.figma.com/api/mcp/asset/1455bc15-4cbb-4e56-a3c3-43474d285b23",
  "https://www.figma.com/api/mcp/asset/40913861-3a65-4c50-967e-7e84becd0a64",
];

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

      {/* Info Cards */}
      <section className="px-6 lg:px-[135px] py-[60px] bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {[
              { icon: INFO_ICONS[0], title: "Our Address", lines: ["9 stonebrook Ct,", "Little Rock AR 72211"] },
              { icon: INFO_ICONS[1], title: "Phone & Email", lines: ["(501) 722-3455", "probertson@raindrainsolutions.com"] },
              { icon: INFO_ICONS[2], title: "Working Hours", lines: ["Mon – Sat: 6:00am – 8:00pm", "Sunday – CLOSED"] },
            ].map((card) => (
              <div key={card.title} className="flex flex-col items-center text-center gap-[16px] bg-[#f8fbfd] border border-[rgba(0,0,0,0.08)] rounded-[20px] px-[30px] py-[40px]">
                <div className="relative size-[70px]">
                  <Image src={card.icon} alt="" fill className="object-contain" />
                </div>
                <h3 className="text-[#242424] text-[20px] font-bold leading-[28px]">{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-[#242424] text-[16px] font-medium leading-[26px]">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="px-6 lg:px-[135px] pb-[100px] bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row rounded-[20px] overflow-hidden min-h-[680px]">
          {/* Map left half */}
          <div className="relative w-full lg:w-1/2 h-[400px] lg:h-auto">
            <Image src={MAP_IMG} alt="Map" fill className="object-cover" />
          </div>

          {/* Form right half */}
          <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-[50px] lg:px-[70px] py-[60px]">
            {/* bg texture + overlay */}
            <div className="absolute inset-0">
              <Image src={FORM_BG} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-[rgba(7,123,206,0.7)]" />
            </div>

            <div className="relative z-10 flex flex-col gap-[30px]">
              <div>
                <h2 className="text-white text-[42px] leading-[52px]">
                  <span className="font-bold">Lets </span><span className="font-normal">Contact.</span>
                </h2>
              </div>

              <form className="flex flex-col gap-[20px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-white/20 border border-white/40 rounded-[8px] px-[18px] py-[14px] text-white placeholder-white/70 text-[15px] font-medium focus:outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white/20 border border-white/40 rounded-[8px] px-[18px] py-[14px] text-white placeholder-white/70 text-[15px] font-medium focus:outline-none focus:border-white"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-white/20 border border-white/40 rounded-[8px] px-[18px] py-[14px] text-white placeholder-white/70 text-[15px] font-medium focus:outline-none focus:border-white"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white/20 border border-white/40 rounded-[8px] px-[18px] py-[14px] text-white placeholder-white/70 text-[15px] font-medium focus:outline-none focus:border-white"
                  />
                </div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="bg-white/20 border border-white/40 rounded-[8px] px-[18px] py-[14px] text-white placeholder-white/70 text-[15px] font-medium focus:outline-none focus:border-white resize-none"
                />
                <button
                  type="submit"
                  className="bg-black hover:bg-gray-900 text-white text-[16px] font-semibold px-[30px] py-[15px] rounded-[8px] transition-colors self-start flex items-center gap-2"
                >
                  Send Message
                  <span className="relative h-[14px] w-[21px] inline-block"><Image src={ARROW_W} alt="" fill className="object-contain" /></span>
                </button>
              </form>
            </div>
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
              <Link href="/contact" className="bg-black hover:bg-gray-900 flex items-center gap-2 px-[25px] py-[15px] rounded-[8px] text-white text-[16px] font-semibold transition-colors">
                Schedule an Inspection
                <span className="relative h-[14px] w-[21px] inline-block"><Image src={ARROW_W} alt="" fill className="object-contain" /></span>
              </Link>
              <a href="tel:5017223455" className="border border-white flex items-center gap-2 px-[25px] py-[15px] rounded-[8px] text-white text-[16px] font-semibold hover:bg-white/10 transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
