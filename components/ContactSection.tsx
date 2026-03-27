export default function ContactSection() {
  return (
    <section className="bg-[#F5F7FA] py-16 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div>
            <p className="text-[#1565C0] font-semibold text-[13px] uppercase tracking-widest mb-2">Reach Out</p>
            <h2 className="text-[32px] font-bold text-[#1A1A2E] mb-2">Get in Touch</h2>
            <p className="text-gray-500 text-[15px] mb-8">
              Have questions or ready to schedule your free estimate? We&apos;re here to help. Reach out by phone, email, or fill out our contact form.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#1565C0] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[14px] text-[#1A1A2E]">Phone</p>
                  <a href="tel:5551234567" className="text-gray-600 text-[14px] hover:text-[#1565C0] transition-colors">(555) 123-4567</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#1565C0] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[14px] text-[#1A1A2E]">Email</p>
                  <a href="mailto:info@raindraingutters.com" className="text-gray-600 text-[14px] hover:text-[#1565C0] transition-colors">info@raindraingutters.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#1565C0] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[14px] text-[#1A1A2E]">Service Area</p>
                  <p className="text-gray-600 text-[14px]">Houston, TX & Surrounding Areas</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#1565C0] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[14px] text-[#1A1A2E]">Business Hours</p>
                  <p className="text-gray-600 text-[14px]">Mon–Fri: 8:00am – 6:00pm</p>
                  <p className="text-gray-600 text-[14px]">Saturday: 9:00am – 4:00pm</p>
                  <p className="text-gray-600 text-[14px]">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="rounded-xl overflow-hidden shadow-md min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222977.13378018704!2d-95.6349729!3d29.8170082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
