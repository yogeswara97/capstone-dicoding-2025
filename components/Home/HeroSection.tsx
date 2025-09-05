"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import FancyButton from "../ui/FancyButton";

const viruses = [
  { top: "3%", left: "12%", size: 80, delay: "0s" },
  { top: "12%", left: "65%", size: 90, delay: "0.8s" },
  { top: "45%", left: "8%", size: 70, delay: "1.5s" },
  { top: "68%", left: "78%", size: 85, delay: "2.2s" },
  { top: "72%", left: "18%", size: 75, delay: "2.8s" },
  { top: "52%", left: "58%", size: 65, delay: "0.6s" },
  { top: "82%", left: "48%", size: 100, delay: "1.7s" },
  { top: "22%", left: "42%", size: 70, delay: "1.3s" },
  { top: "75%", left: "32%", size: 85, delay: "2.5s" },
  { top: "40%", left: "60%", size: 90, delay: "0.9s" },
  { top: "15%", left: "30%", size: 65, delay: "2.1s" },
  { top: "85%", left: "20%", size: 80, delay: "2.9s" },
];

export default function HeroSection() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setScale(0.6);
      else if (window.innerWidth < 1024) setScale(0.8);
      else setScale(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative xl:min-h-screen flex items-center py-20 lg:py-10">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-400 to-red-900 opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* Left Text */}
        <div className="text-left text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-semibold leading-snug md:leading-tight">
            Early detection of <br /> pneumonia for healthier <br /> lungs and better lives.
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-red-100 max-w-md">
            Stay informed, get checked, and protect your respiratory health.
          </p>
          <div className="mt-4 sm:mt-6">
            <FancyButton />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end relative mt-8 md:mt-0">
          <div className="relative w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
            <Image src="/assets/lungs.png" alt="lungs" fill className="object-contain relative z-0" priority />

            {/* Floating Viruses */}
            {viruses.map((v, i) => (
              <Image
                key={i}
                src="/assets/virus_2.png"
                alt="virus"
                width={v.size * scale}
                height={v.size * scale}
                className="absolute animate-float"
                style={{ top: v.top, left: v.left, animationDelay: v.delay }}
                priority
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
