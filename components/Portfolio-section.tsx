"use client";

import { useState } from "react";
import Image from "next/image";

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

  // Filter projects based on selected technology
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my recent projects and see how I&apos;ve helped clients
            transform their ideas into elegant, scalable solutions.
          </p>
        </div>

        {/* Glassmorphism filter tabs using shadcn Tabs */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-full" />
            <Tabs
              defaultValue="all"
              value={activeFilter}
              onValueChange={(value) => setActiveFilter(value as Technology)}
              className="relative"
            >
              <TabsList className="h-auto p-1 bg-white/50 backdrop-blur-md border border-white/20 shadow-sm rounded-full flex flex-wrap justify-center">
                {filterOptions.map((option) => (
                  <TabsTrigger
                    key={option.id}
                    value={option.id}
                    className="px-4 py-2 rounded-full text-sm data-[state=active]:bg-black data-[state=active]:text-white transition-all"
                  >
                    {option.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {
                        filterOptions.find((option) => option.id === tech)
                          ?.label
                      }
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state when no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No projects found with the selected filter.
            </p>
          </div>
        )}

        {/* Project detail modal using shadcn Dialog */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto p-0">
            <div className="relative h-56 sm:h-64 md:h-72">
              {selectedProject && (
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            {selectedProject && (
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {
                          filterOptions.find((option) => option.id === tech)
                            ?.label
                        }
                      </Badge>
                    ))}
                  </div>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500">
                      Client
                    </h4>
                    <p>{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500">
                      Duration
                    </h4>
                    <p>{selectedProject.duration}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500">
                      Role
                    </h4>
                    <p>{selectedProject.role}</p>
                  </div>
                </div>

                <DialogDescription className="text-base text-gray-700 mb-6">
                  {selectedProject.longDescription}
                </DialogDescription>

                {selectedProject.link && (
                  <Button asChild className="rounded-full">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </Button>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
