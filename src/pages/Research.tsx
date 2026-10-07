import { ArrowUpRight, BookOpen, Network, Search, Sigma } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const interests = [
  { icon: Search, title: "Information retrieval", text: "How systems find and rank the material that best supports a task or answer." },
  { icon: Network, title: "Knowledge systems", text: "How structured and unstructured knowledge can remain useful as sources change." },
  { icon: Sigma, title: "Statistical methods", text: "How statistical reasoning can help measure system behaviour and surface meaningful change." },
  { icon: BookOpen, title: "AI evaluation", text: "How to assess retrieval and generated answers against the information they rely on." },
];

export default function Research() {
  useScrollReveal();

  return (
    <div className="page-shell">
      <header className="container mx-auto max-w-7xl px-6 pb-14 pt-32 md:pb-20 md:pt-40">
        <p className="eyebrow">Research / Ideas</p>
        <h1 className="page-title">Questions behind the systems.</h1>
        <p className="section-lede mt-6">An ongoing research direction at the intersection of statistics, information retrieval and AI engineering.</p>
      </header>

      <section className="container mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="grid gap-12 border-y border-white/10 py-9 md:grid-cols-[0.7fr_1.3fr] md:py-14">
          <div className="reveal">
            <p className="eyebrow">Research direction / In progress</p>
            <p className="text-sm leading-6 text-white/50">A working research question, not a published paper.</p>
          </div>
          <div className="reveal">
            <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-white md:text-5xl">A Statistical Framework for Detecting and Mitigating Knowledge Drift in Automated Retrieval-Augmented Generation Systems</h2>
            <p className="mt-7 max-w-3xl leading-7 text-white/60">This direction asks how changes in source knowledge can affect retrieval-augmented generation, and how statistical methods might help detect and respond to those changes. It connects my statistics background with my engineering work on RAG applications.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="section-shell">
          <div className="section-heading reveal">
            <p className="eyebrow">Topics of interest</p>
            <h2 className="section-title">Questions worth investigating</h2>
          </div>
          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="reveal border-b border-r border-white/10 p-6">
                <div className="mb-7 flex items-center justify-between"><span className="text-xs font-mono-custom text-[var(--gold-300)]">0{index + 1}</span><Icon size={18} className="text-white/50" strokeWidth={1.5} /></div>
                <h3 className="mb-3 font-semibold text-white">{title}</h3>
                <p className="text-sm leading-6 text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="reveal">
            <p className="eyebrow">Research approach</p>
            <h2 className="section-title">Connect the question to the system</h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-white/60 reveal">
            <p>Start by defining what knowledge drift means for a specific application and which sources or behaviours should be observed.</p>
            <p>Then explore whether statistical signals can identify meaningful changes in source material, retrieval behaviour or answer quality.</p>
            <p>Any proposed framework needs to be evaluated against clearly defined data and tasks before claims about effectiveness can be made.</p>
          </div>
        </div>
        <a href="https://github.com/Mckings1" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 text-sm text-[var(--gold-300)] hover:text-white">Research code and projects <ArrowUpRight size={15} /></a>
      </section>
    </div>
  );
}
