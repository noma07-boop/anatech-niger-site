import Icon from "@/components/icons";
import { services } from "@/lib/data";
import type { IconName } from "@/lib/data";

const extraIcons: IconName[] = ["code", "cloud", "shield", "server"];
const columnA = [...services.map((s) => s.icon), ...extraIcons];
const columnB = [...columnA].reverse();

function Column({
  icons,
  direction,
  duration,
}: {
  icons: IconName[];
  direction: "up" | "down";
  duration: number;
}) {
  const loop = [...icons, ...icons];

  return (
    <div className="relative h-full w-20 overflow-hidden">
      <div
        className={`flex flex-col items-center gap-5 ${
          direction === "up" ? "marquee-vertical-up" : "marquee-vertical-down"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((icon, i) => (
          <div
            key={`${icon}-${i}`}
            className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-sm"
          >
            <Icon name={icon} className="h-7 w-7" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroShowcase() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-64 items-center justify-center gap-4 overflow-hidden pr-6 lg:flex xl:w-80 xl:pr-12"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
      }}
      aria-hidden="true"
    >
      <Column icons={columnA} direction="up" duration={26} />
      <Column icons={columnB} direction="down" duration={22} />
    </div>
  );
}
