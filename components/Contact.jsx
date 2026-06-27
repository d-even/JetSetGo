export default function Contact() {
  return (
    <section id="connect" className="relative scroll-mt-28 overflow-hidden bg-[#f4fbfe] py-20 sm:py-24">

      {/* Decorative blobs — same as original */}
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgba(208,236,246,0.95),rgba(244,251,254,0))]" />
      <div className="absolute -left-16 top-12 h-40 w-40 rounded-full bg-[#b8e8f5]/50 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[#b8d8f5]/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:px-8">

        {/* ── Left ── */}
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500/80">Get in touch</p>
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-[#0d2f64] sm:text-5xl">
              Let&apos;s plan your next trip with JetSet Go
            </h2>
            <p className="max-w-lg text-base leading-8 text-[#45607f]">
              Whether you need a custom itinerary, destination support, or help
              with a booking — our team guides you from first idea to boarding gate.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {/* Email */}
            <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_8px_30px_rgba(10,42,88,0.08)] transition-shadow hover:shadow-[0_12px_40px_rgba(10,42,88,0.13)]">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth={1.8} className="h-5 w-5">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6a84a5]">Email</p>
              <p className="mt-2 break-all text-sm font-semibold text-[#0d2f64]">devensawant4554@gmail.com</p>
              <a
                href="#connect-form"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#0f3f87] px-4 py-2 text-xs font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
              >
                Connect
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="h-3 w-3">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_8px_30px_rgba(10,42,88,0.08)] transition-shadow hover:shadow-[0_12px_40px_rgba(10,42,88,0.13)]">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth={1.8} className="h-5 w-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.45 2 2 0 0 1 3.59 1H6.5a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.59 8.84a16 16 0 0 0 6 6l1.21-1.21a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6a84a5]">Phone</p>
              <p className="mt-2 text-sm font-semibold text-[#0d2f64]">+91 89288 77124</p>
            </div>

            {/* Office */}
            <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_8px_30px_rgba(10,42,88,0.08)] transition-shadow hover:shadow-[0_12px_40px_rgba(10,42,88,0.13)]">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth={1.8} className="h-5 w-5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6a84a5]">Office</p>
              <p className="mt-2 text-sm font-semibold text-[#0d2f64]">Mumbai, India</p>
            </div>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div
          id="connect-form"
          className="scroll-mt-32 rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_24px_70px_rgba(10,42,88,0.11)] sm:p-8"
        >
          <h3 className="text-2xl font-bold text-[#0d2f64]">Connect With Us</h3>
          <p className="mt-1 text-sm text-[#6a84a5]">We reply within 24 hours.</p>

          <form className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block space-y-1.5 text-sm font-semibold text-[#0d2f64]">
                Full name
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 block w-full rounded-xl border border-[#d8e7f0] bg-[#f5faff] px-4 py-3 text-sm text-[#0d2f64] outline-none transition-all placeholder:text-[#a8c0d6] focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                />
              </label>
              <label className="block space-y-1.5 text-sm font-semibold text-[#0d2f64]">
                Email address
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="mt-1 block w-full rounded-xl border border-[#d8e7f0] bg-[#f5faff] px-4 py-3 text-sm text-[#0d2f64] outline-none transition-all placeholder:text-[#a8c0d6] focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                />
              </label>
            </div>

            <label className="block space-y-1.5 text-sm font-semibold text-[#0d2f64]">
              Subject
              <input
                type="text"
                placeholder="How can we help?"
                className="mt-1 block w-full rounded-xl border border-[#d8e7f0] bg-[#f5faff] px-4 py-3 text-sm text-[#0d2f64] outline-none transition-all placeholder:text-[#a8c0d6] focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
              />
            </label>

            <label className="block space-y-1.5 text-sm font-semibold text-[#0d2f64]">
              Message
              <textarea
                rows={5}
                placeholder="Tell us about your trip, preferred dates, or any special requirements."
                className="mt-1 block w-full resize-none rounded-xl border border-[#d8e7f0] bg-[#f5faff] px-4 py-3 text-sm text-[#0d2f64] outline-none transition-all placeholder:text-[#a8c0d6] focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
              />
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(15,63,135,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(15,63,135,0.35)] sm:w-auto sm:px-10"
              style={{ background: "linear-gradient(135deg,#1a56db 0%,#0f3f87 100%)" }}
            >
              Send message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-4 w-4">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
