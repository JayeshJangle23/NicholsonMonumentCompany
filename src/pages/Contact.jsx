import React, { useState } from "react";
import SectionEyebrow from "../components/SectionEyebrow";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Upload,
} from "lucide-react";
export default function Contact() {
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const file = data.get("attachment");
    const payload = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      question: data.get("question"),
      attachment:
        file && file.name
          ? { name: file.name, type: file.type, size: file.size }
          : null,
      submittedAt: new Date().toISOString(),
    };
    console.log(
      "Nicholson Monument Company — contact form submission:",
      payload,
    );
    console.log(
      "Selected attachment File object:",
      file && file.name ? file : null,
    );
    setSubmitted(true);
    form.reset();
    setFileName("");
    window.setTimeout(() => setSubmitted(false), 5500);
  };
  return (
    <section className="section contact" id="contact">
      <div className="contact-heading">
        <SectionEyebrow>We are here for you</SectionEyebrow>
        <h2>
          Let's start a <em>conversation.</em>
        </h2>
        <p>
          Questions about a memorial, a design, or an existing monument? Our
          team is ready to help.
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-details">
          <div className="office-card office-card--main">
            <span className="office-label">Main office</span>
            <h3>Clinton, Oklahoma</h3>
            <p>
              <MapPin size={18} />
              638 N. 6th St.
              <br />
              <span className="indent">Clinton, OK 73601</span>
            </p>
            <p>
              <Phone size={16} />
              <a href="tel:+15803237513">(580) 323-7513</a>
            </p>
            <p>
              <Mail size={16} />
              <a href="mailto:nicholsonmonument@sbcglobal.net">
                nicholsonmonument@sbcglobal.net
              </a>
            </p>
          </div>
          <div className="office-card">
            <span className="office-label">Satellite offices</span>
            <h3>Serving western Oklahoma</h3>
            <p>
              <MapPin size={17} />
              2617 E. 5th St., Hobart, OK 73651
            </p>
            <p>
              <MapPin size={17} />
              409 N. Main St., Hennessey, OK 73742
            </p>
          </div>
          <div className="hours-card">
            <Clock3 size={20} />
            <div>
              <strong>Office hours</strong>
              <p>
                Monday–Friday · 8 a.m. to 5 p.m.
                <br />
                Saturday by appointment
                <br />
                Hobart by appointment only
                <br />
                See Kelley @ Hennessey
              </p>
            </div>
          </div>
        </div>
        <div className="map-wrap">
          <iframe
            title="Map showing Nicholson Monument Company in Clinton, Oklahoma"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-98.93%2C35.49%2C-98.86%2C35.55&layer=mapnik&marker=35.515%2C-98.899"
            loading="lazy"
          />
          <a
            href="https://www.openstreetmap.org/?mlat=35.515&mlon=-98.899#map=14/35.515/-98.899"
            target="_blank"
            rel="noreferrer"
          >
            Open map <ArrowUpRight size={14} />
          </a>
          <small>
            Map centered on Clinton, Oklahoma. Confirm the exact office entrance
            before travelling.
          </small>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-title">
            <span>01 / GET IN TOUCH</span>
            <h3>
              How can we <em>help?</em>
            </h3>
          </div>
          <div className="form-row">
            <label>
              First name
              <input
                name="firstName"
                placeholder="Your first name"
                required
                autoComplete="given-name"
              />
            </label>
            <label>
              Last name
              <input
                name="lastName"
                placeholder="Your last name"
                required
                autoComplete="family-name"
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email address
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </label>
            <label>
              Phone number
              <input
                type="tel"
                name="phone"
                placeholder="(000) 000-0000"
                autoComplete="tel"
              />
            </label>
          </div>
          <label className="file-label">
            <span>
              Attach a file <small>(optional)</small>
            </span>
            <input
              type="file"
              name="attachment"
              accept="image/*,.pdf,.doc,.docx"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            />
            <span className="file-button">
              <Upload size={16} />
              {fileName || "Choose a file"}
            </span>
          </label>
          <label>
            How can we help you?
            <textarea
              name="question"
              rows="5"
              placeholder="Tell us a little about what you are looking for..."
              required
            />
          </label>
          <button className="btn btn--dark form-submit" type="submit">
            Send your message <ArrowRight size={17} />
          </button>
          {submitted && (
            <p className="form-success" role="status">
              <Check size={16} /> Your message details were logged in the
              browser console.
            </p>
          )}
          <small className="form-note">
            Demo form: submissions are logged to the browser developer console.
            No email is sent and no data is stored on a server.
          </small>
        </form>
      </div>
    </section>
  );
}
