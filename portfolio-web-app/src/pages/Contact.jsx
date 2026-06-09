import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false); // Tracks connection state

  const handleSubmit = async () => {
    // Basic structural validation
    if (form.name && form.email && form.message) {
      setLoading(true);
      
      try {
        // CHANGED: Points the form payload directly to your live Render engine instead of localhost
        const response = await fetch("https://portfolio-backend-fqzy.onrender.com/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        const data = await response.json();

        if (response.ok) {
          setSent(true);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSent(false), 4000);
        } else {
          // If the server returns a rate-limit error or custom validation crash
          alert(data.error || "Something went wrong processing your message.");
        }
      } catch (err) {
        console.error("Network Link Disruption:", err);
        // CHANGED: Cleaner production-ready alert error for live visitors
        alert("The server is currently unable to accept messages. Please try again shortly or contact me directly via email!");
      } finally {
        loading && setLoading(false);
      }
    }
  };

  return (
    <section style={{ padding: "80px 5vw 80px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <SectionTitle label="CONTACT" title="Let's Build Together" />
        <p style={{
          textAlign: "center", color: "#64748b", fontFamily: "'DM Sans', sans-serif",
          fontSize: "1.02rem", marginTop: "16px", marginBottom: "48px", lineHeight: 1.7,
        }}>
          Looking for a React Frontend Developer? I'm open to full-time roles, internships, and freelance projects. Let's talk!
        </p>

        {/* Updated Profile Navigation Badges */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "48px", flexWrap: "wrap" }}>
          {[
            { icon: "📧", label: "yashkamble.tech@gmail.com", href: "mailto:yashkamble.tech@gmail.com", color: "#00f5a0" },
            { icon: "🐙", label: "GitHub", href: "https://github.com/YashTheTechie", color: "#a855f7" },
            { icon: "💻", label: "LeetCode", href: "https://leetcode.com/u/YashTheTechie", color: "#ffa116" }, // Added LeetCode with matching accent
          ].map(item => (
            <a 
              key={item.label} 
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div style={{
                display: "flex", alignItems: "center", gap: "10px",
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px", padding: "12px 20px", fontFamily: "'Space Mono', monospace",
                fontSize: "0.78rem", color: item.color, cursor: "pointer", transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = item.color;
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
              >
                {item.icon} {item.label}
              </div>
            </a>
          ))}
        </div>

        <div style={{
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "20px", padding: "clamp(24px, 5vw, 40px)",
        }}>
          {["name", "email"].map(field => (
            <input key={field}
              type={field === "email" ? "email" : "text"}
              placeholder={field === "name" ? "Your Name" : "Your Email"}
              value={form[field]}
              onChange={e => setForm({ ...form, [field]: e.target.value })}
              style={{
                width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px", padding: "14px 18px", color: "#e2e8f0", fontSize: "0.95rem",
                fontFamily: "'DM Sans', sans-serif", outline: "none", marginBottom: "16px",
                boxSizing: "border-box", transition: "border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "rgba(0,245,160,0.4)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
            />
          ))}
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            rows={5}
            style={{
              width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "10px", padding: "14px 18px", color: "#e2e8f0", fontSize: "0.95rem",
              fontFamily: "'DM Sans', sans-serif", outline: "none", marginBottom: "20px",
              boxSizing: "border-box", resize: "vertical", transition: "border-color 0.2s",
            }}
            onFocus={e => e.target.style.borderColor = "rgba(0,245,160,0.4)"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
          />
          <button 
            onClick={handleSubmit} 
            disabled={loading}
            style={{
              width: "100%", background: "linear-gradient(135deg, #00f5a0, #00d2ff)",
              color: "#0a0a12", border: "none", borderRadius: "10px", padding: "15px",
              fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "0.9rem",
              letterSpacing: "2px", cursor: loading ? "not-allowed" : "pointer", 
              transition: "opacity 0.2s, transform 0.2s",
              opacity: loading ? "0.6" : "1"
            }}
            onMouseEnter={e => { if(!loading) { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
            onMouseLeave={e => { if(!loading) { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; } }}
          >
            {loading ? "DISPATCHING..." : sent ? "✓ MESSAGE SENT!" : "SEND MESSAGE →"}
          </button>
        </div>
      </div>
    </section>
  );
}