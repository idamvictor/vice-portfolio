"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Code,
  Brain,
  Wrench,
  Layers,
  Globe,
  Database,
  Layout,
  Server,
  Palette,
  Cpu,
  GitBranch,
  TestTube,
  Box,
  Cloud,
  FileCode,
  Figma,
} from "lucide-react";

// Import missing icons
import {
  Clock,
  Shuffle,
  Users,
  Lightbulb,
  Search,
  ClipboardList,
  MessageSquare,
  GraduationCap,
  Zap,
} from "lucide-react";

// Define skill types and interfaces
interface Skill {
  name: string;
  icon: React.ElementType;
  category?: string;
  color?: string;
}

interface SkillCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  skills: Skill[];
}

// Sample skills data with icons and colors
const skillsData: SkillCategory[] = [
  {
    id: "hard-skills",
    label: "Hard Skills",
    icon: Code,
    skills: [
      {
        name: "JavaScript",
        icon: FileCode,
        category: "Languages",
        color: "bg-yellow-100 text-yellow-600",
      },
      {
        name: "TypeScript",
        icon: FileCode,
        category: "Languages",
        color: "bg-blue-100 text-blue-600",
      },
      {
        name: "HTML5",
        icon: Layout,
        category: "Languages",
        color: "bg-orange-100 text-orange-600",
      },
      {
        name: "CSS3/SCSS",
        icon: Palette,
        category: "Languages",
        color: "bg-indigo-100 text-indigo-600",
      },
      {
        name: "React",
        icon: Code,
        category: "Frameworks",
        color: "bg-cyan-100 text-cyan-600",
      },
      {
        name: "Next.js",
        icon: Layers,
        category: "Frameworks",
        color: "bg-gray-100 text-gray-600",
      },
      {
        name: "Node.js",
        icon: Server,
        category: "Backend",
        color: "bg-green-100 text-green-600",
      },
      {
        name: "GraphQL",
        icon: Database,
        category: "Backend",
        color: "bg-pink-100 text-pink-600",
      },
      {
        name: "REST API Design",
        icon: Globe,
        category: "Backend",
        color: "bg-violet-100 text-violet-600",
      },
      {
        name: "Responsive Design",
        icon: Layout,
        category: "Frontend",
        color: "bg-teal-100 text-teal-600",
      },
      {
        name: "Accessibility",
        icon: Layout,
        category: "Frontend",
        color: "bg-emerald-100 text-emerald-600",
      },
      {
        name: "Performance Optimization",
        icon: Cpu,
        category: "Frontend",
        color: "bg-amber-100 text-amber-600",
      },
      {
        name: "SQL",
        icon: Database,
        category: "Database",
        color: "bg-blue-100 text-blue-600",
      },
      {
        name: "NoSQL",
        icon: Database,
        category: "Database",
        color: "bg-green-100 text-green-600",
      },
    ],
  },
  {
    id: "soft-skills",
    label: "Soft Skills",
    icon: Brain,
    skills: [
      {
        name: "Problem Solving",
        icon: Brain,
        color: "bg-purple-100 text-purple-600",
      },
      {
        name: "Communication",
        icon: Globe,
        color: "bg-blue-100 text-blue-600",
      },
      { name: "Teamwork", icon: Users, color: "bg-green-100 text-green-600" },
      {
        name: "Time Management",
        icon: Clock,
        color: "bg-amber-100 text-amber-600",
      },
      {
        name: "Adaptability",
        icon: Shuffle,
        color: "bg-teal-100 text-teal-600",
      },
      {
        name: "Critical Thinking",
        icon: Brain,
        color: "bg-indigo-100 text-indigo-600",
      },
      { name: "Leadership", icon: Users, color: "bg-red-100 text-red-600" },
      {
        name: "Creativity",
        icon: Lightbulb,
        color: "bg-yellow-100 text-yellow-600",
      },
      {
        name: "Attention to Detail",
        icon: Search,
        color: "bg-cyan-100 text-cyan-600",
      },
      {
        name: "Project Management",
        icon: ClipboardList,
        color: "bg-violet-100 text-violet-600",
      },
      {
        name: "Client Communication",
        icon: MessageSquare,
        color: "bg-blue-100 text-blue-600",
      },
      {
        name: "Mentoring",
        icon: GraduationCap,
        color: "bg-emerald-100 text-emerald-600",
      },
    ],
  },
  {
    id: "tools-libraries",
    label: "Tools & Libraries",
    icon: Wrench,
    skills: [
      {
        name: "Git/GitHub",
        icon: GitBranch,
        category: "Version Control",
        color: "bg-orange-100 text-orange-600",
      },
      {
        name: "VS Code",
        icon: Code,
        category: "IDE",
        color: "bg-blue-100 text-blue-600",
      },
      {
        name: "Webpack",
        icon: Box,
        category: "Build Tools",
        color: "bg-blue-100 text-blue-600",
      },
      {
        name: "Vite",
        icon: Zap,
        category: "Build Tools",
        color: "bg-purple-100 text-purple-600",
      },
      {
        name: "Jest",
        icon: TestTube,
        category: "Testing",
        color: "bg-red-100 text-red-600",
      },
      {
        name: "React Testing Library",
        icon: TestTube,
        category: "Testing",
        color: "bg-red-100 text-red-600",
      },
      {
        name: "Cypress",
        icon: TestTube,
        category: "Testing",
        color: "bg-green-100 text-green-600",
      },
      {
        name: "Redux",
        icon: Layers,
        category: "State Management",
        color: "bg-purple-100 text-purple-600",
      },
      {
        name: "Zustand",
        icon: Layers,
        category: "State Management",
        color: "bg-amber-100 text-amber-600",
      },
      {
        name: "Tailwind CSS",
        icon: Palette,
        category: "Styling",
        color: "bg-cyan-100 text-cyan-600",
      },
      {
        name: "Styled Components",
        icon: Palette,
        category: "Styling",
        color: "bg-pink-100 text-pink-600",
      },
      {
        name: "Framer Motion",
        icon: Box,
        category: "Animation",
        color: "bg-indigo-100 text-indigo-600",
      },
      {
        name: "Figma",
        icon: Figma,
        category: "Design",
        color: "bg-violet-100 text-violet-600",
      },
      {
        name: "Docker",
        icon: Box,
        category: "DevOps",
        color: "bg-blue-100 text-blue-600",
      },
      {
        name: "AWS",
        icon: Cloud,
        category: "Cloud",
        color: "bg-orange-100 text-orange-600",
      },
      {
        name: "Firebase",
        icon: Server,
        category: "Backend Services",
        color: "bg-yellow-100 text-yellow-600",
      },
      {
        name: "Supabase",
        icon: Database,
        category: "Backend Services",
        color: "bg-green-100 text-green-600",
      },
    ],
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("hard-skills");

  // Group skills by category if available
  const groupedSkills = (skills: Skill[]) => {
    const grouped: Record<string, Skill[]> = {};

    skills.forEach((skill) => {
      const category = skill.category || "General";
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(skill);
    });

    return grouped;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
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
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            A comprehensive overview of my technical expertise, professional
            qualities, and the tools I use to create exceptional digital
            experiences.
          </p>
        </motion.div>

        {/* Glassmorphism tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-full">
            <div className="absolute inset-0 bg-card/30 backdrop-blur-md rounded-full" />
            <Tabs
              defaultValue="hard-skills"
              value={activeTab}
              onValueChange={setActiveTab}
              className="relative"
            >
              <TabsList className="h-auto p-4 bg-card/50 backdrop-blur-md border border-border shadow-sm rounded-full flex flex-wrap justify-center">
                {skillsData.map((category) => (
                  <motion.div
                    key={category.id}
                    variants={tabVariants}
                    animate={activeTab === category.id ? "active" : "inactive"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TabsTrigger
                      value={category.id}
                      className="px-4 py-2 rounded-full text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all flex items-center gap-2"
                    >
                      <category.icon className="h-4 w-4" />
                      {category.label}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>

              {/* Skills content - improved layout for categories */}
              {skillsData.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="mt-6"
                >
                  {category.id === "hard-skills" ||
                  category.id === "tools-libraries" ? (
                    // For hard skills and tools, use a more space-efficient category layout
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="space-y-6"
                    >
                      {Object.entries(groupedSkills(category.skills)).map(
                        ([groupName, skills]) => (
                          <motion.div
                            key={groupName}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border shadow-sm"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                              <h3 className="text-sm font-semibold text-foreground">
                                {groupName}
                              </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {skills.map((skill) => (
                                <motion.div
                                  key={skill.name}
                                  variants={itemVariants}
                                  whileHover={{
                                    y: -2,
                                    boxShadow:
                                      "0 8px 15px -8px rgba(0, 0, 0, 0.1)",
                                    scale: 1.03,
                                  }}
                                  className="flex items-center gap-1.5 bg-card rounded-full pl-1 pr-2.5 py-1 border border-border shadow-sm transition-all duration-300"
                                >
                                  <div
                                    className={`p-1 rounded-full ${
                                      skill.color ||
                                      "bg-muted text-muted-foreground"
                                    }`}
                                  >
                                    <skill.icon className="h-3 w-3" />
                                  </div>
                                  <span className="text-xs font-medium text-foreground">
                                    {skill.name}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )
                      )}
                    </motion.div>
                  ) : (
                    // For soft skills, no grouping
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border shadow-sm"
                    >
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{
                              y: -2,
                              boxShadow: "0 8px 15px -8px rgba(0, 0, 0, 0.1)",
                              scale: 1.03,
                            }}
                            className="flex items-center gap-1.5 bg-card rounded-full pl-1 pr-2.5 py-1 border border-border shadow-sm transition-all duration-300"
                          >
                            <div
                              className={`p-1 rounded-full ${
                                skill.color || "bg-muted text-muted-foreground"
                              }`}
                            >
                              <skill.icon className="h-3 w-3" />
                            </div>
                            <span className="text-xs font-medium text-foreground">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
