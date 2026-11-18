import React from "react"
import SectionEyebrow from "../components/SectionEyebrow";
import { services } from "../data/content";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-top">
        <div className="about-copy">
          <SectionEyebrow>A bit of our story</SectionEyebrow>
          <h2>
            Family roots.
            <br />
            <em>Generations of care.</em>
          </h2>
          <p>
            In 1956, Darriel “Buck” Nicholson and his wife Doris established the
            RockClift Memorial Company in Weatherford, Oklahoma. In 1960, Buck
            accepted a call to full-time pastoral and evangelical ministry. The
            company relocated to Clinton, Oklahoma, where his parents, Irvin and
            Nell, assumed control and operated it until Irvin’s passing in 1976.
          </p>
          <p>
            Buck and Doris subsequently took over the business and renamed it
            Nicholson Monument Company. In 2020, their eldest daughter, Robin
            Nicholson Williams, inherited the leadership and now oversees daily
            operations, the office, and the shop—upholding the standards western
            Oklahoma has come to associate with the Nicholson family.
          </p>
          <p>
            Robin began in the shop laying out stencils and engraving monuments
            by hand. She moved to a full-time office position in 1983 and became
            lead designer and artist, helping families select the style, size,
            and color that best represents the person they remember.
          </p>
          <div className="heritage-signature">
            Nicholson family <span>— Since 1956</span>
          </div>
        </div>
        <div className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=85"
            alt="Family walking together outdoors"
            loading="lazy"
          />
          <div className="image-caption">
            <strong>Since 1956</strong>
            <span>Our family serving yours</span>
          </div>
        </div>
      </div>
      <div className="services-block">
        <div className="services-heading">
          <SectionEyebrow>What we do</SectionEyebrow>
          <h3>
            Our services <em>include</em>
          </h3>
          <p>
            From a first memorial to the care of an existing family monument, we
            bring attention and craftsmanship to every detail.
          </p>
        </div>
        <div className="services-list">
          {services.map((s, i) => (
            <div className="service-item" key={s}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {s}
            </div>
          ))}
        </div>
      </div>
      <div className="final-dates">
        <div className="final-dates-image">
          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=85"
            alt="Sunlight across a peaceful landscape"
            loading="lazy"
          />
        </div>
        <div>
          <SectionEyebrow>Care that continues</SectionEyebrow>
          <h3>
            Final <em>Dates</em>
          </h3>
          <p>
            From time to time, a monument needs additional lettering—whether
            adding a loved one's date of passing or a grandchild's name. Our
            experienced craftsmen travel across the state to complete final
            inscriptions on monuments that have already been set.
          </p>
          <p>
            Our staff carefully checks spelling and dates, monitors work
            schedules, and keeps customers informed until the work is complete.
            Many additional carvings and inscription changes can be completed in
            the cemetery without moving the monument.
          </p>
          <p className="final-promise">
            Your family's satisfaction with our work remains our priority.
          </p>
        </div>
      </div>
    </section>
  );
}