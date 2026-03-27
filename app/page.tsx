import Image from "next/image";
import Link from "next/link";

const BANNER = "https://www.figma.com/api/mcp/asset/8dd65e0b-9bb0-4cef-80ed-80ab493c638f";
const ARROW_W = "https://www.figma.com/api/mcp/asset/45115307-8c3d-4847-9090-69696eac9c97";
const ARROW_B = "https://www.figma.com/api/mcp/asset/9a76c745-244a-40b3-85ac-300eeecb2588";

const WARN1 = "https://www.figma.com/api/mcp/asset/21eb85df-c320-4276-be23-e7f4671dd1a6";
const WARN2 = "https://www.figma.com/api/mcp/asset/0cebfbb1-70c3-4493-a2bf-c6da4880e507";
const WARN3 = "https://www.figma.com/api/mcp/asset/8f79636c-753a-4c7e-8c6a-219e53d7302f";
const WARN4 = "https://www.figma.com/api/mcp/asset/7314ce5d-fd1f-4257-be5e-ac14ff1d6d3e";

const SERVICES_BG = "https://www.figma.com/api/mcp/asset/71f166e7-1c93-4039-9c63-d9b57c6023ae";
const SVC_ICONS = [
  "https://www.figma.com/api/mcp/asset/107e37c7-93cb-42c0-862a-30d160152413",
  "https://www.figma.com/api/mcp/asset/f8ab364c-7e01-401e-a3b1-54932190d5c6",
  "https://www.figma.com/api/mcp/asset/3444cd16-d82b-4fb5-8a63-592ffbcc5762",
  "https://www.figma.com/api/mcp/asset/03d27a3b-228d-4432-a330-c7260605e826",
  "https://www.figma.com/api/mcp/asset/cb9d9e77-1720-4816-8580-3d2e2aa583bf",
  "https://www.figma.com/api/mcp/asset/567db895-22f5-4a56-9d98-546ed8fe39ae",
];

const ELLIPSE = "https://www.figma.com/api/mcp/asset/0f1afd0b-7da1-47c4-b0f7-96d7fa4d70d9";
const MAN_PHOTO = "https://www.figma.com/api/mcp/asset/14d7888b-c975-4050-8db6-2ff382ce5d7b";
const CHECK_W = "https://www.figma.com/api/mcp/asset/bf88b711-1912-44a7-b8fe-ce8270a4870c";

const BEFORE_IMG = "https://www.figma.com/api/mcp/asset/fb10c979-05d4-4ccf-9de9-90af5db5c375";
const AFTER_IMG = "https://www.figma.com/api/mcp/asset/9f2c7f6c-5e9e-490a-a471-630ee09dc4e2";
const BEFORE_BLURRED = "https://www.figma.com/api/mcp/asset/72ce1207-469d-4e8f-ac25-496dbcc74d3b";

const STARS = "https://www.figma.com/api/mcp/asset/25c3f92d-b857-4880-9f4b-27de26be6718";
const REV_IMG1 = "https://www.figma.com/api/mcp/asset/fee45b75-daf8-4a5b-8fd2-8ef3cad5787a";
const REV_IMG2 = "https://www.figma.com/api/mcp/asset/9f2c7f6c-5e9e-490a-a471-630ee09dc4e2";
const REV_IMG3 = "https://www.figma.com/api/mcp/asset/7314ce5d-fd1f-4257-be5e-ac14ff1d6d3e";
const REVIEWER = "https://www.figma.com/api/mcp/asset/1fb369d6-ae3f-471c-866c-76bded5fd7ba";
const REVIEWS_BG = "https://www.figma.com/api/mcp/asset/ecd11795-bb0f-4394-9889-91d500e385cd";

const PRICING_DIV = "https://www.figma.com/api/mcp/asset/b96a760b-92e7-43d9-be15-909fb510fa76";
const CHECK_BLUE = "https://www.figma.com/api/mcp/asset/7bb947f1-20cf-4c71-8195-6013fb15fc14";

const CONTACT_ICONS = [
  "https://www.figma.com/api/mcp/asset/411d0df2-ae85-45ac-9256-6d1fcf1a719f",
  "https://www.figma.com/api/mcp/asset/8826c4eb-ee8f-490d-a76b-9fc79737c6fe",
  "https://www.figma.com/api/mcp/asset/359d1034-b2bc-4628-812b-6b3e0d6b4cdf",
  "https://www.figma.com/api/mcp/asset/9d2dc471-c15f-4509-bbf6-d5274f3579ff",
];
const CONTACT_MAP = "https://www.figma.com/api/mcp/asset/dfcd439c-9774-4ef0-9314-2d7b699086e0";
const MASCOT = "https://www.figma.com/api/mcp/asset/5d7a1759-df6d-4a83-a714-b16047f811d8";

const SVC_NAMES = ["Gutter Installation","Gutter Repair","Gutter Cleaning","Downspout Repair","Gutter Guards","Pressure Washing"];
const PRICING = [
  { price: "$1,250", title: "Single Story Full Wrap", desc: "Single story home at 1,400 sq ft", features: ['5/6" Seamless Gutters',"Downspouts","36+ Colors"] },
  { price: "$2,250", title: "Double Story Full Wrap", desc: "Double story home at 2,100 sq ft", features: ['5/6" Seamless Gutters',"Downspouts","36+ Colors"] },
  { price: "$350", title: "All Around Cleaning", desc: "Single story home at 1,400 sq ft", features: ["Hand cleaning","Pressure washing","Deep cleaning"] },
  { price: "$950", title: "Gutter Guard Full Wrap", desc: "Single story home at 1,400 sq ft", features: ["3 Multiple options","Minimize maintenance","Long-lasting protection"] },
];
const CONTACT_INFO = [
  { label: "PHONE:", value: "(501) 722-3455" },
  { label: "EMAIL:", value: "probertson@raindrainsolutions.com" },
  { label: "ADDRESS:", value: "9 stonebrook Ct, Little Rock AR 72211" },
  { label: "WORKING HOURS:", value: "Mon – Sat 6:00am – 8:00pm\nSunday – CLOSED" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 lg:px-[135px] py-[156px]">
        <div className="absolute inset-0">
          <Image src={BANNER} alt="banner" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-l from-[38.462%] from-[rgba(255,255,255,0.09)] to-[69.712%] to-[rgba(255,255,255,0.9)]" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <h1 className="text-[#242424] text-[60px] leading-[72px] w-[663px] max-w-full">
            <span className="font-bold block">Lifetime Warranty</span>
            <span className="font-light block">On Workmanship</span>
          </h1>
          <div className="flex flex-col gap-[30px] mt-4 w-[559px] max-w-full">
            <p className="text-[#242424] text-[16px] font-medium leading-[28px]">
              Professional gutter repair, installation, and cleaning services<br />
              for homeowners in Little Rock and surrounding areas who value long-lasting protection.
            </p>
            <div className="flex gap-[15px] items-center flex-wrap">
              <Link href="/contact" className="bg-[#077bce] hover:bg-[#0568b0] flex items-center gap-2 px-[25px] py-[15px] rounded-[8px] text-white text-[16px] font-semibold transition-colors">
                Schedule an Inspection
                <span className="relative h-[14px] w-[21px] inline-block"><Image src={ARROW_W} alt="" fill className="object-contain" /></span>
              </Link>
              <a href="tel:5017223455" className="border border-[#077bce] flex items-center gap-2 px-[25px] py-[15px] rounded-[8px] text-[#077bce] text-[16px] font-semibold hover:bg-[#077bce]/10 transition-colors">
                Call Now
                <span className="relative h-[14px] w-[21px] inline-block"><Image src={ARROW_B} alt="" fill className="object-contain" /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="bg-white px-6 lg:px-[135px] py-[100px]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-[30px] items-center">
          <div className="text-center w-[510px] max-w-full">
            <h2 className="text-[#242424] text-[42px] leading-[52px]">
              <span className="font-bold">Don&apos;t Ignore </span>
              <span className="font-light">the Signs</span>
            </h2>
            <p className="text-[#242424] text-[16px] font-medium leading-[28px] mt-2">Small gutter issues can lead to costly home damage if ignored.</p>
          </div>
          <div className="flex flex-wrap gap-[30px] justify-center">
            {[{img:WARN1,label:"Plants growing in gutters"},{img:WARN2,label:"Water pooling near foundation"},{img:WARN3,label:"Sagging or pulling away gutters"},{img:WARN4,label:"Rust, cracks or leaks"}].map(w=>(
              <div key={w.label} className="flex flex-col w-[270px]">
                <div className="h-[200px] rounded-t-[10px] overflow-hidden relative"><Image src={w.img} alt={w.label} fill className="object-cover" /></div>
                <div className="bg-white border-b border-l border-r border-[rgba(0,0,0,0.15)] flex items-center justify-center px-[10px] py-[15px] rounded-b-[10px]">
                  <p className="text-black text-[18px] font-medium leading-[26px] text-center">{w.label}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="bg-[#077bce] hover:bg-[#0568b0] flex items-center gap-2 px-[25px] py-[15px] rounded-[8px] text-white text-[16px] font-semibold transition-colors">
            Schedule an Inspection
            <span className="relative h-[14px] w-[21px] inline-block"><Image src={ARROW_W} alt="" fill className="object-contain" /></span>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="relative px-6 lg:px-[135px] py-[100px]">
        <div className="absolute inset-0 bg-[#f4f4f4]" />
        <div className="absolute inset-0 opacity-40"><Image src={SERVICES_BG} alt="" fill className="object-cover" /></div>
        <div className="relative max-w-[1440px] mx-auto flex flex-col gap-[30px] items-center">
          <div className="text-center w-[600px] max-w-full">
            <h2 className="text-[#242424] text-[42px] leading-[52px]">
              <span className="font-bold">Gutter Services </span><span className="font-normal">We Provide</span>
            </h2>
            <p className="text-[#242424] text-[16px] font-medium leading-[28px] mt-2">From installation to maintenance — complete gutter solutions for your home.</p>
          </div>
          {[SVC_NAMES.slice(0,3), SVC_NAMES.slice(3)].map((row,ri)=>(
            <div key={ri} className="flex flex-wrap gap-[30px] justify-center w-full">
              {row.map((name,i)=>{
                const idx = ri*3+i;
                return (
                  <div key={name} className="bg-white border border-[rgba(0,0,0,0.1)] flex flex-col gap-[25px] items-center p-[40px] rounded-[20px] w-[370px] max-w-full">
                    <div className={`relative size-[100px] rounded-[10px] overflow-hidden ${idx===0?"bg-[#077bce] p-5":""} shrink-0`}>
                      <Image src={SVC_ICONS[idx]} alt={name} fill className="object-contain" />
                    </div>
                    <div className="flex flex-col gap-[15px] items-center text-center w-full">
                      <p className="text-[#242424] text-[24px] font-semibold leading-[34px]">{name}</p>
                      <p className="text-[#242424] text-[16px] font-medium leading-[28px]">Professional service backed by our lifetime workmanship warranty.</p>
                      <Link href="/contact" className="flex items-center gap-2 text-[#077bce] text-[16px] font-semibold underline">
                        Schedule an Inspection
                        <span className="relative h-[14px] w-[21px] inline-block"><Image src={ARROW_B} alt="" fill className="object-contain" /></span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* Warranty */}
      <section className="px-6 lg:px-[135px] py-[120px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-[#333] rounded-[30px] relative flex flex-col gap-[25px] items-start pl-[135px] lg:pl-[483px] pr-[60px] py-[60px] overflow-visible min-h-[300px]">
            <div className="absolute left-[17px] top-[-24px] size-[440px] pointer-events-none"><Image src={ELLIPSE} alt="" fill className="object-contain" /></div>
            <div className="absolute left-[106px] top-[104px] size-[230px] rounded-full overflow-hidden pointer-events-none"><Image src={MAN_PHOTO} alt="" fill className="object-cover" /></div>
            <div className="text-white">
              <h2 className="text-[42px] leading-[52px]">
                <span className="font-bold">Backed by a </span>
                <span className="font-normal">Lifetime Warranty On Workmanship</span>
              </h2>
              <p className="text-[16px] font-medium leading-[28px] mt-3 max-w-[432px]">We stand behind our work. Every installation & repair is backed by our lifetime workmanship warranty, giving you peace of mind long after the job is done.</p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="flex gap-[30px] flex-wrap">
                {["No shortcuts","Done right the first time"].map(t=>(
                  <div key={t} className="flex gap-[10px] items-center">
                    <span className="relative size-[25px] shrink-0 inline-block"><Image src={CHECK_W} alt="" fill className="object-contain" /></span>
                    <span className="text-white text-[18px] font-semibold leading-[28px]">{t}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-[10px] items-center">
                <span className="relative size-[25px] shrink-0 inline-block"><Image src={CHECK_W} alt="" fill className="object-contain" /></span>
                <span className="text-white text-[18px] font-semibold leading-[28px]">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-white px-6 lg:px-[135px] pb-[100px] pt-[30px]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-[35px] items-center">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[169px] items-start lg:items-center w-full">
            <p className="text-[#242424] text-[42px] leading-[52px] lg:w-[554px] max-w-full">
              <span className="font-bold">See the Difference </span><span className="font-normal">Proper Gutter Care Makes</span>
            </p>
            <p className="text-[#101010] text-[16px] leading-[28px] lg:w-[447px] max-w-full">Our professional service restores gutters to like-new condition, protecting your home from water damage for years to come.</p>
          </div>
          <div className="flex items-center justify-between w-full gap-[10px]">
            <div className="hidden lg:block h-[353px] w-[303px] rounded-l-[15px] overflow-hidden relative shrink-0">
              <Image src={BEFORE_BLURRED} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-white/70" />
            </div>
            <div className="flex gap-[10px] flex-1 min-w-0 relative">
              <div className="flex-1 h-[425px] rounded-l-[15px] overflow-hidden relative">
                <Image src={BEFORE_IMG} alt="Before" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <p className="absolute bottom-[25px] left-[25px] text-white text-[16px] font-bold tracking-[2.4px] uppercase">Before</p>
              </div>
              <div className="flex-1 h-[425px] rounded-r-[15px] overflow-hidden relative">
                <Image src={AFTER_IMG} alt="After" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <p className="absolute bottom-[25px] right-[25px] text-white text-[16px] font-bold tracking-[2.4px] uppercase">After</p>
              </div>
            </div>
            <div className="hidden lg:block h-[353px] w-[302px] rounded-l-[15px] overflow-hidden relative shrink-0">
              <Image src={AFTER_IMG} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-white/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 lg:px-[135px] py-[100px] bg-gradient-to-b from-[#f5f5f5] to-transparent">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-[35px]">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4">
            <p className="text-[#242424] text-[42px] leading-[52px] lg:w-[600px] max-w-full">
              <span className="font-bold">What Customers Say </span><span className="font-normal">After the Job:</span>
            </p>
            <Link href="/contact" className="bg-[#077bce] hover:bg-[#0568b0] flex items-center gap-2 px-[25px] py-[15px] rounded-[8px] text-white text-[16px] font-semibold transition-colors shrink-0">
              Schedule an Inspection
              <span className="relative h-[14px] w-[21px] inline-block"><Image src={ARROW_W} alt="" fill className="object-contain" /></span>
            </Link>
          </div>
          <div className="flex flex-col gap-[30px]">
            {[
              {img:REV_IMG1,text:`"Both me and my wife drove up to the house, she looked and she's like: did they even come? Because it just looked so seamless. I went around the house and checked everything. Everything looks fantastic. I will definitely be recommending you to guys."`,name:"Will C.",date:"March 2023"},
              {img:REV_IMG2,text:`"The owner was honest and exceptionally customer focused. His bid for gutter installation was professionally written and easily understood. His products are top notch and his team's workmanship is 2nd to none. We will seek further gutter installation jobs from him in the future."`,name:"Bruce H.",date:"Oct 2022"},
              {img:REV_IMG3,text:"They are prompt and professional with their work. I have recommended them to anyone in need of gutters as their quality is always great, and if something is wrong Colton stands by his work and is quick to remedy the issue. Customer service, price, and quality are all around great.",name:"Ryan M.",date:"Feb 2023"},
            ].map(rev=>(
              <div key={rev.name} className="flex flex-col lg:flex-row gap-[30px] items-stretch">
                <div className="h-[319px] w-full lg:w-[470px] rounded-[12px] overflow-hidden relative shrink-0"><Image src={rev.img} alt={rev.name} fill className="object-cover" /></div>
                <div className="bg-white border border-[rgba(16,16,16,0.1)] flex flex-col gap-[40px] p-[40px] rounded-[12px] flex-1">
                  <p className="text-[#242424] text-[16px] italic leading-[28px] line-clamp-6">{rev.text}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#113358] text-[18px] font-semibold leading-[28px]">{rev.name}</p>
                      <p className="text-[#808080] text-[14px] leading-[18px]">{rev.date}</p>
                    </div>
                    <div className="relative h-[18.68px] w-[123px]"><Image src={STARS} alt="5 stars" fill className="object-contain" /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="relative px-6 lg:px-[135px] py-[100px]">
        <div className="absolute inset-0 bg-[#f3f3f3]" />
        <div className="absolute inset-0 opacity-10"><Image src={REVIEWS_BG} alt="" fill className="object-cover" /></div>
        <div className="relative max-w-[1440px] mx-auto flex flex-col gap-[30px]">
          <h2 className="text-[#242424] text-[42px] leading-[52px] text-center mx-auto lg:w-[476px] max-w-full">
            <span className="font-bold">Here&apos;s the rest of </span><span className="font-normal">our 55+ Reviews!</span>
          </h2>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div>
              <p className="text-[#242424] text-[24px] font-semibold leading-[34px]">Customer Testimonials</p>
              <p className="text-[#242424] text-[16px] font-medium leading-[28px]">9 stonebrook Court, Little Rock, AR, 72211</p>
            </div>
            <div className="text-center">
              <div className="flex gap-[10px] items-center justify-center">
                <span className="text-[#242424] text-[24px] font-semibold">5.0</span>
                <div className="relative h-[18.68px] w-[123px]"><Image src={STARS} alt="5 stars" fill className="object-contain" /></div>
              </div>
              <p className="text-[#242424] text-[14px]">based on 55+ reviews</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[30px]">
            {[
              {text:`"We called Rain Drain to get estimates on gutters and Dawn was out here in two days. Within one week a crew was here to put the gutters in and it was also raining, but they still installed them. They did an excellent job and did everything I asked them to do. I would highly recommend them."`,name:"Hays McWhirter",date:"Sep 20, 2024"},
              {text:`"Awesome job! Awesome experience! From the initial quote by Dawn – who is one of the nicest people you'll meet! Rain Drain was very affordable! Within 2 days, Blaine and Devin were at our home installing our gutters! They too were very friendly and professional. The quality and workmanship are top notch."`,name:"Aaron McClure",date:"Sep 19, 2024"},
            ].map(r=>(
              <div key={r.name} className="bg-white border border-[rgba(255,255,255,0.2)] flex flex-col gap-[30px] p-[40px] rounded-[10px] flex-1">
                <p className="text-[#242424] text-[16px] italic font-medium leading-[30px] line-clamp-6">{r.text}</p>
                <div>
                  <div className="h-px w-full bg-gray-200 mb-[30px]" />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[10px] items-center">
                      <div className="relative size-[54px] rounded-full overflow-hidden shrink-0"><Image src={REVIEWER} alt={r.name} fill className="object-cover" /></div>
                      <div>
                        <p className="text-[#242424] text-[18px] font-semibold leading-[28px]">{r.name}</p>
                        <p className="text-[#242424] text-[12px] leading-[18px]">{r.date}</p>
                      </div>
                    </div>
                    <div className="relative h-[18.68px] w-[123px]"><Image src={STARS} alt="5 stars" fill className="object-contain" /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white px-6 lg:px-[135px] py-[100px]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-[35px] items-center">
          <div className="text-center lg:w-[516px] max-w-full">
            <h2 className="text-[#242424] text-[42px] leading-[52px]">
              <span className="font-bold">Average Pricing </span><span className="font-normal">Options</span>
            </h2>
            <p className="text-[#242424] text-[16px] font-medium leading-[28px] mt-2">Each price is a rough estimate and your price WILL be different for your home. Either higher or lower.</p>
          </div>
          <div className="flex flex-wrap gap-[15px] items-stretch w-full">
            {PRICING.map(p=>(
              <div key={p.title} className="bg-[#fafafa] border border-[rgba(0,0,0,0.1)] flex flex-col gap-[8px] p-[30px] rounded-[15px] flex-1 min-w-[200px]">
                <p className="text-[#242424] text-[42px] font-bold leading-[52px]">{p.price}</p>
                <div className="flex flex-col gap-[20px]">
                  <p className="text-[#242424] text-[18px] font-semibold leading-[30px]">{p.title}</p>
                  <div className="h-px w-full bg-gray-200" />
                  <div className="flex flex-col gap-[15px]">
                    <p className="text-[#242424] text-[16px] font-medium leading-[26px] w-[195px]">{p.desc}</p>
                    <div className="flex flex-col gap-[8px]">
                      {p.features.map(f=>(
                        <div key={f} className="flex gap-[8px] items-center">
                          <span className="relative size-[20px] shrink-0 inline-block"><Image src={CHECK_BLUE} alt="" fill className="object-contain" /></span>
                          <span className="text-[#242424] text-[16px] font-medium leading-[26px]">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="flex items-center gap-2 text-[#077bce] text-[16px] font-semibold underline">
                      Book an Inspection
                      <span className="relative h-[14px] w-[21px] inline-block"><Image src={ARROW_B} alt="" fill className="object-contain" /></span>
                    </Link>
                  </div>
                </div>
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
              {CONTACT_INFO.map((item,i)=>(
                <div key={item.label} className="flex gap-[20px] items-center py-[10px]">
                  <span className="relative size-[54px] shrink-0 inline-block"><Image src={CONTACT_ICONS[i]} alt="" fill className="object-contain" /></span>
                  <div>
                    <p className="text-[#4e8bc4] text-[16px] font-medium tracking-[1.6px] uppercase leading-[20px]">{item.label}</p>
                    <p className="text-[#242424] text-[18px] font-semibold tracking-[0.9px] leading-[26px] whitespace-pre-line">{item.value}</p>
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
                <span className="relative h-[14px] w-[21px] inline-block"><Image src={ARROW_W} alt="" fill className="object-contain" /></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
