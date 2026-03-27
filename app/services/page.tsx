import Image from "next/image";
import Link from "next/link";

const BANNER = "https://www.figma.com/api/mcp/asset/4bd4eda4-f85c-4d64-b019-5f6672de47cf";
const ARROW_W = "https://www.figma.com/api/mcp/asset/37904bf4-8800-4d4c-b28e-e1714b600703";
const ARROW_B = "https://www.figma.com/api/mcp/asset/6b0a8104-b0cf-44a3-aa18-a43961aad347";
const BULLET = "https://www.figma.com/api/mcp/asset/e05f4a35-4a2e-409e-883e-3bdf20900e00";
const SEC_BG = "https://www.figma.com/api/mcp/asset/37a4ce81-67b9-489b-8d9d-3c45682fde0a";
const CONTACT_MAP = "https://www.figma.com/api/mcp/asset/00c1e584-2240-40e8-931f-58df816ec1b2";
const MASCOT = "https://www.figma.com/api/mcp/asset/d62817da-b238-4c4e-875b-64a55811d9b0";

const CONTACT_ICONS = [
  "https://www.figma.com/api/mcp/asset/95e1d2a0-af91-4d6a-9c56-b131d2a3c4ea",
  "https://www.figma.com/api/mcp/asset/0a208065-5e03-4ed4-b4bd-74b6592dd713",
  "https://www.figma.com/api/mcp/asset/01279f47-957c-49f3-a83c-6795976dae8a",
  "https://www.figma.com/api/mcp/asset/54c1477f-7319-492a-9290-899ca99bf018",
];

const services = [
  {
    title: "Gutter Installation",
    img: "https://www.figma.com/api/mcp/asset/6ea290aa-5ca3-4e5b-82ef-558892a8ea85",
    features: ["Seamless fabrication on-site", '5" and 6" K-style options', "20+ color choices", "Copper & steel upgrades available", "Proper slope & drainage planning", "Lifetime workmanship warranty"],
    desc: "We fabricate and install seamless aluminum, copper, and steel gutters on-site to perfectly fit your home. Our installations are built to last decades with proper slope, hangers, and sealant applied at every joint.",
    reversed: false,
    darkBg: false,
  },
  {
    title: "Gutter Repair",
    img: "https://www.figma.com/api/mcp/asset/84f6423b-d26b-4cdf-b944-fb473bf3901b",
    features: ["Leak detection & sealing", "Section replacement", "Joint resealing", "Hanger re-fastening", "Slope correction", "Same-week service available"],
    desc: "From minor leaks to major section replacements, our repair team gets your gutters working properly again. We diagnose the root cause and fix it correctly the first time, preventing future problems.",
    reversed: true,
    darkBg: true,
  },
  {
    title: "Gutter Cleaning",
    img: "https://www.figma.com/api/mcp/asset/1ea81d67-3842-497c-b4f4-f695196b61b8",
    features: ["Full debris removal", "Downspout flushing & testing", "Minor repairs included", "Before & after photos", "System inspection report", "Seasonal cleaning plans available"],
    desc: "Regular gutter cleaning prevents water damage, pest infestations, and premature gutter deterioration. Our thorough cleaning service removes all debris, flushes downspouts, and checks for minor issues.",
    reversed: false,
    darkBg: false,
  },
  {
    title: "Downspout Repair & Replacement",
    img: "https://www.figma.com/api/mcp/asset/ac378479-689f-4add-8e79-6abaca369879",
    features: ["Downspout replacement", "Extension installation", "Underground drainage connection", "Splash block placement", "French drain integration", "Foundation protection focus"],
    desc: "Damaged or improperly positioned downspouts can cause serious foundation problems. We repair, reposition, or replace downspouts to direct water safely away from your home's foundation.",
    reversed: true,
    darkBg: true,
  },
  {
    title: "Gutter Guards",
    img: "https://www.figma.com/api/mcp/asset/34839847-7c5a-4af9-8b69-48ff0bf49b3b",
    features: ["Micro-mesh technology", "Blocks leaves, pine needles & debris", "Compatible with all gutter types", "Aluminum & stainless steel options", "10-year manufacturer warranty", "Professional installation"],
    desc: "Our premium micro-mesh gutter guards keep leaves, debris, and pests out of your gutters while allowing water to flow freely. Drastically reduce your maintenance needs and protect your investment.",
    reversed: false,
    darkBg: false,
  },
  {
    title: "Pressure Washing",
    img: "https://www.figma.com/api/mcp/asset/f542f696-e822-4d07-b6ad-60e8a587b6d6",
    features: ["High-pressure exterior cleaning", "Tiger stripe removal", "Soffit & fascia cleaning", "Safe for all gutter materials", "Eco-friendly cleaning solutions", "Combined with cleaning service discount"],
    desc: "Years of exposure can leave gutters looking dull, stained, or covered in tiger striping. Our professional pressure washing service restores gutters to like-new appearance while also cleaning soffits and fascia.",
    reversed: true,
    darkBg: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 lg:px-[135px] py-[74px]">
        <div className="absolute inset-0">
          <Image src={BANNER} alt="Services" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-l from-[38.462%] from-[rgba(255,255,255,0.09)] to-[69.712%] to-[rgba(255,255,255,0.9)]" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <h1 className="text-[#242424] text-[60px] font-bold leading-[72px]">Services</h1>
        </div>
      </section>

      {/* Services */}
      {services.map((svc) => (
        <section key={svc.title} className={`relative px-6 lg:px-[135px] py-[100px] ${svc.darkBg ? "" : "bg-white"}`}>
          {svc.darkBg && (
            <>
              <div className="absolute inset-0 bg-[#f4f4f4]" />
              <div className="absolute inset-0 opacity-40"><Image src={SEC_BG} alt="" fill className="object-cover" /></div>
            </>
          )}
          <div className={`relative max-w-[1440px] mx-auto flex flex-col ${svc.reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-[70px] items-center`}>
            <div className="h-[460px] w-full lg:w-[570px] rounded-[20px] overflow-hidden relative shrink-0">
              <Image src={svc.img} alt={svc.title} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-[30px] flex-1">
              <div>
                <h2 className="text-[#242424] text-[36px] font-bold leading-[44px]">{svc.title}</h2>
                <p className="text-[#242424] text-[16px] font-medium leading-[28px] mt-3">{svc.desc}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
                {svc.features.map((f) => (
                  <div key={f} className="bg-[#f8fbfd] border border-[rgba(0,0,0,0.1)] rounded-[10px] flex items-center gap-[12px] px-[15px] py-[12px]">
                    <span className="relative size-[20px] shrink-0 inline-block"><Image src={BULLET} alt="" fill className="object-contain" /></span>
                    <span className="text-[#242424] text-[14px] font-medium leading-[22px]">{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="bg-[#077bce] hover:bg-[#0568b0] inline-flex items-center gap-2 px-[25px] py-[15px] rounded-[8px] text-white text-[16px] font-semibold transition-colors self-start">
                Get a Free Estimate
                <span className="relative h-[14px] w-[21px] inline-block"><Image src={ARROW_W} alt="" fill className="object-contain" /></span>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Get In Touch */}
      <section className="bg-gradient-to-b from-[#f8f8f8] to-transparent px-6 lg:px-[135px] pt-[100px] pb-[20px]">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-[70px] items-center">
          <div className="flex flex-col gap-[25px] lg:w-[529px] w-full shrink-0">
            <div>
              <h2 className="text-[#242424] text-[42px] leading-[52px]">
                <span className="font-bold">Get In </span><span className="font-normal">Touch</span>
              </h2>
              <p className="text-[#242424] text-[16px] font-medium leading-[28px] mt-2">Contact us today for a free estimate on any of our gutter services.</p>
            </div>
            <div className="flex flex-col gap-[20px]">
              {[{label:"PHONE:",val:"(501) 722-3455"},{label:"EMAIL:",val:"probertson@raindrainsolutions.com"},{label:"ADDRESS:",val:"9 stonebrook Ct, Little Rock AR 72211"},{label:"WORKING HOURS:",val:"Mon – Sat 6:00am – 8:00pm\nSunday – CLOSED"}].map((item,i)=>(
                <div key={item.label} className="flex gap-[20px] items-center py-[10px]">
                  <span className="relative size-[54px] shrink-0 inline-block"><Image src={CONTACT_ICONS[i]} alt="" fill className="object-contain" /></span>
                  <div>
                    <p className="text-[#4e8bc4] text-[16px] font-medium tracking-[1.6px] uppercase leading-[20px]">{item.label}</p>
                    <p className="text-[#242424] text-[18px] font-semibold tracking-[0.9px] leading-[26px] whitespace-pre-line">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[20px] w-full lg:size-[570px] h-[400px] lg:h-[570px] overflow-hidden shrink-0">
            <Image src={CONTACT_MAP} alt="Service area" fill className="object-cover" />
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
