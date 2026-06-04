import Hero from "../components/hero";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-futura">

      {/* HERO */}
      <Hero
        image="/images/hero-home.webp"
        title="The Crypto Lab"
        subtitle="Pioneering Brain Health Research"
      />

      {/* SECTION 1 — WHAT WE STUDY */}
      <section className="w-full bg-crypto-sand py-12 px-8 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-80 md:h-[420px]">
            <Image
              src="/images/study-image.webp"
              alt="Brain illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* TEXT */}
          <div>
            <p className="font-futura text-crypto-earth tracking-widest uppercase text-sm mb-4">
              WHO WE ARE
            </p>

            <h2 className="font-gothic text-4xl md:text-5xl font-bold text-crypto-earth leading-tight mb-6">
              Africa's pioneering laboratory for fungal neuroinfections research
            </h2>

            <p className="font-futura text-lg leading-relaxed mb-8 text-gray-700 whitespace-pre-line">
              Our work is focussed on understanding how fungal infections damage the brain. We specifically study the biological mechanisms that drive neurological injury during infections such as cryptococcal meningitis, one of the leading causes of infectious brain disease and death in Africa.
              <p className="h-6"></p>
              <a href="/team" className="font-gothic email-underline text-crypto-ochre font-bold hover:text-crypto-coal transition-colors">Our team</a> brings together expertise in neuroscience, immunology, microbiology, imaging, and computational biology to uncover how pathogens interact with the brain and to identify new opportunities for diagnosis, treatment, and recovery.
              </p>

            {/*<Link href="/research">
              <button className="bg-crypto-earth text-white px-8 py-3 rounded-md hover:bg-crypto-earth/80 transition">
                Our Research
              </button>
            </Link>*/}
          </div>

        </div>
      </section>

      {/* SECTION 2 — WHY THIS MATTERS */}
      <section className="w-full bg-crypto-earth py-12 px-8 md:px-16 lg:px-32 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXT COLUMN */}
          <div>
            <div className="font-futura text-white tracking-widest uppercase text-sm mb-4">
              Why This Research Matters
            </div>

            <h2 className="font-gothic text-4xl md:text-5xl font-bold leading-tight mb-6">
              Why our research matters
            </h2>

            <div className="font-futura text-lg leading-relaxed mb-8 text-gray-100 whitespace-pre-line">
              Fungal infections of the brain are among the most devastating infectious diseases worldwide. They are often difficult to diagnose, challenging to treat, and frequently fatal if left untreated. Among these, cryptococcal meningitis is the leading cause of fungal meningitis globally, responsible for about 200 000 deaths each year, with the greatest burden borne by African populations.
              <p className="h-6"></p>
              Despite its devastating impact, the biological mechanisms that drive neurological damage, disability, and death unclear and this limits our ability to develop more effective diagnostics, therapies, and strategies to improve patient outcomes.
              <p className="h-6"></p>
              At CryptoLab, we believe that understanding how fungal infections disrupt brain function is essential to transforming the way these diseases are diagnosed, treated, and prevented. By uncovering the mechanisms of brain injury, we aim to advance new solutions that improve survival, reduce disability, and ultimately lessen the global burden of fungal neurological disease.
            </div>

            <Link href="/research/">
              <button className="bg-white text-crypto-earth px-8 py-3 rounded-md hover:bg-crypto-gold hover:text-crypto-sand transition">
                Our Research
              </button>
            </Link>
          </div>

          {/* IMAGE & STATS COLUMN */}
          <div className="flex flex-col justify-center">
            
            {/* IMAGE */}
            <div className="relative w-full h-80 md:h-[420px]">
              <Image
                src="/images/red-africa-on-sand.webp"
                alt="Africa incidence map"
                fill
                className="object-contain"
              />
            </div>

            {/* STATS UNDER IMAGE 
            <div className="max-w-md mx-auto w-full">
              <p className="font-futura text-white tracking-widest uppercase text-sm mb-4">
                STATS
              </p>
              <ul className="list-disc pl-6 space-y-2 font-futura text-gray-100 text-base">
                <li>Opportunistic fungal infection of the brain</li>
                <li>75% of global cases and deaths due to CM are in SSA</li>
                <li>SSA loses on average 200 000 people to CM annually</li>
                <li>Unacceptably high mortality rates (40-70%) with treatment</li>
              </ul>
            </div>*/}

          </div>

        </div>
      </section>

      {/* SECTION 3 — PARTNERS */}
      <section className="w-full bg-crypto-desert py-12 overflow-hidden">
        <h2 className="font-gothic text-4xl md:text-5xl font-bold text-center text-crypto-earth mb-12">
          Our Partners & Sponsors
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 animate-scroll whitespace-nowrap">

            {[
              "/partner-logos/africa-mycology.jpg",
              "/partner-logos/edctp3.svg",
              "/partner-logos/ukri-mrc.png",
              "/partner-logos/ukaid.png",
              "/partner-logos/ukri.png",
              "/partner-logos/wellcome.png",
            ].concat([
              "/partner-logos/africa-mycology.jpg",
              "/partner-logos/edctp3.svg",
              "/partner-logos/ukri-mrc.png",
              "/partner-logos/ukaid.png",
              "/partner-logos/ukri.png",
              "/partner-logos/wellcome.png",
            ]).map((src, i) => (
              <div key={i} className="relative w-40 h-24 flex-shrink-0">
                <Image
                  src={src}
                  alt="Partner logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}