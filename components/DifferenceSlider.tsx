import Image from "next/image";

const beforeAfter = [
  {
    label: "Clogged → Clean",
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=280&fit=crop",
    after: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=400&h=280&fit=crop",
  },
  {
    label: "Damaged → Repaired",
    before: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=280&fit=crop",
    after: "https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?w=400&h=280&fit=crop",
  },
  {
    label: "Old → New",
    before: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=280&fit=crop",
    after: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=280&fit=crop",
  },
];

export default function DifferenceSlider() {
  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#1565C0] font-semibold text-[13px] uppercase tracking-widest mb-2">Before & After</p>
          <h2 className="text-[32px] font-bold text-[#1A1A2E]">
            See the Difference Proper<br />Gutter Care Makes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beforeAfter.map((item) => (
            <div key={item.label} className="rounded-xl overflow-hidden shadow-md">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="relative h-48">
                    <Image src={item.before} alt={`Before: ${item.label}`} fill className="object-cover" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-red-600/80 text-white text-center text-[11px] font-bold uppercase tracking-wider py-1">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <div className="relative h-48">
                    <Image src={item.after} alt={`After: ${item.label}`} fill className="object-cover" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#1565C0]/80 text-white text-center text-[11px] font-bold uppercase tracking-wider py-1">
                    After
                  </div>
                </div>
              </div>
              <div className="bg-[#F5F7FA] text-center py-3">
                <span className="text-[#1A1A2E] font-semibold text-[13px]">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#1565C0]" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
