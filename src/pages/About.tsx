import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WHATSAPP_URL } from "@/lib/brand";

const journey = [
  {
    label: "Today",
    title: "AI & Software Engineering",
    text: "Building intelligent applications, backend systems and automation for practical business needs.",
  },
  {
    label: "Academic foundation",
    title: "MSc Data & Information Science",
    text: "University of Ibadan",
  },
  {
    label: "Academic foundation",
    title: "BTech Statistics",
    text: "LAUTECH",
  },
];

export default function About() {
  useScrollReveal();

  return (
    <div className="page-shell">
      <header className="container mx-auto max-w-7xl px-6 pb-12 pt-32 md:pb-16 md:pt-40">
        <p className="eyebrow">Profile / About McKings</p>
        <h1 className="page-title">An engineer shaped by data, information and software.</h1>
        <p className="section-lede mt-6">I work at the intersection of software engineering, AI, data and intelligent systems.</p>
      </header>

      <section className="container mx-auto grid max-w-7xl gap-10 px-6 pb-20 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:pb-28">
        <div className="reveal relative mx-auto w-full max-w-sm md:mx-0">
          <div className="aspect-[4/5] overflow-hidden border border-white/10 bg-[#141414]">
            <img src="/imgimg.jpg" alt="McKings, AI and Software Engineer" loading="lazy" className="h-full w-full object-cover object-[center_34%]" />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-mono-custom uppercase tracking-[0.16em] text-white/45"><MapPin size={14} className="text-[var(--gold-300)]" /> Lagos, Nigeria</div>
        </div>

        <div className="reveal">
          <p className="eyebrow">The person behind the systems</p>
          <div className="space-y-5 text-base leading-8 text-white/65">
            <p>I am McKings, an AI & Software Engineer. My background in statistics and data and information science informs how I approach software: understand the information, model the problem, then engineer a system that can serve its users.</p>
            <p>My work has grown from front-end and backend development into AI applications, retrieval-augmented generation, data projects and business process automation. I have built a document-grounded RAG platform, an Azure AI hackathon application and a funds-transfer workflow using ProcessMaker.</p>
            <p>I am most interested in systems where software connects business processes, data and AI in a way that is understandable, useful and maintainable.</p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold-300)] transition-colors hover:text-white">Start a conversation <ArrowUpRight size={15} /></a>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="section-shell">
          <div className="section-heading reveal">
            <p className="eyebrow">Journey / 01</p>
            <h2 className="section-title">From statistical thinking to intelligent systems</h2>
            <p className="section-lede">A connected path through quantitative foundations, information and software engineering.</p>
          </div>
          <ol className="border-l border-white/15">
            {journey.map((item, index) => (
              <li key={item.title} className="reveal relative grid gap-2 border-b border-white/10 py-7 pl-7 sm:grid-cols-[0.35fr_1fr] sm:gap-8 sm:pl-10">
                <span className="absolute -left-[5px] top-9 h-2.5 w-2.5 rounded-full border border-[var(--gold-300)] bg-[#0b0c0d]" aria-hidden="true" />
                <p className="text-xs font-mono-custom uppercase tracking-[0.15em] text-[var(--gold-300)]">{item.label} <span className="text-white/25">/ 0{index + 1}</span></p>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading reveal">
          <p className="eyebrow">Technology / Selected tools</p>
          <h2 className="section-title">Tools in service of the system</h2>
          <p className="section-lede">A focused selection from the technologies used across the projects on this site.</p>
        </div>
        <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["AI systems", "Azure OpenAI · Semantic Kernel · RAG · LLM APIs"],
            ["Engineering", "Python · FastAPI · Node.js · React · REST APIs"],
            ["Cloud", "Microsoft Azure · Azure Functions · Vercel"],
            ["Data & automation", "SQL · Pandas · n8n · ProcessMaker"],
          ].map(([title, items]) => (
            <div key={title} className="reveal border-b border-r border-white/10 p-5 md:p-6">
              <h3 className="mb-3 text-sm font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-white/50">{items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between reveal">
          <div>
            <p className="eyebrow">Professional learning</p>
            <h2 className="text-xl font-semibold text-white">Certifications & continuing study</h2>
          </div>
          <NavLink to="/certifications" className="inline-flex items-center gap-2 text-sm text-[var(--gold-300)] hover:text-white">View credentials <GraduationCap size={16} /></NavLink>
        </div>
      </section>
    </div>
  );
}
