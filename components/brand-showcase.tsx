"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Brand {
  id: number;
  name: string;
  logo: string;
  description: string;
  year: string;
  width?: number;
  height?: number;
}

const brands: Brand[] = [
  {
    id: 1,
    name: "Bridged Connect",
    logo: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1745916598/image_qpggdp.png",
    description: "Search Engine Optimization Project",
    year: "2023",
    width: 40,
    height: 40,
  },
  {
    id: 2,
    name: "Tenece",
    logo: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1741907971/teneceee-1536x1024-removebg-preview_1_x3d0sh.svg",
    description: "",
    year: "2024",
    width: 200,
    height: 100,
  },
  {
    id: 3,
    name: "Learnable",
    logo: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1741910396/learnable-removebg-preview_1_zhslxr.svg",
    description: "",
    year: "2024",
    width: 90,
    height: 90,
  },
  {
    id: 4,
    name: "Genesys",
    logo: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1741909471/genesys_tech_hub-removebg-preview_nmysqv.png",
    description: "",
    year: "2024",
    width: 120,
    height: 100,
  },
  {
    id: 5,
    name: "Serene",
    logo: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1741911483/serene_mbpg6c.png",
    description: "",
    year: "2024",
    width: 100,
    height: 100,
  },
  {
    id: 6,
    name: "Modern Ideal college",
    logo: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1745919113/Screenshot_2025-04-29_102914-removebg-preview_wubpma.png",
    description: "Streaming Service Optimization",
    year: "2023",
    width: 90,
    height: 90,
  },
];

export default function BrandShowcase() {
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

  const cardGap = 40;
  const totalWidth = brands.length * (cardWidth + cardGap);

  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = 0;
    const speed = 0.05;

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
        <h2 className="mb-12 text-center text-4xl font-bold text-foreground md:text-5xl">
          Brands I&apos;ve Worked With
        </h2>
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
            <div
              key={`${brand.id}-${index}`}
              className="relative flex h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] md:h-[160px] md:w-[160px] lg:h-[180px] lg:w-[180px] shrink-0 items-center justify-center rounded-2xl "
            >
              <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 flex items-center justify-center">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="h-full w-full object-contain transition-all duration-300 brightness-0 dark:brightness-0 dark:invert"
                  width={brand.width || 100}
                  height={brand.height || 100}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
