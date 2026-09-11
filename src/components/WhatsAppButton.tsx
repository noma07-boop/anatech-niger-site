import { company } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${company.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter ANATECH NIGER sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.61 1.42 5.15L2 22l5.09-1.53a9.9 9.9 0 0 0 4.95 1.33h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.12c-.25.69-1.24 1.27-1.99 1.43-.53.11-1.22.2-3.55-.76-2.98-1.23-4.9-4.25-5.05-4.45-.15-.2-1.21-1.61-1.21-3.07 0-1.46.76-2.18 1.04-2.48.25-.27.68-.4 1.09-.4.13 0 .25 0 .36.01.32.01.48.03.69.53.25.61.86 2.11.94 2.26.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.12.99 2.05 1.3 2.35 1.44.3.15.47.13.65-.08.18-.2.76-.88.96-1.18.2-.3.4-.25.68-.15.28.1 1.77.83 2.07.98.3.15.5.23.58.35.08.13.08.73-.17 1.42Z" />
      </svg>
    </a>
  );
}
