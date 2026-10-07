import { ArrowUpRight, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const certifications = [
  { title: "Microsoft Azure AI Fundamentals (AI-900)", issuer: "Microsoft", year: "2025", url: "https://learn.microsoft.com/" },
  { title: "IBM Data Science Professional Certificate", issuer: "IBM", year: "2024", url: "https://www.coursera.org/professional-certificates/ibm-data-science" },
  { title: "IBM Machine Learning Professional Certificate", issuer: "IBM", year: "2024", url: "https://www.coursera.org/professional-certificates/ibm-machine-learning" },
  { title: "Meta Front-End Developer Certificate", issuer: "Meta", year: "2024", url: "https://www.coursera.org/professional-certificates/meta-front-end-developer" },
  { title: "Google Data Analytics Certificate", issuer: "Google", year: "2023", url: "https://grow.google/certificates/data-analytics/" },
  { title: "IBM Full Stack Developer Certificate", issuer: "IBM", year: "2023", url: "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer" },
];

export default function Certifications() {
  useScrollReveal();

  return (
    <div className="page-shell">
      <header className="container mx-auto max-w-7xl px-6 pb-14 pt-32 md:pb-20 md:pt-40">
        <p className="eyebrow">Profile / Credentials</p>
        <h1 className="page-title">Professional learning.</h1>
        <p className="section-lede mt-6">Selected certifications across AI, data science, machine learning and software development.</p>
      </header>
      <section className="container mx-auto max-w-5xl px-6 pb-24 md:pb-32" aria-label="Professional certifications">
        <div className="divide-y divide-white/10 border-y border-white/10">
          {certifications.map((cert, index) => (
            <article key={cert.title} className="reveal grid gap-4 py-6 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-7">
              <span className="text-xs font-mono-custom text-[var(--gold-300)]">0{index + 1}</span>
              <div className="flex items-start gap-4">
                <Award size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-white/45" aria-hidden="true" />
                <div><h2 className="font-medium leading-6 text-white">{cert.title}</h2><p className="mt-1 text-xs text-white/45">{cert.issuer}</p></div>
              </div>
              <div className="flex items-center gap-4 pl-8 sm:pl-0"><span className="text-xs font-mono-custom text-white/45">{cert.year}</span><a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[var(--gold-300)] hover:text-white">Credential info <ArrowUpRight size={13} /></a></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
