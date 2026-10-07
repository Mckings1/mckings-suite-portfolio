import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Certifications from "@/pages/Certifications";
import About from "@/pages/About";
import Research from "@/pages/Research";
import CaseStudy from "@/pages/CaseStudy";
import NotFound from "@/pages/NotFound";
import { SITE_URL } from "@/lib/brand";
import { caseStudies } from "@/data/caseStudies";
import { Analytics } from '@vercel/analytics/react';

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const project = caseStudies.find((item) => pathname === `/work/${item.slug}`);
    const page = project
      ? { title: `${project.title} | McKings`, description: project.summary }
      : ({
          "/": { title: "McKings | AI & Software Engineer", description: "McKings is an AI & Software Engineer building intelligent software systems across AI, data, automation and cloud engineering." },
          "/work": { title: "Selected Work | McKings", description: "Explore AI, software engineering and automation systems designed and built by McKings." },
          "/projects": { title: "Selected Work | McKings", description: "Explore AI, software engineering and automation systems designed and built by McKings." },
          "/about": { title: "About McKings | AI & Software Engineer", description: "Learn about McKings and the path from statistics and information science to software engineering and AI systems." },
          "/research": { title: "Research & Ideas | McKings", description: "Research interests in knowledge drift, retrieval-augmented generation, information retrieval and statistical methods." },
          "/certifications": { title: "Credentials | McKings", description: "Professional technology certifications held by McKings." },
        } as Record<string, { title: string; description: string }>)[pathname] ?? { title: "Page not found | McKings", description: "The requested page could not be found." };

    document.title = page.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", page.description);
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute("content", page.title);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute("content", page.description);
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute("content", `${SITE_URL}${pathname}`);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute("content", page.title);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute("content", page.description);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", `${SITE_URL}${pathname}`);
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="mckings-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col grain">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Projects />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/work/:slug" element={<CaseStudy />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/about" element={<About />} />
                <Route path="/research" element={<Research />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <Analytics />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
