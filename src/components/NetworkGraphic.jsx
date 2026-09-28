/**
 * Abstract telecom/network illustration built entirely in SVG — connected
 * nodes, communication lines and a pulsing central hub. No stock imagery.
 * Colors follow the Aurex red + charcoal identity.
 */
export default function NetworkGraphic({ className = '' }) {
  // node positions on a 400x400 canvas
  const nodes = [
    { x: 200, y: 200, r: 10, hub: true },
    { x: 70, y: 90 },
    { x: 330, y: 80 },
    { x: 60, y: 300 },
    { x: 340, y: 310 },
    { x: 200, y: 40 },
    { x: 200, y: 360 },
    { x: 120, y: 200 },
    { x: 300, y: 190 },
  ];
  const hub = nodes[0];
  const spokes = nodes.slice(1);

  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Abstract network of connected communication nodes"
      className={className}
    >
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E50914" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#E50914" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineFade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E50914" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1F1F1F" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* soft hub glow */}
      <circle cx={hub.x} cy={hub.y} r="150" fill="url(#hubGlow)" />

      {/* connection lines from hub to each spoke */}
      {spokes.map((n, i) => (
        <line
          key={`l-${i}`}
          x1={hub.x}
          y1={hub.y}
          x2={n.x}
          y2={n.y}
          stroke="url(#lineFade)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          className="animate-dash-flow"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}

      {/* pulsing rings around the hub */}
      {[0, 1, 2].map((i) => (
        <circle
          key={`p-${i}`}
          cx={hub.x}
          cy={hub.y}
          r="16"
          fill="none"
          stroke="#E50914"
          strokeWidth="1.5"
          opacity="0"
          className="animate-signal-pulse"
          style={{ animationDelay: `${i}s`, transformOrigin: `${hub.x}px ${hub.y}px` }}
        />
      ))}

      {/* spoke nodes */}
      {spokes.map((n, i) => (
        <g key={`n-${i}`}>
          <circle cx={n.x} cy={n.y} r={n.r || 7} fill="#fff" stroke="#1F1F1F" strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r={(n.r || 7) - 3.5} fill="#1F1F1F" opacity="0.85" />
        </g>
      ))}

      {/* central hub */}
      <circle cx={hub.x} cy={hub.y} r={hub.r + 6} fill="#fff" stroke="#E50914" strokeWidth="2" />
      <circle cx={hub.x} cy={hub.y} r={hub.r} fill="#E50914" />
    </svg>
  );
}
