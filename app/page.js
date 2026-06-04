"use client";

import Hero from "../components/hero";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);
  const touchStartX = useRef(0);

  const logos = [
    "/partner-logos/africa-mycology.jpg",
    "/partner-logos/edctp3.svg",
    "/partner-logos/ukri-mrc.png",
    "/partner-logos/ukaid-logo.png",
    "/partner-logos/ukri.png",
    "/partner-logos/wellcome.png",
    "/partner-logos/uct-c.png",
    "/partner-logos/ni.png",
  ];

  const changeSpeed = (rate) => {
    if (scrollRef.current) {
      scrollRef.current.getAnimations().forEach((anim) => {
        anim.playbackRate = rate;
      });
    }
  };

  const handleMouseEnter = () => changeSpeed(2.5);
  const handleMouseLeave = () => changeSpeed(1);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchCurrentX = e.touches[0].clientX;
    const diff = touchStartX.current - touchCurrentX;

    if (diff > 20) {
      changeSpeed(3); 
    } else if (diff < -20) {
      changeSpeed(0.5);
    }
  };

  const handleTouchEnd = () => {
    changeSpeed(1);
  };

  return (
    <div className="font-futura">
      <style>{`
        @keyframes smooth-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-smooth-scroll {
          animation: smooth-scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>

      {/* HERO */}
      <Hero
        image="/images/hero-home.webp"
        title="The Crypto Lab"
        subtitle="Pioneering Brain Health Research"
      />

      {/* SECTION 1 — WHAT WE STUDY */}
      <section className="w-full bg-crypto-sand flex flex-col md:flex-row min-h-[500px]">
        
        {/* FULL-BLEED IMAGE */}
        <div className="relative w-full md:w-1/2 h-80 md:h-auto">
          <Image
            src="/images/study-image.webp"
            alt="Brain illustration"
            fill
            className="object-cover" 
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2 py-12 px-6 lg:px-12 xl:px-20 flex flex-col justify-center">
          <p className="font-futura text-crypto-earth tracking-widest uppercase text-sm mb-4">
            WHO WE ARE
          </p>

          <h2 className="font-gothic text-3xl lg:text-4xl font-bold text-crypto-earth leading-tight mb-6">
            Africa's pioneering laboratory for fungal neuroinfections research
          </h2>

          <div className="font-futura text-m leading-relaxed text-gray-700 whitespace-pre-line">
            Our work is focussed on understanding how fungal infections damage the brain. We specifically study the biological mechanisms that drive neurological injury during infections such as cryptococcal meningitis, one of the leading causes of infectious brain disease and death in Africa.
            <p className="h-6"></p>
            <a href="/team" className="font-gothic email-underline text-crypto-ochre font-bold hover:text-crypto-coal transition-colors">Our team</a> brings together expertise in neuroscience, immunology, microbiology, imaging, and computational biology to uncover how pathogens interact with the brain and to identify new opportunities for diagnosis, treatment, and recovery.
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY THIS MATTERS */}
      {/* We removed the full green background from the section and let the columns dictate the colors */}
      <section className="w-full flex flex-col-reverse md:flex-row min-h-[500px]">
        
        {/* TEXT COLUMN (Green Background) */}
        <div className="w-full md:w-1/2 lg:w-7/12 bg-crypto-earth py-12 px-6 lg:px-12 xl:px-20 text-white flex flex-col justify-center">
          <div className="font-futura text-white tracking-widest uppercase text-sm mb-4">
            Why This Research Matters
          </div>

          <h2 className="font-gothic text-3xl lg:text-4xl font-bold leading-tight mb-8">
            Why our research matters
          </h2>

          <div className="font-futura text-m leading-relaxed text-gray-100">
            <p className="mb-6">
              Fungal infections of the brain are among the most devastating infectious diseases worldwide. They are often difficult to diagnose, challenging to treat, and frequently fatal if left untreated. Among these, cryptococcal meningitis is the leading cause of fungal meningitis globally, responsible for about 200 000 deaths each year, with the greatest burden borne by African populations.
            </p>
            <p className="mb-6">
              Despite its devastating impact, the biological mechanisms that drive neurological damage, disability, and death unclear and this limits our ability to develop more effective diagnostics, therapies, and strategies to improve patient outcomes.
            </p>
            <p className="mb-8">
              At CryptoLab, we believe that understanding how fungal infections disrupt brain function is essential to transforming the way these diseases are diagnosed, treated, and prevented. By uncovering the mechanisms of brain injury, we aim to advance new solutions that improve survival, reduce disability, and ultimately lessen the global burden of fungal neurological disease.
            </p>

            {/*<Link href="/research/">
              <button className="bg-white text-crypto-earth px-8 py-3 rounded-md hover:bg-crypto-gold hover:text-crypto-sand transition inline-block">
                Our Research
              </button>
            </Link>*/}
          </div>
        </div>

        {/* IMAGE COLUMN (Desert Background) */}
        <div className="w-full md:w-1/2 lg:w-5/12 bg-crypto-desert relative min-h-[350px]">
          <Image
            src="/images/red-africa-on-sand.webp"
            alt="Africa incidence map"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* SECTION 3 — PARTNERS */}
      <section className="w-full bg-crypto-gold/20 py-12 overflow-hidden">
        <h2 className="font-gothic text-3xl lg:text-4xl font-bold text-center text-crypto-earth mb-12">
          Our Partners & Sponsors
        </h2>

        <div className="relative w-full overflow-hidden cursor-pointer">
          <div
            ref={scrollRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex animate-smooth-scroll"
          >
            {/* GROUP 1 */}
            <div className="flex gap-16 pr-16">
              {logos.map((src, i) => (
                <div key={`group1-${i}`} className="relative w-40 h-24 flex-shrink-0">
                  <Image
                    src={src}
                    alt="Partner logo"
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* GROUP 2 */}
            <div className="flex gap-16 pr-16">
              {logos.map((src, i) => (
                <div key={`group2-${i}`} className="relative w-40 h-24 flex-shrink-0">
                  <Image
                    src={src}
                    alt="Partner logo"
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}