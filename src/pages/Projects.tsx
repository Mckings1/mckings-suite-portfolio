import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "TrustHub",
    description: "A unified banking hub built during the Wema Bank hackathon. It combined multiple banking features into a single streamlined app, improving navigation, account management, and overall user experience.",
    tags: ["Fintech", "Hackathon", "UI/UX", "Mobile App"],
    category: "frontend",
    liveUrl: "https://trusthub-six.vercel.app",
    githubUrl: "https://github.com/Mckings1/wemaBank-hackathon-team3"
  },
  {
    id: 2,
    title: "Hackathon Project – Azure AI Platform",
    description: "Full AI platform built during a hackathon using Semantic Kernel, Azure OpenAI, Azure Functions and Static Web Apps. Features intelligent task automation and content workflows.",
    tags: ["Azure", "Semantic Kernel", "OpenAI", "Functions"],
    category: "frontend",
    liveUrl: "https://hackathon-g8.netlify.app",
    githubUrl: "https://github.com/Mckings1/hackathon"
  },
  {
    id: 3,
    title: "Meta Model Dashboard",
    description: "Internal analytics dashboard built with React, Vite and shadcn. Designed for tracking AI model activity, performance and governance metrics.",
    tags: ["React", "Vite", "TypeScript", "shadcn"],
    category: "frontend",
    githubUrl: "https://github.com/Mckings1/meta-model-dashboard"
  },
  {
    id: 4,
    title: "Research AI Assisted Azure ",
    description: "A modern frontend deployed on Azure Static Web Apps for an end to end KYC automation system with AI assisted workflows.",
    tags: ["React", "Azure", "Static Web Apps"],
    category: "frontend",
    liveUrl: "https://red-moss-043776110.3.azurestaticapps.net",
    githubUrl: "https://github.com/Mckings1/kyc-frontend"
  },
  {
    id: 5,
    title: "Local Fund Transfer Automation (ProcessMaker)",
    description: "A full BPM workflow for local funds transfer integrating routing, email notifications and approval process. Built for GTBank ProcessMaker.",
    tags: ["ProcessMaker", "BPM", "Automation"],
    category: "data-science",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Image Scraping Automation with n8n",
    description: "Automated image scraping pipeline storing assets in Teable DB with UI validation workflow. Includes error handling and scheduled automation.",
    tags: ["n8n", "Automation", "Teable", "Scraping"],
    category: "data-science",
    githubUrl: "https://github.com/Mckings1/n8n-image-scraper"
  },

  {
    id: 7,
    title: "Real Estate Automation",
    description: "AI-agent automation system for real estate workflows using n8n and Teable. Automates lead management, notifications, and API integrations for smooth operations.",
    tags: ["n8n", "Teable", "JavaScript", "REST APIs"],
    category: "frontend",
    githubUrl: "#",
    liveUrl: "https://www.youtube.com/watch?v=0mvF2KmOuaU&feature=youtu.be"
  },
];


export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<"all" | "data-science" | "frontend">("all");

  useEffect(() => {
    const filterParam = searchParams.get("filter");
    if (filterParam === "data-science" || filterParam === "frontend") {
      setFilter(filterParam);
    }
  }, [searchParams]);

  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter);
    if (newFilter === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ filter: newFilter });
    }
  };

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my work spanning front-end development, automation, and data science projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => handleFilterChange("all")}
            className="hover-lift"
          >
            All Projects
          </Button>
          <Button
            variant={filter === "frontend" ? "default" : "outline"}
            onClick={() => handleFilterChange("frontend")}
            className="hover-lift"
          >
            Front-End
          </Button>
          <Button
            variant={filter === "data-science" ? "default" : "outline"}
            onClick={() => handleFilterChange("data-science")}
            className="hover-lift"
          >
            Data Science
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
