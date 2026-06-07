import React from "react";
import SectionTitle from "../components/SectionTitle";
import { EDUCATION } from "../constants/portfolioData";

export default function Education() {
  return (
    <section style={{ padding: "80px 5vw", minHeight: "calc(100vh - 120px)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <SectionTitle label="EDUCATION" title="Academic Journey" />
        <div style={{ marginTop: "52px", position: "relative" }}>
          {/* Vertical timeline spine */}
          <div style={{
            position: "absolute", left: "28px", top: 0, bottom: 0,
            width: "2px", background: "linear-gradient(180deg, #00f5a0, #00d2ff, transparent)",
          }} />
          {EDUCATION.map((edu, i) => (
            <div key={i} style={{
              display: "flex", gap: "28px", marginBottom: "36px",
              animation: `fadeUp 0.6s ease ${i * 0.15}s both`,
            }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "50%", flexShrink: 0,
                background: edu.highlight ? "linear-gradient(135deg, #00f5a0, #00d2ff)" : "rgba(0,245,160,0.08)",
                border: "2px solid rgba(0,245,160,0.3)", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem", zIndex: 1, boxShadow: edu.highlight ? "0 0 30px rgba(0,245,160,0.4)" : "none",
              }}>{edu.icon}</div>
              <div style={{
                flex: 1, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px", padding: "20px 24px", borderLeft: edu.highlight ? "3px solid #00f5a0" : "3px solid transparent",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
                  <h3 style={{
                    fontFamily: "'Orbitron', monospace", fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
                    color: edu.highlight ? "#00f5a0" : "#e2e8f0", margin: 0, fontWeight: 700,
                  }}>{edu.level}</h3>
                  <span style={{
                    background: edu.highlight ? "rgba(0,245,160,0.15)" : "rgba(255,255,255,0.04)",
                    color: edu.highlight ? "#00f5a0" : "#64748b",
                    border: `1px solid ${edu.highlight ? "rgba(0,245,160,0.3)" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: "20px", padding: "3px 12px", fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", letterSpacing: "1px",
                  }}>{edu.score}</span>
                </div>
                <p style={{ color: "#64748b", margin: "6px 0 0", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}>
                  {edu.institute} • {edu.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}