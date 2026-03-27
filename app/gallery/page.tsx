import Image from "next/image";
import Link from "next/link";

const BANNER = "https://www.figma.com/api/mcp/asset/4bd4eda4-f85c-4d64-b019-5f6672de47cf";
const ARROW_W = "https://www.figma.com/api/mcp/asset/37904bf4-8800-4d4c-b28e-e1714b600703";
const CONTACT_MAP = "https://www.figma.com/api/mcp/asset/00c1e584-2240-40e8-931f-58df816ec1b2";
const MASCOT = "https://www.figma.com/api/mcp/asset/d62817da-b238-4c4e-875b-64a55811d9b0";

const CONTACT_ICONS = [
  "https://www.figma.com/api/mcp/asset/95e1d2a0-af91-4d6a-9c56-b131d2a3c4ea",
  "https://www.figma.com/api/mcp/asset/0a208065-5e03-4ed4-b4bd-74b6592dd713",
  "https://www.figma.com/api/mcp/asset/01279f47-957c-49f3-a83c-6795976dae8a",
  "https://www.figma.com/api/mcp/asset/54c1477f-7319-492a-9290-899ca99bf018",
];

const GALLERY_IMAGES = [
  "https://www.figma.com/api/mcp/asset/c63dbff0-2b82-4b0a-a507-1a38c686a89f",
  "https://www.figma.com/api/mcp/asset/f44c1c54-c2c4-40ef-9f36-ab53341c13fb",
  "https://www.figma.com/api/mcp/asset/c0913406-f180-4917-8d14-e2e145196e39",
  "https://www.figma.com/api/mcp/asset/8fa0913b-cda1-47b3-aed5-5518f816bb14",
  "https://www.figma.com/api/mcp/asset/2eb8507c-6b17-417b-ad27-662783976f03",
  "https://www.figma.com/api/mcp/asset/1faa29ac-04bc-4822-b55d-de460aeffb83",
  "https://www.figma.com/api/mcp/asset/61dab747-7006-4767-8f92-88d0c75bf9b8",
  "https://www.figma.com/api/mcp/asset/7aece53b-0d43-469e-b03f-43d8a71255b2",
  "https://www.figma.com/api/mcp/asset/35970cab-dfe4-4c6e-bb19-394b6833dc8e",
  "https://www.figma.com/api/mcp/asset/60571423-fea9-4080-844b-ef65d10e85e7",
  "https://www.figma.com/api/mcp/asset/94cea043-ada9-4b25-ab3a-c77ef373312b",
  "https://www.figma.com/api/mcp/asset/e4db308c-6dd9-4bb1-88ab-b6753bb542f3",
  "https://www.figma.com/api/mcp/asset/df411925-eada-4318-997a-c063e15bc8a5",
  "https://www.figma.com/api/mcp/asset/b313eca4-757b-4378-a4d9-c68c69a10107",
  "https://www.figma.com/api/mcp/asset/0611aac7-d2d4-4307-ac40-995022a0520c",
  "https://www.figma.com/api/mcp/asset/f8db4db9-0d60-4eed-8199-ed182958d65c",
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 lg:px-[135px] py-[74px]">
        <div className="absolute inset-0">
          <Image src={BANNER} alt="Gallery" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-l from-[38.462%] from-[rgba(255,255,255,0.09)] to-[69.712%] to-[rgba(255,255,255,0.9)]" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <h1 className="text-[#242424] text-[60px] font-bold leading-[72px]">Gallery</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 lg:px-[135px] py-[100px] bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {GALLERY_IMAGES.map((src, i) => (
              <div key={i} className="relative rounded-[10px] overflow-hidden h-[270px] lg:h-[300px]">
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-[60px]">
            <button className="bg-black hover:bg-gray-900 text-white text-[16px] font-semibold px-[40px] py-[15px] rounded-[8px] transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>

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
              {[
                { label: "PHONE:", val: "(501) 722-3455" },
                { label: "EMAIL:", val: "probertson@raindrainsolutions.com" },
                { label: "ADDRESS:", val: "9 stonebrook Ct, Little Rock AR 72211" },
                { label: "WORKING HOURS:", val: "Mon – Sat 6:00am – 8:00pm\nSunday – CLOSED" },
              ].map((item, i) => (
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
