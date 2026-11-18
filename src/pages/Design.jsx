import React, { useState } from "react";
import { designItems } from "../data/content";
import SectionEyebrow from "../components/SectionEyebrow";
import { ArrowUpRight } from "lucide-react";

export default function Design() {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("All");
  const filters = [
    "All",
    "Traditional",
    "Personalized",
    "Companion",
    "Marker",
    "Religious",
    "Custom",
  ];
  const filtered = designItems.filter(
    (item) => filter === "All" || item.type === filter,
  );
  const shift = (dir) =>
    setActive((v) => (v + dir + filtered.length) % filtered.length);
  return (
    <section className="section design" id="design">
      <div className="design-backdrop" />
      <div className="design-head">
        <div>
          <SectionEyebrow>Design Galleries</SectionEyebrow>
          <h2>
            Every life has a story.
            <br />
            <em>Make its tribute personal.</em>
          </h2>
          <p>
            Explore a selection of memorial styles and possibilities. Each
            design can be tailored with meaningful details.
          </p>
        </div>
        <a
          className="btn btn--gold"
          href="https://www.nicholsonmonument.com/designs"
          target="_blank"
          rel="noreferrer"
        >
          Explore all designs <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="filter-row">
        {filters.map((f) => (
          <button
            key={f}
            className={filter === f ? "filter-chip active" : "filter-chip"}
            onClick={() => {
              setFilter(f);
              setActive(0);
            }}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filtered.map((item, i) => (
          <article
            className={`design-card ${i === active ? "design-card--active" : ""}`}
            key={item.title}
            onMouseEnter={() => setActive(i)}
          >
            <div className="design-card-image">
              <img
                src={item.image}
                alt={`${item.title} memorial design`}
                loading="lazy"
              />
              <span className="design-number">0{i + 1}</span>
              <span className="design-arrow">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="design-card-copy">
              <small>{item.type}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="gallery-controls">
        <span>
          {String(active + 1).padStart(2, "0")} <i />{" "}
          {String(filtered.length).padStart(2, "0")}
        </span>
        <div>
          <button aria-label="Previous designs" onClick={() => shift(-1)}>
            ←
          </button>
          <button aria-label="Next designs" onClick={() => shift(1)}>
            →
          </button>
        </div>
      </div>
      <p className="gallery-disclaimer">
        Gallery photographs are illustrative examples. Available granite colors,
        shapes, and engraving options can be discussed with our team.
      </p>
    </section>
  );
}
