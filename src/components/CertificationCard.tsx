import { ExternalLink } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  credentialUrl?: string;
}

export function CertificationCard({ title, issuer, date, logo, credentialUrl }: CertificationCardProps) {
  return (
    <div className="glass-card-hover rounded-2xl p-6 flex flex-col gap-4">
      {/* Logo + issuer */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shrink-0"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}
        >
          <img
            src={logo}
            alt={issuer}
            className="w-7 h-7 object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div>
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--gold-500)" }}
          >
            {issuer}
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {date}
          </p>
        </div>
      </div>

      {/* Title */}
      <p
        className="text-sm font-medium leading-snug flex-1"
        style={{ color: "rgba(255,255,255,0.8)" }}
      >
        {title}
      </p>

      {/* Credential link */}
      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300 mt-auto"
          style={{ color: "var(--gold-500)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-300)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-500)";
          }}
        >
          View Credential <ExternalLink size={12} />
        </a>
      )}
    </div>
  );
}
