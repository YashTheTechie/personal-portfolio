import React, { useState, useEffect } from "react";
import { TYPEWRITER_WORDS } from "../constants/portfolioData";

function useTypewriter(words, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    setDisplayed(word.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

export default function Home() {
  const typed = useTypewriter(TYPEWRITER_WORDS);

  return (
    <section style={{
      minHeight: "calc(100vh - 64px)", display: "flex", alignItems: "center",
      justifyContent: "center", flexDirection: "column", padding: "40px 5vw 60px",
      position: "relative", overflow: "hidden", textAlign: "center",
    }}>
      {/* Animated grid background */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(0,245,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,160,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px", animation: "gridMove 20s linear infinite",
      }} />
      
      {/* Glowing atmospheric orbs */}
      <div style={{
        position: "absolute", width: "420px", height: "420px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,245,160,0.12) 0%, transparent 70%)",
        top: "10%", left: "10%", filter: "blur(40px)", zIndex: 0, animation: "float 7s ease-in-out infinite",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "inline-block", background: "rgba(0,245,160,0.08)",
          border: "1px solid rgba(0,245,160,0.3)", borderRadius: "40px",
          padding: "6px 20px", marginBottom: "24px", fontFamily: "'Space Mono', monospace",
          fontSize: "0.75rem", color: "#00f5a0", letterSpacing: "2px", animation: "fadeUp 0.6s ease both",
        }}>
          👋 AVAILABLE FOR OPPORTUNITIES
        </div>

        <h1 style={{
          fontFamily: "'Orbitron', monospace", fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
          fontWeight: 900, margin: "0 0 8px",
          background: "linear-gradient(135deg, #ffffff 30%, #00f5a0 70%, #00d2ff 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.1, animation: "fadeUp 0.7s ease 0.1s both",
        }}>
          GENIYASH
        </h1>

        <p style={{
          fontFamily: "'Space Mono', monospace", fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
          color: "#4ade80", marginBottom: "6px", letterSpacing: "1px", animation: "fadeUp 0.7s ease 0.15s both",
        }}>
          Genius + Yash = Geniyash ✨
        </p>

        <div style={{ height: "2.5rem", marginBottom: "32px", animation: "fadeUp 0.7s ease 0.2s both" }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(1rem, 2.5vw, 1.35rem)", color: "#00d2ff" }}>
            {typed}
            <span style={{ borderRight: "2px solid #00d2ff", animation: "blink 1s step-end infinite", marginLeft: "2px" }} />
          </span>
        </div>

        <p style={{
          maxWidth: "580px", color: "#94a3b8", lineHeight: 1.8, fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
          fontFamily: "'DM Sans', sans-serif", animation: "fadeUp 0.7s ease 0.3s both", marginBottom: "40px",
        }}>
          Information Technology grad from Maharashtra with a 9.02 CGPA and a passion for building beautiful, scalable web applications. 5 full-stack projects shipped. Ready to make an impact.
        </p>

        {/* Dynamic Metric Badges */}
        <div style={{ display: "flex", gap: "clamp(24px, 5vw, 60px)", marginTop: "64px", justifyContent: "center", animation: "fadeUp 0.7s ease 0.5s both" }}>
          {[["5+", "Projects Built"], ["9.02", "CGPA"], ["90%", "HSC Score"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Orbitron', monospace", fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                fontWeight: 900, background: "linear-gradient(135deg, #00f5a0, #00d2ff)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{num}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#64748b", letterSpacing: "1px", marginTop: "4px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}