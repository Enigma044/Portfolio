import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf  = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.14);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.14);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = (e) => {
      if (e.target.closest("a, button, [data-hover]")) setHovered(true);
    };
    const onLeave = (e) => {
      if (e.target.closest("a, button, [data-hover]")) setHovered(false);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout",  onLeave);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout",  onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 8, height: 8,
          background: "var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          marginLeft: -4, marginTop: -4,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed", top: 0, left: 0,
          width:  hovered ? 52 : 36,
          height: hovered ? 52 : 36,
          border: `1.5px solid ${hovered ? "var(--accent)" : "rgba(232,236,244,0.35)"}`,
          background: hovered ? "rgba(224,92,42,0.08)" : "transparent",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
          transition: "width 0.3s, height 0.3s, border-color 0.3s, background 0.3s",
          marginLeft: hovered ? -26 : -18,
          marginTop:  hovered ? -26 : -18,
        }}
      />
    </>
  );
}