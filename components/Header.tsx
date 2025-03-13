"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, Code, Folder, Briefcase, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  const navItems = useMemo(
    () => [
      { name: "Home", url: "#home", icon: Home },
      { name: "About", url: "#about", icon: User },
      { name: "Skills", url: "#skills", icon: Code },
      { name: "Portfolio", url: "#portfolio", icon: Folder },
      { name: "Experience", url: "#experience", icon: Briefcase },
      { name: "Contact", url: "#contact", icon: Mail },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(navItems[0].name);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial active tab based on current path
    const path = window.location.pathname;
    const currentTab = navItems.find((item) => item.url === path);
    if (currentTab) {
      setActiveTab(currentTab.name);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navItems]); // Added navItems to dependencies

  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto px-4 flex items-center h-24 justify-between">
        <Link href="/" className="text-2xl font-bold">
          Vice<span className="text-primary">.</span>
        </Link>

        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>

      <div className="fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:mt-6 pointer-events-none">
        <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg pointer-events-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
