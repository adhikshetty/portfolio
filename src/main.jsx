import { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./styles.css";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Artifacts", href: "#artifacts" },
  { label: "Contact", href: "#contact" },
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <a className="logo" href="#home" aria-label="Adhik Shetty home">
        <span className="logo-mark">A</span>
        <span className="logo-name">ADHIKEK</span>
      </a>

      <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
        {navigation.map((item, index) => (
          <a className={index === 0 ? "active" : ""} href={item.href} key={item.label} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="option-button" href="#contact" onClick={closeMenu}>
        OPTION
      </a>

      <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

function CornerMarks() {
  return (
    <>
      <span className="corner top-left" />
      <span className="corner top-right" />
      <span className="corner bottom-left" />
      <span className="corner bottom-right" />
    </>
  );
}

function App() {
  return (
    <main id="home" className="portfolio-page">
      <div className="ambient ambient-red" />
      <div className="ambient ambient-orange" />
      <div className="scanlines" />
      <Navigation />

      <section className="hero-panel" aria-label="Introduction">
        <CornerMarks />
        <div className="hero-copy">
          <p className="eyebrow">VIDEO EDITOR <span>|</span> MOTION DESIGNER</p>
          <h1>ADHIK</h1>
          <p className="role">VIDEO EDITOR <span>|</span> MOTION DESIGNER</p>
          <p className="intro">Crafting visuals that make brands stand out.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              PORTFOLIO OF WORK <ArrowUpRight size={14} />
            </a>
            <a className="secondary-button" href="#contact">GET IN TOUCH</a>
          </div>
        </div>

        <div className="portrait-stage" aria-hidden="true">
          <div className="portrait-glow" />
          <div className="portrait-ring ring-one" />
          <div className="portrait-ring ring-two" />
          <img src="/assets/hero-portrait.png" alt="" />
          <div className="light-streak streak-one" />
          <div className="light-streak streak-two" />
        </div>

        <div className="hud hud-left">SYS_01 / ONLINE</div>
        <div className="hud hud-right">MANGALORE, IN <span className="hud-dot" /></div>
        <div className="hero-footer">SCROLL TO EXPLORE <span className="footer-line" /> 2026</div>
      </section>

      <section id="projects" className="below-section">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Visual stories with a pulse.</h2>
        <div className="project-preview-grid">
          <article className="project-preview"><span>01 / EDITORIAL</span><h3>Stories in motion</h3><p>Cutting rhythm, atmosphere, and detail into memorable visual experiences.</p></article>
          <article className="project-preview"><span>02 / BRAND FILM</span><h3>Built for attention</h3><p>Creative direction and motion systems that make every frame feel intentional.</p></article>
          <article className="project-preview"><span>03 / 3D MOTION</span><h3>Future-facing worlds</h3><p>Technical craft and cinematic art direction for ambitious digital brands.</p></article>
        </div>
      </section>
      <section id="about" className="content-section">
        <p className="eyebrow">ABOUT / 02</p><h2>Creative thinking,<br /><em>technical precision.</em></h2>
        <p className="content-copy">I build cinematic visuals, motion systems, and digital experiences that give ideas a distinct point of view.</p>
      </section>
      <section id="artifacts" className="content-section">
        <p className="eyebrow">CAPABILITIES / 03</p><h2>From first frame<br /><em>to final cut.</em></h2>
        <div className="skill-list"><span>VIDEO EDITING</span><span>MOTION DESIGN</span><span>CREATIVE DIRECTION</span><span>3D / VISUAL EFFECTS</span></div>
      </section>
      <section id="contact" className="content-section contact-section">
        <p className="eyebrow">CONTACT / 04</p><h2>Let’s make something<br /><em>impossible to ignore.</em></h2>
        <a className="primary-button" href="mailto:hello@adhik.dev">START A CONVERSATION <ArrowUpRight size={14} /></a>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
