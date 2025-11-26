import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Sentiment Analysis Dashboard",
    description: "ML-powered sentiment analysis tool for social media data using NLP and Python.",
    tags: ["Python", "TensorFlow", "NLP", "Pandas"],
    category: "data-science" as const,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-featured online store built with React, Redux, and Firebase.",
    tags: ["React", "Redux", "Firebase", "Tailwind"],
    category: "frontend" as const,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Customer Churn Prediction",
    description: "Predictive model to identify customers likely to churn using Azure ML.",
    tags: ["Azure ML", "Python", "Scikit-learn"],
    category: "data-science" as const,
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Modern task manager with drag-and-drop, real-time updates, and team collaboration.",
    tags: ["React", "TypeScript", "Supabase"],
    category: "frontend" as const,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Image Classification API",
    description: "REST API for image classification using pre-trained CNN models.",
    tags: ["Python", "FastAPI", "PyTorch", "Docker"],
    category: "data-science" as const,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Portfolio CMS",
    description: "Content management system for portfolios with headless CMS integration.",
    tags: ["Next.js", "Strapi", "GraphQL"],
    category: "frontend" as const,
    githubUrl: "#",
    liveUrl: "#",
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
            A collection of my work spanning front-end development and data science projects.
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
