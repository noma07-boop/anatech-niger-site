import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { company, services, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "ANATECH NIGER est une entreprise technologique basée à Niamey, spécialisée en développement, réseaux, sécurité, design, impression et énergie solaire.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-blue-dark py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
              À propos
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              {company.name}, votre partenaire technologique au Niger
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal direction="left">
              <h2 className="text-2xl font-bold text-slate-900">Notre mission</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Basée à Lazaret, Niamey, {company.name} accompagne entreprises,
                institutions et particuliers dans leurs projets technologiques. Notre
                équipe locale réunit des compétences en développement web & mobile,
                solutions informatiques, infographie & design, réseaux & cloud,
                sécurité & vidéosurveillance, impression & supports de communication
                ainsi qu&apos;en énergie solaire et électricité.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Cette diversité d&apos;expertises nous permet de suivre un projet dans
                sa globalité : de l&apos;idée à la solution technique, puis à sa
                sécurisation et à sa communication visuelle.
              </p>
            </Reveal>

            <h2 className="mt-12 text-2xl font-bold text-slate-900">
              Ce qui nous anime
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {values.map((value, i) => (
                <Reveal key={value.title} delay={i * 0.1}>
                  <div className="rounded-xl bg-slate-50 p-5">
                    <h3 className="font-semibold text-slate-900">{value.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold text-slate-900">Nos domaines</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 2) * 0.08}>
                  <li className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-brand-orange" />
                    {s.title}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-1">
            <Reveal direction="right">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue text-xl font-bold text-white">
                  {company.director
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{company.director}</h3>
                <p className="text-sm text-brand-orange">{company.directorTitle}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  À la tête d&apos;{company.name}, il porte la vision d&apos;une
                  entreprise technologique nigérienne capable de couvrir l&apos;ensemble
                  des besoins numériques et techniques de ses clients.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Coordonnées</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>{company.address}</li>
                  <li>{company.poBox}</li>
                  <li>{company.phones.join(" / ")}</li>
                  <li>{company.email}</li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
