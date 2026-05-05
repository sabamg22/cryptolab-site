"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [shrink, setShrink] = useState(0);
  const [logoVariant, setLogoVariant] = useState("default");
  const [earlyTrigger, setEarlyTrigger] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openResearch, setOpenResearch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const effectiveScrolled = scrolled || openMenu;
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (document.body.classList.contains("hero-dark")) {
      setLogoVariant("light");
    } else {
      setLogoVariant("default");
    }
  }, []);

  useEffect(() => {
    const hero = document.getElementById("hero");
    setEarlyTrigger(!!hero && hero.classList.contains("hero-has-children"));

    setScrolled(false);
    setShrink(0);
    setOpenResearch(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const heroHeight = hero.offsetHeight;
      const navHeight = isMobile ? 60 : 100;
      const scrollY = window.scrollY;
      const triggerPoint = heroHeight - navHeight;

      if (earlyTrigger) {
        setScrolled(scrollY > 0);
        setShrink(Math.min(scrollY / 80, isMobile ? 0.7 : 1));
      } else {
        setScrolled(scrollY >= triggerPoint);

        if (scrollY <= triggerPoint) {
          setShrink(0);
        } else {
          setShrink(Math.min((scrollY - triggerPoint) / 80, 1));
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [earlyTrigger, isMobile]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!openMenu) return;

    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpenMenu(false);
        setOpenResearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  const logoMap = {
    default: "/logos/logo-horizontal-default.png",
    light: "/logos/logo-horizontal-light.png",
    scrolled: "/logos/logo-horizontal-dark.png",
  };

  const maxSize = isMobile ? 100 : 240;
  const minSize = isMobile ? 70 : 120;
  const currentSize = maxSize - (maxSize - minSize) * shrink;

  const navItems = ["Home", "News", "Team", "Contact"];

  if (!hydrated) return null;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        effectiveScrolled ? "bg-crypto-earth shadow-lg" : "bg-transparent"
      }`}
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between px-6"
        style={{
          paddingTop: `${8 - shrink * 6}px`,
          paddingBottom: `${8 - shrink * 6}px`,
        }}
      >
        <Link href="/">
          <Image
            src={effectiveScrolled ? logoMap.scrolled : logoMap[logoVariant]}
            alt="Crypto Lab Logo"
            width={currentSize}
            height={currentSize}
            className="object-contain transition-all"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8 font-futura text-lg">
          <Link href="/" className="text-white hover:text-crypto-gold">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenResearch(true)}
            onMouseLeave={() => setOpenResearch(false)}
          >
            <Link href="/research" className="text-white hover:text-crypto-gold">
              Research
            </Link>

            {openResearch && (
              <div className="absolute left-0 top-full pt-3">
                <div className="w-56 rounded-md bg-crypto-earth shadow-lg border border-white/10 overflow-hidden">
                  <Link
                    href="/research"
                    className="block px-5 py-3 text-white hover:bg-crypto-sand hover:text-crypto-earth transition"
                  >
                    Research Overview
                  </Link>

                  <Link
                    href="/publications"
                    className="block px-5 py-3 text-white hover:bg-crypto-sand hover:text-crypto-earth transition"
                  >
                    Publications
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navItems.slice(1).map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="text-white hover:text-crypto-gold"
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          ref={buttonRef}
          className="md:hidden text-white text-3xl"
          onClick={() => setOpenMenu(!openMenu)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        ref={menuRef}
        className={`md:hidden bg-crypto-earth text-white font-futura flex flex-col gap-4 px-6 py-1 transition-all overflow-hidden ${
          openMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          href="/"
          className="text-lg hover:text-crypto-gold"
          onClick={() => setOpenMenu(false)}
        >
          Home
        </Link>

        <button
          className="text-left text-lg hover:text-crypto-gold"
          onClick={() => setOpenResearch(!openResearch)}
        >
          Research ▾
        </button>

        {openResearch && (
          <div className="flex flex-col gap-3 pl-4 border-l border-white/20">
            <Link
              href="/research"
              className="text-base hover:text-crypto-gold"
              onClick={() => {
                setOpenMenu(false);
                setOpenResearch(false);
              }}
            >
              Research Overview
            </Link>

            <Link
              href="/publications"
              className="text-base hover:text-crypto-gold"
              onClick={() => {
                setOpenMenu(false);
                setOpenResearch(false);
              }}
            >
              Publications
            </Link>
          </div>
        )}

        {["News", "Team", "Contact"].map((label) => (
          <Link
            key={label}
            href={`/${label.toLowerCase()}`}
            className="text-lg hover:text-crypto-gold"
            onClick={() => setOpenMenu(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}