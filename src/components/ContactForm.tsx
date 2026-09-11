"use client";

import { useState } from "react";
import { company } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = name.trim() && message.trim();

  const buildWhatsAppLink = () => {
    const lines = [
      `Bonjour ANATECH NIGER,`,
      `Je m'appelle ${name}.`,
      subject ? `Sujet : ${subject}` : null,
      `Message : ${message}`,
      contact ? `Mes coordonnées : ${contact}` : null,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${company.whatsappNumber}?text=${text}`;
  };

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        if (!canSubmit) return;
        window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Nom complet
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="contact" className="text-sm font-medium text-slate-700">
            Téléphone ou e-mail
          </label>
          <input
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            placeholder="+227 ... ou vous@exemple.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium text-slate-700">
          Sujet
        </label>
        <input
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          placeholder="Ex : Devis pour un site web"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full resize-none rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          placeholder="Décrivez votre besoin..."
        />
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange-dark disabled:cursor-not-allowed disabled:opacity-50"
      >
        Envoyer via WhatsApp
      </button>
      <p className="text-center text-xs text-slate-500">
        Le message s&apos;ouvrira dans WhatsApp, prêt à être envoyé à {company.name}.
      </p>
    </form>
  );
}
