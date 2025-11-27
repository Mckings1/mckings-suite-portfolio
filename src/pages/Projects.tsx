import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
 
  {
    id: 0,
    title: "Research AI Assisted-RAG System",
    description: "A modern frontend deployed on Azure Static Web Apps. Privacy-first Retrieval-Augmented Generation (RAG) system designed to learn from your own documents, URLs, and policies.",
    tags: ["React", "Azure", "Static Web Apps"],
    category: "frontend",
    liveUrl: "https://red-moss-043776110.3.azurestaticapps.net",
    githubUrl: "https://github.com/Mckings1/ragknowledge"
  },
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
    id: 5,
    title: "Real Estate Automation",
    description: "AI-agent automation system for real estate workflows using n8n and Teable. Automates lead management, notifications, and API integrations for smooth operations.",
    tags: ["n8n", "Teable", "JavaScript", "REST APIs"],
    category: "frontend",
    githubUrl: "#",
    liveUrl: "https://www.youtube.com/watch?v=0mvF2KmOuaU&feature=youtu.be"
  },
  {
    id: 6,
    title: "Local Fund Transfer Automation (ProcessMaker)",
    description: "A full BPM workflow for local funds transfer integrating routing, email notifications and approval process. Built for GTBank ProcessMaker.",
    tags: ["ProcessMaker", "BPM", "Automation"],
    category: "frontend",
    githubUrl: "#"
  },
  {
    id: 7,
    title: "IBM Data Science Capstone Project",
    description: "End-to-end SpaceX launch analysis using API data and web scraping to forecast successful launches, with 95% accurate predictive modeling.",
    tags: ["Python", "SQL", "Scikit-learn", "Folium", "Plotly Dash"],
    category: "data-science",
    liveUrl: "#",
    githubUrl: "https://github.com/Mckings1/IBM-DataScience-Capstone-Project"
  },
  {
    id: 8,
    title: "Customer Churn Prediction",
    description: "End-to-end ML pipeline predicting customer churn with feature engineering, model training (XGBoost, Random Forest), and SHAP interpretability for actionable insights.",
    tags: ["Python", "Scikit-learn", "XGBoost", "SHAP", "Pandas"],
    category: "data-science",
    liveUrl: "#",
    githubUrl: "https://github.com/Mckings1/Customer-Churn-Prediction"
  },
  {
    id: 9,
    title: "SpaceX Falcon 9 Predictive Analysis & Classification",
    description: "ML pipeline to predict Falcon 9 first-stage landing success, enabling cost estimation for reusable rocket launches and competitive bidding analysis.",
    tags: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    category: "data-science",
    liveUrl: "#",
    githubUrl: "https://github.com/Mckings1/spacex-falcon9-predictive-analysis-classification"
  },
  {
    id: 10,
    title: "SpaceX Falcon 9 EDA & Data Visualization",
    description: "Exploratory data analysis and feature engineering on Falcon 9 launch data to identify patterns for predicting first-stage landing success.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    category: "data-science",
    liveUrl: "#",
    githubUrl: "https://github.com/Mckings1/spaceX-falcon9-EDA-dataVisualization"
  },
  {
    id: 11,
    title: "House Price Prediction Analysis",
    description: "Data preprocessing, EDA, and predictive modeling to forecast house prices, uncovering key drivers like location and features with visualizations.",
    tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    category: "data-science",
    liveUrl: "#",
    githubUrl: "https://github.com/Mckings1/Analysis-with-python"
  },
  {
    id: 12,
    title: "Working with Real-World Datasets",
    description: "Real-time IoT data pipeline for processing and analyzing environmental/crime datasets, with SQL queries for performance insights and trend detection.",
    tags: ["Python", "SQL", "Pandas", "IoT Data", "Pipelines"],
    category: "data-science",
    liveUrl: "#",
    githubUrl: "https://github.com/Mckings1/Working-with-real-world-datasets"
  },
  {
    id: 13,
    title: "Interactive Data Visualization Dashboard",
    description: "Dynamic dashboard comparing economic trends with line/bar charts, heatmaps, and filters for stakeholder insights and pattern analysis.",
    tags: ["Python", "Dash", "Plotly", "Pandas"],
    category: "data-science",
    liveUrl: "https://data-visualization-with-dash-python.onrender.com/",
    githubUrl: "https://github.com/Mckings1/data-visualization-with-python"
  },
  {
    id: 14,
    title: "SpaceX Falcon 9 Plotly Dash Dashboard",
    description: "Interactive dashboard with dropdowns, sliders, pie charts, and scatter plots for analyzing launch site success and payload data.",
    tags: ["Python", "Plotly Dash", "Interactive Viz"],
    category: "data-science",
    liveUrl: "#",
    githubUrl: "https://github.com/Mckings1/spaceX-falcon9-Ploty-Dash"
  },
  {
    id: 15,
    title: "SpaceX Falcon 9 Interactive Launch Map",
    description: "Geospatial analysis of launch site locations using Folium maps to evaluate proximity factors influencing success rates.",
    tags: ["Python", "Folium", "Geospatial", "Maps"],
    category: "data-science",
    liveUrl: "#",
    githubUrl: "https://github.com/Mckings1/spaceX-falcon9-Interactive-Map-with-Folium"
  },
  {
    id: 16,
    title: "SpaceX Falcon 9 Wikipedia Web Scraping",
    description: "Automated scraping of Falcon 9/Falcon Heavy launch records from Wikipedia for historical data collection and analysis.",
    tags: ["Python", "Web Scraping", "BeautifulSoup"],
    category: "data-science",
    liveUrl: "#",
    githubUrl: "https://github.com/Mckings1/spaceX-falcon9-dc-webScraping"
  },
  {
    id: 17,
    title: "SpaceX Falcon 9 Data Wrangling",
    description: "EDA and preprocessing of Falcon 9 landing data to create binary success labels for supervised ML models from outcomes like Ocean/RTLS/ASDS.",
    tags: ["Python", "Pandas", "Data Cleaning", "EDA"],
    category: "data-science",
    liveUrl: "#",
    githubUrl: "https://github.com/Mckings1/spaceX-falcon9-data-wrangling"
  }
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
            Front-End/Automation
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
