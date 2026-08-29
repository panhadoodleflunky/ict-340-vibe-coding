/* Durian husk mark: one solid silhouette — a round body with blunt spikes.
   Drawn as a single filled path because at nav size (20px) a stroked ring
   and 18 hairline spikes turned to mush. Ten spikes, thick enough to survive
   the size, is the most detail that actually reads. */
export default function DurianGlyph({ size = 20 }) {
  const spikes = Array.from({ length: 10 }, (_, i) => {
    /* Start at -90° so one spike points straight up, not off-axis. */
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    const w = 0.3;
    const px = (r, t) => [50 + r * Math.cos(t), 50 + r * Math.sin(t)];
    const [x1, y1] = px(30, a - w);
    const [x2, y2] = px(49, a);
    const [x3, y3] = px(30, a + w);
    return `M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}L${x3.toFixed(1)} ${y3.toFixed(1)}Z`;
  }).join("");

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      <circle cx="50" cy="50" r="32" fill="currentColor" />
      <path d={spikes} fill="currentColor" />
      {/* Punched-out seam, the line a durian splits along. */}
      <path
        d="M50 26C56 36 56 64 50 74"
        fill="none"
        stroke="var(--husk)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
