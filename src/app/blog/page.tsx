import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Les actualités et publications d'ANATECH NIGER.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
          Actualités
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Bientôt disponible
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Nous préparons nos premiers articles et actualités sur les projets, les
          technologies et les activités de {company.name}. Revenez bientôt, ou
          contactez-nous directement pour toute question.
        </p>
        <a
          href={`https://wa.me/${company.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
        >
          Discuter sur WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
