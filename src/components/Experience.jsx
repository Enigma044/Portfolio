import { experience } from "../data/portfolio";

const css = `
  .exp-layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 5rem;
    align-items: start;
  }

  .exp-sticky {
    position: sticky;
    top: 120px;
  }

  .exp-aside-text {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--body);
    margin-top: 1.5rem;
  }

  /* Timeline */
  .timeline {
    position: relative;
    padding-left: 2rem;
    border-left: 1px solid var(--border);
  }

  .timeline-item {
    position: relative;
    padding-bottom: 3.5rem;
    padding-left: 2rem;
  }
  .timeline-item:last-child { padding-bottom: 0; }

  .timeline-dot {
    position: absolute;
    left: -2.55rem;
    top: 0.3rem;
    width: 10px; height: 10px;
    background: var(--surface);
    border: 2px solid var(--border);
    border-radius: 50%;
    transition: all 0.3s;
  }
  .timeline-item:hover .timeline-dot {
    background: var(--accent);
    border-color: var(--accent);
    box-shadow: 0 0 0 5px rgba(224,92,42,0.15);
  }

  .timeline-date {
    font-family: var(--font-mono);
    font-size: 0.63rem;
    letter-spacing: 0.12em;
    color: var(--subtle);
    margin-bottom: 0.5rem;
  }

  .timeline-role {
    font-family: var(--font-display);
    font-size: 1.45rem;
    font-weight: 600;
    color: var(--heading);
    margin-bottom: 0.25rem;
    transition: color 0.2s;
  }
  .timeline-item:hover .timeline-role { color: var(--accent); }

  .timeline-company {
    font-family: var(--font-ui);
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--accent2);
    margin-bottom: 0.9rem;
  }

  .timeline-desc {
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--body);
    max-width: 540px;
  }

  @media(max-width:900px){
    .exp-layout{grid-template-columns:1fr; gap:3rem}
    .exp-sticky{position:static}
  }
`;

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: "var(--surface)" }}>
      <style>{css}</style>

      <div className="container">
        <header style={{
          marginBottom: "4rem",
          paddingBottom: "1.5rem",
          borderBottom: "1px solid var(--border)",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"flex-end"
        }}>
          <div>
            <div className="section-label">Journey</div>
            <h2 className="section-title">
              My path as a<br /><em>developer</em>
            </h2>
          </div>

          <span style={{
            fontFamily:"var(--font-display)",
            fontSize:"6rem",
            fontWeight:900,
            color:"var(--border)",
            lineHeight:1
          }}>
            03
          </span>
        </header>

        <div className="exp-layout">

          {/* Sticky aside */}
          <div className="exp-sticky">
            <div className="section-label">Timeline</div>

            <h3 style={{
              fontFamily:"var(--font-display)",
              fontSize:"1.6rem",
              fontWeight:600,
              color:"var(--heading)",
              lineHeight:1.2,
              marginTop:"0.5rem"
            }}>
              2+ years of<br />
              <em style={{color:"var(--accent)"}}>learning & building</em><br />
              real-world skills.
            </h3>

            <p className="exp-aside-text">
              As a B.Tech IT student, I focus on full-stack development,
              data structures & algorithms, and emerging technologies like
              Web3 — continuously building projects to grow into a
              top-tier software engineer.
            </p>
          </div>

          {/* Timeline */}
          <div className="timeline">
            {experience.map((e, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot" />
                <div className="timeline-date">{e.date}</div>
                <div className="timeline-role">{e.role}</div>
                <div className="timeline-company">{e.company}</div>
                <p className="timeline-desc">{e.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}