import React from "react"
import SectionEyebrow from "../components/SectionEyebrow";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Gem,
  Ruler,
  Sparkles,
} from "lucide-react";

export default function Information () {
  const questions = [
    "Is there an extra charge for lettering and design work?",
    "Is there a delivery and installation charge?",
    "Please tell me about your foundations?",
    "Will my memorial have any type of guarantee?",
    "How long should it take to have my memorial placed in the cemetery?",
    "Will I be able to see an actual scaled drawing of my memorial before it is carved?",
    "How and when am I expected to pay for the memorial?",
  ];
  const answers = [
    "Generally, NO, there isn't a charge for lettering. Laser etching is the exception. Standard design artwork is included; special artwork is based on the size of the work needed for that particular monument.",
    "Delivery and installation charges are included. A few cemeteries do have separate setting fees.",
    "Our standard foundation is a concrete pad between 4–6 inches thick.",
    "Please ask our team about the guarantee applicable to your selected memorial and installation.",
    "The average setting time for most monuments is approximately 4–5 months. Special shapes and rare colors can extend delivery times.",
    "All monuments are required to have an art proof approved by the customer before any carving can begin.",
    "We require half down payment; the balance is due after the monument has been installed in the cemetery.",
  ];
  return (
    <section className="section information" id="information">
      <div className="section-heading">
        <SectionEyebrow>Information</SectionEyebrow>
        <h2>
          What You Should Know About
          <br />
          <em>Purchasing a Memorial</em>
        </h2>
        <p>Clear answers help families make a thoughtful, informed decision.</p>
      </div>
      <div className="cost-grid">
        <article className="cost-intro">
          <div className="cost-photo" />
          <h3>Determining the Cost of a Memorial</h3>
          <p>
            Several details influence the cost of a memorial. Our team will help
            you understand the options and choose what feels right for your
            family.
          </p>
          <a
            className="text-link"
            href="https://www.nicholsonmonument.com/designs"
            target="_blank"
            rel="noreferrer"
          >
            Visit our Design Galleries <ArrowUpRight size={15} />
          </a>
        </article>
        {[
          {
            title: "GRANITE",
            Icon: Gem,
            body: "Gray granite is the least expensive of all granites, while some black and imported stones are the most expensive.",
          },
          {
            title: "POLISH",
            Icon: Sparkles,
            body: "The amount of polish is a personal preference. Upright stones are generally polished on the front and back. Additional polish does not add to durability.",
          },
          {
            title: "SIZE and SHAPE",
            Icon: Ruler,
            body: "Larger stones generally cost more. Custom shapes such as boats, horses, or motorcycles increase the cost.",
          },
        ].map(({ title, Icon, body }) => (
          <article className="cost-card" key={title}>
            <span className="cost-icon">
              <Icon size={25} />
            </span>
            <h4>{title}</h4>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <p className="extra-cost-note">
        Vases, photographs, final dates, custom artwork, and sales tax may add
        to the purchase price. We will explain applicable costs before you place
        an order.
      </p>
      <div className="qa-grid">
        <div className="question-panel">
          <SectionEyebrow>Be informed</SectionEyebrow>
          <h3>
            Some questions
            <br />
            <em>to consider</em>
          </h3>
          <ul>
            {questions.map((q) => (
              <li key={q}>
                <Check size={16} />
                {q}
              </li>
            ))}
          </ul>
          <a className="btn btn--outline" href="/contact">
            Ask us a question <ArrowRight size={16} />
          </a>
        </div>
        <div className="answer-panel">
          <SectionEyebrow>Answers from NMC</SectionEyebrow>
          <h3>
            Answers from <em>our team</em>
          </h3>
          <div className="answer-list">
            {answers.map((a, i) => (
              <div className="answer-row" key={a}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{a}</p>
              </div>
            ))}
          </div>
          <a
            className="text-link"
            href="https://www.nicholsonmonument.com/coming-soon-02"
            target="_blank"
            rel="noreferrer"
          >
            Tribal Assistance <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="prepared">
        <div>
          <SectionEyebrow>Before ordering</SectionEyebrow>
          <h3>
            Be Prepared: <em>Before Ordering a Memorial</em>
          </h3>
        </div>
        <ul>
          <li>Which direction will the memorial face?</li>
          <li>
            Who will be buried on what side of the memorial? (Double memorials)
          </li>
          <li>
            Write down all dates and the correct spelling of every name and
            detail to be carved.
          </li>
          <li>
            Consider design elements that reflect the person's life: religious
            iconography, military insignia, professional emblems, and personal
            interests.
          </li>
        </ul>
        <p>
          With modern computer-aided design, the possibilities are extensive.
          You do not have to settle for a catalog design.
        </p>
      </div>
    </section>
  );
}