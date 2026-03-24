import { projects } from "../data/portfolio";

const css = `
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
  }

  .project-card {
    background: var(--bg);
    padding: 2.2rem;
    transition: background 0.3s, transform 0.4s cubic-bezier(.16,1,.3,1);
    position: relative;
    overflow: hidden;
    cursor: none;
  }
  .project-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(.16,1,.3,1);
  }
  .project-card:hover { background: var(--surface); }
  .project-card:hover::before { transform: scaleX(1); }
  .project-card:hover .project-num { color: var(--accent); }
  .project-card:hover .project-arrow { opacity: 1; transform: translateX(0); }

  .project-num {
    font-family: var(--font-display);
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--border);
    line-height: 1;
    margin-bottom: 1.4rem;
    transition: color 0.3s;
  }

  .project-tag {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.6rem;
  }

  .project-title {
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--heading);
    line-height: 1.2;
    margin-bottom: 0.8rem;
  }

  .project-desc {
    font-size: 0.85rem;
    line-height: 1.75;
    color: var(--body);
    font-weight: 400;
    margin-bottom: 1.6rem;
  }

  .project-tech {
    display: flex; flex-wrap: wrap; gap: 0.4rem;
    margin-bottom: 1.8rem;
  }
  .tech-tag {
    font-family: var(--font-mono);
    font-size: 0.58rem;
    letter-spacing: 0.08em;
    padding: 0.25rem 0.6rem;
    background: var(--border);
    color: var(--subtle);
    border-radius: 2px;
  }

  .project-link {
    display: flex; align-items: center; gap: 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--subtle);
    cursor: none;
    transition: color 0.2s, gap 0.2s;
  }
  .project-link:hover { color: var(--accent); gap: 0.9rem; }

  .project-arrow {
    opacity: 0;
    transform: translateX(-6px);
    transition: all 0.3s;
  }

  @media(max-width:1000px){
    .projects-grid{grid-template-columns:repeat(2,1fr)}
  }
  @media(max-width:640px){
    .projects-grid{grid-template-columns:1fr}
  }
`;

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: "var(--bg)" }}>
      <style>{css}</style>
      <div className="container">
        <header style={{ marginBottom: "3.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
          <div>
            <div className="section-label">Selected work</div>
            <h2 className="section-title">Projects that<br /><em>tell a story</em></h2>
          </div>
          <span style={{ fontFamily:"var(--font-display)", fontSize:"6rem", fontWeight:900, color:"var(--border)", lineHeight:1 }}>02</span>
        </header>

        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.id}>
              <div className="project-num">{p.id}</div>
              <div className="project-tag">{p.tag}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
              <a href={p.href} className="project-link">
                View project
                <span className="project-arrow">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}