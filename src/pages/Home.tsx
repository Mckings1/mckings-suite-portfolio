import { useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { ArrowRight, Brain, Server, Cpu, GitBranch, Layers, Zap } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "4+", label: "Years Building" },
  { value: "50+", label: "Projects Shipped" },
  { value: "3", label: "Cloud Platforms" },
  { value: "RAG", label: "Hybrid Systems Built" },
];

const skills = [
  {
    icon: Brain,
    title: "AI Engineering",
    description:
      "Hybrid RAG systems, LLM integrations, prompt engineering, and intelligent agents. Building AI that actually works in production.",
    tags: ["FastAPI", "LangChain", "OpenAI", "Azure AI", "RAG", "Semantic Kernel"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Scalable REST APIs and backend services with FastAPI and Node.js. Clean architecture, async patterns, and real-world performance.",
    tags: ["FastAPI", "Python", "Node.js", "REST APIs", "PostgreSQL", "Docker"],
  },
  {
    icon: Cpu,
    title: "Automation & ML",
    description:
      "End-to-end ML pipelines, workflow automation with n8n and BPM tools, and predictive models that drive real decisions.",
    tags: ["Python", "Scikit-learn", "XGBoost", "n8n", "processmaker", "Pandas", "Azure ML"],
  },
  {
    icon: Layers,
    title: "Frontend & Cloud",
    description:
      "React interfaces when needed, deployed on Azure and Vercel. Full-stack capable — from model to UI.",
    tags: ["React", "TypeScript", "Azure", "Tailwind", "Vite"],
  },
];

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center px-6 pt-16 overflow-hidden"
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
          <div className="grid md:grid-cols-2 gap-16 items-center">

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
                className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6 animate-fade-in-up"
                style={{ color: "rgba(255,255,255,0.95)" }}
              >
                I'm{" "}
                <span className="shimmer-text">McKings</span>
              </h1>

              <div
                className="text-lg md:text-xl mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.15s", color: "rgba(255,255,255,0.5)" }}
              >
                <TypeAnimation
                  sequence={[
                    "AI Engineer.",
                    2500,
                    "Backend Developer.",
                    2500,
                    "Automation Developer.",
                    2500,
                    "LLM Integration Specialist.",
                    2500,
                  ]}
                  wrapper="span"
                  speed={55}
                  className="font-medium"
                  style={{ color: "var(--gold-300)" }}
                  repeat={Infinity}
                />
              </div>

              <p
                className="text-base leading-relaxed mb-10 max-w-lg animate-fade-in-up"
                style={{ animationDelay: "0.25s", color: "rgba(255,255,255,0.45)" }}
              >
                I build intelligent backend systems and AI pipelines — hybrid RAG architectures,
                LLM integrations, and automation workflows using FastAPI, Python, and Node.js.
                Cloud-native, production-ready, and built to last.
              </p>

              <div
                className="flex flex-wrap gap-4 animate-fade-in-up"
                style={{ animationDelay: "0.35s" }}
              >
                <NavLink to="/projects">
                  <button className="gold-btn inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm">
                    See My Work <ArrowRight size={16} />
                  </button>
                </NavLink>
                <NavLink to="/about">
                  <button className="outline-gold-btn inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm">
                    About Me
                  </button>
                </NavLink>
              </div>
            </div>

            {/* Right — profile */}
            <div className="flex justify-center md:justify-end">
              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {/* Glow ring */}
                <div
                  className="absolute inset-0 rounded-full animate-gold-pulse"
                  style={{
                    background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
                    transform: "scale(1.3)",
                  }}
                />
                {/* Image ring */}
                <div
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[2px] animate-float"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <div
                    className="w-full h-full rounded-full overflow-hidden"
                    style={{ background: "#0A0A0A" }}
                  >
                    <img
                      src="/imgimg.jpg"
                      alt="McKings"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <div
                  className="absolute -bottom-4 -left-6 px-4 py-2.5 rounded-2xl animate-scale-in"
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
                        Production-ready
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badge 2 */}
                <div
                  className="absolute -top-4 -right-6 px-4 py-2.5 rounded-2xl animate-scale-in"
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
                        FastAPI <br /> Node.js
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
          <div className="gold-line mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal stagger-${i + 1} text-center`}
              >
                <div
                  className="font-display text-4xl md:text-5xl font-bold mb-2 gold-text"
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="gold-line mt-16" />
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
            className="reveal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
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
                href="mailto:alabioluwasegun8@gmail.com"
                className="gold-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm"
              >
                Get in Touch <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
