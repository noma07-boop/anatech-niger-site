import type { Metadata } from "next";
import Link from "next/link";
import ClickableImage from "@/components/ClickableImage";
import Icon from "@/components/icons";
import Reveal from "@/components/Reveal";
import { company, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez les expertises d'ANATECH NIGER : développement web & mobile, solutions informatiques, infographie & design, réseaux & cloud, sécurité & vidéosurveillance, impression & supports, énergie & solaire.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-blue-dark py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
              Nos expertises
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Des solutions complètes pour votre transformation technologique
            </h1>
            <p className="mt-4 max-w-2xl text-blue-100">
              {company.name} réunit sept domaines d&apos;expertise pour accompagner vos
              projets, de la conception numérique à la sécurisation de vos locaux.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {services.map((service, i) => {
            const isFlagship = service.slug === "developpement-web-mobile";
            const imageSrc = isFlagship
              ? `/brand/services/${service.slug}-feature.jpg`
              : `/brand/services/${service.slug}-photo.jpg`;

            return (
              <Reveal key={service.slug} direction={i % 2 === 0 ? "left" : "right"}>
                <div
                  id={service.slug}
                  className="group grid gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md lg:grid-cols-[1fr_260px] lg:items-center"
                >
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue transition-transform group-hover:scale-110">
                      <Icon name={service.icon} className="h-7 w-7" />
                    </div>
                    <span className="mt-4 block text-xs font-semibold uppercase tracking-widest text-brand-orange">
                      0{i + 1}
                    </span>
                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.bullets.map((b) => (
                        <li
                          key={b}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ClickableImage
                    src={imageSrc}
                    alt={`Visuel du service ${service.title} — ${company.name}`}
                    className={`mx-auto w-full max-w-[260px] overflow-hidden rounded-xl border border-slate-100 shadow-sm ${
                      isFlagship ? "aspect-square" : "aspect-[410/619]"
                    }`}
                    sizes="260px"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-slate-50 px-8 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Une idée de projet ? Décrivez-la-nous.
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Nous étudions votre besoin et vous proposons la solution la plus
                adaptée.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
            >
              Demander un devis
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
