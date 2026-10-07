import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ tabIndex = 0 }: { tabIndex?: number }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
      tabIndex={tabIndex}
      className="grid h-10 w-10 place-items-center border border-white/15 text-white/70 transition-colors hover:border-[var(--gold-300)] hover:text-[var(--gold-300)]"
    >
      {isLight ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}
    </button>
  );
}
