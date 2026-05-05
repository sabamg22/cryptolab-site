"use client";

import Hero from "../../components/hero";
import { FaEnvelope, FaLinkedin, FaInstagram, FaXTwitter, FaCopy } from "react-icons/fa6";
import { useState } from "react";

export default function Contact() {
  const email = "cryptolab@uct.ac.za"; // ensure email is defined before use
  const [copied, setCopied] = useState(null);

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <>
      <Hero
        image="/images/hero-contact.webp"
        title="Contact Us"
        subtitle="Get in touch with the CryptoLab"
      />

      <div className="w-full bg-crypto-sand py-20 px-8 md:px-16 lg:px-32">
        <h2 className="font-gothic text-4xl md:text-5xl font-bold leading-tight mb-6">
          Contact Us
        </h2>

        <p className="text-xl max-w-3xl mb-10">
          We are based in the Department of Human Biology, University of Cape Town.
          For research enquiries, collaborations, or student opportunities, reach out below.
        </p>

        <div className="space-y-6 text-lg">
          {/* EMAIL WITH ICON + COPY BUTTON */}
          <div className="flex items-center gap-3">
            <span className="font-gothic text-crypto-dusk font-bold flex items-center gap-2">Email:</span>

            <a 
              href={`mailto:${email}`}
              className="email-underline font-mono flex items-center gap-2 text-crypto-shale hover:text-crypto-ochre transition-colors duration-300"
            >
              <FaEnvelope className="text-crypto-ochre opacity-80 group-hover:text-crypto-gold group-hover:opacity-100 transition-colors duration-300" />
              {email}
            </a>

            {/* COPY BUTTON */}
            <div className="relative">
              <button
                onClick={() => handleCopy(email)}
                className="text-crypto-shale hover:text-crypto-ochre opacity-40 hover:opacity-100 transition-all"
              >
                <FaCopy />
              </button>

              {copied === email && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs text-crypto-ochre opacity-0 animate-fadeInOut whitespace-nowrap">
                  Copied!
                </span>
              )}
            </div>
          </div>

          {/* ADDRESS */}
          <p>
            <span className="font-gothic font-bold text-crypto-dusk">Address: </span>
            UCT Anatomy Building, Health Sciences Campus,
            <br />Observatory, Cape Town, 7925
            <br />Western Cape, South Africa
          </p>

          {/* SOCIAL ICONS */}
          <div>
            <span className="font-gothic font-bold text-crypto-dusk">Social media: </span>
            <div className="flex gap-6 mt-2 text-2xl">
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-crypto-shale opacity-80 hover:text-crypto-ochre hover:opacity-100 transition-colors duration-300" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-crypto-shale opacity-80 hover:text-crypto-ochre hover:opacity-100 transition-colors duration-300" />
              </a>
              <a href="#" aria-label="X / Twitter">
                <FaXTwitter className="text-crypto-shale opacity-80 hover:text-crypto-ochre hover:opacity-100 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
