import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-6 pt-24">
      <p className="eyebrow">404 / Page not found</p>
      <h1 className="page-title">This page is unavailable.</h1>
      <Link to="/" className="mt-8 inline-flex items-center gap-2 text-sm text-[var(--gold-300)] hover:text-white"><ArrowLeft size={15} /> Back to home</Link>
    </section>
  );
}
