"use client";

import Image from "next/image";
import Hero from "../../components/hero";
import { FaEnvelope, FaCopy, FaLinkedin } from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";
import { useState } from "react";

function formatBio(text) {
  const parts = text.split(/(\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export default function Team() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    setCopied(email);
    setTimeout(() => setCopied(null), 1200);
  };

  const team = [
    {
      name: "A/Prof Rachael Dangarembizi",
      role: "Principal Investigator",
      image: "/images/team/rachael.webp",
      linkedin: "https://www.linkedin.com/in/rachael-dangarembizi-3a588718/",
      orcid: "https://orcid.org/0000-0003-2211-0625",
      scholar: "https://scholar.google.com/citations?user=2UktjzfwhvQC&hl=en",
      bio: "I am a neurobiologist who runs a research group that focuses on the neuroimmune response to fungal infections of the brain. My research aims to gain an understanding of how brain cells interact with fungal pathogens and I am currently working on Cryptococcal infections. I employ rodent models and organotypic brain slice cultures from clinical biospecimens to study the neuroinflammatory mechanisms underlying neurological damage in neurocryptococcosis.",
    },
    {
      name: "Nawaal Samsodien",
      role: "Lab Manager",
      image: "/images/team/nawaal.webp",
      linkedin: "https://www.linkedin.com/in/nawaal-samsodien-77485b116/",
      bio: "Nawaal Samsodien is the Lab Manager of the Crypto Lab, focused on maintaining regulatory and biosafety compliance while ensuring smooth day-to-day laboratory operations. She oversees processes, supports research activities, and helps create a safe, efficient, and well-managed lab environment.",
    },
    {
      name: "Dr Amalia Awala",
      role: "Postdoctoral Researcher",
      image: "/images/team/amalia.webp",
      linkedin: "https://www.linkedin.com/in/amalia-naita-awala-phd-149692139/",
      orcid: "https://orcid.org/0000-0002-8889-5675",
      scholar: "https://scholar.google.com/citations?user=50G3mlIAAAAJ&hl=en&oi=ao",
      bio: "Postdoctoral researcher",
    },
    {
      name: "Dr Joel Defo",
      role: "Postdoctoral Researcher",
      image: "/images/team/joel.png",
      linkedin: "https://linkedin.com/",
      bio: "Dr. Joel Defo is a postdoctoral scientist and bioinformatician who recently obtained his PhD in Human Genetics from the University of Cape Town. His work focuses on the analysis of complex datasets generated from single-nucleus and single-cell RNA sequencing, as well as spatial transcriptomics, to study cryptococcal meningitis in both mouse models and human samples. His research aims to identify distinct cell populations and characterize their transcriptional profiles during infection.",
    },
    {
      name: "Maahir Kauchali",
      role: "PhD Student",
      image: "/images/team/maahir.webp",
      linkedin: "https://www.linkedin.com/in/maahir-kauchali-43393123b/",
      bio: "My name is Maahir Kauchali, and I am a neuroscientist from Johannesburg. I've always been magnetized to studying human biology and its systems. I fell in love with all things neuroscience during my undergrad degree which prompted an Honours and Masters degree in neuroscience. I'm interested in learning about brain injury and neuroinflammation during disease states.",
    },
    {
      name: "Simran Patel",
      role: "PhD Student",
      image: "/images/team/simran.webp",
      linkedin: "https://www.linkedin.com/in/simran-atulkumar-patel-4339153a9/",
      bio: "My interest in how dilated perivascular spaces drives downstream neurofluid complications guides much of my research. It has led me to explore aspects of fungal aggregation relative to the perivascular compartment, glymphatic function, and meningeal lymphatic drainage during murine models of cryptococcal meningitis. ",
    },
    {
      name: "Yanga Pato",
      role: "PhD Student",
      image: "/images/team/yanga.webp",
      bio: "My research investigates how cryptococcal meningitis disrupts brain metabolism at cellular and spatial resolution. Using a murine model, multi-omics and functional approaches are combined to map infection-driven metabolic disruption underlying neuropathology. This work links metabolic mechanisms to neurological injury, highlighting potential intervention targets.",
    },
    {
      name: "Lilitha Cengani",
      role: "Master's Student",
      image: "/images/team/lilitha.webp",
      linkedin: "https://www.linkedin.com/in/lilitha-cengani-483536263/",
      bio: "Master's student.",
    },
    {
      name: "Saba Gebreseilassie",
      role: "Master's Student",
      image: "/images/team/saba.webp",
      linkedin: "https://www.linkedin.com/in/saba-gebreseilassie/",
      bio: "Current research investigates spatial transcriptomic profiling of cryptococcal infection. Work spans molecular, neurophysiological, and computational approaches. Interested in theoretical neuroscience.",
    },
    {
      name: "Blessing Gumbu",
      role: "Master's Student",
      image: "/images/team/blessing.webp",
      linkedin: "https://www.linkedin.com/in/blessing-gumbu-1a968a231/",
      bio: "Blessing's work centres on how *Cryptococcus neoformans* engages with central nervous system cells, leveraging multi-parameter flow cytometry to map host-pathogen interactions in brain tissue. Through his YouTube channel and podcasts, he creates candid, relatable conversations about the real experience of building a life in science. A writer and poet at heart, Blessing will pick up the book every single time before he ever considers watching the movie adaptation.",
    },
    {
      name: "Masilo Matlakala",
      role: "Master's Student",
      image: "/images/team/masilo.webp",
      bio: "Master's student.",
    },
  ];

  return (
    <div className="font-futura text-white bg-black min-h-screen">
      <Hero
        image="/images/hero-team.webp"
        title="The Team"
        subtitle="Meet Our Researchers"
      />

      <section className="w-full bg-crypto-earth px-8 md:px-16 lg:px-32 py-20 space-y-12">
        {team.map((member, idx) => {
          const email =
            member.name
              .toLowerCase()
              .replace(/(a\/prof|prof|dr)\s+/gi, "")
              .replace(/[^a-z\s]/g, "")
              .trim()
              .replace(/\s+/g, ".") + "@uct.ac.za";

          return (
            <div
              key={idx}
              className="border border-white/20 p-6 rounded-lg bg-black/30 hover:border-crypto-gold transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="md:w-2/3">
                  <h3 className="text-2xl font-gothic underline decoration-[0.5px] underline-offset-4 text-white mb-2">
                    {member.name}
                  </h3>

                  <p className="text-crypto-gold text-sm mb-3">
                    {member.role}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {formatBio(member.bio)}
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${email}`}
                      className="email-underline text-crypto-gold hover:text-white text-sm font-mono flex items-center gap-2 transition-colors"
                    >
                      <FaEnvelope className="text-white" /> {email}
                    </a>

                    <div className="relative">
                      <button
                        onClick={() => handleCopy(email)}
                        className="text-crypto-ochre hover:text-crypto-gold opacity-40 hover:opacity-100 transition-all"
                      >
                        <FaCopy />
                      </button>

                      {copied === email && (
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs text-crypto-gold animate-fadeInOut whitespace-nowrap">
                          Copied!
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-crypto-ochre hover:text-crypto-gold opacity-60 hover:opacity-100 transition-all"
                      >
                        <FaLinkedin size={20} />
                      </a>
                    )}

                    {member.orcid && (
                      <a
                        href={member.orcid}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-crypto-ochre hover:text-crypto-gold opacity-60 hover:opacity-100 transition-all"
                      >
                        <SiOrcid size={20} />
                      </a>
                    )}

                    {member.scholar && (
                      <a
                        href={member.scholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-crypto-ochre hover:text-crypto-gold opacity-60 hover:opacity-100 transition-all"
                      >
                        <SiGooglescholar size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}