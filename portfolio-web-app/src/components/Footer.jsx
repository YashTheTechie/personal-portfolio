import React from "react";

export default function Footer() {
  return (
    <footer style={{
      textAlign: "center", padding: "28px 5vw",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      fontFamily: "'Space Mono', monospace", fontSize: "0.72rem",
      color: "#334155", letterSpacing: "1.5px", marginTop: "auto"
    }}>
      <span style={{ color: "#00f5a0" }}>GENIYASH</span> © 2026 — Built with React Router ⚡
    </footer>
  );
}