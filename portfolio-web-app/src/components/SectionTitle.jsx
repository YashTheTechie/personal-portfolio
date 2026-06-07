import React from "react";

export default function SectionTitle({ label, title }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", letterSpacing: "4px",
        color: "#00f5a0", textTransform: "uppercase", marginBottom: "12px",
      }}>{label}</div>
      <h2 style={{
        fontFamily: "'Orbitron', monospace", fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
        fontWeight: 900, margin: 0,
        background: "linear-gradient(135deg, #ffffff 40%, #00f5a0 100%)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      }}>{title}</h2>
      <div style={{
        width: "60px", height: "3px", margin: "20px auto 0",
        background: "linear-gradient(90deg, #00f5a0, #00d2ff)", borderRadius: "2px",
      }} />
    </div>
  );
}