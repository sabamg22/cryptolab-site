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
      image: "/images/engulfedcrypto.webp",
      caption: "Microglia paradoxically harbouring cryptococcal cells",
      description: "The brain possesses a highly specialised immune system that must balance protection against infection with preservation of neural function. While immune responses are essential for controlling fungal pathogens, they can also contribute to inflammation, tissue damage, and neurological dysfunction.",
      description2: "Our research seeks to understand how the brain's resident and infiltrating immune cells recognise and respond to fungal infection. By uncovering the mechanisms that govern protective immunity, immune evasion, and neuroinflammatory injury, we aim to identify new therapeutic strategies that improve pathogen clearance while minimising damage to the nervous system.",  
      },

    {
      title: "Neurofluid Dynamics",
      /*video: "/videos/neurofluid-dynamics.mp4",*/
      image: "/images/lamstain.webp",
      caption: "Cryptococcal cells aggregating in the perivascular space",
      description: "The brain relies on tightly regulated fluid transport systems to maintain homeostasis, remove waste products, and support normal neurological function. Disruption of these pathways can contribute to raised intracranial pressure, hydrocephalus, and neurological deterioration.",
      description2: "Our work investigates how fungal infections alter cerebrospinal fluid circulation, perivascular fluid flow, and brain drainage pathways. Using advanced imaging approaches and experimental models, we seek to uncover the mechanisms underlying fluid dysregulation and identify new opportunities for therapeutic intervention.",
    },

    {
      title: "Neurometabolism",
      image: "/images/hypoxia.webp",
      caption: "Quan H and Zhang R (2023)",
      description: "The healthy brain is one of the most metabolically active organs in the body, requiring precise coordination of energy production and utilisation. Infection places enormous metabolic demands on both host cells and invading pathogens, fundamentally altering this balance.",
      description2: "Our research explores how fungal infections reshape metabolic pathways within the brain and how these changes influence immune responses, neuronal health, and disease progression. Understanding these interactions may reveal novel metabolic targets for improving outcomes in fungal neurological disease.",
    },

    {
      title: "Neural Circuits & Behaviour",
      image: "/images/brian.webp",
      caption: "Cellular networks in regions like the hippocampus are vulnerable to damage",
      description: "Neurological infections can profoundly affect cognition, behaviour, and quality of life, yet the biological mechanisms linking infection to functional impairment remain poorly understood.",
      description2: "We investigate how fungal infections disrupt neuronal networks, alter brain function, and contribute to neurological and behavioural abnormalities. By connecting cellular and molecular changes to functional outcomes, we aim to better understand the origins of neurological disability and identify pathways that support recovery and resilience.",
    },

    {
      title: "Clinical Translation and Biomarker Discovery",
      image: "/images/clinical-translation.webp",
      caption: "Hard at work in the lab",
      description: "Despite advances in antifungal therapy, many patients continue to experience severe disease, neurological complications, and poor outcomes. A major challenge remains the lack of reliable tools to predict disease progression and guide clinical decision-making.",
      description2: "Our translational research integrates clinical studies with experimental discoveries to identify biomarkers of disease activity, brain injury, and treatment response. Through close collaboration with clinicians and patients, we seek to accelerate the development of diagnostic and prognostic tools that improve care for people affected by fungal infections of the nervous system.",
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

      <main className="w-full bg-crypto-sand px-4 sm:px-6 md:px-12 py-12 md:py-16">
        <section className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {researchAreas.map((area) => (
              <div key={area.title}>
                <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-2xl">

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

                  <div className="absolute inset-0 bg-crypto-coal/20" />

                  <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                    <h3 className="font-gothic text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">
                      {area.title}
                    </h3>
                  </div>
                </div>

                {/* NEW CAPTION CODE START */}
                {area.caption && (
                  <p className="mt-3 text-sm md:text-base text-gray-500 italic text-center md:text-right">
                    {area.caption}
                  </p>
                )}
                {/* NEW CAPTION CODE END */}

                <div className="mt-4">
                  <div className="font-futura text-gray-700 text-base md:text-lg leading-relaxed">
                    {area.description}
                    <p className="h-6"></p>
                    {area.description2}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}