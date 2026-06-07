import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section style={{ padding: "80px 5vw", maxWidth: "1100px", margin: "0 auto", animation: "fadeUp 0.5s ease both" }}>
      <SectionTitle label="ABOUT ME" title="Who is Geniyash?" />
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "40px", alignItems: "center", marginTop: "48px",
      }}>
        <div>
          <div style={{
            width: "180px", height: "180px", borderRadius: "50%", margin: "0 auto 32px",
            background: "linear-gradient(135deg, #00f5a0, #00d2ff)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "5rem", boxShadow: "0 0 60px rgba(0,245,160,0.3)", position: "relative",
          }}>
            👨‍💻
            <div style={{
              position: "absolute", inset: "-4px", borderRadius: "50%", border: "2px solid transparent",
              background: "linear-gradient(135deg, #00f5a0, #00d2ff) border-box",
              WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out", animation: "spin 6s linear infinite",
            }} />
          </div>
        </div>
        <div>
          <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: "1.05rem", fontFamily: "'DM Sans', sans-serif", marginBottom: "20px" }}>
            Hey! I'm <span style={{ color: "#00f5a0", fontWeight: 700 }}>Yash</span> — a passionate React Frontend Developer and B.Sc. IT graduate from Maharashtra with a stellar academic record (9.10 CGPA). I love turning complex problems into clean, intuitive user interfaces.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: "1.05rem", fontFamily: "'DM Sans', sans-serif", marginBottom: "28px" }}>
            From building real-time chat apps to full-stack e-commerce platforms, I thrive at the intersection of design and code. Currently focused on mastering the React ecosystem and creating impactful digital experiences.
          </p>
          
          {/* Tech Tags */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
            {["React.js", "JavaScript", "Node.js", "MongoDB"].map(tag => (
              <span key={tag} style={{
                background: "rgba(0,245,160,0.08)", border: "1px solid rgba(0,245,160,0.25)",
                color: "#00f5a0", borderRadius: "6px", padding: "6px 14px",
                fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", letterSpacing: "1px",
              }}>{tag}</span>
            ))}
          </div>

          {/* Resume Download Action */}
          <div>
            <a 
              href="/Yash_Kamble_Resume.pdf" 
              download="Yash_Kamble_Resume.pdf"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "transparent",
                border: "2px solid #00f5a0",
                color: "#00f5a0",
                borderRadius: "10px",
                padding: "12px 24px",
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "1px",
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.background = "linear-gradient(135deg, #00f5a0, #00d2ff)";
                e.currentTarget.style.color = "#0a0a12";
                e.currentTarget.style.borderProperty = "transparent";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,245,160,0.2)";
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#00f5a0";
                e.currentTarget.style.border = "2px solid #00f5a0";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              📥 DOWNLOAD RESUME
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}