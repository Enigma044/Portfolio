import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolio";

const css = `
  .about { background: var(--surface); }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: start;
  }

  .about-text p {
    font-size: 1rem;
    line-height: 1.9;
    color: var(--body);
    margin-bottom: 1.4rem;
    font-weight: 400;
  }
  .about-text strong { color: var(--heading); font-weight: 600; }

  .about-quote {
    font-family: var(--font-display);
    font-size: 1.55rem;
    font-style: italic;
    font-weight: 400;
    color: var(--heading);
    line-height: 1.5;
    border-left: 2px solid var(--accent);
    padding-left: 1.6rem;
    margin: 2.5rem 0;
    opacity: 0.9;
  }

  /* Skills */
  .skills-heading {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--subtle);
    margin-bottom: 1.5rem;
    display: flex; align-items: center; gap: 0.6rem;
  }
  .skills-heading::after {
    content: ''; flex: 1;
    height: 1px; background: var(--border);
  }

  .skill-row { margin-bottom: 1.2rem; }

  .skill-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .skill-name {
    font-family: var(--font-ui);
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--body);
  }

  .skill-pct {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--subtle);
    letter-spacing: 0.05em;
  }

  .skill-track {
    height: 2px;
    background: var(--border);
    border-radius: 2px;
    overflow: hidden;
  }

  .skill-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    border-radius: 2px;
    transition: width 1.2s cubic-bezier(.16,1,.3,1);
    width: 0;
  }

  .skill-fill.animate { width: var(--target); }

  @media(max-width:900px){
    .about-grid{grid-template-columns:1fr;gap:3rem}
  }
`;

function SkillBar({ name, level, animate }) {
  return (
    <div className="skill-row">
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>

      <div className="skill-track">
        <div
          className={`skill-fill${animate ? " animate" : ""}`}
          style={{ "--target": `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section">
      <style>{css}</style>

      <div className="container">

        <header
          className="section-header"
          style={{
            marginBottom: "4rem",
            paddingBottom: "1.5rem",
            borderBottom: "1px solid var(--border)",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"flex-end"
          }}
        >
          <div>
            <div className="section-label">About me</div>
            <h2 className="section-title">
              The person<br /><em>behind the code</em>
            </h2>
          </div>

          <span
            style={{
              fontFamily:"var(--font-display)",
              fontSize:"6rem",
              fontWeight:900,
              color:"var(--border)",
              lineHeight:1
            }}
          >
            01
          </span>
        </header>

        <div className="about-grid" ref={ref}>

          {/* Left: About text */}
          <div className="about-text">

            <p>
              I'm a <strong>Full-Stack Developer and B.Tech IT student</strong>
              passionate about building scalable applications and solving
              real-world problems through code. I enjoy working across the stack —
              from intuitive user interfaces to robust backend systems.
            </p>

            <blockquote className="about-quote">
              "Code is not just about solving problems — it's about building
              solutions that scale."
            </blockquote>

            <p>
              Over the past <strong>2+ years</strong>, I’ve focused on mastering
              core computer science fundamentals, data structures & algorithms,
              and modern web technologies. My projects span full-stack
              applications, IoT systems, and decentralized apps on the
              Solana blockchain.
            </p>

            <p>
              Currently, I’m preparing for software engineering internships while
              continuously learning new technologies, improving problem-solving
              skills, and building projects that demonstrate real-world impact.
            </p>

          </div>

          {/* Right: Skills */}
          <div>
            <div className="skills-heading">Technical skills</div>

            {skills.map((s) => (
              <SkillBar
                key={s.name}
                name={s.name}
                level={s.level}
                animate={visible}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}