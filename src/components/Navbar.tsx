import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/certifications", label: "Certifications" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10, 10, 10, 0.92)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(201, 168, 76, 0.12)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 group"
          >
            <span
              className="font-display text-xl font-bold tracking-wide"
              style={{ color: "var(--gold-400)" }}
            >
              <img src="/logo.png" alt="McKings" className="h-16 w-auto" />
            </span>
            <span
              className="text-xs font-mono-custom tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: "var(--gold-300)" }}
            >
              .dev
            </span>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="relative text-sm font-medium tracking-wide text-white/50 hover:text-white transition-colors duration-300 group"
                activeClassName="!text-white"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--gold-400)" }}
                />
              </NavLink>
            ))}

            <a
              href="mailto:alabioluwasegun8@gmail.com"
              className="gold-btn px-5 py-2 rounded-full text-sm"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "var(--gold-400)" }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-400"
          style={{
            maxHeight: isOpen ? "300px" : "0",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div
            className="py-4 flex flex-col gap-1 border-t"
            style={{ borderColor: "rgba(201,168,76,0.12)", 
              background: "rgba(10,10,10,0.98)",  // add this line 
              }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="py-3 px-2 text-sm font-medium text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                activeClassName="!text-white"
                style={{ color: undefined }}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="mailto:alabioluwasegun8@gmail.com"
              onClick={() => setIsOpen(false)}
              className="mt-2 gold-btn px-5 py-3 rounded-full text-sm text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
