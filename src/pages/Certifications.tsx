import { CertificationCard } from "@/components/CertificationCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const certifications = [
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    credentialUrl: "https://learn.microsoft.com/",
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    date: "2024",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    credentialUrl: "https://www.coursera.org/professional-certificates/ibm-data-science",
  },
  {
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    date: "2024",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    credentialUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
  {
    title: "IBM Machine Learning Professional Certificate",
    issuer: "IBM",
    date: "2024",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    credentialUrl: "https://www.coursera.org/professional-certificates/ibm-machine-learning",
  },
  {
    title: "Google Data Analytics Certificate",
    issuer: "Google",
    date: "2023",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    credentialUrl: "https://grow.google/certificates/data-analytics/",
  },
  {
    title: "IBM Full Stack Developer Certificate",
    issuer: "IBM",
    date: "2023",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    credentialUrl: "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer",
  },
];

export default function Certifications() {
  useScrollReveal();

  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="container mx-auto">

        {/* Header */}
        <div className="mb-14 reveal">
          <p
            className="text-xs font-mono-custom tracking-widest uppercase mb-4"
            style={{ color: "var(--gold-500)" }}
          >
            Credentials
          </p>
          <h1
            className="font-display text-5xl md:text-6xl font-bold mb-4"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            Certifications
          </h1>
          <p
            className="text-base max-w-xl"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Industry credentials that back up the work — from Azure AI to IBM Data Science
            and Meta Frontend engineering.
          </p>
          <div className="gold-line w-24 mt-8" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div key={cert.title} className={`reveal stagger-${(i % 5) + 1}`}>
              <CertificationCard {...cert} />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="mt-16 rounded-2xl p-8 text-center reveal"
          style={{
            background: "rgba(201,168,76,0.03)",
            border: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          <p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            MSc Data Science — in progress. The learning never stops.
          </p>
        </div>

      </div>
    </div>
  );
}
