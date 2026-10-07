import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { WHATSAPP_URL } from "@/lib/brand";

const navLinks = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/certifications", label: "Certifications" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || isOpen ? "border-white/10 bg-[#0b0c0d]/95 backdrop-blur-xl" : "border-transparent bg-[#0b0c0d]/60 backdrop-blur-sm"}`}>
      <nav className="container mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6" aria-label="Main navigation">
        <NavLink to="/" className="group inline-flex items-center gap-3" aria-label="McKings home">
          <span className="flex h-14 w-24 items-center justify-center overflow-hidden" aria-hidden="true">
            <img src="/logo.png" alt="" className="h-24 w-24 max-w-none object-contain mix-blend-screen" />
          </span>
          <span className="hidden border-l border-white/20 pl-3 text-[10px] font-mono-custom uppercase tracking-[0.15em] text-white/40 sm:inline">AI & Software Engineer</span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="text-sm text-white/55 transition-colors hover:text-white" activeClassName="!text-white">
              {link.label}
            </NavLink>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gold-btn inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-xs">Let&apos;s connect <ArrowUpRight size={14} /></a>
        </div>

        <button type="button" onClick={() => setIsOpen((open) => !open)} className="grid h-10 w-10 place-items-center border border-white/15 text-white transition-colors hover:border-[var(--gold-300)] hover:text-[var(--gold-300)] md:hidden" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <div id="mobile-navigation" className={`overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 md:hidden ${isOpen ? "max-h-[24rem] opacity-100" : "max-h-0 border-t-transparent opacity-0"}`} aria-hidden={!isOpen}>
        <nav className="container mx-auto flex max-w-7xl flex-col px-6 pb-5 pt-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1} className="border-b border-white/[0.07] py-3.5 text-sm text-white/65 hover:text-white" activeClassName="!text-[var(--gold-300)]">
              {link.label}
            </NavLink>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1} className="gold-btn mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm">Let&apos;s connect <ArrowUpRight size={14} /></a>
        </nav>
      </div>
    </header>
  );
}
