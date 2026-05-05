"use client";

import Hero from "../../components/hero";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function News() {
  const [startIndex, setStartIndex] = useState(0);

  const stories = [
    {
      image: "/images/story1.webp",
      date: "14 July 2023",
      title:
        "Fungal infections in the brain aren’t just the stuff of movies – Africa grapples with a deadly epidemic",
      text: "In the 2023 American post-apocalyptic drama television series The Last of Us, humans are plunged towards extinction as a fungal infection of the brain zombie-fies most of the species...",
      link: "https://www.gavi.org/vaccineswork/fungal-infections-brain-arent-just-stuff-movies-africa-grapples-deadly-epidemic",
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
      image: "/images/story3.webp",
      date: "14 April 2026",
      title: "UCT researchers join multi-million-pound fungal fight",
      text: "Researchers at the University of Cape Town are playing a leading role in a significant international collaboration to fast-track the understanding of fungal diseases...",
      link: "https://www.news.uct.ac.za/article/-2026-04-14-uct-researchers-join-multi-million-pound-fungal-fight",
    },
    {
      image: "/images/story4.webp",
      date: "10 April 2025",
      title: "Cape Town researchers lead R100 million initiative to fight deadly fungal infections",
      text: "Researchers at the University of Cape Town are part of a major international effort backed by about R100 million to combat fungal infections that kill an estimated 2.5 million people worldwide each year...",
      link: "#",
    },
  ];

  const visibleStories = [0, 1, 2].map(
    (offset) => stories[(startIndex + offset) % stories.length]
  );

  const nextSlide = () =>
    setStartIndex((prev) => (prev + 1) % stories.length);

  const prevSlide = () =>
    setStartIndex((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <>
      <Hero
        image="/images/hero-news.webp"
        title="Lab News"
        subtitle="Updates, publications, and achievements"
      />

      {/* FEATURED STORIES */}
      <section className="w-full bg-crypto-sand py-20 px-8 md:px-16 lg:px-32">
        <h2 className="font-gothic text-crypto-earth text-4xl md:text-5xl font-bold mb-6">
          Featured Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {visibleStories.map((story, index) => (
            <article
              key={`${story.title}-${index}`}
              className="bg-crypto-sand rounded-lg p-4 shadow-md"
            >
              <div className="relative h-56 w-full mb-4 rounded-md overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
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
                className="underline text-crypto-ochre font-bold hover:text-crypto-earth transition"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>

        {/* BIG CENTERED ARROWS */}
        <div className="flex justify-center gap-10 mt-14">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-crypto-sand shadow-md hover:bg-crypto-ochre hover:text-white transition-all duration-300 hover:scale-110"
          >
            <FaArrowLeft className="text-2xl" />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-crypto-sand shadow-md hover:bg-crypto-ochre hover:text-white transition-all duration-300 hover:scale-110"
          >
            <FaArrowRight className="text-2xl" />
          </button>
        </div>
      </section>

      {/* UPDATES */}
      <div className="w-full bg-crypto-desert py-20 px-8 md:px-16 lg:px-32">
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
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const emoji = e.currentTarget.querySelector(".emoji");
                if (emoji) {
                  emoji.style.left = `${e.clientX - rect.left}px`;
                  emoji.style.top = `${e.clientY - rect.top}px`;
                }
              }}
            >
              <span className="emoji pointer-events-none absolute opacity-0 text-2xl transition group-hover:opacity-100 -translate-x-1/2 -translate-y-full">
                🥳
              </span>

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