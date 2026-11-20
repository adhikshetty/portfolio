import { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./styles.css";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    number: "01",
    label: "SIH 2026 / NTRO",
    title: "AI-Driven Multi-Vendor Network Security Compliance Auditor",
    description: "Selected at university level for Smart India Hackathon 2026. Normalises multi-vendor configurations and produces explainable, evidence-based compliance assessments.",
    tags: ["Python", "React", "FastAPI", "Netmiko", "NLP / ML"],
  },
  {
    number: "02",
    label: "FULL-STACK SYSTEM",
    title: "Auto Rickshaw Management System",
    description: "A complete management concept for stands, availability, driver registration, bookings, ratings, reviews, an admin dashboard and demand analytics.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
  },
  {
    number: "03",
    label: "AI HACKATHON CONCEPT",
    title: "SehatSathi: AI Voice Medical Assistant",
    description: "A conceptual assistant for rural and semi-urban communities, with voice interaction, text assistance, local-language support and conversational AI.",
    tags: ["AI Voice", "Conversational AI", "Accessibility"],
  },
];

const skills = [
  "Python", "Java", "C", "JavaScript",
  "HTML", "CSS", "Node.js", "MySQL", "SQLite",
  "Git", "GitHub", "VS Code",
];

const exploring = [
  "Artificial Intelligence", "Machine Learning", "Cloud Computing",
  "AI + Cloud Integration", "Cybersecurity", "Network Security",
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <a className="logo" href="#home" aria-label="Adhik Shetty home">
        <span className="logo-mark">A</span>
        <span className="logo-name">ADHIK SHETTY</span>
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
          <p className="eyebrow">SOFTWARE DEVELOPER <span>|</span> AI & CLOUD ENTHUSIAST</p>
          <h1>ADHIK</h1>
          <p className="role">PROBLEM SOLVER <span>|</span> TECHNOLOGY EXPLORER</p>
          <p className="intro">Technology. Innovation. Leadership.</p>
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
        <h2>Building ideas into<br /><em>working systems.</em></h2>
        <div className="project-preview-grid">
          {projects.map((project) => (
            <article className="project-preview" key={project.number}>
              <span>{project.number} / {project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">{project.tags.map((tag) => <b key={tag}>{tag}</b>)}</div>
            </article>
          ))}
        </div>
      </section>
      <section id="about" className="content-section">
        <p className="eyebrow">ABOUT / 02</p>
        <h2>Engineering progress through<br /><em>curiosity and leadership.</em></h2>
        <div className="about-grid">
          <p className="content-copy">I am pursuing my MCA at St Aloysius (Deemed to be University), Mangaluru, after completing my BCA with a CGPA of 8.33. I enjoy solving practical problems across software, AI, cloud, cybersecurity and network security.</p>
          <div className="milestone-list">
            <span><b>8.33</b> BCA CGPA</span>
            <span><b>MCA</b> 1st Semester</span>
            <span><b>NCC</b> Senior Under Officer</span>
            <span><b>SIH</b> 2026 University Selection</span>
          </div>
        </div>
      </section>
      <section id="skills" className="content-section">
        <p className="eyebrow">CAPABILITIES / 03</p>
        <h2>Skills built through<br /><em>continuous exploration.</em></h2>
        <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        <p className="eyebrow exploring-label">CURRENTLY EXPLORING</p>
        <div className="skill-list">{exploring.map((item) => <span key={item}>{item}</span>)}</div>
      </section>
      <section id="contact" className="content-section contact-section">
        <p className="eyebrow">CONTACT / 04</p>
        <h2>Let’s build something<br /><em>meaningful.</em></h2>
        <p className="content-copy">Email, LinkedIn and GitHub links will be available here once provided.</p>
        <div className="hero-actions"><span className="secondary-button">KARNATAKA, INDIA</span></div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
