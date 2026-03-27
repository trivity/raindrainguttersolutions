export default function WarrantyBanner() {
  return (
    <section className="bg-[#0D1B2A] py-14 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Badge */}
        <div className="shrink-0 flex items-center justify-center">
          <div className="relative w-36 h-36">
            <div className="w-36 h-36 rounded-full border-4 border-[#1565C0] flex flex-col items-center justify-center bg-[#0D1B2A] text-center p-3">
              <svg className="w-10 h-10 text-[#1565C0] mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-white font-bold text-[10px] uppercase tracking-widest leading-tight">Lifetime<br />Warranty</span>
            </div>
          </div>
        </div>
        {/* Text */}
        <div>
          <h2 className="text-white font-bold text-[28px] lg:text-[34px] leading-tight mb-3">
            Backed by a <span className="text-[#1565C0]">Lifetime Warranty</span><br />On Workmanship
          </h2>
          <p className="text-gray-400 text-[15px] leading-relaxed max-w-2xl">
            We stand behind every job we do. Our lifetime warranty on workmanship means that if anything goes wrong due to our installation, we&apos;ll come back and fix it — at no cost to you. Your peace of mind is our priority.
          </p>
        </div>
      </div>
    </section>
  );
}
