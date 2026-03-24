import { personal, stats, socials } from "../data/portfolio";

const css = `
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding-top: 80px;
  }

  /* Animated grid background */
  .hero-grid-bg {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.4;
    mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent);
  }

  /* Glowing orbs */
  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
  }
  .hero-orb-1 {
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(224,92,42,0.12) 0%, transparent 70%);
    top: -100px; right: -100px;
  }
  .hero-orb-2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(196,149,42,0.08) 0%, transparent 70%);
    bottom: 0; left: 5%;
  }

  .hero-inner {
    position: relative; z-index: 2;
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 5rem;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 3rem;
  }

  .hero-eyebrow {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    display: flex; align-items: center; gap: 0.75rem;
    margin-bottom: 1.6rem;
    animation: fadeUp 0.7s cubic-bezier(.16,1,.3,1) both;
  }
  .hero-eyebrow::before {
    content: ''; display: block;
    width: 32px; height: 1px; background: var(--accent);
  }

  .hero-name {
    font-family: var(--font-display);
    font-size: clamp(3.8rem, 7.5vw, 7rem);
    font-weight: 600;
    line-height: 0.95;
    letter-spacing: -0.025em;
    color: var(--heading);
    margin-bottom: 0.15em;
    animation: fadeUp 0.7s 0.1s cubic-bezier(.16,1,.3,1) both;
  }
  .hero-name em {
    font-style: italic;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-role {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 2.4rem);
    font-weight: 300;
    font-style: italic;
    color: var(--subtle);
    margin-bottom: 2rem;
    animation: fadeUp 0.7s 0.2s cubic-bezier(.16,1,.3,1) both;
  }

  .hero-tagline {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--body);
    max-width: 460px;
    font-weight: 400;
    margin-bottom: 3rem;
    animation: fadeUp 0.7s 0.3s cubic-bezier(.16,1,.3,1) both;
  }

  .hero-cta {
    display: flex; gap: 1rem; flex-wrap: wrap;
    margin-bottom: 4rem;
    animation: fadeUp 0.7s 0.4s cubic-bezier(.16,1,.3,1) both;
  }

  .btn-primary {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.9rem 2rem;
    background: var(--accent);
    color: var(--white);
    border: 1px solid var(--accent);
    cursor: none;
    transition: all 0.3s cubic-bezier(.16,1,.3,1);
    border-radius: var(--radius);
  }
  .btn-primary:hover {
    background: transparent;
    color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 12px 32px var(--glow);
  }
  .btn-ghost {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.9rem 2rem;
    background: transparent;
    color: var(--body);
    border: 1px solid var(--border);
    cursor: none;
    transition: all 0.3s;
    border-radius: var(--radius);
  }
  .btn-ghost:hover {
    border-color: var(--heading);
    color: var(--heading);
    background: rgba(232,236,244,0.04);
  }

  /* Socials row */
  .hero-socials {
    display: flex; gap: 1.5rem;
    animation: fadeUp 0.7s 0.5s cubic-bezier(.16,1,.3,1) both;
  }
  .social-link {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    cursor: none;
    transition: color 0.2s;
  }
  .social-link:hover { color: var(--accent); }

  /* Right: Stats card */
  .hero-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 2.5rem;
    position: relative;
    animation: fadeUp 0.9s 0.35s cubic-bezier(.16,1,.3,1) both;
  }
  .hero-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent2), transparent);
    border-radius: 8px 8px 0 0;
  }

  .card-avatar {
    width: 72px; height: 72px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-display);
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 1.2rem;
  }

  .card-name {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--heading);
    margin-bottom: 0.2rem;
  }
  .card-title {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--subtle);
    margin-bottom: 2rem;
  }

  .card-divider {
    height: 1px; background: var(--border); margin-bottom: 1.8rem;
  }

  .card-stats {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 1rem; margin-bottom: 2rem;
  }
  .stat-item { text-align: center; }
  .stat-num {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    color: var(--heading);
    line-height: 1;
    margin-bottom: 0.3rem;
  }
  .stat-label {
    font-family: var(--font-mono);
    font-size: 0.58rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--subtle);
  }

  .card-location {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    color: var(--subtle);
    display: flex; align-items: center; gap: 0.5rem;
  }

  /* Scroll indicator */
  .scroll-hint {
    position: absolute;
    bottom: 2.5rem; left: 3rem;
    display: flex; align-items: center; gap: 1rem;
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    z-index: 2;
  }
  .scroll-line {
    width: 1px; height: 48px;
    background: linear-gradient(to bottom, var(--accent), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }
  @keyframes scrollPulse {
    0%,100%{opacity:1;transform:scaleY(1)} 50%{opacity:0.3;transform:scaleY(0.6)}
  }
  @keyframes fadeUp {
    from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)}
  }

  @media(max-width:900px){
    .hero-inner{grid-template-columns:1fr;gap:3rem}
    .hero-card{display:none}
  }
`;

export default function Hero() {
  const initials = personal.name.split(" ").map((n) => n[0]).join("");

  return (
    <section id="hero" className="hero">
      <style>{css}</style>

      <div className="hero-grid-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="hero-inner">
        {/* Left: text */}
        <div>
          <div className="hero-eyebrow">Welcome to my portfolio</div>

          <h1 className="hero-name">
            {personal.name.split(" ")[0]}<br />
            <em>{personal.name.split(" ")[1]}</em>
          </h1>

          <p className="hero-role">{personal.role}</p>
          <p className="hero-tagline">{personal.tagline}</p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact"  className="btn-ghost">Get In Touch</a>
          </div>

          <div className="hero-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="social-link"
                 target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: card */}
        <div className="hero-card">
          <div className="card-avatar">{initials}</div>
          <div className="card-name">{personal.name}</div>
          <div className="card-title">{personal.role}</div>
          <div className="card-divider" />
          <div className="card-stats">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="card-location">📍 {personal.location}</div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}