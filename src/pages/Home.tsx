import { NavLink } from "@/components/NavLink";
import { ArrowRight, Brain, Server, Cpu, GitBranch, Layers, Zap, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const focusAreas = [
  "AI & RAG systems",
  "Backend APIs",
  "Workflow automation",
  "Cloud applications",
];

const whatsappUrl = "https://wa.me/2348107087430?text=Hi%20McKings%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const skills = [
  {
    icon: Brain,
    title: "AI Engineering",
    description:
      "Hybrid RAG systems, LLM integrations, prompt engineering, and intelligent agents. Building document-grounded AI and LLM features for practical use.",
    tags: ["FastAPI", "LangChain", "OpenAI", "Azure AI", "RAG", "Semantic Kernel"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "API services and backend features with FastAPI and Node.js, supported by Python, PostgreSQL, and Docker.",
    tags: ["FastAPI", "Python", "Node.js", "REST APIs", "PostgreSQL", "Docker"],
  },
  {
    icon: Cpu,
    title: "Automation & ML",
    description:
      "ML projects and workflow automation with n8n and BPM tools, alongside data analysis in Python.",
    tags: ["Python", "Scikit-learn", "XGBoost", "n8n", "processmaker", "Pandas", "Azure ML"],
  },
  {
    icon: Layers,
    title: "Frontend & Cloud",
    description:
      "React interfaces when needed, deployed on Azure and Vercel. Full-stack capable, from model to interface.",
    tags: ["React", "TypeScript", "Azure", "Tailwind", "Vite"],
  },
];

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[calc(100svh-4rem)] flex items-center px-6 pt-24 pb-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.07) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(201,168,76,0.04) 0%, transparent 50%)",
        }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto">
          <div className="grid md:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono-custom tracking-widest uppercase mb-8 animate-fade-in"
                style={{
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "var(--gold-400)",
                  background: "rgba(201,168,76,0.06)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-gold-pulse" />
                Available for work
              </div>

              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6 animate-fade-in-up"
                style={{ color: "rgba(255,255,255,0.95)" }}
              >
                I build useful AI and backend systems.
              </h1>

              <div
                className="text-lg md:text-xl mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.15s", color: "rgba(255,255,255,0.5)" }}
              >
                <span className="font-medium" style={{ color: "var(--gold-300)" }}>McKings / AI Engineer & Backend Developer</span>
              </div>

              <p
                className="text-base leading-relaxed mb-10 max-w-lg animate-fade-in-up"
                style={{ animationDelay: "0.25s", color: "rgba(255,255,255,0.45)" }}
              >
                I turn data, language models, and business processes into practical software: document-grounded AI, backend APIs, and workflow automation. My toolkit includes Python, FastAPI, Node.js, and Azure.
              </p>

              <div
                className="flex flex-wrap gap-3 animate-fade-in-up"
                style={{ animationDelay: "0.35s" }}
              >
                <NavLink to="/projects" className="gold-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm">
                    Explore my work <ArrowRight size={16} />
                </NavLink>
                <NavLink to="/about" className="outline-gold-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm">
                    About me
                </NavLink>
              </div>
            </div>

            {/* Right — profile */}
            <div className="flex justify-center md:justify-end md:pr-3">
              <div className="relative w-[min(78vw,22rem)] md:w-full md:max-w-[26rem] animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {/* Glow ring */}
                <div
                  className="absolute inset-0 rounded-full animate-gold-pulse"
                  style={{
                    background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
                    transform: "scale(1.16)",
                  }}
                />
                {/* Image ring */}
                <div
                  className="relative aspect-[4/5] w-full rounded-[2rem] p-px overflow-hidden"
                  style={{ background: "linear-gradient(145deg, rgba(232,196,106,0.75), rgba(201,168,76,0.08) 55%, rgba(255,255,255,0.12))" }}
                >
                  <div
                    className="w-full h-full rounded-[calc(2rem-1px)] overflow-hidden"
                    style={{ background: "#111" }}
                  >
                    <img
                      src="/imgimg.jpg"
                      alt="McKings"
                      className="w-full h-full object-cover object-[center_34%]"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <div
                  className="absolute bottom-4 -left-3 sm:-left-8 px-4 py-3 rounded-2xl shadow-2xl"
                  style={{
                    animationDelay: "0.6s",
                    background: "rgba(10,10,10,0.9)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <GitBranch size={14} style={{ color: "var(--gold-400)" }} />
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "var(--gold-300)" }}>
                        Hybrid RAG
                      </p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Document-grounded RAG
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badge 2 */}
                <div
                  className="absolute top-5 -right-3 sm:-right-8 px-4 py-3 rounded-2xl shadow-2xl"
                  style={{
                    animationDelay: "0.75s",
                    background: "rgba(10,10,10,0.9)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Zap size={14} style={{ color: "var(--gold-400)" }} />
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "var(--gold-300)" }}>
                        Python / FastAPI
                      </p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Backend
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)" }}
          />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-6 md:px-8 reveal">
            <p className="mb-4 text-[10px] font-mono-custom uppercase tracking-[0.22em] text-white/35">Areas of focus</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-3">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-sm text-white/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-400)]" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What I Do ── */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="mb-14 reveal">
            <p
              className="text-xs font-mono-custom tracking-widest uppercase mb-3"
              style={{ color: "var(--gold-500)" }}
            >
              Expertise
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-bold"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              What I Build
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className={`glass-card-hover rounded-2xl p-8 reveal stagger-${i + 1}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                  >
                    <Icon size={22} style={{ color: "var(--gold-400)" }} />
                  </div>
                  <h3
                    className="font-display text-xl font-semibold mb-3"
                    style={{ color: "var(--gold-200)" }}
                  >
                    {skill.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div
            className="reveal rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden"
            style={{
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: "radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, transparent 65%)",
              }}
            />
            <div className="relative">
              <p
                className="text-xs font-mono-custom tracking-widest uppercase mb-4"
                style={{ color: "var(--gold-500)" }}
              >
                Let's work together
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                Got a project in mind?
              </h2>
              <p
                className="text-base mb-10 max-w-xl mx-auto"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Whether it's an AI system, a backend API, or an automation pipeline —
                I build things that work. Let's talk.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm"
              >
                <MessageCircle size={17} /> Get in Touch on WhatsApp <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
