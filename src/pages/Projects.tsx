import { ArrowRight, ArrowUpRight, Github, Workflow } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { caseStudies } from "@/data/caseStudies";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Projects() {
  useScrollReveal();

  return (
    <div className="page-shell">
      <header className="container mx-auto max-w-7xl px-6 pb-14 pt-32 md:pb-20 md:pt-40">
        <p className="eyebrow">Portfolio / Work</p>
        <h1 className="page-title">Selected work</h1>
        <p className="section-lede mt-6">Systems I have designed and engineered across AI, software, data and business process automation.</p>
      </header>

      <section className="container mx-auto max-w-7xl px-6 pb-24 md:pb-32" aria-label="Project case studies">
        <div className="space-y-8">
          {caseStudies.map((project, index) => (
            <article key={project.slug} className="reveal grid overflow-hidden border border-white/10 bg-white/[0.015] lg:grid-cols-[0.92fr_1.08fr]">
              <NavLink to={`/work/${project.slug}`} className="group relative block min-h-64 overflow-hidden border-b border-white/10 bg-[#121314] lg:min-h-[24rem] lg:border-b-0 lg:border-r" aria-label={`Open ${project.title} case study`}>
                {project.image ? (
                  <img src={project.image} alt={project.imageAlt ?? ""} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
                ) : (
                  <div className="absolute inset-0 grid place-items-center bg-[#171819]"><Workflow size={46} strokeWidth={1} className="text-white/40" aria-hidden="true" /></div>
                )}
                <span className="absolute left-5 top-5 bg-black/75 px-3 py-1.5 text-[10px] font-mono-custom uppercase tracking-[0.14em] text-white/80">{project.discipline}</span>
                <span className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center border border-white/30 bg-black/50 text-white transition-colors group-hover:border-[var(--gold-300)] group-hover:text-[var(--gold-300)]"><ArrowUpRight size={17} /></span>
              </NavLink>

              <div className="flex flex-col p-6 md:p-9 lg:p-10">
                <p className="eyebrow">Case study / 0{index + 1}</p>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">{project.title}</h2>
                <p className="mb-7 max-w-2xl text-sm leading-6 text-white/60">{project.summary}</p>
                <div className="grid gap-5 border-t border-white/10 py-5 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-[10px] font-mono-custom uppercase tracking-[0.17em] text-white/40">The problem</h3>
                    <p className="text-sm leading-6 text-white/65">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-[10px] font-mono-custom uppercase tracking-[0.17em] text-white/40">The approach</h3>
                    <p className="text-sm leading-6 text-white/65">{project.approach}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-5 pt-7">
                  <NavLink to={`/work/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold-300)] hover:text-white">Read case study <ArrowRight size={15} /></NavLink>
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">Demo <ArrowUpRight size={14} /></a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"><Github size={14} /> GitHub</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
