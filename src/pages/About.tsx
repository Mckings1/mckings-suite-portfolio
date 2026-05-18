import { useScrollReveal } from "@/hooks/useScrollReveal";

const stack = [
  {
    category: "AI & ML",
    items: ["FastAPI", "LangChain", "OpenAI API", "Azure OpenAI", "Semantic Kernel", "RAG", "Scikit-learn", "XGBoost", "PyTorch", "TensorFlow"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "FastAPI",  "REST APIs", "PostgreSQL", "MicrosoftSQLServer", "Docker", "Azure Functions"],
  },
  {
    category: "Automation",
    items: ["n8n", "ProcessMaker", "BPM", "Azure Logic Apps", "Pandas", "NumPy"],
  },
  {
    category: "Frontend & Cloud",
    items: ["JavaScript", "React", "TypeScript", "Tailwind CSS", "Azure", "Vercel", "Supabase", "Firebase"],
  },
];

const timeline = [
  {
    year: "2025",
    title: "Azure AI Certified",
    body: "Earned Microsoft Azure AI Fundamentals (AI-900). Deep-dived into production AI systems — hybrid RAG architectures, LLM integrations on Azure OpenAI, and intelligent automation pipelines.",
  },
  {
    year: "2024",
    title: "Full AI Engineer pivot",
    body: "Shifted primary focus to AI engineering. Built a privacy-first Hybrid RAG system, Azure AI hackathon platform with Semantic Kernel, and real-estate automation agents with n8n.",
  },
  {
    year: "2024",
    title: "IBM & Meta certified",
    body: "Completed IBM Data Science Professional Certificate and Meta Front-End Developer certification. Shipped end-to-end ML pipelines and production React apps.",
  },
  {
    year: "2023",
    title: "Backend & Automation",
    body: "Moved beyond the browser — built Python automation scripts, BPM workflows for AccessBank on ProcessMaker, and data pipelines that actually moved the needle.",
  },
  {
    year: "2022",
    title: "Started building",
    body: "Began with JavaScript, React, and frontend fundamentals. Quickly realized the real work happens on the backend and in data — and chased that relentlessly.",
  },
];

export default function About() {
  useScrollReveal();

  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-20 reveal">
          <p
            className="text-xs font-mono-custom tracking-widest uppercase mb-4"
            style={{ color: "var(--gold-500)" }}
          >
            About
          </p>
          <h1
            className="font-display text-5xl md:text-6xl font-bold mb-6"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            The story so far
          </h1>
          <div className="gold-line w-24" />
        </div>

        {/* Bio */}
        <div className="grid md:grid-cols-5 gap-12 mb-24">
          <div className="md:col-span-3 reveal-left">
            <div className="space-y-5">
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                I'm an AI Engineer and Backend Developer based in Lagos. My work lives at the intersection
                of intelligent systems and real engineering — building things that don't just demo well,
                but hold up in production.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                I started with frontend development, but the deeper pull was always toward
                systems thinking — how data moves, how models reason, how automation eliminates
                the repetitive so humans can focus on the meaningful. That led me to FastAPI,
                Python, and eventually to building hybrid RAG systems and LLM-powered backends
                on Azure.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                I also work with Node.js for API services, and I can build the frontend when needed —
                but AI and backend engineering is where I operate at my highest level.
                MSc in Data Science is next. PhD in AI/ML is the horizon.
              </p>
            </div>
          </div>

          {/* Quick facts */}
          <div className="md:col-span-2 reveal-right">
            <div
              className="rounded-2xl p-6 space-y-5"
              style={{
                background: "rgba(201,168,76,0.04)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              {[
                { label: "Based in", value: "Lagos, Nigeria" },
                { label: "Primary stack", value: "Node.js · FastAPI · Python" },
                { label: "Focus", value: "AI Engineering" },
                { label: "Experience", value: "4+ years" },
                { label: "Education", value: "MSc Data Science (upcoming)" },
                { label: "Open to", value: "Remote & on-site roles" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-start gap-4">
                  <span
                    className="text-xs font-mono-custom tracking-wide"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-xs text-right font-medium"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="reveal mb-12">
            <p
              className="text-xs font-mono-custom tracking-widest uppercase mb-3"
              style={{ color: "var(--gold-500)" }}
            >
              Journey
            </p>
            <h2
              className="font-display text-3xl font-bold"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              How I got here
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[11px] top-2 bottom-2 w-px"
              style={{ background: "linear-gradient(to bottom, var(--gold-400), transparent)" }}
            />

            <div className="space-y-10 pl-10">
              {timeline.map((item, i) => (
                <div key={item.year} className={`reveal stagger-${i + 1} relative`}>
                  {/* Dot */}
                  <div
                    className="absolute -left-10 w-[10px] h-[10px] rounded-full mt-1.5"
                    style={{
                      background: "var(--gold-400)",
                      boxShadow: "0 0 10px rgba(201,168,76,0.5)",
                    }}
                  />
                  <span
                    className="text-xs font-mono-custom tracking-widest"
                    style={{ color: "var(--gold-500)" }}
                  >
                    {item.year}
                  </span>
                  <h3
                    className="font-display text-lg font-semibold mt-1 mb-2"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stack */}
        <div>
          <div className="reveal mb-12">
            <p
              className="text-xs font-mono-custom tracking-widest uppercase mb-3"
              style={{ color: "var(--gold-500)" }}
            >
              Toolkit
            </p>
            <h2
              className="font-display text-3xl font-bold"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              Tech I work with
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {stack.map((group, i) => (
              <div
                key={group.category}
                className={`glass-card rounded-2xl p-6 reveal stagger-${i + 1}`}
              >
                <p
                  className="text-xs font-mono-custom tracking-widest uppercase mb-4"
                  style={{ color: "var(--gold-500)" }}
                >
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
