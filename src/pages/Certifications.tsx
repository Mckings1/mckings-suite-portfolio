import { ArrowUpRight, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const certifications = [
  { title: "JavaScript Certification", url: "https://mckings-portfolio.netlify.app/img/Js%20certification.JPG" },
  { title: "Data Visualization Certificate", url: "https://mckings-portfolio.netlify.app/img/Data%20Visualization%20Certificate_page-0001.jpg" },
  { title: "Predictive Analytics for Business Certification", url: "https://mckings-portfolio.netlify.app/img/Predictive%20Analytics%20for%20Business%20Certification_page-0001.jpg" },
  { title: "Business Analytics Certification", url: "https://mckings-portfolio.netlify.app/img/Business%20Analytics%20Certification_page-0001.jpg" },
  { title: "IBM Data Science Certificate", url: "https://mckings-portfolio.netlify.app/img/IBM%20Data%20science%20Coursera%20HLKX1X78DPOL_page-0001.jpg" },
  { title: "Meta Front-End Certificate", url: "https://mckings-portfolio.netlify.app/img/meta%20Front-End%20certificate.png" },
  { title: "Professional Scrum Master I", url: "https://mckings-portfolio.netlify.app/img/Professional%20Scrum%20Master%20I_page-0001.jpg" },
  { title: "Web Design Certification", url: "https://mckings-portfolio.netlify.app/img/Web%20Design%20Certification_page-0001.jpg" },
];

export default function Certifications() {
  useScrollReveal();

  return (
    <div className="page-shell">
      <header className="container mx-auto max-w-7xl px-6 pb-14 pt-32 md:pb-20 md:pt-40">
        <p className="eyebrow">Profile / Credentials</p>
        <h1 className="page-title">Professional learning.</h1>
        <p className="section-lede mt-6">Selected certifications across AI, data science, analytics and software development.</p>
      </header>
      <section className="container mx-auto max-w-5xl px-6 pb-24 md:pb-32" aria-label="Professional certifications">
        <div className="divide-y divide-white/10 border-y border-white/10">
          {certifications.map((cert) => (
            <article key={cert.title} className="reveal grid gap-4 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-7">
              <div className="flex items-start gap-4">
                <Award size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-white/45" aria-hidden="true" />
                <h2 className="font-medium leading-6 text-white">{cert.title}</h2>
              </div>
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 pl-8 text-xs text-[var(--gold-300)] hover:text-white sm:pl-0">View certificate <ArrowUpRight size={13} /></a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}