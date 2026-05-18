import { ExternalLink, Github, Brain, Zap, BarChart2, Layout, Bot } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

const categoryConfig: Record<string, { label: string; icon: React.ElementType; color: string }> = {
  ai:         { label: "AI",         icon: Brain,    color: "rgba(168,137,222,0.9)" },
  automation: { label: "Automation", icon: Zap,      color: "rgba(201,168,76,0.9)"  },
  ml:         { label: "ML / Data",  icon: BarChart2, color: "rgba(76,168,201,0.9)" },
  frontend:   { label: "Frontend",   icon: Layout,   color: "rgba(76,201,130,0.9)"  },
};

export function ProjectCard({
  title,
  description,
  tags,
  category,
  liveUrl,
  githubUrl,
  image,
  featured = false,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const cat = categoryConfig[category] || { label: category, icon: Bot, color: "var(--gold-400)" };
  const Icon = cat.icon;
  const hasLinks = (liveUrl && liveUrl !== "") || (githubUrl && githubUrl !== "");

  return (
    <div
      className="group relative rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: hovered
          ? "1px solid rgba(201,168,76,0.4)"
          : "1px solid rgba(201,168,76,0.1)",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(201,168,76,0.1)" : "none",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image / Placeholder ── */}
      <div className="relative overflow-hidden" style={{ height: "auto", aspectRatio: "16/9" }}>
        {image ? (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-all duration-700"
              style={{
                filter: hovered ? "brightness(1)" : "brightness(0.9)",
                transform: hovered ? "scale(1.05)" : "scale(1)",
              }}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 55%, rgba(10,10,10,0.6) 100%)",
              }}
            />
          </>
        ) : (
          /* Stylised placeholder */
          <div
            className="w-full h-full flex items-center justify-center relative"
            style={{
              background: `radial-gradient(ellipse at center, ${cat.color.replace("0.9", "0.08")} 0%, transparent 70%), #0D0D0D`,
            }}
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div
              className="relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
              style={{
                background: cat.color.replace("0.9", "0.1"),
                border: `1px solid ${cat.color.replace("0.9", "0.25")}`,
                transform: hovered ? "scale(1.15) rotate(3deg)" : "scale(1) rotate(0deg)",
              }}
            >
              <Icon size={28} style={{ color: cat.color }} />
            </div>
          </div>
        )}

        {/* Category badge — top left */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(10,10,10,0.85)",
            border: `1px solid ${cat.color.replace("0.9", "0.35")}`,
            backdropFilter: "blur(8px)",
          }}
        >
          <Icon size={11} style={{ color: cat.color }} />
          <span
            className="text-xs font-mono-custom tracking-wide"
            style={{ color: cat.color }}
          >
            {cat.label}
          </span>
        </div>

        {/* Live badge — top right */}
        {liveUrl && liveUrl !== "" && (
          <div
            className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(10,10,10,0.85)",
              border: "1px solid rgba(201,168,76,0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--gold-400)", boxShadow: "0 0 6px var(--gold-400)" }}
            />
            <span
              className="text-xs font-mono-custom"
              style={{ color: "var(--gold-300)" }}
            >
              Live
            </span>
          </div>
        )}

        {/* Hover action buttons — slide up from bottom of image */}
        {hasLinks && (
          <div
            className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3 pb-4 transition-all duration-400"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(12px)",
            }}
          >
            {githubUrl && githubUrl !== "" && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300"
                style={{
                  background: "rgba(10,10,10,0.9)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Github size={13} /> Code
              </a>
            )}
            {liveUrl && liveUrl !== "" && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: "var(--gradient-gold)",
                  color: "#080808",
                }}
              >
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Left accent line + title */}
        <div className="flex items-start gap-3">
          <div
            className="w-0.5 rounded-full shrink-0 mt-1 transition-all duration-500"
            style={{
              height: hovered ? "40px" : "24px",
              background: hovered ? "var(--gradient-gold)" : cat.color.replace("0.9", "0.4"),
            }}
          />
          <h3
            className="font-display text-base font-semibold leading-snug transition-colors duration-300"
            style={{ color: hovered ? "var(--gold-200)" : "rgba(255,255,255,0.85)" }}
          >
            {title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
