import Image from "next/image";
import Link from "next/link";

const MASCOT = "https://www.figma.com/api/mcp/asset/5d7a1759-df6d-4a83-a714-b16047f811d8";
const ARROW = "https://www.figma.com/api/mcp/asset/45115307-8c3d-4847-9090-69696eac9c97";

export default function CtaBanner() {
  return (
    <section className="px-6 lg:px-[135px] py-[100px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#077bce] rounded-[30px] relative flex flex-col gap-[25px] items-start pl-[135px] lg:pl-[500px] pr-[60px] lg:pr-[100px] py-[60px] overflow-hidden">
          {/* Mascot circle */}
          <div className="absolute left-[46px] top-[-47px] size-[398px] rounded-full border-[15px] border-white overflow-hidden">
            <Image src={MASCOT} alt="Rain Drain mascot" fill className="object-cover" />
          </div>

          <div>
            <p className="text-white text-[42px] font-bold leading-[52px]">
              Schedule Your Gutter{" "}
              <span className="font-normal">Inspection Today</span>
            </p>
          </div>

          <div className="flex gap-[25px] items-center flex-wrap">
            <Link
              href="/contact"
              className="bg-black flex items-center gap-[8px] px-[25px] py-[15px] rounded-[8px] text-white text-[16px] font-semibold whitespace-nowrap hover:bg-gray-900 transition-colors"
            >
              Schedule an Inspection
              <div className="relative h-[14px] w-[21px] shrink-0">
                <Image src={ARROW} alt="" fill className="object-contain" />
              </div>
            </Link>
            <a
              href="tel:5017223455"
              className="border border-white flex items-center gap-[8px] px-[25px] py-[15px] rounded-[8px] text-white text-[16px] font-semibold whitespace-nowrap hover:bg-white/10 transition-colors"
            >
              Call Now
              <div className="relative h-[14px] w-[21px] shrink-0">
                <Image src={ARROW} alt="" fill className="object-contain" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
