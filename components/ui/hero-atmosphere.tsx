import { FloatingParticles } from "@/components/home/floating-particles";
import { cn } from "@/lib/utils";

type HeroAtmosphereProps = {
  className?: string;
  intensity?: "soft" | "dramatic";
};

export function HeroAtmosphere({
  className,
  intensity = "dramatic",
}: HeroAtmosphereProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(98,209,255,0.18),transparent_26%),radial-gradient(circle_at_82%_4%,rgba(143,166,255,0.2),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(242,222,183,0.08),transparent_28%)]" />
      <div
        className={cn(
          "hero-beam absolute -left-[12%] top-[-14%] h-[70%] w-[44%] rotate-[18deg] rounded-full bg-[linear-gradient(180deg,rgba(120,214,255,0.18),rgba(120,214,255,0))] blur-3xl",
          intensity === "soft" && "opacity-60",
        )}
      />
      <div
        className={cn(
          "hero-beam absolute right-[-14%] top-[2%] h-[64%] w-[34%] -rotate-[20deg] rounded-full bg-[linear-gradient(180deg,rgba(214,193,154,0.16),rgba(214,193,154,0))] blur-3xl",
          intensity === "soft" && "opacity-50",
        )}
      />
      <div className="hero-aurora absolute inset-x-[-10%] top-[8%] h-[48%] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0)_0deg,rgba(110,214,255,0.12)_80deg,rgba(115,129,255,0.08)_170deg,rgba(255,255,255,0)_260deg,rgba(219,198,158,0.12)_320deg,rgba(255,255,255,0)_360deg)] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:68px_68px] opacity-[0.18] [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]" />
      <div className="hero-scan absolute inset-y-0 left-[16%] w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(119,218,255,0.5),rgba(255,255,255,0))]" />
      <div className="hero-scan absolute inset-y-0 right-[14%] w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(217,196,157,0.42),rgba(255,255,255,0))]" />
      <FloatingParticles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,10,19,0.14)_58%,rgba(5,10,19,0.62)_100%)]" />
    </div>
  );
}
