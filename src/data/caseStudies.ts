export interface CaseStudy {
  slug: string;
  title: string;
  discipline: string;
  summary: string;
  problem: string;
  approach: string;
  role: string;
  technologies: string[];
  architecture: string[];
  decisions: string[];
  outcome: string;
  reflection: string;
  image?: string;
  imageAlt?: string;
  demo?: string;
  github?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "rag-knowledge-platform",
    title: "Research AI Knowledge Platform",
    discipline: "AI · Retrieval · Knowledge systems",
    summary: "A privacy-first research assistant designed to work with a user's own documents, URLs and policies.",
    problem: "Useful knowledge is often spread across documents and web pages. This project explores how a language model can answer questions using that supplied source material.",
    approach: "Built a web application around a retrieval-augmented generation workflow, pairing source material with an AI-assisted research interface.",
    role: "Project design and implementation",
    technologies: ["React", "Azure Static Web Apps", "RAG", "LLM APIs"],
    architecture: ["User and source material", "Web application", "Retrieval-augmented generation", "Grounded response"],
    decisions: [
      "Keep the experience centered on user-provided knowledge sources.",
      "Use retrieval to bring relevant source context into AI-assisted responses.",
      "Deploy the application on Azure Static Web Apps.",
    ],
    outcome: "A live research assistant is available on Azure Static Web Apps. No usage or performance metrics are claimed here.",
    reflection: "Knowledge applications need a clear relationship between a response and the material that supports it. Retrieval is a core part of that system design.",
    image: "/rag.png",
    imageAlt: "Research AI assisted RAG platform interface",
    demo: "https://red-moss-043776110.3.azurestaticapps.net",
    github: "https://github.com/Mckings1/ragknowledge",
  },
  {
    slug: "azure-ai-platform",
    title: "Azure AI Hackathon Platform",
    discipline: "AI · Application engineering",
    summary: "An AI application for task automation and content workflows, built during a hackathon.",
    problem: "The hackathon project called for an application that could bring intelligent task automation and content workflows into one user experience.",
    approach: "Combined a React web application with Azure Functions, Semantic Kernel and Azure OpenAI to build the platform.",
    role: "Hackathon project engineering",
    technologies: ["React", "Semantic Kernel", "Azure OpenAI", "Azure Functions", "Azure Static Web Apps"],
    architecture: ["User", "React application", "Azure Functions", "Semantic Kernel orchestration", "Azure OpenAI"],
    decisions: [
      "Use Semantic Kernel to organize AI-enabled application workflows.",
      "Place server-side functions between the web application and AI services.",
      "Deploy the front end on Azure Static Web Apps.",
    ],
    outcome: "A deployed hackathon application with a public demo and source repository.",
    reflection: "An AI feature is part of a larger software system. The interface, orchestration and service boundaries all shape whether it is useful.",
    image: "/hackathon.png",
    imageAlt: "Azure AI hackathon platform interface",
    demo: "https://hackathon-g8.netlify.app",
    github: "https://github.com/Mckings1/hackathon",
  },
  {
    slug: "financial-services-workflow",
    title: "Local Funds Transfer Workflow",
    discipline: "Financial services · Business process automation",
    summary: "A ProcessMaker workflow for local funds transfer, built for GTBank.",
    problem: "A local funds transfer process needed coordinated routing, approval and email notification steps.",
    approach: "Implemented a BPM workflow in ProcessMaker to connect the transfer routing, approval process and notifications.",
    role: "Workflow implementation",
    technologies: ["ProcessMaker", "BPM", "Email notifications"],
    architecture: ["Transfer request", "ProcessMaker workflow", "Routing and approval", "Email notification"],
    decisions: [
      "Represent the transfer as a sequence of explicit workflow steps.",
      "Include routing and approvals in the process flow.",
      "Use notifications to communicate workflow events.",
    ],
    outcome: "The portfolio documents a funds-transfer BPM workflow built for GTBank. No transaction volumes or business impact metrics are published.",
    reflection: "In financial workflows, making routing and approvals explicit helps turn an operational process into a system that can be understood and maintained.",
  },
  {
    slug: "real-estate-automation",
    title: "Real Estate AI Agent",
    discipline: "Automation · APIs · AI workflows",
    summary: "An n8n and Teable automation for real-estate leads, notifications and API integrations.",
    problem: "Real-estate lead handling can involve several records, notifications and service integrations.",
    approach: "Connected lead management, notifications and API integrations in an n8n workflow using Teable.",
    role: "Workflow design and implementation",
    technologies: ["n8n", "Teable", "JavaScript", "REST APIs"],
    architecture: ["Lead event", "n8n workflow", "Teable records", "Notifications and API integrations"],
    decisions: [
      "Use a workflow tool to connect operational steps and external APIs.",
      "Use Teable as part of the lead-management flow.",
      "Keep notifications connected to changes in the workflow.",
    ],
    outcome: "A walkthrough video of the automation is available. The project listing does not report quantified business outcomes.",
    reflection: "Automation is most useful when the process and handoffs are clear. The workflow should make those transitions visible and maintainable.",
    image: "/realestate.png",
    imageAlt: "Real estate automation project visual",
    demo: "https://www.youtube.com/watch?v=0mvF2KmOuaU",
  },
];
