"use client";

import { useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  // CodeIcon,
  LayoutIcon,
  ServerIcon,
  SmartphoneIcon,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { SiSupabase } from "react-icons/si";
import { TbBrandTypescript, TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

import { cn } from "@/lib/utils";
import Link from "next/link";

const techStack = [
  {
    icon: TbBrandTypescript,
    label: "Typescript",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TbBrandNextjs,
    label: "Nextjs",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ServerIcon,
    label: "Backend & APIs",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: SiSupabase,
    label: "Supabase",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: SmartphoneIcon,
    label: "Responsiveness",
    color: "from-violet-500 to-indigo-500",
  },
  {
    icon: LayoutIcon,
    label: "UI/UX",
    color: "from-violet-500 to-indigo-500",
  },

  { icon: FaReact, label: "React", color: "from-cyan-500 to-blue-500" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/idamvictor", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/idam_victor_x1", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/victor-idam/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/idamvictorx1/",
    label: "Instagram",
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div
      id="home"
      ref={containerRef}
      className="relative min-h-[90vh] overflow-hidden bg-background"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${
              mousePosition.x * 100
            }% ${
              mousePosition.y * 100
            }%, rgba(56, 189, 248, 0.1) 0%, rgba(232, 121, 249, 0.1) 50%, rgba(0, 0, 0, 0) 100%)`,
          }}
        />
        <div className="absolute -left-[10%] top-[20%] h-[300px] w-[300px] animate-pulse rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-[10%] top-[10%] h-[300px] w-[300px] animate-pulse rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y }}
        className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                Available for hire
              </motion.div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Front-End Developer
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-3xl text-lg text-muted-foreground"
              >
                Transforming ideas into elegant, scalable solutions. Specialized
                in building modern web applications with cutting-edge
                technologies.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background hover:text-foreground transition-colors hover:bg-muted"
              >
                <Link href="#portfolio" className="relative z-10">
                  View Projects
                </Link>
                <motion.div
                  className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity group-hover:opacity-20"
                  initial={false}
                  whileHover={{ scale: 1.5, rotate: 12 }}
                />
              </motion.button>
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group rounded-full border border-muted-foreground px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-muted"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Section */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2,
              }}
              className="relative aspect-square"
            >
              {/* Animated border effect */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  scale: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl"
              />

              {/* Profile image container with animated background */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative aspect-square overflow-hidden rounded-full bg-gradient-to-br from-muted to-muted"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 z-0"
                  animate={{
                    background: [
                      "linear-gradient(0deg, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.3) 100%)",
                      "linear-gradient(120deg, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.3) 100%)",
                      "linear-gradient(240deg, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.3) 100%)",
                      "linear-gradient(360deg, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.3) 100%)",
                    ],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 10,
                    ease: "linear",
                  }}
                />
                <div className="relative z-10 h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-muted to-muted">
                  <Image
                    src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1744069087/idam_3d_small_lb6fzg.png"
                    alt="Profile"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover object-center"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Tech Stack */}
            {techStack.map((Item, index) => {
              const angle = (index * 2 * Math.PI) / techStack.length;
              const radius = 45; // Percentage from center
              const x = 37 + radius * Math.cos(angle);
              const y = 40 + radius * Math.sin(angle);

              return (
                <motion.div
                  key={Item.label}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: [-5, 5, -5],
                    x: [-3, 3, -3],
                  }}
                  transition={{
                    scale: {
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    },
                    opacity: { delay: 0.4 + index * 0.1 },
                    y: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 4 + index * 0.5,
                      ease: "easeInOut",
                    },
                    x: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 5 + index * 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    position: "absolute",
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                  className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    className={cn(
                      "group flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br/40 p-[1px]",
                      Item.color
                    )}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-background/40 backdrop-blur-sm transition-colors group-hover:bg-muted">
                      <Item.icon className="h-6 w-6 text-foreground transition-transform group-hover:scale-110" />
                    </div>
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-md"
                  >
                    {Item.label}
                  </motion.span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="h-6 w-4 rounded-full border-2 border-muted-foreground"
          >
            <motion.div
              animate={{ height: ["20%", "80%", "20%"] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="mx-auto h-2 w-1 rounded-full bg-muted-foreground"
            />
          </motion.div>
          <span className="text-sm text-muted-foreground">Scroll</span>
        </div>
      </motion.div>
    </div>
  );
}
