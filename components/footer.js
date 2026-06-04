"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="bg-crypto-earth text-gray-200 py-5 px-8 md:px-28 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-30">
        {/* LEFT COLUMN — LOGO + DESCRIPTION */}
        <div className="w-full flex flex-col items-start md:items-center">
          <div className="w-fit text-left pl-2">
            <div className="relative w-40 h-20 mb-3">
              <Image
                src="/logos/logo-horizontal-half.png"
                alt="Crypto Lab Logo"
                fill
                className="object-contain"
              />
            </div>

            <p className="font-futura text-sm leading-relaxed max-w-sm pb-3">
              The Crypto Lab studies lesion biology, host–pathogen interactions,
              and hypoxia-driven microenvironments in
              <em> Cryptococcus neoformans</em> infections.
            </p>
          </div>
        </div>

        {/* MIDDLE COLUMN — NAVIGATION */}
        <div className="w-full flex flex-col items-start md:items-center">
          <div className="w-fit text-left pl-2">
            <h3 className="font-gothic text-crypto-gold text-xl mb-3">Explore</h3>

            <ul className="space-y-2 font-futura pb-3">
              {["Home", "Research", "Team", "News", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="relative inline-block group"
                  >
                    <span className="transition-colors">{item}</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-crypto-gold transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN — CONTACT + SOCIAL ICONS */}
        <div className="w-full flex flex-col items-start md:items-center">
          <div className="w-fit text-left pl-2">
            <h3 className="font-gothic text-crypto-gold text-xl mb-3">
              Stay Connected
            </h3>

            <p className="font-futura">University of Cape Town</p>
            <p className="font-futura mb-2">Neuroscience Institute, South Africa</p>
            <p className="font-futura">
              Email:{" "}
              <a
                href="mailto:info@cryptolab.org"
                className="relative inline-block text-crypto-gold hover:text-white transition group"
              >
                cryptolab@uct.ac.za
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-crypto-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-6 mt-6 text-crypto-gold text-2xl">
              <a href="https://twitter.com" target="_blank" className="hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-white transition">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" className="hover:text-white transition">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm">
        <p className="font-futura">
          © {new Date().getFullYear()} The Crypto Lab — All Rights Reserved
        </p>
        Website by {" "}

        {/* SMG SIGNATURE + POPUP */}
        <div className="relative inline-block mt-2" ref={popupRef}>
          <button
            onClick={() => setOpen(!open)}
            onMouseEnter={() => setOpen(true)}
            className="font-gothic text-crypto-gold hover:text-white transition"
          >
            SMG
          </button>

          {open && (
            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 p-4 rounded-lg shadow-xl bg-crypto-gold text-white text-center"
            >
              <h4 className="font-gothic text-lg text-white mb-2">
                Want a website like this?
              </h4>

              <a
                href="mailto:gebreseilassiesaba@gmail.com"
                className="text-crypto-ochre font-semibold underline hover:text-white transition"
              >
                gebreseilassiesaba@gmail.com
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
