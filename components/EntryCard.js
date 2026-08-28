import Reveal from "./Reveal.js";

/* One archive entry, laid out like a catalogue record: number and
   provenance first, then the account itself. */
export default function EntryCard({ index, title, description, contributor, place }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal as="article" className="entry">
      <div className="entry-head">
        <span className="entry-no" aria-hidden="true">
          {number}
        </span>
        <div className="entry-prov">
          <span className="entry-who">{contributor}</span>
          <span className="entry-place">{place}</span>
        </div>
      </div>
      <h3 className="entry-title">{title}</h3>
      <p className="entry-body">{description}</p>
    </Reveal>
  );
}
