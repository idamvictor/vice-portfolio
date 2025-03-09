"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ChevronRight,
  ChevronLeft,
  Code,
  Palette,
  Lightbulb,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function AboutMe() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Project Alpha",
      description:
        "A cutting-edge web application built with React and Node.js",
      image:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075755/cld-sample.jpg",
    },
    {
      title: "Design System Beta",
      description: "A comprehensive design system for scalable applications",
      image:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075755/cld-sample.jpg",
    },
    {
      title: "Gamma Mobile App",
      description: "An innovative mobile app developed with React Native",
      image:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075755/cld-sample.jpg",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-background text-foreground p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-secondary opacity-50"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.header
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Image
              src="/placeholder.svg?height=150&width=150"
              width={150}
              height={150}
              alt="Your Name"
              className="rounded-full mx-auto mb-6 border-4 border-primary shadow-lg"
            />
          </motion.div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">Your Name</h1>
          <p className="text-xl text-muted-foreground">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="col-span-2 space-y-8"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="bg-card bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-border"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-foreground">
                About Me
              </h2>
              <p className="text-muted-foreground">
                I&apos;m a passionate developer with a keen eye for design. My
                journey in tech started 5 years ago, and since then, I&apos;ve
                been crafting digital experiences that blend functionality with
                aesthetics. When I&apos;m not coding, you&apos;ll find me
                exploring new coffee shops or hiking in nature.
              </p>
            </motion.div>

            <motion.div
              className="bg-card bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-border relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-50 blur-2xl"></div>
              <h2 className="text-3xl font-semibold mb-4 text-foreground">
                Featured Project
              </h2>
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <Image
                  src={projects[activeProject].image || "/placeholder.svg"}
                  width={300}
                  height={200}
                  alt={projects[activeProject].title}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <h3 className="text-2xl font-semibold text-foreground">
                  {projects[activeProject].title}
                </h3>
                <p className="text-muted-foreground">
                  {projects[activeProject].description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <motion.button
                    onClick={() =>
                      setActiveProject(
                        (prev) => (prev - 1 + projects.length) % projects.length
                      )
                    }
                    className="text-primary hover:text-primary-foreground"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <div className="flex space-x-2">
                    {projects.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === activeProject ? "bg-primary" : "bg-muted"
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setActiveProject(index)}
                      />
                    ))}
                  </div>
                  <motion.button
                    onClick={() =>
                      setActiveProject((prev) => (prev + 1) % projects.length)
                    }
                    className="text-primary hover:text-primary-foreground"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-8"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className="bg-card bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-border"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Skills
              </h3>
              <ul className="space-y-4">
                {[
                  "JavaScript / TypeScript",
                  "React & React Native",
                  "Node.js",
                  "UI/UX Design",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5, color: "#9333ea" }}
                  >
                    <ChevronRight className="text-primary" />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-card bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-border"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                What I Do
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Code, label: "Web Development" },
                  { icon: Palette, label: "UI/UX Design" },
                  { icon: Lightbulb, label: "Problem Solving" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <item.icon className="text-primary" />
                    <span className="text-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-foreground">
            Get In Touch
          </h2>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Mail, href: "mailto:your.email@example.com" },
              { icon: Github, href: "https://github.com/yourusername" },
              { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
              { icon: Twitter, href: "https://twitter.com/yourusername" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
