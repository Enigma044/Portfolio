import { useState, useEffect } from "react";
import { personal } from "../data/portfolio";

const links = ["About", "Projects", "Experience", "Contact"];

const styles = {
  nav: (scrolled) => ({
    position: "fixed", top: 0, left: 0, right: 0,
    zIndex: 100,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "1.25rem 3rem",
    background:   scrolled ? "rgba(8,11,16,0.85)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    transition: "all 0.4s cubic-bezier(.16,1,.3,1)",
  }),
  logo: {
    fontFamily: "var(--font-display)",
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "var(--heading)",
    letterSpacing: "-0.01em",
    cursor: "none",
  },
  logoAccent: { color: "var(--accent)", fontStyle: "italic" },
  links: {
    display: "flex", gap: "2.5rem",
    listStyle: "none",
  },
  link: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.68rem",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--subtle)",
    cursor: "none",
    transition: "color 0.2s",
    position: "relative",
  },
  badge: {
    display: "flex", alignItems: "center", gap: "0.5rem",
    fontFamily: "var(--font-mono)",
    fontSize: "0.62rem",
    letterSpacing: "0.1em",
    color: "#4ade80",
  },
  dot: {
    width: 6, height: 6,
    background: "#4ade80",
    borderRadius: "50%",
    animation: "pulse 2s ease-in-out infinite",
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={styles.nav(scrolled)}>
      <a href="#hero" style={styles.logo}>
        {personal.name.split(" ")[0]}
        <span style={styles.logoAccent}>.</span>
      </a>

      <ul style={styles.links}>
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              style={styles.link}
              onMouseEnter={(e) => (e.target.style.color = "var(--heading)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--subtle)")}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      {personal.available && (
        <div style={styles.badge}>
          <div style={styles.dot} />
          Available
        </div>
      )}

      <style>{`@keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(74,222,128,0.4)}50%{opacity:.7;box-shadow:0 0 0 6px transparent}}`}</style>
    </nav>
  );
}