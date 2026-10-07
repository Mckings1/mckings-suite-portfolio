import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CaseStudy() {
  const { slug } = useParams();
  useScrollReveal(slug);
  const project = caseStudies.find((item) => item.slug === slug);

  if (!project) return <Navigate to="/work" replace />;

  return (
    <article className="page-shell">
      <header className="container mx-auto max-w-5xl px-6 pb-12 pt-32 md:pb-16 md:pt-40">
        <Link to="/work" className="mb-10 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"><ArrowLeft size={15} /> All work</Link>
        <p className="eyebrow">Case study / {project.discipline}</p>
        <h1 className="page-title">{project.title}</h1>
        <p className="section-lede mt-6">{project.summary}</p>
        <p className="mt-5 text-xs font-mono-custom uppercase tracking-[0.16em] text-white/40">Role / {project.role}</p>
      </header>

      {project.image && (
        <div className="container mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <div className="aspect-[16/8] overflow-hidden border border-white/10 bg-[#121314]">
            <img src={project.image} alt={project.imageAlt ?? ""} fetchPriority="high" className="h-full w-full object-cover" />
          </div>
        </div>
      )}

      <div className="container mx-auto grid max-w-7xl gap-14 px-6 pb-24 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-20 md:pb-32">
        <div className="space-y-14">
          <section className="reveal">
            <p className="eyebrow">01 / Overview</p>
            <p className="max-w-3xl text-lg leading-8 text-white/70">{project.summary} {project.approach}</p>
          </section>

          <section className="reveal">
            <p className="eyebrow">02 / The problem</p>
            <h2 className="mb-4 text-2xl font-semibold text-white">What needed to work better</h2>
            <p className="max-w-3xl leading-7 text-white/60">{project.problem}</p>
          </section>

          <section className="reveal">
            <p className="eyebrow">03 / The approach</p>
            <h2 className="mb-4 text-2xl font-semibold text-white">System design around the task</h2>
            <p className="max-w-3xl leading-7 text-white/60">{project.approach}</p>
          </section>

          <section className="reveal" aria-labelledby="architecture-heading">
            <p className="eyebrow">04 / Architecture</p>
            <h2 id="architecture-heading" className="mb-6 text-2xl font-semibold text-white">A clear path through the system</h2>
            <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {project.architecture.map((step, index) => (
                <li key={step} className="relative flex min-h-28 items-start gap-4 border border-white/10 bg-white/[0.02] p-5">
                  <span className="text-xs font-mono-custom text-[var(--gold-300)]">0{index + 1}</span>
                  <span className="text-sm leading-6 text-white/75">{step}</span>
                  {index < project.architecture.length - 1 && <ArrowRight size={13} className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 bg-[#0b0c0d] text-[var(--gold-300)] lg:block" aria-hidden="true" />}
                </li>
              ))}
            </ol>
            <p className="mt-3 text-xs text-white/35">High-level view based on the documented project components.</p>
          </section>

          <section className="reveal">
            <p className="eyebrow">05 / Engineering decisions</p>
            <ul className="space-y-3">
              {project.decisions.map((decision) => <li key={decision} className="flex gap-3 border-b border-white/10 py-4 text-sm leading-6 text-white/65"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--gold-300)]" />{decision}</li>)}
            </ul>
          </section>

          <section className="reveal">
            <p className="eyebrow">06 / Outcome</p>
            <p className="max-w-3xl text-lg leading-8 text-white/70">{project.outcome}</p>
          </section>

          <section className="reveal border-l-2 border-[var(--gold-400)] pl-6">
            <p className="eyebrow">Engineering reflection</p>
            <p className="max-w-3xl leading-7 text-white/60">{project.reflection}</p>
          </section>
        </div>

        <aside className="space-y-8 md:sticky md:top-28 md:self-start">
          <div className="border-t border-white/15 pt-5">
            <h2 className="mb-4 text-xs font-mono-custom uppercase tracking-[0.17em] text-white/45">Technology</h2>
            <div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
          </div>
          <div className="border-t border-white/15 pt-5">
            <h2 className="mb-4 text-xs font-mono-custom uppercase tracking-[0.17em] text-white/45">Project links</h2>
            <div className="flex flex-col items-start gap-4">
              {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[var(--gold-300)]">Open demo <ArrowUpRight size={14} /></a>}
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[var(--gold-300)]"><Github size={14} /> Source on GitHub <ArrowUpRight size={14} /></a>}
            </div>
          </div>
          <Link to="/work" className="inline-flex items-center gap-2 pt-2 text-sm text-[var(--gold-300)] hover:text-white"><ArrowLeft size={14} /> Back to selected work</Link>
        </aside>
      </div>
    </article>
  );
}
