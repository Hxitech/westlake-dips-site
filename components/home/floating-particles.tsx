const PARTICLE_COUNT = 12;

const colors = [
  "rgba(114, 215, 255, 0.3)",
  "rgba(93, 165, 255, 0.25)",
  "rgba(138, 164, 255, 0.2)",
];

function getParticleStyle(index: number) {
  // Deterministic positions computed from index (no Math.random for SSR/hydration safety)
  const seed = (index * 137.5) % 100;
  const left = ((index * 23.7 + 11) % 100);
  const top = ((index * 31.3 + 7) % 100);
  const size = 3 + (index % 4) * 2;
  const duration = 8 + (index % 5) * 2;
  const delay = (index * 1.3) % 6;
  const color = colors[index % colors.length];

  return {
    position: "absolute" as const,
    left: `${left}%`,
    top: `${top}%`,
    width: size,
    height: size,
    borderRadius: "50%",
    background: color,
    animation: `float-orb ${duration}s ease-in-out ${delay}s infinite`,
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
