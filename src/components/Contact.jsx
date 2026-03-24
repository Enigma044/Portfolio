import { useState } from "react";
import { personal, socials } from "../data/portfolio";

const css = `
  .contact-section {
    background: var(--bg);
    position: relative;
    overflow: hidden;
  }

  /* Large decorative text */
  .contact-bg-text {
    position: absolute;
    bottom: -1rem; left: -1rem;
    font-family: var(--font-display);
    font-size: clamp(6rem, 16vw, 14rem);
    font-weight: 700;
    font-style: italic;
    color: transparent;
    -webkit-text-stroke: 1px var(--border);
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    line-height: 1;
    opacity: 0.6;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: start;
    position: relative; z-index: 1;
  }

  .contact-lead {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 300;
    color: var(--body);
    line-height: 1.65;
    margin: 1.5rem 0 2.5rem;
  }

  /* Social links */
  .social-list { display: flex; flex-direction: column; gap: 0.6rem; }

  .social-item {
    display: flex; align-items: center; justify-content: space-between;
    padding: 1rem 1.2rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    cursor: none;
    transition: all 0.3s;
    text-decoration: none;
  }
  .social-item:hover {
    border-color: var(--accent);
    background: rgba(224,92,42,0.05);
    transform: translateX(4px);
  }
  .social-item:hover .social-arrow { color: var(--accent); transform: translateX(4px); }

  .social-info {}
  .social-platform {
    font-family: var(--font-ui);
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--heading);
  }
  .social-handle {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.08em;
    color: var(--subtle);
    margin-top: 0.15rem;
  }
  .social-arrow {
    color: var(--muted);
    font-size: 1rem;
    transition: all 0.3s;
  }

  /* Contact form */
  .form-group { margin-bottom: 1.2rem; }

  .form-label {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--subtle);
    margin-bottom: 0.5rem;
  }

  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.85rem 1rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--heading);
    font-family: var(--font-ui);
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    resize: none;
  }
  .form-input:focus,
  .form-textarea:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(224,92,42,0.12);
  }
  .form-textarea { min-height: 120px; }

  .form-submit {
    width: 100%;
    padding: 1rem;
    background: var(--accent);
    color: var(--white);
    border: none;
    border-radius: var(--radius);
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: none;
    transition: all 0.3s cubic-bezier(.16,1,.3,1);
    margin-top: 0.5rem;
  }
  .form-submit:hover {
    background: var(--accent2);
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(224,92,42,0.3);
  }
  .form-submit:disabled {
    opacity: 0.6; transform: none;
  }

  .success-msg {
    display: flex; align-items: center; gap: 0.6rem;
    padding: 0.9rem 1rem;
    background: rgba(74,222,128,0.08);
    border: 1px solid rgba(74,222,128,0.2);
    border-radius: var(--radius);
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    color: #4ade80;
    margin-top: 1rem;
  }

  @media(max-width:900px){
    .contact-grid{grid-template-columns:1fr;gap:3.5rem}
  }
`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section section">
      <style>{css}</style>
      <div className="contact-bg-text">Let's talk.</div>

      <div className="container">
        <header style={{ marginBottom: "4rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
          <div>
            <div className="section-label">Get in touch</div>
            <h2 className="section-title">Have an idea?<br /><em>Let's build it.</em></h2>
          </div>
          <span style={{ fontFamily:"var(--font-display)", fontSize:"6rem", fontWeight:900, color:"var(--border)", lineHeight:1 }}>04</span>
        </header>

        <div className="contact-grid">
          {/* Left */}
          <div>
            <p className="contact-lead">
              I'm always open to interesting projects, ambitious collaborations, and genuinely good conversations about design and technology.
            </p>

            <a
              href={`mailto:${personal.email}`}
              style={{ display:"block", fontFamily:"var(--font-display)", fontSize:"1.3rem", fontWeight:600, color:"var(--accent)", marginBottom:"2.5rem", cursor:"none" }}
            >
              {personal.email}
            </a>

            <div className="social-list">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="social-item"
                   target="_blank" rel="noreferrer">
                  <div className="social-info">
                    <div className="social-platform">{s.label}</div>
                    <div className="social-handle">{s.handle}</div>
                  </div>
                  <span className="social-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your name</label>
              <input
                className="form-input"
                name="name"
                type="text"
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email address</label>
              <input
                className="form-input"
                name="email"
                type="email"
                placeholder="jane@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                name="message"
                placeholder="Tell me about your project…"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className="form-submit" type="submit" disabled={loading}>
              {loading ? "Sending…" : "Send Message →"}
            </button>
            {sent && (
              <div className="success-msg">
                ✓ &nbsp;Message sent — I'll reply within 24 hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}