import Link from "next/link";

const plans = [
  {
    price: "$1,250",
    title: "Single Story Installation",
    description: "Complete gutter installation for single story homes",
    features: [
      "Up to 150 linear feet",
      "Seamless aluminum gutters",
      "Color matching available",
      "Downspout installation",
      "Lifetime warranty",
    ],
    highlight: false,
  },
  {
    price: "$2,250",
    title: "Two Story Installation",
    description: "Full gutter system for two story homes",
    features: [
      "Up to 250 linear feet",
      "Seamless aluminum gutters",
      "Color matching available",
      "Downspout installation",
      "Gutter guards included",
      "Lifetime warranty",
    ],
    highlight: true,
  },
  {
    price: "$350",
    title: "Gutter Cleaning",
    description: "Professional cleaning & debris removal",
    features: [
      "Full debris removal",
      "Flush & test drainage",
      "Minor repairs included",
      "Downspout clearing",
      "Inspection report",
    ],
    highlight: false,
  },
  {
    price: "$650",
    title: "Gutter Guards",
    description: "Premium gutter guard installation",
    features: [
      "Micro-mesh guards",
      "Leaf & debris protection",
      "Fits all gutter types",
      "Reduces maintenance",
      "10-year warranty",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#1565C0] font-semibold text-[13px] uppercase tracking-widest mb-2">Transparent Pricing</p>
          <h2 className="text-[32px] font-bold text-[#1A1A2E] mb-3">Average Pricing Options</h2>
          <p className="text-gray-500 text-[15px] max-w-xl mx-auto">
            We offer competitive, transparent pricing with no hidden fees. All jobs include a free estimate and our lifetime workmanship warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-xl p-6 flex flex-col border-2 transition-shadow hover:shadow-lg ${
                plan.highlight
                  ? "border-[#1565C0] bg-[#1565C0] text-white shadow-xl"
                  : "border-gray-200 bg-white text-[#1A1A2E]"
              }`}
            >
              {plan.highlight && (
                <div className="text-center mb-3">
                  <span className="bg-white text-[#1565C0] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-4">
                <p className={`text-[38px] font-extrabold leading-none ${plan.highlight ? "text-white" : "text-[#1565C0]"}`}>
                  {plan.price}
                </p>
                <p className={`text-[11px] mt-1 ${plan.highlight ? "text-blue-100" : "text-gray-400"}`}>Starting price</p>
              </div>
              <h3 className={`font-bold text-[16px] mb-1 ${plan.highlight ? "text-white" : "text-[#1A1A2E]"}`}>
                {plan.title}
              </h3>
              <p className={`text-[13px] mb-5 ${plan.highlight ? "text-blue-100" : "text-gray-500"}`}>
                {plan.description}
              </p>
              <ul className="space-y-2 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-blue-200" : "text-[#1565C0]"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-[13px] ${plan.highlight ? "text-blue-50" : "text-gray-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center text-[13px] font-bold uppercase tracking-wide px-4 py-3 rounded transition-colors ${
                  plan.highlight
                    ? "bg-white text-[#1565C0] hover:bg-blue-50"
                    : "bg-[#1565C0] text-white hover:bg-[#0D47A1]"
                }`}
              >
                Get Free Estimate
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-[12px] mt-6">
          * Prices are estimates and may vary based on home size and specific requirements. Contact us for an accurate quote.
        </p>
      </div>
    </section>
  );
}
