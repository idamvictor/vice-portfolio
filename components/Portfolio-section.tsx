"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define project types
type Technology =
  | "all"
  | "nextjs"
  | "typescript"
  | "react"
  | "javascript"
  | "html-css"
  | "supabase"
  | "tailwind";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  longDescription: string;
  client: string;
  duration: string;
  role: string;
  link?: string;
}

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform with advanced filtering and payment integration",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=764&auto=format&fit=crop",
    technologies: ["nextjs", "typescript", "react", "tailwind"],
    longDescription:
      "Developed a comprehensive e-commerce solution with product management, user authentication, cart functionality, and payment processing. The platform features real-time inventory updates and analytics dashboard for store owners.",
    client: "RetailTech Inc.",
    duration: "4 months",
    role: "Lead Developer",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop",
    technologies: ["react", "javascript", "html-css"],
    longDescription:
      "Created an intuitive dashboard that aggregates data from multiple social media platforms. Features include performance metrics, content scheduling, and audience insights with interactive charts and exportable reports.",
    client: "SocialBoost Agency",
    duration: "3 months",
    role: "Frontend Developer",
    link: "https://example.com/social-dashboard",
  },
  {
    id: 3,
    title: "Real Estate Listing App",
    description:
      "Mobile-first property listing application with map integration",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=773&auto=format&fit=crop",
    technologies: ["nextjs", "typescript", "supabase", "tailwind"],
    longDescription:
      "Built a comprehensive real estate platform allowing users to search, filter, and save properties. Features include interactive maps, virtual tours, mortgage calculator, and direct messaging with agents.",
    client: "HomeFind Properties",
    duration: "6 months",
    role: "Full Stack Developer",
  },
  {
    id: 4,
    title: "Health & Fitness Tracker",
    description: "Personalized fitness tracking application with goal setting",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=870&auto=format&fit=crop",
    technologies: ["react", "javascript", "supabase"],
    longDescription:
      "Developed a health tracking application that monitors workouts, nutrition, and progress towards fitness goals. Includes customizable workout plans, nutrition logging, and progress visualization with charts and graphs.",
    client: "FitLife Solutions",
    duration: "5 months",
    role: "Frontend Specialist",
  },
  {
    id: 5,
    title: "Corporate Website Redesign",
    description: "Complete redesign of corporate website with CMS integration",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=869&auto=format&fit=crop",
    technologies: ["html-css", "javascript", "tailwind"],
    longDescription:
      "Redesigned and developed a corporate website with focus on improved user experience, accessibility, and performance. Implemented a custom CMS solution for easy content management by non-technical staff.",
    client: "Global Enterprises Ltd.",
    duration: "2 months",
    role: "UI Developer",
  },
  {
    id: 6,
    title: "Task Management System",
    description: "Team collaboration and project management platform",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=870&auto=format&fit=crop",
    technologies: ["typescript", "react", "supabase"],
    longDescription:
      "Built a comprehensive task management system with features including task assignment, progress tracking, deadline management, and team collaboration tools. The system includes customizable workflows and reporting capabilities.",
    client: "ProductiveTeams Inc.",
    duration: "4 months",
    role: "Full Stack Developer",
  },
];

// Technology filter options
const filterOptions: { id: Technology; label: string }[] = [
  { id: "all", label: "All" },
  { id: "nextjs", label: "Next.js" },
  { id: "typescript", label: "TypeScript" },
  { id: "react", label: "React" },
  { id: "javascript", label: "JavaScript" },
  { id: "html-css", label: "HTML & CSS" },
  { id: "supabase", label: "Supabase" },
  { id: "tailwind", label: "Tailwind" },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<Technology>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handle filter change
  const handleFilterChange = (value: string) => {
    setActiveFilter(value as Technology);
  };

  // Filter projects based on selected technology
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const tabVariants = {
    inactive: { scale: 1 },
    active: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <section id="portfolio" className="py-16 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            My Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects and see how I&apos;ve helped clients
            transform their ideas into elegant, scalable solutions.
          </p>
        </motion.div>

        {/* Glassmorphism filter tabs using shadcn Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-card/30 backdrop-blur-md rounded-full" />
            <Tabs
              defaultValue="all"
              value={activeFilter}
              onValueChange={handleFilterChange}
              className="relative"
            >
              <TabsList className="h-auto p-1 bg-card/50 backdrop-blur-md border border-border shadow-sm rounded-full flex flex-wrap justify-center">
                {filterOptions.map((option) => (
                  <motion.div
                    key={option.id}
                    variants={tabVariants}
                    animate={activeFilter === option.id ? "active" : "inactive"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TabsTrigger
                      value={option.id}
                      className="px-4 py-2 rounded-full text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                    >
                      {option.label}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <CardContent className="p-5 relative">
                  <motion.h3
                    className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-200"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs font-normal transition-all duration-200 hover:bg-muted"
                        >
                          {
                            filterOptions.find((option) => option.id === tech)
                              ?.label
                          }
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ rotate: 90 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state when no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No projects found with the selected filter.
            </p>
          </motion.div>
        )}

        {/* Project detail modal using shadcn Dialog */}
        <AnimatePresence>
          {selectedProject && (
            <Dialog
              open={!!selectedProject}
              onOpenChange={(open) => !open && setSelectedProject(null)}
            >
              <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto p-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <motion.div
                      className="absolute bottom-4 left-4 right-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h2 className="text-2xl font-bold text-white">
                        {selectedProject.title}
                      </h2>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold sr-only">
                        {selectedProject.title}
                      </DialogTitle>
                      <motion.div
                        className="flex flex-wrap gap-2 mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {selectedProject.technologies.map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs font-normal"
                            >
                              {
                                filterOptions.find(
                                  (option) => option.id === tech
                                )?.label
                              }
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </DialogHeader>

                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="bg-card p-3 rounded-lg">
                        <h4 className="text-sm font-semibold text-muted-foreground">
                          Client
                        </h4>
                        <p className="text-foreground">
                          {selectedProject.client}
                        </p>
                      </div>
                      <div className="bg-card p-3 rounded-lg">
                        <h4 className="text-sm font-semibold text-muted-foreground">
                          Duration
                        </h4>
                        <p className="text-foreground">
                          {selectedProject.duration}
                        </p>
                      </div>
                      <div className="bg-card p-3 rounded-lg">
                        <h4 className="text-sm font-semibold text-muted-foreground">
                          Role
                        </h4>
                        <p className="text-foreground">
                          {selectedProject.role}
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <DialogDescription className="text-base text-muted-foreground mb-6">
                        {selectedProject.longDescription}
                      </DialogDescription>

                      {selectedProject.link && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            asChild
                            className="rounded-full group relative overflow-hidden"
                          >
                            <a
                              href={selectedProject.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition-all duration-300"
                            >
                              <span className="relative z-10">
                                View Project
                              </span>
                              <span className="absolute inset-0 bg-primary-foreground/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
