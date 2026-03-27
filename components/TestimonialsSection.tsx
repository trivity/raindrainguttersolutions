import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    text: "Rain Drain did an amazing job replacing all the gutters on our home. The crew was professional, on time, and cleaned up everything when they were done. Our gutters look brand new and work perfectly!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "James T.",
    rating: 5,
    date: "1 month ago",
    text: "Excellent service from start to finish. They came out quickly for the estimate and scheduled the job within days. The quality of work is outstanding — you can tell they really care about doing it right.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Linda R.",
    rating: 5,
    date: "3 weeks ago",
    text: "I was having major issues with water overflow and damage to my foundation. Rain Drain came out, diagnosed the problem, and installed new gutters with proper drainage. Problem solved completely!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F5F7FA] py-16 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
          <div>
            <p className="text-[#1565C0] font-semibold text-[13px] uppercase tracking-widest mb-1">Customer Reviews</p>
            <h2 className="text-[32px] font-bold text-[#1A1A2E]">What Customers Say After<br />The Job</h2>
          </div>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-[13px] font-semibold text-gray-700">View All Google Reviews</span>
          </a>
        </div>

        {/* Main Large Review */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          <div className="lg:col-span-3 bg-white rounded-xl p-6 shadow-sm flex gap-5">
            <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Michael K."
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-bold text-[16px] text-[#1A1A2E]">Michael K.</span>
                <span className="text-gray-400 text-[12px]">1 week ago</span>
              </div>
              <StarRating count={5} />
              <p className="text-gray-600 text-[14px] leading-relaxed mt-3">
                &quot;From the moment I called, I knew this was a company that takes pride in their work. They showed up on time, gave me a fair estimate, and completed the entire job in one day. The new gutters look fantastic and have already survived two heavy rainstorms without a single issue. I highly recommend Rain Drain Gutter Solutions to anyone looking for quality work and exceptional customer service. These guys are the real deal!&quot;
              </p>
              <div className="flex items-center gap-2 mt-4">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-[12px] text-gray-500 font-medium">Posted on Google</span>
              </div>
            </div>
          </div>

          {/* Right column image */}
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden min-h-[250px] lg:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
              alt="Gutter work"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Smaller reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-[14px] text-[#1A1A2E]">{t.name}</p>
                  <p className="text-gray-400 text-[12px]">{t.date}</p>
                </div>
              </div>
              <StarRating count={t.rating} />
              <p className="text-gray-600 text-[13px] leading-relaxed mt-2">&quot;{t.text}&quot;</p>
            </div>
          ))}
        </div>

        {/* All Reviews Banner */}
        <div className="mt-8 bg-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="font-bold text-[18px] text-[#1A1A2E]">4.9</span>
              </div>
              <StarRating count={5} />
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <p className="text-[#1A1A2E] font-bold text-[18px]">Here&apos;s the rest of our <span className="text-[#1565C0]">51+ Reviews!</span></p>
          </div>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1565C0] hover:bg-[#0D47A1] text-white text-[13px] font-bold uppercase tracking-wide px-6 py-3 rounded transition-colors shrink-0"
          >
            See All Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
