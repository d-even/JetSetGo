export default function Contact() {
	return (
		<section id="connect" className="relative scroll-mt-28 overflow-hidden bg-[#f4fbfe] py-20 sm:py-24">
			<div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgba(208,236,246,0.95),rgba(244,251,254,0))]" />
			<div className="absolute -left-16 top-12 h-40 w-40 rounded-full bg-[#b8e8f5]/50 blur-3xl" />
			<div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[#ffd84d]/20 blur-3xl" />

			<div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:px-8">
				<div className="space-y-6">
					<div className="space-y-4">
						<h2 className="max-w-xl text-4xl font-semibold tracking-tight text-[#0d2f64] sm:text-5xl">
							Let&apos;s plan your next trip with JetSet Go
						</h2>
						<p className="max-w-2xl text-base leading-8 text-[#45607f] sm:text-lg">
							Whether you need a custom itinerary, destination support, or help with a booking,
							our team can guide you from first idea to boarding gate.
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-3">
						<div className="rounded-3xl border border-white/70 bg-white p-5 shadow-[0_12px_30px_rgba(10,42,88,0.08)]">
							<p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6a84a5]">Email</p>
							<p className="mt-3 text-lg font-semibold text-[#0d2f64]">devensawant4554@gmail.com</p>
							<a
								href="#connect-form"
								className="mt-4 inline-flex items-center justify-center rounded-full bg-[#0f3f87] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
							>
								Connect
							</a>
						</div>
						<div className="rounded-3xl border border-white/70 bg-white p-5 shadow-[0_12px_30px_rgba(10,42,88,0.08)]">
							<p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6a84a5]">Phone</p>
							<p className="mt-3 text-lg font-semibold text-[#0d2f64]">91+ 8928877124</p>
						</div>
						<div className="rounded-3xl border border-white/70 bg-white p-5 shadow-[0_12px_30px_rgba(10,42,88,0.08)]">
							<p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6a84a5]">Office</p>
							<p className="mt-3 text-lg font-semibold text-[#0d2f64]">Mumbai</p>
						</div>
					</div>
				</div>

				<div id="connect-form" className="scroll-mt-32 rounded-[2rem] border border-white/80 bg-white p-6 shadow-[0_24px_70px_rgba(10,42,88,0.12)] sm:p-8">
					<div className="flex items-center justify-between gap-4">
						<h3 className="text-2xl font-semibold text-[#0d2f64]">Connect With Us</h3>
						
					</div>

					<form className="mt-8 space-y-5">
						<div className="grid gap-5 sm:grid-cols-2">
							<label className="space-y-2 text-sm font-medium text-[#0d2f64]">
								Full name
								<input
									type="text"
									placeholder="Your name"
									className="w-full rounded-2xl border border-[#d8e7f0] bg-[#fbfdff] px-4 py-3 text-[#0d2f64] outline-none transition focus:border-[#8cb8e7] focus:bg-white"
								/>
							</label>
							<label className="space-y-2 text-sm font-medium text-[#0d2f64]">
								Email address
								<input
									type="email"
									placeholder="name@email.com"
									className="w-full rounded-2xl border border-[#d8e7f0] bg-[#fbfdff] px-4 py-3 text-[#0d2f64] outline-none transition focus:border-[#8cb8e7] focus:bg-white"
								/>
							</label>
						</div>

						<label className="block space-y-2 text-sm font-medium text-[#0d2f64]">
							Subject
							<input
								type="text"
								placeholder="How can we help?"
								className="w-full rounded-2xl border border-[#d8e7f0] bg-[#fbfdff] px-4 py-3 text-[#0d2f64] outline-none transition focus:border-[#8cb8e7] focus:bg-white"
							/>
						</label>

						<label className="block space-y-2 text-sm font-medium text-[#0d2f64]">
							Message
							<textarea
								rows="6"
								placeholder="Tell us about your trip, preferred dates, or any special requirements."
								className="w-full resize-none rounded-3xl border border-[#d8e7f0] bg-[#fbfdff] px-4 py-3 text-[#0d2f64] outline-none transition focus:border-[#8cb8e7] focus:bg-white"
							/>
						</label>

						<button
							type="submit"
							className="inline-flex w-full items-center justify-center rounded-full bg-[#0f3f87] px-6 py-4 text-base font-semibold text-white shadow-[0_14px_28px_rgba(15,63,135,0.25)] transition-transform hover:-translate-y-0.5 sm:w-auto"
						>
							Send message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
