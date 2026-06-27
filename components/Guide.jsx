import { League_Spartan } from "next/font/google";

import Image from "next/image";
import styles from "./guide.module.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});





function HoverImage({ src, alt, className = "" }) {
  return (
    <div className={`${styles.imageFrame} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover object-center ${styles.image}`}
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
    </div>
  );
}

function LabeledImage({ src, alt, label, className = "" }) {
  return (
    <div className={`${styles.imageFrame} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover object-center ${styles.image}`}
        sizes="(max-width: 768px) 50vw, 20vw"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 to-transparent px-3 py-4">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-[11px]">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function Guide() {
  return (
    <section id="guide" className="scroll-mt-28 bg-white px-4 py-14 text-black sm:px-6 sm:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-5 lg:items-start">

          {/* ── Left: Sydney ── */}
          <article className="flex flex-col gap-4 lg:col-span-3">
            <HoverImage
              src="/sedney.png"
              alt="Sydney harbour"
              className="aspect-[3/4] w-full rounded-sm bg-[#e6e1d5]"
            />
            <div>
              <h3 className="text-3xl font-black tracking-tight sm:text-4xl">Sydney</h3>
              <p className="mt-3 text-[14px] leading-7 text-black/80">
                Sydney, Australia&apos;s vibrant coastal city, is a must-visit for its iconic
                landmarks like the Sydney Opera House and Harbour Bridge. Visitors can enjoy
                stunning beaches like Bondi, world-class dining, and cultural experiences in
                a picturesque harbor setting.
              </p>
            </div>
          </article>

          {/* ── Center: Logo + two portrait images ── */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            <div className="flex flex-col items-center gap-1.5 py-3">
               <div
                    className={`${leagueSpartan.className} flex items-end leading-none text-[#0d2f64]`}
                    style={{ fontSize: "clamp(2.6rem, 9vw, 5.2rem)" }}
                  >
                    <span>JetSet Go</span>
      
                    {/* Yellow location pin replacing the 'o' */}
                    
                  </div>
              {/* <div className="relative aspect-[3.4/1] w-full max-w-[340px]">
                <Image
                  src="/JetSetGo.png"
                  alt="JetSet G logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, 340px"
                  className="object-contain"
                />
              </div> */}
              <p className="text-[13px] font-semibold tracking-[0.14em] text-[#0f3f87]">
                Because the World is Calling
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <LabeledImage
                src="/opera.png"
                alt="Sydney Opera House"
                label="Opera House"
                className="aspect-[3/4] rounded-sm bg-[#d6edf4]"
              />
              <LabeledImage
                src="/escarpment.png"
                alt="Great Barrier Reef"
                label="Great Barrier Reef"
                className="aspect-[3/4] rounded-sm bg-[#b9e6ef]"
              />
            </div>
          </div>

          {/* ── Right: Taronga Zoo + Uluru ── */}
          <div className="flex flex-col lg:col-span-4">
            <article className="pb-8">
              <h3 className="text-2xl font-black tracking-tight sm:text-[1.75rem] lg:text-[2rem]">
                Taronga Zoo
              </h3>
              <div className="mt-4 flex items-start gap-4">
                <p className="flex-1 text-[13px] leading-[1.8] text-black/80">
                  Home to over 4,000 animals, including native Australian species like koalas
                  and kangaroos, the zoo provides engaging conservation tours, animal
                  encounters, and opportunities to learn about wildlife.
                </p>
                <div
                  className={`${styles.imageFrame} relative h-28 w-28 flex-shrink-0 rounded-sm bg-[#ecebe8]`}
                >
                  <Image
                    src="/zoo.png"
                    alt="Taronga Zoo animals"
                    fill
                    className={`object-cover ${styles.image}`}
                    sizes="112px"
                  />
                </div>
              </div>
            </article>

            <article className="border-t-[2.5px] border-black pt-8">
              <h3 className="text-2xl font-black tracking-tight sm:text-[1.75rem] lg:text-[2rem]">
                Uluru (Ayers Rock)
              </h3>
              <div className="mt-4 flex items-start gap-4">
                <p className="flex-1 text-[13px] leading-[1.8] text-black/80">
                  Uluru, also known as Ayers Rock, is a stunning sandstone monolith renowned
                  for its vibrant color changes at sunrise and sunset. This sacred Aboriginal
                  site holds deep cultural and spiritual significance.
                </p>
                <div
                  className={`${styles.imageFrame} relative h-28 w-28 flex-shrink-0 rounded-sm bg-[#d6c8a3]`}
                >
                  <Image
                    src="/rock.png"
                    alt="Uluru Ayers Rock"
                    fill
                    className={`object-cover ${styles.image}`}
                    sizes="112px"
                  />
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}
