export default function Footer() {
  return (
    <footer className="bg-[#08274f] text-white">

      {/* Subtle top accent line */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg,transparent,rgba(96,165,250,0.5),transparent)" }}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/20 ring-1 ring-blue-400/30">
              <svg viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth={1.8} className="h-5 w-5">
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
              </svg>
            </div>
            <p className="text-2xl font-bold tracking-tight">JetSet Go</p>
          </div>
          <p className="max-w-[220px] text-sm leading-7 text-white/55">
            Making travel planning feel lighter, faster, and more personal — wherever you&apos;re headed.
          </p>
        </div>

        {/* Explore */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300/70">Explore</p>
          <ul className="mt-5 space-y-3">
            {[["Home","#top"],["Destinations","#destinations"],["Packages","#packages"],["Connect","#connect"]].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <span className="h-px w-3 bg-white/20 transition-all duration-300 group-hover:w-5 group-hover:bg-blue-400" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300/70">Support</p>
          <ul className="mt-5 space-y-4">
            <li>
              <p className="text-[10px] uppercase tracking-widest text-white/30">Email</p>
              <p className="mt-0.5 text-sm text-white/65">devensawant4554@gmail.com</p>
            </li>
            <li>
              <p className="text-[10px] uppercase tracking-widest text-white/30">Phone</p>
              <p className="mt-0.5 text-sm text-white/65">+91 89288 77124</p>
            </li>
            <li>
              <p className="text-[10px] uppercase tracking-widest text-white/30">Office</p>
              <p className="mt-0.5 text-sm text-white/65">Mumbai, India</p>
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300/70">Follow</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Instagram","X","LinkedIn","YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/60 transition-all hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 JetSet Go. All rights reserved.</p>
          <p className="italic">Because the World is Calling.</p>
        </div>
      </div>
    </footer>
  );
}