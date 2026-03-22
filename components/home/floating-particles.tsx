const PARTICLE_COUNT = 18;

const colors = [
  "rgba(26, 95, 180, 0.15)",
  "rgba(45, 125, 210, 0.12)",
  "rgba(70, 140, 220, 0.1)",
  "rgba(184, 134, 11, 0.08)",
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
    boxShadow: "0 0 16px rgba(26, 95, 180, 0.06)",
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
