"use client";

import Hero from "../../components/hero";
import Image from "next/image";
import { useEffect } from "react";
import ResearchHeroWrapper from "../../components/hero-wrap";

export default function Research() {
  useEffect(() => {
    document.body.classList.add("hero-dark");

    return () => {
      document.body.classList.remove("hero-dark");
    };
  }, []);

  const researchAreas = [
    {
      title: "Antifungal Neuroimmunity",
      image: "/images/antifungal-neuroimmunity.webp",
      description:
        "Placeholder description for Antifungal Neuroimmunity.",
    },

    {
      title: "Neurofluid Dynamics",
      video: "/videos/neurofluid-dynamics.mp4",
      description:
        "Our work investigates how cryptococcal meningitis disrupts fluid transport and clearance pathways in the brain. Our lab has established an intracisternal cannulation model to measure glymphatic function during murine cryptococcal meningitis and provided the first experimental evidence of glymphatic disruption in this disease model. Current projects include 3D segmentation of perivascular spaces across the murine brain and optimization of tissue clearing and fluorescent immunolabelling protocols for both murine and human samples.",
    },

    {
      title: "Neurometabolism",
      image: "/images/neurometabolism.webp",
      description:
        "Placeholder description for Neurometabolism.",
    },

    {
      title: "Neural Circuits & Behaviour",
      image: "/images/neural-circuits-behaviour.webp",
      description:
        "Placeholder description for Neural Circuits & Behaviour.",
    },

    {
      title: "Clinical Translation and Biomarker Discovery",
      image: "/images/clinical-translation-biomarkers.webp",
      description:
        "Placeholder description for Clinical Translation and Biomarker Discovery.",
    },
  ];

  return (
    <div className="font-futura bg-white">
      <Hero image="/images/hero-research.webp" earlyShrink={true}>
        <div className="flex justify-center md:justify-start w-full md:pt-20">
          <ResearchHeroWrapper>
            <p className="font-futura text-crypto-gold uppercase text-sm max-w-xl mb-4 tracking-widest">
              Our Research
            </p>

            <h1 className="font-gothic text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-white max-w-2xl mb-4">
              We focus on five primary research areas:
            </h1>

            <p className="font-futura text-base md:text-lg text-crypto-desert max-w-2xl leading-relaxed">
              Antifungal Neuroimmunity
              <br />
              Neurofluid Dynamics
              <br />
              Neurometabolism
              <br />
              Neural Circuits &amp; Behaviour
              <br />
              Clinical Translation and Biomarker Discovery
            </p>

            <a
              href="/publications"
              rel="noopener noreferrer"
              className="underline text-crypto-sand hover:text-crypto-ochre transition"
            >
              <br />
              Publications →
            </a>
          </ResearchHeroWrapper>
        </div>
      </Hero>

      <main className="w-full bg-white px-4 sm:px-6 md:px-12 py-16 md:py-20">
        <section className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {researchAreas.map((area) => (
              <div key={area.title}>
                <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-2xl">

                  {area.video ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={area.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover"
                    />
                  )}

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                    <h3 className="font-gothic text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">
                      {area.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="font-futura text-gray-700 text-base md:text-lg leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}