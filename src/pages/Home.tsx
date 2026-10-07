import { ArrowRight, ArrowUpRight, BrainCircuit, Code2, Database, Github, Linkedin, Mail, Workflow } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WHATSAPP_URL } from "@/lib/brand";

const capabilities = [
  { number: "01", title: "AI engineering", text: "RAG systems, AI orchestration, intelligent workflows and AI-powered applications.", icon: BrainCircuit },
  { number: "02", title: "Software engineering", text: "Web applications, APIs, enterprise workflows and thoughtful system design.", icon: Code2 },
  { number: "03", title: "Data & information", text: "Data analysis, information retrieval, statistical reasoning and knowledge systems.", icon: Database },
  { number: "04", title: "Automation & cloud", text: "Workflow automation, integrations, cloud services and deployed applications.", icon: Workflow },
];

const projects = [
  {
    number: "01",
    title: "RAG Knowledge Platform",
    category: "AI · Knowledge systems",
    problem: "Teams need useful answers grounded in their own documents, URLs and policies.",
    solution: "A privacy-first retrieval-augmented application that brings source material into an AI-assisted research workflow.",
    role: "Designed and built the application",
    image: "/rag.png",
    imageAlt: "Research AI assisted RAG platform interface",
    tags: ["RAG", "React", "Azure Static Web Apps"],
    caseStudy: "/work/rag-knowledge-platform",
    live: "https://red-moss-043776110.3.azurestaticapps.net",
    github: "https://github.com/Mckings1/ragknowledge",
  },
  {
    number: "02",
    title: "Azure AI Hackathon Platform",
    category: "AI · Application engineering",
    problem: "A hackathon brief called for AI-enabled task automation and content workflows.",
    solution: "A web platform using Semantic Kernel and Azure OpenAI, with Azure Functions and a React interface.",
    role: "Built as a hackathon project",
    image: "/hackathon.png",
    imageAlt: "Azure AI hackathon platform interface",
    tags: ["Semantic Kernel", "Azure OpenAI", "Azure Functions"],
    caseStudy: "/work/azure-ai-platform",
    live: "https://hackathon-g8.netlify.app",
    github: "https://github.com/Mckings1/hackathon",
  },
  {
    number: "03",
    title: "Local Funds Transfer Workflow",
    category: "Financial services · Automation",
    problem: "A local transfer process needed clear routing, approvals and notifications.",
    solution: "A BPM workflow that connects transfer routing, email notifications and an approval process.",
    role: "Built for GTBank using ProcessMaker",
    image: null,
    imageAlt: "",
    tags: ["ProcessMaker", "BPM", "Workflow design"],
    caseStudy: "/work/financial-services-workflow",
    live: "",
    github: "",
  },
];

const process = [
  ["01", "Understand", "Start with the business problem, users and constraints."],
  ["02", "Architect", "Map the system, data flow and integration points."],
  ["03", "Build", "Develop the application and its underlying services."],
  ["04", "Integrate", "Connect APIs, AI systems, data stores and external services."],
  ["05", "Deploy", "Ship the solution to its intended environment."],
  ["06", "Improve", "Use feedback and evidence to guide the next iteration."],
];

export default function Home() {
  useScrollReveal();

  return (
    <div>
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
              <div className="absolute inset-x-0 bottom-0 bg-black/75 p-5">
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

      <section className="section-shell" aria-labelledby="purpose-heading">
        <div className="section-heading reveal">
          <p className="eyebrow">01 / What I do</p>
          <h2 id="purpose-heading" className="section-title">Engineering with purpose</h2>
          <p className="section-lede">I work across software engineering, AI, data and automation to build systems that address practical business problems.</p>
        </div>
        <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ number, title, text, icon: Icon }) => (
            <article key={title} className="reveal border-b border-r border-white/10 p-6 md:p-7">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-mono-custom text-[var(--gold-300)]">{number}</span>
                <Icon size={19} strokeWidth={1.5} className="text-white/55" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-white/55">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell border-y border-white/10 bg-white/[0.015]" aria-labelledby="selected-work-heading">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between reveal">
          <div className="section-heading mb-0">
            <p className="eyebrow">02 / Selected work</p>
            <h2 id="selected-work-heading" className="section-title">Systems built for real needs</h2>
            <p className="section-lede">A selection of applications and workflows, from AI knowledge systems to financial services automation.</p>
          </div>
          <NavLink to="/work" className="inline-flex shrink-0 items-center gap-2 text-sm text-[var(--gold-300)] transition-colors hover:text-white">All work <ArrowRight size={15} /></NavLink>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="group flex min-w-0 flex-col border border-white/10 bg-[#0d0e0f] transition-colors duration-300 hover:border-[var(--gold-400)]/40">
              <NavLink to={project.caseStudy} className="relative block aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#151617]" aria-label={`Read case study: ${project.title}`}>
                {project.image ? <img src={project.image} alt={project.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /> : <div className="flex h-full items-center justify-center bg-[#171819]"><Workflow size={36} strokeWidth={1} className="text-[var(--gold-300)]/60" aria-hidden="true" /></div>}
                <span className="absolute left-4 top-4 bg-black/75 px-3 py-1.5 text-[10px] font-mono-custom uppercase tracking-[0.14em] text-white/80">{project.category}</span>
                <span className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/65 text-white transition-colors group-hover:border-[var(--gold-300)] group-hover:text-[var(--gold-300)]"><ArrowUpRight size={16} /></span>
              </NavLink>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <p className="mb-2 text-[10px] font-mono-custom tracking-[0.18em] text-[var(--gold-300)]">{project.number} / {project.role}</p>
                <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mb-2 text-sm leading-6 text-white/50"><span className="text-white/75">Need — </span>{project.problem}</p>
                <p className="text-sm leading-6 text-white/60">{project.solution}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <div className="mt-auto flex flex-wrap gap-4 border-t border-white/10 pt-5">
                  <NavLink to={project.caseStudy} className="inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-[var(--gold-300)]">Case study <ArrowRight size={14} /></NavLink>
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white">Live demo <ArrowUpRight size={13} /></a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code on GitHub`} className="inline-flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white"><Github size={14} /> Source</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-labelledby="journey-heading">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="section-heading reveal">
            <p className="eyebrow">03 / Perspective</p>
            <h2 id="journey-heading" className="section-title">A foundation in data. An engineering mindset.</h2>
            <p className="section-lede">My path connects statistical reasoning and information science with the engineering of software and intelligent systems.</p>
            <NavLink to="/about" className="mt-7 inline-flex items-center gap-2 text-sm text-[var(--gold-300)] hover:text-white">More about my journey <ArrowRight size={15} /></NavLink>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4 reveal">
            {["Statistics", "Information science", "Software engineering", "AI systems"].map((stage, index) => (
              <div key={stage} className="border-b border-r border-white/10 p-4 md:p-5">
                <span className="mb-8 block text-xs font-mono-custom text-[var(--gold-300)]">0{index + 1}</span>
                <p className="text-sm font-medium leading-5 text-white/80">{stage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-white/10 bg-white/[0.015]" aria-labelledby="process-heading">
        <div className="section-heading reveal">
          <p className="eyebrow">04 / How I work</p>
          <h2 id="process-heading" className="section-title">From problem to production</h2>
          <p className="section-lede">A clear engineering process keeps the problem, system design and implementation connected.</p>
        </div>
        <ol className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {process.map(([number, title, text]) => (
            <li key={number} className="reveal border-b border-r border-white/10 p-6 md:p-7">
              <span className="mb-5 block text-xs font-mono-custom text-[var(--gold-300)]">{number}</span>
              <h3 className="mb-2 font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-white/50">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell" aria-labelledby="research-heading">
        <div className="relative overflow-hidden border border-white/10 bg-[#111213] p-7 sm:p-10 md:p-14 reveal">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-white/[0.025]" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <p className="eyebrow">05 / Research direction</p>
            <h2 id="research-heading" className="section-title max-w-2xl">How do knowledge systems stay reliable as information changes?</h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/55">I am exploring statistical methods for detecting and mitigating knowledge drift in automated retrieval-augmented generation systems.</p>
            <NavLink to="/research" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold-300)] transition-colors hover:text-white">Research & ideas <ArrowRight size={15} /></NavLink>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0" id="contact" aria-labelledby="contact-heading">
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
