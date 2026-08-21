import collection from "../collection.config.js";

const GOLD = "#FF2ED1";

const styles = {
  wrap: {
    maxWidth: 760,
    margin: "0 auto",
    padding: "120px 24px 80px",
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "'Courier New', monospace",
    color: GOLD,
    fontSize: 13,
    letterSpacing: 3,
    textTransform: "uppercase",
    padding: "6px 14px",
    border: `1px solid rgba(232, 163, 61, 0.35)`,
    borderRadius: 999,
    background: "rgba(232, 163, 61, 0.06)",
  },
  title: {
    fontSize: "clamp(40px, 7vw, 68px)",
    fontWeight: 700,
    margin: "24px 0 16px",
    lineHeight: 1.05,
    letterSpacing: -1,
    background: `linear-gradient(135deg, #FDF3E1 0%, ${GOLD} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  description: {
    fontSize: 20,
    color: "#A9B2C3",
    lineHeight: 1.7,
    margin: 0,
    maxWidth: 560,
  },
  cardRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginTop: 56,
  },
  card: {
    padding: "22px 24px",
    background:
      "linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))",
    border: "1px solid rgba(232, 163, 61, 0.18)",
    borderRadius: 14,
    backdropFilter: "blur(6px)",
  },
  cardLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: 11,
    letterSpacing: 2,
    color: "#7C879C",
    margin: 0,
    textTransform: "uppercase",
  },
  cardValue: {
    fontSize: 17,
    fontWeight: 600,
    margin: "8px 0 0",
    color: "#F1F4F9",
  },
  count: {
    fontFamily: "'Courier New', monospace",
    fontSize: 14,
    color: GOLD,
    marginTop: 40,
    letterSpacing: 1,
  },
  divider: {
    marginTop: 64,
    height: 1,
    background:
      "linear-gradient(90deg, rgba(232,163,61,0.5), rgba(232,163,61,0))",
    border: "none",
  },
  footer: {
    marginTop: 24,
    fontSize: 13,
    color: "#5A6373",
    lineHeight: 1.6,
  },
};

export default function Home() {
  return (
    <main style={styles.wrap}>
      <span style={styles.eyebrow}>🔥 Kampot Durian Archive (EXPERIMENT)</span>
      <h1 style={styles.title}>{collection.name}</h1>
      <p style={styles.description}>{collection.description}</p>

      <div style={styles.cardRow}>
        <div style={styles.card}>
          <p style={styles.cardLabel}>Curated By</p>
          <p style={styles.cardValue}>{collection.curator}</p>
        </div>
        <div style={styles.card}>
          <p style={styles.cardLabel}>Source</p>
          <p style={styles.cardValue}>{collection.source}</p>
        </div>
        <div style={styles.card}>
          <p style={styles.cardLabel}>Province</p>
          <p style={styles.cardValue}>{collection.province}</p>
        </div>
      </div>

      <p style={styles.count}>entries in the archive: 0 (for now)</p>

      <hr style={styles.divider} />

      <footer style={styles.footer}>
        Built by Sovanpanha Nonn for ICT 340 — Vibe Coding, American
        University of Phnom Penh, Fall 2026. This archive is under
        construction all semester. Come back in December.
      </footer>
    </main>
  );
}
