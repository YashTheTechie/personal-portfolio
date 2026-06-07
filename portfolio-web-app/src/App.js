import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Global Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Views
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

// Cyberpunk-style Global CSS animations and configurations
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');
  
  *, *::before, *::after { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
  }
  
  html { 
    scroll-behavior: smooth; 
  }
  
  body { 
    background: #0a0a12; 
    color: #e2e8f0; 
    overflow-x: hidden; 
    font-family: 'DM Sans', sans-serif;
  }
  
  /* Scrollbar Customization */
  ::-webkit-scrollbar { 
    width: 5px; 
  }
  ::-webkit-scrollbar-track { 
    background: #0a0a12; 
  }
  ::-webkit-scrollbar-thumb { 
    background: #00f5a0; 
    border-radius: 3px; 
  }
  
  /* CSS Engine Keyframe Animations */
  @keyframes fadeUp { 
    from { opacity: 0; transform: translateY(24px); } 
    to { opacity: 1; transform: translateY(0); } 
  }
  @keyframes float { 
    0%, 100% { transform: translateY(0); } 
    50% { transform: translateY(-18px); } 
  }
  @keyframes blink { 
    0%, 100% { opacity: 1; } 
    50% { opacity: 0; } 
  }
  @keyframes gridMove { 
    from { background-position-y: 0px; } 
    to { background-position-y: 60px; } 
  }
  @keyframes spin { 
    from { transform: rotate(0deg); } 
    to { transform: rotate(360deg); } 
  }
  
  /* Responsive Navigation Media Queries */
  @media (max-width: 768px) {
    .nav-desktop { display: none !important; }
    .nav-mobile-btn { display: flex !important; }
  }
  @media (min-width: 769px) {
    .nav-mobile-menu { display: none !important; }
  }
`;

export default function App() {
  // Inject theme styles directly into the document header on application mounting
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <BrowserRouter>
      <div style={{ 
        background: "#0a0a12", 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column" 
      }}>
        {/* Navbar sits outside Routes so it is rendered globally and NEVER re-renders on page change */}
        <Navbar />
        
        {/* Main Content Area: Padding compensates for the fixed nav height */}
        <main style={{ flex: 1, paddingTop: "64px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}