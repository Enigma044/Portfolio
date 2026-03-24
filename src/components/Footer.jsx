import { personal, socials } from "../data/portfolio";

const css = `
  .footer {
    background: var(--surface);
    border-top: 1px solid var(--border);
    padding: 2.5rem 0;
  }
  .footer-inner {
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 1rem;
  }
  .footer-logo {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--heading);
    cursor: none;
  }
  .footer-logo em { color: var(--accent); font-style: italic; }
  .footer-copy {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    color: var(--muted);
  }
  .footer-links {
    display: flex; gap: 1.5rem;
  }
  .footer-link {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    cursor: none;
    transition: color 0.2s;
  }
  .footer-link:hover { color: var(--accent); }
`;

export default function Footer() {
  return (
    <footer className="footer">
      <style>{css}</style>
      <div className="container">
        <div className="footer-inner">
          <span className="footer-logo">
            {personal.name.split(" ")[0]}<em>.</em>
          </span>
          <span className="footer-copy">
            © {new Date().getFullYear()} {personal.name} — All rights reserved
          </span>
          <div className="footer-links">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="footer-link"
                 target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}