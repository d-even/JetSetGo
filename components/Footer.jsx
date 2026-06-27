export default function Footer() {
  return (
    <footer className="bg-[#08274f] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#08274f]">
              ✈
            </div>
            <p className="text-2xl font-semibold tracking-[-0.04em]">JetSet Go</p>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/75">
            Making travel planning feel lighter, faster, and more personal.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Explore</p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li><a href="#intro" className="transition-colors hover:text-white">Intro</a></li>
            <li><a href="#guide" className="transition-colors hover:text-white">Guide</a></li>
            <li><a href="#pricing" className="transition-colors hover:text-white">Pricing</a></li>
            <li><a href="#connect" className="transition-colors hover:text-white">Connect</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Support</p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>hello@jetsetg.com</li>
            <li>ihyaet@gmail.com</li>
            <li>24/7 travel assistance</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Follow</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/80">
            <span className="rounded-full border border-white/15 px-4 py-2">Instagram</span>
            <span className="rounded-full border border-white/15 px-4 py-2">X</span>
            <span className="rounded-full border border-white/15 px-4 py-2">LinkedIn</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 JetSet G. All rights reserved.</p>
          <p>Because the World is Calling.</p>
        </div>
      </div>
    </footer>
  );
}