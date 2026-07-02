const steps = [
  {
    number: "01",
    title: "Pick Your Destination",
    description: "Browse curated destinations and find the trip that matches your travel style.",
  },
  {
    number: "02",
    title: "Customize Your Tour",
    description: "Tailor your itinerary, dates, and inclusions to fit exactly what you need.",
  },
  {
    number: "03",
    title: "Confirm & Travel",
    description: "Secure your booking in a few clicks and get ready for takeoff.",
  },
];

export default function BookingSteps() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <h2 className="text-center text-3xl font-bold tracking-tight text-[#0d2f64] sm:text-4xl">
        Booking made as easy as 1-2-3.
      </h2>

      <div className="relative mt-14 grid gap-10 sm:grid-cols-3">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-[#d8e3ee] sm:block"
          style={{ marginInline: "16.6%" }}
        />
        {steps.map((step) => (
          <div key={step.number} className="relative flex flex-col items-center text-center">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0d2f64] text-sm font-bold text-white">
              {step.number}
            </div>
            <h3 className="mt-5 text-lg font-bold text-[#0d2f64]">{step.title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-[#6a84a5]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
