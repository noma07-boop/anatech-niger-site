import Link from "next/link";
import ClickableImage from "@/components/ClickableImage";
import HeroShowcase from "@/components/HeroShowcase";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { company, services, values } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-dark text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 animate-pulse rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 animate-pulse rounded-full bg-brand-green/20 blur-3xl [animation-delay:1s]" />

        <HeroShowcase />

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
              Technologie • Innovation • Créativité
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {company.slogan}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              De la conception de sites web à la sécurisation de vos locaux, ANATECH NIGER
              accompagne entreprises et institutions à Niamey avec une expertise technique
              complète.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-brand-orange-dark"
              >
                Découvrir nos services
              </Link>
              <a
                href={`https://wa.me/${company.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-transform hover:-translate-y-0.5 hover:bg-white/15"
              >
                Discuter sur WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-10 text-sm font-medium tracking-wide text-blue-100">
              {company.motto}
            </p>
          </Reveal>
        </div>

        <Marquee />
      </section>

      {/* Expertises */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
              Nos expertises
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Une équipe, sept domaines d&apos;expertise
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={(i % 3) * 0.1}
              className={
                i === services.length - 1 && services.length % 3 === 1
                  ? "lg:col-start-2"
                  : undefined
              }
            >
              <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                <ClickableImage
                  src={`/brand/services/${service.slug}-flat.jpg`}
                  alt={`Visuel du service ${service.title} — ${company.name}`}
                  className="aspect-square w-full overflow-hidden"
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.short}
                  </p>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-[gap] group-hover:gap-2"
                  >
                    En savoir plus
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
                Notre approche
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                {company.motto}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.12} direction="up">
                <div className="relative pl-14">
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-brand-blue-dark px-8 py-12 text-white sm:flex-row sm:items-center sm:px-12">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Un projet en tête ? Parlons-en.
              </h2>
              <p className="mt-3 max-w-md text-blue-100">
                Notre équipe basée à Niamey vous accompagne du cahier des charges à la
                livraison.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-brand-orange-dark"
              >
                Nous contacter
              </Link>
              <a
                href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10"
              >
                {company.phones[0]}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
