import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { WHATSAPP_URL } from "@/lib/brand";

const links = [
  { label: "GitHub", href: "https://github.com/Mckings1", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mckings01", icon: Linkedin },
  { label: "Email", href: "mailto:alabioluwasegun8@gmail.com", icon: Mail },
  { label: "WhatsApp", href: WHATSAPP_URL, icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto grid max-w-7xl gap-10 px-6 py-10 sm:grid-cols-2 sm:items-end">
        <div>
          <NavLink to="/" className="inline-flex items-center" aria-label="McKings home">
            <span className="flex h-16 w-28 items-center justify-center overflow-hidden" aria-hidden="true">
              <img src="/logo.png" alt="" loading="lazy" className="h-28 w-28 max-w-none object-contain mix-blend-screen" />
            </span>
          </NavLink>
          <p className="mt-2 text-xs text-white/40">AI & Software Engineer · Lagos, Nigeria</p>
          <p className="mt-6 text-[11px] text-white/30">© {new Date().getFullYear()} McKings</p>
        </div>
        <div className="sm:text-right">
          <nav className="mb-5 flex flex-wrap gap-x-5 gap-y-3 text-xs sm:justify-end" aria-label="Footer navigation">
            <NavLink to="/work" className="text-white/45 hover:text-white">Work</NavLink>
            <NavLink to="/about" className="text-white/45 hover:text-white">About</NavLink>
            <NavLink to="/research" className="text-white/45 hover:text-white">Research</NavLink>
            <NavLink to="/certifications" className="text-white/45 hover:text-white">Certifications</NavLink>
          </nav>
          <div className="flex gap-2 sm:justify-end">
            {links.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"} aria-label={label} className="grid h-10 w-10 place-items-center border border-white/10 text-white/50 transition-colors hover:border-[var(--gold-300)] hover:text-[var(--gold-300)]">
                <Icon size={16} />
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex h-10 items-center gap-2 px-3 text-xs text-[var(--gold-300)] hover:text-white">Let&apos;s connect <ArrowUpRight size={13} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
