import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, tags, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="glass-card-hover rounded-2xl p-6 flex flex-col gap-4 h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3
          className="font-display text-lg font-semibold leading-snug"
          style={{ color: "var(--gold-200)" }}
        >
          {title}
        </h3>
        <div className="flex items-center gap-2 shrink-0 mt-0.5">
          {githubUrl && githubUrl !== "#" && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 rounded-lg transition-all duration-300"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-400)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)";
              }}
            >
              <Github size={16} />
            </a>
          )}
          {liveUrl && liveUrl !== "#" && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="p-1.5 rounded-lg transition-all duration-300"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-400)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)";
              }}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-1">
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
