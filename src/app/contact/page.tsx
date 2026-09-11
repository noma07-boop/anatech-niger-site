import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez ANATECH NIGER à Lazaret, Niamey : téléphone, WhatsApp, e-mail ou formulaire en ligne.",
};

const infoItems = [
  { label: "Adresse", value: `${company.address}\n${company.poBox}` },
  { label: "Téléphone", value: company.phones.join("\n") },
  { label: "WhatsApp", value: company.whatsappDisplay },
  { label: "E-mail", value: company.email },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-blue-dark py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
              Contact
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Parlons de votre projet
            </h1>
            <p className="mt-4 max-w-2xl text-blue-100">
              Une question, un devis, un projet ? Écrivez-nous, nous répondons
              rapidement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
                    {item.label}
                  </p>
                  <p className="mt-1.5 whitespace-pre-line text-sm font-medium text-slate-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Localisation ANATECH NIGER - Lazaret, Niamey"
                src="https://www.google.com/maps?q=Lazaret,+Niamey,+Niger&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-lg font-bold text-slate-900">
                Envoyez-nous un message
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
