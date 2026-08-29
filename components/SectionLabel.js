/* Numbered section heading — the catalogue convention the whole guide uses. */
export default function SectionLabel({ no, children }) {
  return (
    <p className="sec-label">
      <span className="sec-no">{no}</span>
      <span className="sec-rule" aria-hidden="true" />
      {children}
    </p>
  );
}
