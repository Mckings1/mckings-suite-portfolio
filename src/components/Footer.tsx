import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Mckings1",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mckings01",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/mckings_01",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:alabioluwasegun8@gmail.com",
    },
  ];

  return (
    <footer
      className="relative mt-auto"
      style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}
    >
      {/* Gold line accent */}
      <div className="gold-line absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8">

          {/* Logo + tagline */}
          <div className="text-center">
            <span
              className="font-display text-2xl font-bold"
              style={{ color: "var(--gold-400)" }}
            >
              <img src="/logo.png" alt="McKings" className="h-20 w-auto" />

            </span>
            
          </div>

          {/* Divider */}
          <div className="w-24 gold-line" />

          {/* Socials */}
          <div className="flex items-center gap-6">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="group p-2 rounded-full transition-all duration-300"
                style={{
                  border: "1px solid rgba(201,168,76,0.15)",
                  color: "rgba(255,255,255,0.4)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-400)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 16px rgba(201,168,76,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>

          {/* Bottom line */}
          <p
            className="text-xs tracking-wide"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            © {new Date().getFullYear()} McKings. Built with intention.
          </p>

        </div>
      </div>
    </footer>
  );
}
