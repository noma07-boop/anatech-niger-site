import Icon from "@/components/icons";
import { services } from "@/lib/data";

export default function Marquee() {
  const items = [...services, ...services];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-brand-blue-dark/60 py-4">
      <div className="marquee-track flex w-max items-center gap-10">
        {items.map((service, i) => (
          <div
            key={`${service.slug}-${i}`}
            className="flex flex-shrink-0 items-center gap-2.5 text-sm font-medium text-blue-100"
          >
            <Icon name={service.icon} className="h-4 w-4 text-brand-orange" />
            {service.title}
            <span className="ml-8 text-brand-orange/50" aria-hidden="true">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
