import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { PROJECTS } from "../constants/portfolioData";

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ padding: "80px 5vw" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTitle label="PROJECTS" title="Things I've Built" />
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          gap: "24px", marginTop: "52px",
        }}>
          {PROJECTS.map((p) => (
            <div key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === p.id ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${hovered === p.id ? p.color + "55" : "rgba(255,255,255,0.06)"}`,
                borderRadius: "16px", padding: "28px", transition: "all 0.3s ease", cursor: "default",
                transform: hovered === p.id ? "translateY(-6px)" : "translateY(0)",
                boxShadow: hovered === p.id ? `0 16px 50px ${p.color}18` : "none", position: "relative", overflow: "hidden",
              }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                background: `linear-gradient(90deg, ${p.color}, transparent)`,
                opacity: hovered === p.id ? 1 : 0, transition: "opacity 0.3s",
              }} />
              <div style={{
                fontSize: "2.4rem", marginBottom: "16px",
                filter: hovered === p.id ? `drop-shadow(0 0 12px ${p.color})` : "none", transition: "filter 0.3s",
              }}>{p.icon}</div>
              <h3 style={{
                fontFamily: "'Orbitron', monospace", fontSize: "1rem", fontWeight: 700,
                color: hovered === p.id ? p.color : "#e2e8f0", margin: "0 0 12px", transition: "color 0.3s",
              }}>{p.title}</h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", margin: "0 0 20px" }}>{p.desc}</p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    background: `${p.color}12`, border: `1px solid ${p.color}30`,
                    color: p.color, borderRadius: "5px", padding: "3px 10px",
                    fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.5px",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}