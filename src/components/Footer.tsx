import Image from "next/image";
import Link from "next/link";
import { company, navLinks, services } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-brand-blue-dark text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/mark.png"
                alt=""
                width={1030}
                height={545}
                className="h-8 w-auto"
              />
              <div className="flex items-baseline gap-1 text-lg font-extrabold">
                <span className="text-white">ANATECH</span>
                <span className="text-brand-orange">NIGER</span>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {company.slogan}.
              <br />
              {company.motto}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Nos services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="text-slate-300 hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>{company.address}</li>
              <li>{company.poBox}</li>
              <li>
                <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="hover:text-white">
                  {company.phones[0]}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${company.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp : {company.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>
            © {year} {company.name}. Tous droits réservés.
          </p>
          <p>{company.website}</p>
        </div>
      </div>
    </footer>
  );
}
