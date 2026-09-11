import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/icons";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Les domaines d'intervention d'ANATECH NIGER : développement, réseaux, sécurité, design et impression.",
};

export default function RealisationsPage() {
  return (
    <>
      <section className="bg-brand-blue-dark py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
              Réalisations
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Nos domaines d&apos;intervention
            </h1>
            <p className="mt-4 max-w-2xl text-blue-100">
              Cette page sera bientôt enrichie avec nos projets réalisés. En
              attendant, voici les types de missions que nous menons pour nos clients.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.1}>
              <div className="group rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 transition-colors hover:border-brand-orange/40 hover:bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-blue shadow-sm transition-transform group-hover:scale-110">
                  <Icon name={service.icon} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {service.short}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-slate-50 px-8 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Votre projet pourrait figurer ici
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Confiez-nous votre projet et faites-en une prochaine réalisation.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
            >
              Démarrer un projet
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
