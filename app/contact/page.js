"use client";

import Hero from "../../components/hero";
import { FaEnvelope, FaLinkedin, FaInstagram, FaXTwitter, FaCopy } from "react-icons/fa6";
import { useState } from "react";

export default function Contact() {
  const email = "cryptolab@uct.ac.za";
  const [copied, setCopied] = useState(null);
  
  // New state to track the form submission status
  const [status, setStatus] = useState("");

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 1500);
  };

  // New function to handle the form submission in the background
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xzdqbwga", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // This clears all the input fields!
        setTimeout(() => setStatus(""), 5000); // Clear the success message after 5 seconds
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <Hero
        image="/images/hero-contact.webp"
        title="Contact Us"
        subtitle="Get in touch with the CryptoLab"
      />

      <div className="w-full bg-crypto-sand py-20 px-8 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN: Contact Information */}
          <div>
            <h2 className="font-gothic text-4xl md:text-5xl font-bold leading-tight mb-6">
              Contact Us
            </h2>

            <p className="text-xl max-w-xl mb-6 text-crypto-shale">
              We are based in the Department of Human Biology, University of Cape Town.
              For research enquiries, collaborations, or student opportunities, reach out to us.
            </p>

            <div className="space-y-6 text-lg">

              {/*<div className="flex items-center gap-3">
                <span className="font-gothic text-crypto-dusk font-bold flex items-center gap-2">Email:</span>

                <a 
                  href={`mailto:${email}`}
                  className="email-underline font-mono flex items-center gap-2 text-crypto-shale hover:text-crypto-ochre transition-colors duration-300 group"
                >
                  <FaEnvelope className="text-crypto-ochre opacity-80 group-hover:text-crypto-gold group-hover:opacity-100 transition-colors duration-300" />
                  {email}
                </a>

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
              </div>*/}

              {/* ADDRESS */}
              <p className="text-crypto-shale">
                <span className="font-gothic font-bold text-crypto-dusk">Address: </span>
                <br />UCT Anatomy Building, Health Sciences Campus,
                <br />Observatory, Cape Town, 7925
                <br />Western Cape, South Africa
              </p>

              {/* SOCIAL ICONS */}
              <div>
                <span className="font-gothic font-bold text-crypto-dusk">Social media: </span>
                <p className="text-crypto-ochre italic">Coming soon</p>
                <div className="flex gap-6 mt-3 text-2xl">
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

          {/* RIGHT COLUMN: Contact Form */}
          <div className="bg-black/5 p-8 rounded-xl border border-black/10 relative">
            <h3 className="font-gothic text-2xl font-bold text-crypto-dusk mb-6">Send us a message</h3>
            
            {/* Notice the form no longer has an action attribute, it uses onSubmit instead */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full bg-white/70 text-gray-800 placeholder-gray-500 rounded p-4 outline-none focus:ring-2 focus:ring-crypto-ochre focus:bg-white transition-all shadow-sm"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full bg-white/70 text-gray-800 placeholder-gray-500 rounded p-4 outline-none focus:ring-2 focus:ring-crypto-ochre focus:bg-white transition-all shadow-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full bg-white/70 text-gray-800 placeholder-gray-500 rounded p-4 outline-none focus:ring-2 focus:ring-crypto-ochre focus:bg-white transition-all shadow-sm"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Institution / Company"
                  className="w-full bg-white/70 text-gray-800 placeholder-gray-500 rounded p-4 outline-none focus:ring-2 focus:ring-crypto-ochre focus:bg-white transition-all shadow-sm"
                />
              </div>

              <div>
                <select 
                  name="interest"
                  className="w-full bg-white/70 text-gray-600 rounded p-4 outline-none focus:ring-2 focus:ring-crypto-ochre focus:bg-white transition-all cursor-pointer shadow-sm"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>I'm interested in...</option>
                  <option value="research">Research Collaboration</option>
                  <option value="study">Postgraduate Studies</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  className="w-full bg-white/70 text-gray-800 placeholder-gray-500 rounded p-4 outline-none focus:ring-2 focus:ring-crypto-ochre focus:bg-white transition-all resize-y shadow-sm"
                  required
                ></textarea>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={`text-white font-medium py-3 px-8 rounded transition-colors w-full md:w-auto shadow-md ${
                    status === "submitting" 
                      ? "bg-gray-400 cursor-not-allowed" 
                      : "bg-crypto-ochre hover:bg-crypto-dusk"
                  }`}
                >
                  {status === "submitting" ? "Sending..." : "Submit"}
                </button>

                {/* Status Messages */}
                {status === "success" && (
                  <span className="text-green-700 font-medium">Message sent successfully!</span>
                )}
                {status === "error" && (
                  <span className="text-red-600 font-medium">Oops! There was a problem.</span>
                )}
              </div>
              
            </form>
          </div>

        </div>
      </div>
    </>
  );
}