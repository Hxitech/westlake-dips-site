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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(26,95,180,0.08),transparent_26%),radial-gradient(circle_at_82%_4%,rgba(45,125,210,0.07),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(184,134,11,0.04),transparent_28%)]" />
      <div
        className={cn(
          "hero-beam absolute -left-[12%] top-[-14%] h-[70%] w-[44%] rotate-[18deg] rounded-full bg-[linear-gradient(180deg,rgba(26,95,180,0.1),rgba(26,95,180,0))] blur-3xl",
          intensity === "soft" && "opacity-60",
        )}
      />
      <div
        className={cn(
          "hero-beam absolute right-[-14%] top-[2%] h-[64%] w-[34%] -rotate-[20deg] rounded-full bg-[linear-gradient(180deg,rgba(184,134,11,0.06),rgba(184,134,11,0))] blur-3xl",
          intensity === "soft" && "opacity-50",
        )}
      />
      <div className="hero-aurora absolute inset-x-[-10%] top-[8%] h-[48%] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0)_0deg,rgba(26,95,180,0.06)_80deg,rgba(45,125,210,0.04)_170deg,rgba(255,255,255,0)_260deg,rgba(184,134,11,0.05)_320deg,rgba(255,255,255,0)_360deg)] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,95,180,0.02)_1px,transparent_1px),linear-gradient(rgba(26,95,180,0.02)_1px,transparent_1px)] bg-[size:68px_68px] opacity-[0.3] [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]" />
      <div className="hero-scan absolute inset-y-0 left-[16%] w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(26,95,180,0.2),rgba(255,255,255,0))]" />
      <div className="hero-scan absolute inset-y-0 right-[14%] w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(184,134,11,0.15),rgba(255,255,255,0))]" />
      <FloatingParticles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.06)_58%,rgba(255,255,255,0.2)_100%)]" />
    </div>
  );
}
