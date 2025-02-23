"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Brand {
  id: number;
  name: string;
  logo: string;
  description: string;
  year: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: "Google",
    logo: "/placeholder.svg?height=120&width=120",
    description: "Search Engine Optimization Project",
    year: "2023",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "/placeholder.svg?height=120&width=120",
    description: "Cloud Infrastructure Development",
    year: "2022",
  },
  {
    id: 3,
    name: "Apple",
    logo: "/placeholder.svg?height=120&width=120",
    description: "iOS App Development",
    year: "2023",
  },
  {
    id: 4,
    name: "Amazon",
    logo: "/placeholder.svg?height=120&width=120",
    description: "E-commerce Platform Integration",
    year: "2021",
  },
  {
    id: 5,
    name: "Meta",
    logo: "/placeholder.svg?height=120&width=120",
    description: "Social Media Analytics Dashboard",
    year: "2022",
  },
  {
    id: 6,
    name: "Netflix",
    logo: "/placeholder.svg?height=120&width=120",
    description: "Streaming Service Optimization",
    year: "2023",
  },
];

export default function BrandShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate total width for smooth infinite scroll
  const cardWidth =
    window.innerWidth < 640
      ? 120
      : window.innerWidth < 768
      ? 140
      : window.innerWidth < 1024
      ? 160
      : 180;
  const cardGap = 40; // Increased gap for better spacing
  const totalWidth = brands.length * (cardWidth + cardGap);

  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = 0;
    const speed = 0.05; // Maintained the same smooth speed

    const animate = (timestamp: number) => {
      if (!isPaused) {
        if (lastTimestamp !== 0) {
          const delta = timestamp - lastTimestamp;
          setScrollPosition((prevPosition) => {
            const newPosition = prevPosition + speed * delta;
            return newPosition >= totalWidth ? 0 : newPosition;
          });
        }
        lastTimestamp = timestamp;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, totalWidth]);

  const triplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center text-4xl font-bold text-white md:text-5xl"
        >
          Brands I&apos;ve Worked With
        </motion.h2>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="pointer-events-none absolute left-0 z-10 h-full w-32 bg-gradient-to-r from-gray-900 to-transparent" />
        <div className="pointer-events-none absolute right-0 z-10 h-full w-32 bg-gradient-to-l from-gray-900 to-transparent" />

        <div
          ref={containerRef}
          className="flex items-center gap-10 px-8 py-8"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
          }}
        >
          {triplicatedBrands.map((brand, index) => (
            <motion.div
              key={`${brand.id}-${index}`}
              className="relative flex h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] md:h-[160px] md:w-[160px] lg:h-[180px] lg:w-[180px] shrink-0 cursor-pointer items-center justify-center"
              onHoverStart={() => setHoveredId(brand.id)}
              onHoverEnd={() => setHoveredId(null)}
              animate={{
                y: hoveredId === brand.id ? -8 : 0,
                scale: hoveredId === brand.id ? 1.1 : 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-2xl">
                {/* Glass background */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    hoveredId === brand.id
                      ? "bg-white/20 backdrop-blur-md"
                      : "bg-white/10 backdrop-blur-sm"
                  }`}
                />

                {/* Logo container */}
                <div className="relative flex h-full w-full items-center justify-center p-6">
                  <motion.div
                    className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
                    animate={{
                      rotate: hoveredId === brand.id ? 360 : 0,
                      scale: hoveredId === brand.id ? 0.9 : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      className="h-full w-full object-contain"
                    />
                  </motion.div>
                </div>

                {/* Popup content */}
                <AnimatePresence>
                  {hoveredId === brand.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {brand.name}
                      </h3>
                      <p className="mt-2 text-center text-sm text-white/80">
                        {brand.description}
                      </p>
                      <span className="mt-2 rounded-full bg-white/10 px-3 py-0.5 text-xs text-white/90">
                        {brand.year}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
