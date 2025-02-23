"use client";

import { useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  CodeIcon,
  DatabaseIcon,
  GlobeIcon,
  LayoutIcon,
  ServerIcon,
  SmartphoneIcon,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { cn } from "@/lib/utils";

const techStack = [
  { icon: CodeIcon, label: "Frontend", color: "from-blue-500 to-cyan-500" },
  { icon: ServerIcon, label: "Backend", color: "from-purple-500 to-pink-500" },
  {
    icon: DatabaseIcon,
    label: "Database",
    color: "from-orange-500 to-red-500",
  },
  { icon: GlobeIcon, label: "API", color: "from-green-500 to-emerald-500" },
  { icon: LayoutIcon, label: "UI/UX", color: "from-violet-500 to-indigo-500" },
  {
    icon: SmartphoneIcon,
    label: "Mobile",
    color: "from-yellow-500 to-amber-500",
  },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-zinc-100 dark:bg-zinc-900"
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
        <div className="absolute -left-[10%] top-[20%] h-[300px] w-[300px] animate-pulse rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute -right-[10%] top-[10%] h-[300px] w-[300px] animate-pulse rounded-full bg-purple-500/20 blur-[120px]" />
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
                className="inline-flex rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-500 dark:bg-blue-500/20"
              >
                Available for hire
              </motion.div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
                Full Stack Developer
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-3xl text-lg text-zinc-600 dark:text-zinc-400"
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
                className="group relative overflow-hidden rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-20"
                  initial={false}
                  whileHover={{ scale: 1.5, rotate: 12 }}
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group rounded-full border border-zinc-200 px-8 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                Contact Me
              </motion.button>
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
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
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl"
              />

              {/* Profile image container with animated background */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative aspect-square overflow-hidden rounded-full bg-gradient-to-br from-zinc-200 to-zinc-100 p-2 dark:from-zinc-800 dark:to-zinc-900"
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
                <div className="relative z-10 h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-zinc-100 to-white p-4 dark:from-zinc-900 dark:to-zinc-800">
                  <Image
                    src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1740053198/man-with-glasses-blue-shirt-standing-with-his-arms-crossed-transparent-background_838900-93620_xrsq9b.jpg"
                    alt="Profile"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Tech Stack */}
            {techStack.map((Item, index) => {
              const angle = (index * 2 * Math.PI) / techStack.length;
              const radius = 42; // Percentage from center
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);

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
                      "group flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br p-[1px]",
                      Item.color
                    )}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-white/90 transition-colors group-hover:bg-white/80 dark:bg-zinc-900/90 dark:group-hover:bg-zinc-900/80">
                      <Item.icon className="h-6 w-6 text-zinc-900 transition-transform group-hover:scale-110 dark:text-zinc-100" />
                    </div>
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur-md dark:bg-zinc-800/80 dark:text-zinc-100"
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
            className="h-6 w-4 rounded-full border-2 border-zinc-600 dark:border-zinc-400"
          >
            <motion.div
              animate={{ height: ["20%", "80%", "20%"] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="mx-auto h-2 w-1 rounded-full bg-zinc-600 dark:bg-zinc-400"
            />
          </motion.div>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            Scroll
          </span>
        </div>
      </motion.div>
    </div>
  );
}
