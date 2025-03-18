"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
    logo: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1740652807/Google_2011_logo-600x206_nilxnl.png",
    description: "Search Engine Optimization Project",
    year: "2023",
  },
  {
    id: 2,
    name: "Tenece",
    logo: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1741907971/teneceee-1536x1024-removebg-preview_1_x3d0sh.svg",
    description: "",
    year: "2024",
  },
  {
    id: 3,
    name: "Learnable",
    logo: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1741910396/learnable-removebg-preview_1_zhslxr.svg",
    description: "",
    year: "2024",
  },
  {
    id: 4,
    name: "Genesys",
    logo: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1741909471/genesys_tech_hub-removebg-preview_nmysqv.png",
    description: "",
    year: "2024",
  },
  {
    id: 5,
    name: "Serene",
    logo: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1741911483/serene_mbpg6c.png",
    description: "",
    year: "2024",
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
  const [cardWidth, setCardWidth] = useState(120);

  useEffect(() => {
    const updateCardWidth = () => {
      const width =
        window.innerWidth < 640
          ? 120
          : window.innerWidth < 768
          ? 140
          : window.innerWidth < 1024
          ? 160
          : 180;
      setCardWidth(width);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

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
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-background via-muted to-background py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center text-4xl font-bold text-foreground md:text-5xl"
        >
          Brands I&apos;ve Worked With
        </motion.h2>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="pointer-events-none absolute left-0 z-10 h-full w-8 md:w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 z-10 h-full w-8 md:w-32 bg-gradient-to-l from-background to-transparent" />

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
                      ? "bg-foreground/10 backdrop-blur-md"
                      : ""
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
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      className="h-full w-full object-contain"
                      fill
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
                      className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
                    >
                      <h3 className="text-lg font-semibold text-foreground">
                        {brand.name}
                      </h3>
                      <p className="mt-2 text-center text-sm text-muted-foreground">
                        {brand.description}
                      </p>
                      <span className="mt-2 rounded-full bg-muted px-3 py-0.5 text-xs text-muted-foreground">
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
