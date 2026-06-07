import React from "react";
import SectionTitle from "../components/SectionTitle";
import { SKILLS } from "../constants/portfolioData";

export default function Skills() {
  return (
    <section style={{ padding: "80px 5vw" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTitle label="SKILLS" title="Tech Arsenal" />
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
          gap: "24px", marginTop: "52px",
        }}>
          {SKILLS.map((group, i) => (
            <div key={group.category} style={{
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px", padding: "24px", animation: `fadeUp 0.5s ease ${i * 0.1}s both`,
            }}>
              <h3 style={{
                fontFamily: "'Orbitron', monospace", fontSize: "0.78rem", letterSpacing: "2px",
                color: "#00f5a0", margin: "0 0 16px", textTransform: "uppercase",
              }}>{group.category}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {group.items.map(skill => (
                  <div key={skill} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "6px", height: "6px", borderRadius: "50%",
                      background: "linear-gradient(135deg, #00f5a0, #00d2ff)", flexShrink: 0,
                    }} />
                    <span style={{ color: "#cbd5e1", fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem" }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}