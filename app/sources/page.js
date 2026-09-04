import SiteNav from "../../components/SiteNav.js";
import SiteFooter from "../../components/SiteFooter.js";
import SectionLabel from "../../components/SectionLabel.js";
import Reveal from "../../components/Reveal.js";
import { sourceGroups, photoCredits, method } from "../../content/sources.js";

export const metadata = {
  title: "Sources & Credits — Kampot Durian",
  description:
    "The published research, reporting, trade standards, and photograph credits behind this field guide.",
};

export default function Sources() {
  return (
    <>
      <a className="skip" href="#sources">Skip to the bibliography</a>
      <SiteNav current="/sources" />

      <header className="page-head">
        <div className="inner">
          <SectionLabel no="01">Sources &amp; Credits</SectionLabel>
          <h1 className="headline-sm">Everything this guide rests on.</h1>
          <p className="sub">{method}</p>
        </div>
      </header>

      <main id="sources">
        {sourceGroups.map((group, i) => (
          <section className="section" key={group.heading}>
            <div className="inner reading">
              <Reveal>
                <SectionLabel no={String(i + 2).padStart(2, "0")}>
                  {group.heading}
                </SectionLabel>
              </Reveal>
              <Reveal as="ul" className="biblio">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span className="biblio-name">
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer">
                          {item.name}
                        </a>
                      ) : (
                        item.name
                      )}
                    </span>
                    <span className="biblio-note">{item.note}</span>
                  </li>
                ))}
              </Reveal>
            </div>
          </section>
        ))}

        <section className="section">
          <div className="inner reading">
            <Reveal>
              <SectionLabel
                no={String(sourceGroups.length + 2).padStart(2, "0")}
              >
                Photography
              </SectionLabel>
            </Reveal>
            <Reveal as="ul" className="biblio">
              {photoCredits.map((credit) => (
                <li key={credit.file}>
                  <span className="biblio-name">{credit.caption}</span>
                  <span className="biblio-note">
                    {credit.own ? (
                      <>
                        Photograph by {credit.author} — the curator's own work,
                        taken in Kampot. Primary material, like the grower
                        interviews above.
                      </>
                    ) : (
                      <>
                        {credit.author}, via Wikimedia Commons, licensed{" "}
                        <a href={credit.licenseUrl} target="_blank" rel="noreferrer">
                          {credit.license}
                        </a>
                        .{" "}
                        <a href={credit.page} target="_blank" rel="noreferrer">
                          File page
                        </a>
                        .
                      </>
                    )}
                  </span>
                </li>
              ))}
            </Reveal>
            <Reveal>
              <p className="body-copy note-foot">
                Attribution and licence link are preserved wherever these images
                appear. Corrections are welcome — reach the curator through the
                course.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
