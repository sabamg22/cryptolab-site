"use client";

import Hero from "../../components/hero";
import Image from "next/image";
import { useEffect } from "react";
import ResearchHeroWrapper from "../../components/hero-wrap";

export default function Research() {
  useEffect(() => {
    document.body.classList.add("hero-dark");
    return () => document.body.classList.remove("hero-dark");
  }, []);

  const researchAreas = [
    {
      title: "Antifungal Neuroimmunity",
      description1:
        "Placeholder description for Antifungal Neuroimmunity. Edit this text to describe how the lab investigates immune responses to fungal infection in the brain.",
      description2:
        "Additional placeholder text for this research area. This can include key models, cell types, pathways, or major questions.",
    },
    {
      title: "Neurofluid Dynamics",
      description1:
        "Placeholder description for Neurofluid Dynamics. Edit this text to describe how infection affects brain fluid movement, clearance pathways, and CNS barriers.",
      description2:
        "Additional placeholder text for this research area. This can include glymphatic flow, CSF dynamics, vascular interfaces, or meningeal pathways.",
    },
    {
      title: "Neurometabolism",
      description1:
        "Placeholder description for Neurometabolism. Edit this text to describe how fungal infection reshapes oxygen availability, hypoxia, and metabolic stress in brain tissue.",
      description2:
        "Additional placeholder text for this research area. This can include cryptococcal lesions, metabolic adaptation, host-cell stress, or fungal persistence.",
    },
    {
      title: "Neural Circuits & Behaviour",
      description1:
        "Placeholder description for Neural Circuits & Behaviour. Edit this text to describe how infection-related brain changes may affect neural circuits and behaviour.",
      description2:
        "Additional placeholder text for this research area. This can include cognitive outcomes, behavioural assays, brain-region vulnerability, or circuit disruption.",
    },
    {
      title: "Clinical Translation and Biomarker Discovery",
      description1:
        "Placeholder description for Clinical Translation and Biomarker Discovery. Edit this text to describe how lab findings may inform diagnosis, prognosis, or treatment strategies.",
      description2:
        "Additional placeholder text for this research area. This can include biomarkers, patient relevance, therapeutic targets, or translational pipelines.",
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
                href='/publications'
                rel="noopener noreferrer"
                className="underline text-crypto-sand hover:text-crypto-ochre transition"
              >
                <br></br>Publications →
              </a>

          </ResearchHeroWrapper>
        </div>
      </Hero>

      <main className="w-full bg-white px-4 sm:px-6 md:px-12 py-16 md:py-20">
        <section className="max-w-5xl mx-auto">
          <div className="space-y-14">
            {researchAreas.map((area) => (
              <div key={area.title}>
                <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src="/images/placeholder.webp"
                    alt={area.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/35" />

                  <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                    <h3 className="font-gothic text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-md">
                      {area.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-8 space-y-5 font-futura text-gray-700 text-base md:text-lg leading-relaxed">
                  <p>{area.description1}</p>
                  <p>{area.description2}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}