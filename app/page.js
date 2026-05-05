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
              src="/images/brain.webp"
              alt="Brain illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* TEXT */}
          <div>
            <p className="font-futura text-crypto-earth tracking-widest uppercase text-sm mb-4">
              What We Study
            </p>

            <h2 className="font-gothic text-4xl md:text-5xl font-bold text-crypto-earth leading-tight mb-6">
              We study how fungal infections disrupt the brain
            </h2>

            <p className="font-futura text-gray-700 text-lg leading-relaxed mb-6">
              Simply put, we investigate how pathogens interact with the brain’s immune and fluid systems
              to drive injury and disease. Using advanced bioimaging and experimental models, we track
              how fungi invade the central nervous system, move through brain tissue, and evade host
              defences.
            </p>

            <p className="font-futura text-gray-700 text-lg leading-relaxed mb-8">
              Our goal is to uncover the cellular and molecular mechanisms that link infection to brain
              dysfunction. By visualising these processes in intact systems, we aim to identify new
              pathways of injury and recovery, ultimately informing better diagnostics, treatments, and
              outcomes for devastating diseases such as cryptococcal meningitis.
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

          {/* TEXT */}
          <div>
            <p className="font-futura text-white tracking-widest uppercase text-sm mb-4">
              Why This Research Matters
            </p>

            <h2 className="font-gothic text-4xl md:text-5xl font-bold leading-tight mb-6">
              Why our research matters
            </h2>

            <p className="font-futura text-lg leading-relaxed mb-8 text-gray-100">
              Cryptococcal meningitis remains one of the leading causes of death in people
              living with HIV, especially in Sub-Saharan Africa.
            </p>

            <Link href="/research/">
              <button className="bg-white text-crypto-earth px-8 py-3 rounded-md hover:bg-white/80 transition">
                Our Research
              </button>
            </Link>
          </div>

          {/* IMAGE */}
          <div className="relative w-full h-80 md:h-[420px]">
            <Image
              src="/images/africa-canva.webp"
              alt="Africa incidence map"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </section>

      {/* SECTION 3 — PARTNERS */}
      <section className="w-full bg-crypto-desert py-12 px-8 md:px-16 lg:px-32">
        <h2 className="font-gothic text-4xl md:text-5xl font-bold text-center text-crypto-earth mb-12">
          Our Partners & Sponsors
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 place-items-center">

          <div className="relative w-32 h-20">
            <Image
              src="/partner-logos/CMM.webp"
              alt="CMM Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-32 h-20">
            <Image
              src="/partner-logos/EDCT.webp"
              alt="EDCTP Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-32 h-20">
            <Image
              src="/partner-logos/MRC.webp"
              alt="MRC Centre for Medical Mycology Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-32 h-20">
            <Image
              src="/partner-logos/ukaid.webp"
              alt="UK Aid Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-32 h-20">
            <Image
              src="/partner-logos/ukri.webp"
              alt="UKRI Logo"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </section>

    </div>
  );
}