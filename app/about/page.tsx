import Image from "next/image";
import Link from "next/link";

const BANNER = "https://www.figma.com/api/mcp/asset/4cce93fb-2ba5-4d46-a7e1-4bd4335d0463";
const ARROW_W = "https://www.figma.com/api/mcp/asset/37904bf4-8800-4d4c-b28e-e1714b600703";
const ARROW_B = "https://www.figma.com/api/mcp/asset/6b0a8104-b0cf-44a3-aa18-a43961aad347";
const SEC_BG = "https://www.figma.com/api/mcp/asset/37a4ce81-67b9-489b-8d9d-3c45682fde0a";
const TEAM1 = "https://www.figma.com/api/mcp/asset/48ae99e4-e157-418d-9b9c-04c9bf801e8d";
const TEAM2 = "https://www.figma.com/api/mcp/asset/4d9d4af0-8d7c-48bf-a4f6-a0768b4678bf";
const BADGE = "https://www.figma.com/api/mcp/asset/1b37b33d-f949-4458-8c94-64d4386f1a69";
const TEXTURE_BG = "https://www.figma.com/api/mcp/asset/8e751103-ff71-457a-ad27-dc3333f4ca06";
const BEFORE = "https://www.figma.com/api/mcp/asset/2ab875bb-5023-4337-8b03-c0b567d54ae2";
const AFTER = "https://www.figma.com/api/mcp/asset/f3d90797-58d2-4755-a36d-d676aab59b18";
const STARS = "https://www.figma.com/api/mcp/asset/8de2001b-e59c-4691-9e13-5b083d33a525";
const REVIEWER = "https://www.figma.com/api/mcp/asset/733f160b-a490-4a9b-b2c4-ddfe0c00839d";
const CHECK_B = "https://www.figma.com/api/mcp/asset/6d760a14-3512-462a-823b-453c5bb4a595";
const CHECK_W = "https://www.figma.com/api/mcp/asset/2a9679e6-83c8-4f48-8c66-62f1bfee3e5f";
const CONTACT_MAP = "https://www.figma.com/api/mcp/asset/6e6035a5-7370-4e4a-9deb-03c40f2f3a5f";
const MASCOT = "https://www.figma.com/api/mcp/asset/7ff3f543-78dd-42aa-b7b9-cd4363681c7d";

const CONTACT_ICONS = [
  "https://www.figma.com/api/mcp/asset/13c4fac6-7904-44a3-bb84-3887c67bcc55",
  "https://www.figma.com/api/mcp/asset/3316d31f-c487-457b-9321-427736ebd3b2",
  "https://www.figma.com/api/mcp/asset/a2428488-ff95-415a-80cb-276681548168",
  "https://www.figma.com/api/mcp/asset/e53062b8-50f1-45c5-8355-8456d960500e",
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "600+", label: "Happy Customers" },
  { value: "980+", label: "Projects Completed" },
  { value: "150+", label: "5-Star Reviews" },
];

const whyItems = [
  "Licensed & Fully Insured",
  "Lifetime Workmanship Warranty",
  "Same-Week Service Available",
  "Free Estimates — No Obligation",
  "Premium Materials Only",
  "Locally Owned & Operated",
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    review: "Rain Drain did an incredible job replacing all the gutters on our home. Professional, clean, and finished in one day. Highly recommend!",
  },
  {
    name: "Mike Thompson",
    role: "Property Manager",
    review: "We use Rain Drain for all our rental properties. Their team is always punctual, fair on price, and the quality is top notch.",
  },
  {
    name: "Linda Carter",
    role: "Homeowner",
    review: "Had a major leak issue that was causing foundation problems. They diagnosed the root cause and fixed everything correctly. Couldn't be happier.",
  },
];

const pricing = [
  { title: "Basic Installation", price: "$1,250", desc: "Up to 100 linear ft of seamless aluminum gutters", features: ["Standard K-style", "Downspout included", "Lifetime warranty"] },
  { title: "Full System", price: "$2,250", desc: "Complete gutter system for average home", features: ["All sizes available", "Color match", "Guard compatible"], highlight: true },
  { title: "Cleaning Service", price: "$350", desc: "Full debris removal and system flush", features: ["Before & after photos", "Inspection report", "Minor repairs included"] },
  { title: "Gutter Guards", price: "$950", desc: "Micro-mesh guard installation", features: ["All gutter types", "10-yr manufacturer warranty", "Professional install"] },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 lg:px-[135px] py-[74px]">
        <div className="absolute inset-0">
          <Image src={BANNER} alt="About Us" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-l from-[38.462%] from-[rgba(255,255,255,0.09)] to-[69.712%] to-[rgba(255,255,255,0.9)]" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <h1 className="text-[#242424] text-[60px] font-bold leading-[72px]">About Us</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 lg:px-[135px] py-[100px] bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-[70px] items-center">
          {/* Images */}
          <div className="relative w-full lg:w-[570px] h-[460px] shrink-0">
            <div className="absolute top-0 left-0 w-[380px] h-[420px] rounded-[20px] overflow-hidden">
              <Image src={TEAM1} alt="Team" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-[240px] h-[280px] rounded-[20px] overflow-hidden border-[6px] border-white">
              <Image src={TEAM2} alt="Team" fill className="object-cover" />
            </div>
            <div className="absolute bottom-[60px] left-[20px] w-[100px] h-[100px]">
              <Image src={BADGE} alt="Badge" fill className="object-contain" />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-[25px] flex-1">
            <div>
              <p className="text-[#077bce] text-[14px] font-semibold tracking-[2px] uppercase mb-2">Who We Are</p>
              <h2 className="text-[#242424] text-[42px] font-bold leading-[52px]">
                Trusted Gutter Experts <span className="font-normal">in Little Rock</span>
              </h2>
            </div>
            <p className="text-[#242424] text-[16px] font-medium leading-[28px]">
              Rain Drain Gutter Solutions has been protecting homes across the Little Rock area for over 15 years. Founded on the belief that every homeowner deserves quality work at a fair price, we&apos;ve grown into one of the most trusted gutter companies in Arkansas.
            </p>
            <p className="text-[#242424] text-[16px] font-medium leading-[28px]">
              Our team of certified professionals brings skill, care, and honesty to every single job — from a simple cleaning to a full gutter system replacement.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-[20px]">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-[12px]">
                  <span className="relative size-[20px] shrink-0 inline-block"><Image src={CHECK_B} alt="" fill className="object-contain" /></span>
                  <div>
                    <span className="text-[#077bce] font-bold text-[24px]">{s.value}</span>
                    <span className="text-[#242424] text-[14px] font-medium ml-2">{s.label}</span>
                  </div>
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

      {/* Why Choose Us */}
      <section className="relative px-6 lg:px-[135px] py-[100px]">
        <div className="absolute inset-0 bg-[#333]" />
        <div className="absolute inset-0 opacity-20">
          <Image src={TEXTURE_BG} alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-[70px] items-center">
          <div className="flex flex-col gap-[25px] flex-1">
            <div>
              <p className="text-[#077bce] text-[14px] font-semibold tracking-[2px] uppercase mb-2">Our Advantages</p>
              <h2 className="text-white text-[42px] font-bold leading-[52px]">
                Why Choose <span className="font-normal">Rain Drain?</span>
              </h2>
            </div>
            <p className="text-white/80 text-[16px] font-medium leading-[28px]">
              We don&apos;t just install gutters — we build long-term protection for your home. Here&apos;s what sets us apart from the competition.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
              {whyItems.map((item) => (
                <div key={item} className="flex items-center gap-[12px]">
                  <span className="relative size-[20px] shrink-0 inline-block"><Image src={CHECK_W} alt="" fill className="object-contain" /></span>
                  <span className="text-white text-[15px] font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/services" className="border border-white inline-flex items-center gap-2 px-[25px] py-[15px] rounded-[8px] text-white text-[16px] font-semibold hover:bg-white/10 transition-colors self-start">
              View Our Services
              <span className="relative h-[14px] w-[21px] inline-block"><Image src={ARROW_W} alt="" fill className="object-contain" /></span>
            </Link>
          </div>

          {/* Before / After */}
          <div className="relative w-full lg:w-[570px] h-[400px] shrink-0 rounded-[20px] overflow-hidden flex">
            <div className="relative w-1/2 h-full">
              <Image src={BEFORE} alt="Before" fill className="object-cover" />
              <div className="absolute bottom-[15px] left-[15px] bg-black/70 text-white text-[13px] font-bold px-[12px] py-[6px] rounded-[6px]">BEFORE</div>
            </div>
            <div className="relative w-1/2 h-full">
              <Image src={AFTER} alt="After" fill className="object-cover" />
              <div className="absolute bottom-[15px] right-[15px] bg-[#077bce] text-white text-[13px] font-bold px-[12px] py-[6px] rounded-[6px]">AFTER</div>
            </div>
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] bg-white z-10" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative px-6 lg:px-[135px] py-[100px]">
        <div className="absolute inset-0 bg-[#f4f4f4]" />
        <div className="absolute inset-0 opacity-40"><Image src={SEC_BG} alt="" fill className="object-cover" /></div>
        <div className="relative max-w-[1440px] mx-auto">
          <div className="text-center mb-[60px]">
            <p className="text-[#077bce] text-[14px] font-semibold tracking-[2px] uppercase mb-2">Reviews</p>
            <h2 className="text-[#242424] text-[42px] font-bold leading-[52px]">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-[20px] p-[30px] flex flex-col gap-[20px] shadow-sm">
                <div className="relative h-[20px] w-[100px]">
                  <Image src={STARS} alt="5 stars" fill className="object-contain object-left" />
                </div>
                <p className="text-[#242424] text-[15px] font-medium leading-[26px] italic">&ldquo;{t.review}&rdquo;</p>
                <div className="flex items-center gap-[12px] mt-auto">
                  <div className="relative size-[48px] rounded-full overflow-hidden shrink-0">
                    <Image src={REVIEWER} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-[#242424] text-[15px] font-bold">{t.name}</p>
                    <p className="text-[#077bce] text-[13px] font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 lg:px-[135px] py-[100px] bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-[60px]">
            <p className="text-[#077bce] text-[14px] font-semibold tracking-[2px] uppercase mb-2">Pricing</p>
            <h2 className="text-[#242424] text-[42px] font-bold leading-[52px]">Transparent Pricing</h2>
            <p className="text-[#242424] text-[16px] font-medium leading-[28px] mt-3">No surprises. No hidden fees. Just honest work at a fair price.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {pricing.map((p) => (
              <div key={p.title} className={`rounded-[20px] flex flex-col gap-[20px] p-[30px] border ${p.highlight ? "bg-[#077bce] border-[#077bce]" : "bg-white border-[rgba(0,0,0,0.1)]"}`}>
                <div>
                  <p className={`text-[14px] font-semibold uppercase tracking-[1px] ${p.highlight ? "text-white/80" : "text-[#077bce]"}`}>{p.title}</p>
                  <p className={`text-[42px] font-bold leading-[52px] ${p.highlight ? "text-white" : "text-[#242424]"}`}>{p.price}</p>
                  <p className={`text-[14px] font-medium leading-[22px] ${p.highlight ? "text-white/80" : "text-[#242424]/70"}`}>{p.desc}</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-[10px]">
                      <span className="relative size-[18px] shrink-0 inline-block"><Image src={p.highlight ? CHECK_W : CHECK_B} alt="" fill className="object-contain" /></span>
                      <span className={`text-[14px] font-medium ${p.highlight ? "text-white" : "text-[#242424]"}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className={`mt-auto inline-flex items-center gap-2 px-[20px] py-[12px] rounded-[8px] text-[14px] font-semibold transition-colors self-start ${p.highlight ? "bg-white text-[#077bce] hover:bg-white/90" : "bg-[#077bce] text-white hover:bg-[#0568b0]"}`}>
                  Get Started
                  <span className="relative h-[12px] w-[18px] inline-block"><Image src={p.highlight ? ARROW_B : ARROW_W} alt="" fill className="object-contain" /></span>
                </Link>
              </div>
            ))}
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
