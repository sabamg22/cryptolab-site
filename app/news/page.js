"use client";

import Hero from "../../components/hero";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function News() {
  const [startIndex, setStartIndex] = useState(0);

  const stories = [
    {
      image: "/images/story3.webp",
      date: "14 April 2026",
      title: "UCT researchers join multi-million-pound fungal fight",
      text: "Researchers at the University of Cape Town are playing a leading role in a significant international collaboration to fast-track the understanding of fungal diseases that claim about 2.5 million lives each year. The funding of £4.5 million (approximately R100 million)...",
      link: "https://www.news.uct.ac.za/article/-2026-04-14-uct-researchers-join-multi-million-pound-fungal-fight",
    },
    {
      image: "/images/story4.webp",
      date: "10 April 2026",
      title:
        "Cape Town researchers lead R100 million initiative to fight deadly fungal infections",
      text: "Researchers at the University of Cape Town are part of a major international effort backed by about R100 million to combat fungal infections that kill an estimated 2.5 million people worldwide each year...",
      link: "https://iol.co.za/capeargus/news/2026-04-10-cape-town-researchers-lead-r100-million-initiative-to-fight-deadly-fungal-infections/",
    },
    {
      image: "/images/story2.webp",
      date: "22 September 2025",
      title:
        "For advancing neuroinfectious disease research, and her groundbreaking work on cryptococcal meningitis",
      text: "A deadly fungal infection is claiming more lives in sub-Saharan Africa than tuberculosis among people living with HIV, yet few outside the continent even know its name...",
      link: "https://nstf.org.za/2025/09/22/dr-rachael-dangarembizi/",
    },
    {
      image: "/images/story1.webp",
      date: "14 July 2023",
      title:
        "Fungal infections in the brain aren’t just the stuff of movies – Africa grapples with a deadly epidemic",
      text: "In the 2023 American post-apocalyptic drama television series The Last of Us, humans are plunged towards extinction as a fungal infection of the brain zombie-fies most of the species...",
      link: "https://www.gavi.org/vaccineswork/fungal-infections-brain-arent-just-stuff-movies-africa-grapples-deadly-epidemic",
    },
  ];

  const visibleStories = [0, 1, 2].map(
    (offset) => stories[(startIndex + offset) % stories.length]
  );

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <>
      <Hero
        image="/images/hero-news.webp"
        title="Lab News"
        subtitle="Updates, publications, and achievements"
      />

      <section className="w-full bg-crypto-desert py-20 px-8 md:px-16 lg:px-32">
        <div className="mb-10">
          <h2 className="font-gothic text-crypto-earth text-4xl md:text-5xl font-bold">
            Featured Stories
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            aria-label="Previous story"
            className="absolute left-[-60px] md:left-[-80px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-crypto-sand shadow-xl hover:bg-crypto-ochre hover:text-white transition-all duration-300 hover:scale-110"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next story"
            className="absolute right-[-60px] md:right-[-80px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-crypto-sand shadow-xl hover:bg-crypto-ochre hover:text-white transition-all duration-300 hover:scale-110"
          >
            <FaArrowRight />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {visibleStories.map((story, index) => (
              <article
                key={`${story.title}-${index}`}
                className="bg-crypto-sand rounded-lg p-4 shadow-md h-[520px] flex flex-col"
              >
                <div className="relative w-full h-[180px] mb-4 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <p className="text-crypto-ochre font-bold uppercase text-xs mb-2">
                  {story.date}
                </p>

                <h3 className="font-gothic font-bold text-xl text-crypto-coal mb-3">
                  {story.title}
                </h3>

                <p className="text-gray-700 mb-3">{story.text}</p>

                <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-crypto-ochre font-bold hover:text-crypto-earth transition mt-auto"
                >
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full bg-crypto-sand py-20 px-8 md:px-16 lg:px-32">
        <h2 className="font-gothic text-4xl md:text-5xl font-bold mb-6">
          Lab News & Updates
        </h2>

        <ul className="space-y-6">
          {[
            {
              text: "Congratulations to our PI on being promoted to Associate Professor!",
              link: "#",
            },
            {
              text: "Upcoming: Manuscript on lesion hypoxia under review.",
              link: "#",
            },
            {
              text: "New imaging pipeline released.",
              link: "#",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="group relative border-l-4 border-crypto-red pl-4 pr-8 hover:border-crypto-ochre cursor-pointer"
            >
              <a href={item.link}>
                <p className="text-2xl group-hover:text-crypto-ochre">
                  {item.text}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}