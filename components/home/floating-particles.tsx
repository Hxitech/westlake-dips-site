const PARTICLE_COUNT = 18;

const colors = [
  "rgba(114, 215, 255, 0.28)",
  "rgba(93, 165, 255, 0.22)",
  "rgba(138, 164, 255, 0.2)",
  "rgba(217, 196, 157, 0.14)",
];

function getParticleStyle(index: number) {
  // Deterministic positions keep SSR and hydration stable.
  const left = (index * 19.7 + 11) % 100;
  const top = (index * 27.4 + 7) % 100;
  const size = 2 + (index % 5) * 2;
  const duration = 9 + (index % 6) * 2;
  const delay = (index * 1.15) % 7;
  const color = colors[index % colors.length];
  const shape = index % 4 === 0 ? "18%" : "999px";
  const blur = index % 3 === 0 ? "blur(1px)" : "none";

  return {
    position: "absolute" as const,
    left: `${left}%`,
    top: `${top}%`,
    width: size,
    height: size,
    borderRadius: shape,
    background: color,
    animation: `float-orb ${duration}s ease-in-out ${delay}s infinite`,
    filter: blur,
    boxShadow: "0 0 24px rgba(119, 216, 255, 0.12)",
    willChange: "transform, opacity" as const,
  };
}

export function FloatingParticles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
        <div key={i} style={getParticleStyle(i)} />
      ))}
    </div>
  );
}
