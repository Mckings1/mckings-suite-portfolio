import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  // ── AI ──
  {
    title: "Research AI Assisted-RAG System",
    description:
      "Privacy-first Retrieval-Augmented Generation system designed to learn from your own documents, URLs, and policies. Deployed on Azure Static Web Apps with a modern React frontend.",
    tags: ["React", "Azure", "RAG", "Static Web Apps"],
    category: "ai",
    githubUrl: "https://github.com/Mckings1/ragknowledge",
    liveUrl: "https://red-moss-043776110.3.azurestaticapps.net",
  },
  {
    title: "Azure AI Hackathon Platform",
    description:
      "Full AI platform built during a hackathon using Semantic Kernel, Azure OpenAI, Azure Functions and Static Web Apps. Features intelligent task automation and content workflows.",
    tags: ["Semantic Kernel", "Azure OpenAI", "Azure Functions", "React"],
    category: "ai",
    githubUrl: "https://github.com/Mckings1/hackathon",
    liveUrl: "https://hackathon-g8.netlify.app",
  },
  // ── Automation ──
  {
    title: "Real Estate AI Agent",
    description:
      "AI-agent automation system for real estate workflows using n8n and Teable. Automates lead management, notifications, and API integrations for smooth operations.",
    tags: ["n8n", "Teable", "JavaScript", "REST APIs"],
    category: "automation",
    githubUrl: "",
    liveUrl: "https://www.youtube.com/watch?v=0mvF2KmOuaU&feature=youtu.be",
  },
  {
    title: "Local Fund Transfer Automation",
    description:
      "Full BPM workflow for local funds transfer integrating routing, email notifications, and an approval process. Built for GTBank on ProcessMaker.",
    tags: ["ProcessMaker", "BPM", "Automation"],
    category: "automation",
    githubUrl: "",
    liveUrl: "",
  },
  // ── ML / Data Science ──
  {
    title: "Interactive Data Visualization Dashboard",
    description:
      "Dynamic dashboard comparing economic trends with line/bar charts, heatmaps, and filters for stakeholder insights and pattern analysis.",
    tags: ["Python", "Dash", "Plotly", "Pandas"],
    category: "ml",
    githubUrl: "https://github.com/Mckings1/data-visualization-with-python",
    liveUrl: "https://data-visualization-with-dash-python.onrender.com/",
  },
  {
    title: "IBM Data Science Capstone",
    description:
      "End-to-end SpaceX launch analysis using API data and web scraping to forecast successful launches, with 95% accurate predictive modelling.",
    tags: ["Python", "SQL", "Scikit-learn", "Folium", "Plotly Dash"],
    category: "ml",
    githubUrl: "https://github.com/Mckings1/IBM-DataScience-Capstone-Project",
    liveUrl: "",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "End-to-end ML pipeline predicting customer churn with feature engineering, model training (XGBoost, Random Forest), and SHAP interpretability for actionable insights.",
    tags: ["Python", "XGBoost", "SHAP", "Scikit-learn", "Pandas"],
    category: "ml",
    githubUrl: "https://github.com/Mckings1/Customer-Churn-Prediction",
    liveUrl: "",
  },
  {
    title: "House Price Prediction",
    description:
      "Data preprocessing, EDA, and predictive modelling to forecast house prices — uncovering key drivers like location and features with clear visualisations.",
    tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    category: "ml",
    githubUrl: "https://github.com/Mckings1/Analysis-with-python",
    liveUrl: "",
  },
  // ── Frontend ──
  {
    title: "TrustHub",
    description:
      "A unified banking hub built during the Wema Bank hackathon. Combined multiple banking features into a single streamlined app, improving navigation, account management, and overall UX.",
    tags: ["Fintech", "Hackathon", "UI/UX", "Mobile App"],
    category: "frontend",
    githubUrl: "https://github.com/Mckings1/wemaBank-hackathon-team3",
    liveUrl: "https://trusthub-six.vercel.app",
  },
  {
    title: "Meta Model Dashboard",
    description:
      "Internal analytics dashboard built with React, Vite and shadcn. Designed for tracking AI model activity, performance, and governance metrics.",
    tags: ["React", "Vite", "TypeScript", "shadcn"],
    category: "frontend",
    githubUrl: "https://github.com/Mckings1/meta-model-dashboard",
    liveUrl: "",
  },
  {
    title: "Portfolio v2 (This site)",
    description:
      "Redesigned personal portfolio with Sovereign Dark aesthetic, Playfair Display typography, scroll-reveal animations, and a full gold design system.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "frontend",
    githubUrl: "https://github.com/Mckings1",
    liveUrl: "https://mckings-portfolio.vercel.app",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "AI & RAG", value: "ai" },
  { label: "ML", value: "ml" },
  { label: "Automation", value: "automation" },
  { label: "Frontend", value: "frontend" },
];

export default function Projects() {
  const [active, setActive] = useState("all");
  useScrollReveal();

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="container mx-auto">

        {/* Header */}
        <div className="mb-14 reveal">
          <p
            className="text-xs font-mono-custom tracking-widest uppercase mb-4"
            style={{ color: "var(--gold-500)" }}
          >
            Work
          </p>
          <h1
            className="font-display text-5xl md:text-6xl font-bold mb-4"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            Projects
          </h1>
          <p
            className="text-base max-w-xl"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            AI systems, backend APIs, automation pipelines, and the occasional
            frontend — things built to work, not just to look good.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 reveal">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={
                active === f.value
                  ? {
                      background: "var(--gradient-gold)",
                      color: "#080808",
                    }
                  : {
                      background: "transparent",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "rgba(255,255,255,0.4)",
                    }
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div key={project.title} className={`reveal stagger-${(i % 5) + 1}`}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
