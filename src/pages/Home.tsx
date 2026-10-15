import { ArrowRight, ArrowUpRight, BrainCircuit, Code2, Database, Github, Linkedin, Mail, Network, RefreshCw, Rocket, Search, Workflow } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WHATSAPP_URL } from "@/lib/brand";

const capabilities = [
  { title: "AI engineering", text: "RAG · orchestration · intelligent workflows", icon: BrainCircuit },
  { title: "Software engineering", text: "Web apps · APIs · system design", icon: Code2 },
  { title: "Data & information", text: "Analysis · retrieval · knowledge systems", icon: Database },
  { title: "Automation & cloud", text: "Integrations · cloud services · deployment", icon: Workflow },
];

const projects = [
  {
    
    title: "RAG Knowledge Platform",
    category: "AI · Knowledge systems",
    summary: "A private AI research workspace that answers questions from trusted documents and URLs.",
    role: "Designed and built the application",
    image: "/rag.png",
    imageAlt: "Research AI assisted RAG platform interface",
    tags: ["RAG", "React", "Azure Static Web Apps"],
    caseStudy: "/work/rag-knowledge-platform",
    live: "https://red-moss-043776110.3.azurestaticapps.net",
    github: "https://github.com/Mckings1/ragknowledge",
  },
  {
    
    title: "Azure AI Hackathon Platform",
    category: "AI · Application engineering",
    summary: "An AI workflow platform built with Semantic Kernel, Azure OpenAI and Azure Functions.",
    role: "Built as a hackathon project",
    image: "/hackathon.png",
    imageAlt: "Azure AI hackathon platform interface",
    tags: ["Semantic Kernel", "Azure OpenAI", "Azure Functions"],
    caseStudy: "/work/azure-ai-platform",
    live: "https://hackathon-g8.netlify.app",
    github: "https://github.com/Mckings1/hackathon",
  },
  {
    
    title: "Local Funds Transfer Workflow",
    category: "Financial services · Automation",
    summary: "A banking workflow connecting transfer routing, approvals and email notifications.",
    role: "Built for Access Bank using ProcessMaker",
    image: "/processmaker.png",
    imageAlt: "ProcessMaker workflow designer interface showing a workflow model",
    tags: ["ProcessMaker", "BPM", "Workflow design"],
    caseStudy: "/work/financial-services-workflow",
    live: "",
    github: "",
  },
];

const process = [
  { title: "Understand", text: "Start with the business problem, users and constraints.", icon: Search },
  { title: "Architect", text: "Map the system, data flow and integration points.", icon: Network },
  { title: "Build", text: "Develop the application and its underlying services.", icon: Code2 },
  { title: "Integrate", text: "Connect APIs, AI systems, data stores and external services.", icon: Workflow },
  { title: "Deploy", text: "Ship the solution to its intended environment.", icon: Rocket },
  { title: "Improve", text: "Use feedback and evidence to guide the next iteration.", icon: RefreshCw },
];

const perspective = [
  { title: "Statistics", image: "/statistics.png", alt: "Colorful analytics charts on a computer display" },
  { title: "Information science", image: "/Information.png", alt: "Warm library shelves representing research and knowledge" },
  { title: "Software engineering", image: "/Software.png", alt: "Software developer working at a multi-monitor desk" },
  { title: "AI systems", image: "/AIsystems.png", alt: "Blue network visualization representing connected AI systems" },
];

export default function Home() {
  useScrollReveal();

  return (
    <div className="page-shell">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="container relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-[1.15fr_0.85fr] md:pb-28 md:pt-36">
          <div className="max-w-3xl">
<p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">McKings / AI & Software Engineer</p>
            <h1 className="max-w-4xl font-display text-[clamp(2.8rem,7.1vw,6.4rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white">I build useful AI and backend systems.</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
              I build intelligent applications, automation systems and data-driven products across technology and financial services, bringing software engineering, AI, data and cloud together around practical needs.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <NavLink to="/work" className="gold-btn inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm">
                View selected work <ArrowRight size={16} />
              </NavLink>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="outline-gold-btn inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm">
                Let&apos;s connect <ArrowUpRight size={16} />
              </a>
            </div>
            <p className="mt-8 text-xs font-mono-custom uppercase tracking-[0.15em] text-white/40">AI engineering <span className="px-1.5 text-[var(--gold-400)]">·</span> Software <span className="px-1.5 text-[var(--gold-400)]">·</span> Data <span className="px-1.5 text-[var(--gold-400)]">·</span> Automation</p>
          </div>

          <div className="relative mx-auto w-full max-w-[26rem] md:ml-auto">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-white/10" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#141414]">
              <img src="/imgimg.jpg" alt="McKings, AI and Software Engineer" fetchPriority="high" className="h-full w-full object-cover object-[center_34%]" />
              <div className="hero-photo-caption absolute inset-x-0 bottom-0 bg-black/75 p-5">
                <p className="text-xs font-mono-custom uppercase tracking-[0.18em] text-white/60">Engineering intelligent systems</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-xl border border-white/10 bg-[#111] px-4 py-3 shadow-2xl sm:-left-10">
              <p className="text-[10px] font-mono-custom uppercase tracking-[0.16em] text-white/45">The foundation</p>
              <p className="mt-1 text-sm font-medium text-white">Statistics → Data → Software → AI</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-border" aria-labelledby="purpose-heading">
        <div className="section-heading reveal">
          <p className="eyebrow">What I do</p>
          <h2 id="purpose-heading" className="section-title">Engineering with purpose</h2>
          <p className="section-lede">I work across software engineering, AI, data and automation to build systems that address practical business problems.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ title, text, icon: Icon }) => (
            <article key={title} className="home-card reveal rounded-2xl p-6 md:p-7">
              <div className="mb-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold-dim)] text-[var(--gold-300)]">
                  <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell border-t border-border" aria-labelledby="selected-work-heading">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between reveal">
          <div className="section-heading mb-0">
            <p className="eyebrow">Selected work</p>
            <h2 id="selected-work-heading" className="section-title">Systems built for real needs</h2>
            <p className="section-lede">A selection of applications and workflows, from AI knowledge systems to financial services automation.</p>
          </div>
          <NavLink to="/work" className="inline-flex shrink-0 items-center gap-2 text-sm text-[var(--gold-300)] transition-colors hover:text-white">All work <ArrowRight size={15} /></NavLink>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group flex min-w-0 flex-col">
              <NavLink to={project.caseStudy} className="relative block aspect-[16/10] overflow-hidden rounded-2xl bg-secondary" aria-label={`Read case study: ${project.title}`}>
                {project.image ? <img src={project.image} alt={project.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /> : <div className="flex h-full items-center justify-center bg-[#171819]"><Workflow size={36} strokeWidth={1} className="text-[var(--gold-300)]/60" aria-hidden="true" /></div>}
                <span className="project-image-overlay absolute left-4 top-4 bg-black/75 px-3 py-1.5 text-[10px] font-mono-custom uppercase tracking-[0.14em] text-white/80">{project.category}</span>
                <span className="project-image-overlay absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/65 text-white transition-colors group-hover:border-[var(--gold-300)] group-hover:text-[var(--gold-300)]"><ArrowUpRight size={16} /></span>
              </NavLink>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <p className="mb-2 text-[10px] font-mono-custom tracking-[0.18em] text-[var(--gold-300)]">{project.role}</p>
                <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <div className="mt-auto flex flex-wrap gap-4 pt-5">
                  <NavLink to={project.caseStudy} className="inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-[var(--gold-300)]">Case study <ArrowRight size={14} /></NavLink>
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white">Live demo <ArrowUpRight size={13} /></a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code on GitHub`} className="inline-flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white"><Github size={14} /> Source</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>


      <section className="section-shell border-t border-border" aria-labelledby="journey-heading">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="section-heading reveal">
            <p className="eyebrow">Perspective</p>
            <h2 id="journey-heading" className="section-title">A foundation in data. An engineering mindset.</h2>
            <p className="section-lede">My path connects statistical reasoning and information science with the engineering of software and intelligent systems.</p>
            <NavLink to="/about" className="mt-7 inline-flex items-center gap-2 text-sm text-[var(--gold-300)] hover:text-white">More about my journey <ArrowRight size={15} /></NavLink>
          </div>
          <div className="grid grid-cols-2 gap-3 reveal">
            {perspective.map(({ title, image, alt }) => (
              <figure key={title} className="perspective-card group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <figcaption className="perspective-caption absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 pt-8 sm:p-4 sm:pt-10">
                  <span className="text-xs font-semibold leading-4 sm:text-sm">{title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section border-t border-border" aria-labelledby="process-heading">
        <div className="section-shell">
        <div className="section-heading reveal">
          <p className="eyebrow">How I work</p>
          <h2 id="process-heading" className="section-title">From problem to production</h2>
          <p className="section-lede">A clear engineering process keeps the problem, system design and implementation connected.</p>
        </div>
        <ol className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {process.map(({ title, text, icon: Icon }) => (
            <li key={title} className="process-card reveal">
              <span className="mb-5 grid h-10 w-10 place-items-center rounded-full bg-[var(--gold-dim)] text-[var(--gold-300)]">
                <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
        </div>
      </section>

      <section className="section-shell border-t border-border" aria-labelledby="research-heading">
        <div className="research-panel reveal grid items-center gap-8 rounded-3xl border border-border bg-card p-6 sm:p-9 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div className="relative">
            <p className="eyebrow">Research direction</p>
            <h2 id="research-heading" className="section-title max-w-2xl">How do knowledge systems stay reliable as information changes?</h2>
            <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">I am exploring statistical methods for detecting and mitigating knowledge drift in automated retrieval-augmented generation systems.</p>
            <NavLink to="/research" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold-300)] transition-colors hover:text-white">Research & ideas <ArrowRight size={15} /></NavLink>
          </div>
          <figure className="research-visual group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <img src={perspective[3].image} alt="Abstract network of connected nodes representing AI knowledge systems" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="research-visual-caption absolute inset-x-0 bottom-0 p-4 pt-12 text-xs font-mono-custom uppercase tracking-[0.14em]">Retrieval · Knowledge · Change</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-shell border-t border-border pt-0" id="contact" aria-labelledby="contact-heading">
        <div className="flex flex-col gap-8 border-t border-white/10 py-12 md:flex-row md:items-end md:justify-between reveal">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2 id="contact-heading" className="section-title max-w-2xl">Have a complex problem?</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">I am interested in building intelligent systems and working on products where careful engineering creates practical value.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gold-btn inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-sm">Let&apos;s connect <ArrowUpRight size={16} /></a>
            <a href="https://www.linkedin.com/in/mckings01" target="_blank" rel="noopener noreferrer" className="outline-gold-btn inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-sm"><Linkedin size={15} /> LinkedIn</a>
            <a href="https://github.com/Mckings1" target="_blank" rel="noopener noreferrer" className="outline-gold-btn inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-sm"><Github size={15} /> GitHub</a>
            <a href="mailto:alabioluwasegun8@gmail.com" className="outline-gold-btn inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-sm"><Mail size={15} /> Email</a>
          </div>
        </div>
      </section>
    </div>
  );
}
