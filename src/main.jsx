import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Menu,
  Shield,
  Users,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Achievements", "achievements"],
  ["Leadership", "leadership"],
  ["Education", "education"],
  ["Contact", "contact"],
];

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "C", "JavaScript"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Database",
    items: ["MySQL", "SQLite", "PostgreSQL"],
  },
  {
    title: "Development Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Emerging Technologies",
    items: ["Artificial Intelligence", "Machine Learning", "Cloud Computing", "Cybersecurity", "Network Security"],
  },
];

const projects = [
  {
    number: "01",
    label: "SIH 2026 / NTRO",
    title: "AI-Driven Multi-Vendor Network Security Compliance Auditor",
    summary: "An intelligent compliance system that normalises multi-vendor configurations and produces explainable, evidence-based assessments.",
    details: [
      "Selected at the university level for Smart India Hackathon 2026, SIH26155.",
      "Normalises multi-vendor configuration syntax and detects unknown or unsupported structures.",
      "Uses a human-in-the-loop workflow to improve system decisions through expert feedback.",
      "Maps findings to CIS Benchmarks and NIST SP 800-53 with evidence-based remediation.",
    ],
    stack: ["Python", "React", "FastAPI", "Netmiko", "NAPALM", "NLP / ML"],
  },
  {
    number: "02",
    label: "FULL-STACK SYSTEM",
    title: "Auto Rickshaw Management System",
    summary: "A management platform for stand operations, vehicle availability, bookings, driver information and demand analytics.",
    details: [
      "Locate stands and check vehicle availability.",
      "Manage driver registration, booking requests and ride records.",
      "Support ratings, reviews and an administrative dashboard.",
      "Track demand trends through operational analytics.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
  },
  {
    number: "03",
    label: "AI HACKATHON CONCEPT",
    title: "SehatSathi: AI Voice Medical Assistant",
    summary: "A conceptual conversational assistant designed to make basic health information more accessible to rural and semi-urban communities.",
    details: [
      "Supports voice-based and text-based interaction.",
      "Uses local-language and accessibility-first experiences.",
      "Provides conversational AI guidance rather than a production medical diagnosis.",
      "Demonstrates how accessible technology can reduce information gaps.",
    ],
    stack: ["AI Voice", "Conversational AI", "Accessibility"],
  },
];

const achievements = [
  {
    year: "2026",
    label: "UNIVERSITY SELECTION",
    title: "Smart India Hackathon 2026",
    text: "Selected at university level for SIH 2026 Problem Statement ID SIH26155, NTRO.",
  },
  {
    year: "2026",
    label: "FINAL ROUND",
    title: "Web Designing Competition",
    text: "Selected for the final round, recognising strong visual design and frontend implementation.",
  },
  {
    year: "2026",
    label: "NCC ARM Y WING",
    title: "NCC Recognition",
    text: "Cadet Senior Under Officer with RDC and SNIC participation and Best in Army Wings Trophy 2026 recognition.",
  },
];

const leadership = [
  {
    icon: Shield,
    title: "Cadet Senior Under Officer",
    text: "NCC Army Wing leadership role, carrying responsibility for coordination, discipline and team direction.",
  },
  {
    icon: Users,
    title: "Camps & Team Management",
    text: "Completed RDC and SNIC, gaining experience in demanding team environments, camp operations and communication.",
  },
  {
    icon: Award,
    title: "Discipline & Responsibility",
    text: "Built consistency, accountability and resilience through structured military training and service.",
  },
];

const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cloud Computing",
  "AI + Cloud Integration",
  "Cybersecurity",
  "Network Security",
  "Software Development",
  "Competitive Programming",
];

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="topbar">
        <a className="logo" href="#home" aria-label="Adhik Shetty home">
          <span className="logo-mark">A</span>
          <span className="logo-name">ADHIK SHETTY</span>
        </a>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, id], index) => (
            <a className={index === 0 ? "active" : ""} href={`#${id}`} key={id} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="option-button" href="#contact" onClick={() => setOpen(false)}>OPTION</a>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>
    </>
  );
}

function SectionHeading({ kicker, title, accent }) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{kicker}</p>
      <h2>{title} {accent && <em>{accent}</em>}</h2>
    </header>
  );
}

function App() {
  const pageRef = useRef(null);
  const [openSkills, setOpenSkills] = useState(0);
  const [openProject, setOpenProject] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.09,
        delay: 0.25,
        ease: "power3.out",
      });
      gsap.from(".topbar", { y: -25, opacity: 0, duration: 0.7, delay: 0.15, ease: "power3.out" });
      gsap.from(".portrait-stage", { x: 45, opacity: 0, duration: 1, delay: 0.35, ease: "power3.out" });
      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.fromTo(element, { y: 35, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 86%" },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) nextErrors.message = "Please enter at least 10 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  return (
    <main id="home" className="portfolio-page" ref={pageRef}>
      <div className="scanlines" />
      <Navigation />

      <section className="hero-panel" aria-label="Introduction">
        <div className="hero-copy">
          <p className="eyebrow">HELLO, I'M</p>
          <h1>ADHIK SHETTY</h1>
          <p className="role-line">Technology Enthusiast | Innovator | Leader | Lifelong Learner</p>
          <p className="intro">Technology. Innovation. Leadership.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">PORTFOLIO OF WORK <ArrowUpRight size={14} /></a>
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
        <a className="hero-footer" href="#about">SCROLL TO EXPLORE <span className="footer-line" /> 2026</a>
      </section>

      <section id="about" className="content-section reveal">
        <SectionHeading
          kicker="01 / ABOUT"
          title="Not defined by one skill, but driven by"
          accent="ENDLESS POSSIBILITIES."
        />
        <div className="about-grid">
          <div className="personal-card">
            <p className="eyebrow">MY JOURNEY</p>
            <p>I'm Adhik Shetty, currently pursuing my MCA at St Aloysius (Deemed to be University), AIMIT Centre, Beeri, after completing my BCA with a CGPA of 8.33. I'm passionate about technology, innovation and exploring how Software, AI and Cloud Computing can turn ambitious ideas into meaningful solutions.</p>
            <p>Beyond technology, my NCC journey has shaped me into a disciplined leader with a strong sense of responsibility, teamwork and determination. From national-level experiences to hackathons and innovative projects, I thrive on challenges, embrace continuous learning and believe in pushing beyond boundaries.</p>
          </div>
          <div className="milestone-grid">
            <div><strong>8.33</strong><span>BCA CGPA</span></div>
            <div><strong>MCA</strong><span>Currently pursuing</span></div>
            <div><strong>SIH</strong><span>2026 university selection</span></div>
            <div><strong>NCC</strong><span>Senior Under Officer</span></div>
          </div>
        </div>
      </section>

      <section id="skills" className="content-section reveal">
        <SectionHeading kicker="02 / SKILLS" title="Tools I" accent="work with." />
        <div className="accordion-list">
          {skillGroups.map((group, index) => (
            <article className={`accordion-item ${openSkills === index ? "open" : ""}`} key={group.title}>
              <button type="button" onClick={() => setOpenSkills(openSkills === index ? -1 : index)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{group.title}</strong>
                <ChevronDown size={18} />
              </button>
              <div className="accordion-content">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="content-section reveal">
        <SectionHeading kicker="03 / PROJECTS" title="Projects as" accent="case studies." />
        <div className="accordion-list project-list">
          {projects.map((project, index) => (
            <article className={`project-case ${openProject === index ? "open" : ""}`} key={project.number}>
              <button type="button" onClick={() => setOpenProject(openProject === index ? -1 : index)}>
                <span className="project-number">{project.number}</span>
                <div><small>{project.label}</small><strong>{project.title}</strong></div>
                <ChevronDown size={18} />
              </button>
              <div className="project-detail">
                <p>{project.summary}</p>
                <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                <div className="project-tags">{project.stack.map((tag) => <b key={tag}>{tag}</b>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="achievements" className="content-section reveal">
        <SectionHeading kicker="04 / ACHIEVEMENTS" title="Recognition" accent="along the way." />
        <div className="card-grid achievement-grid">
          {achievements.map((item) => (
            <article className="info-card" key={item.title}>
              <div className="card-meta"><span>{item.year}</span><small>{item.label}</small></div>
              <Award size={26} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="leadership" className="content-section reveal">
        <SectionHeading kicker="05 / LEADERSHIP" title="Beyond" accent="academics." />
        <div className="leadership-layout">
          <div className="card-grid leadership-grid">
            {leadership.map(({ icon: Icon, title, text }) => (
              <article className="info-card" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <aside className="strength-card">
            <p className="eyebrow">PERSONAL STRENGTHS</p>
            {["Team coordination", "Problem-solving", "Communication", "Adaptability", "Responsibility", "Continuous learning"].map((item) => <span key={item}>{item}</span>)}
          </aside>
        </div>
      </section>

      <section id="education" className="content-section reveal">
        <SectionHeading kicker="06 / EDUCATION" title="Academic" accent="foundation." />
        <div className="timeline">
          <article>
            <span className="timeline-dot" />
            <small>CURRENT</small>
            <h3>Master of Computer Applications</h3>
            <p>St Aloysius (Deemed to be University), AIMIT Centre, Beeri — 1st semester</p>
          </article>
          <article>
            <span className="timeline-dot" />
            <small>2026</small>
            <h3>Bachelor of Computer Applications</h3>
            <p>St Aloysius (Deemed to be University), Mangaluru — CGPA 8.33</p>
          </article>
          <article>
            <span className="timeline-dot" />
            <small>2023</small>
            <h3>Pre-University Course (PUC)</h3>
            <p>Sri Rama PU College, Kalladka · Commerce (CS) · 93.17%</p>
          </article>
        </div>
      </section>

      <section id="exploring" className="content-section reveal">
        <SectionHeading kicker="07 / EXPLORING" title="Always Learning." accent="Always Evolving." />
        <div className="interest-grid">
          {interests.map((interest, index) => (
            <article key={interest}><span>{String(index + 1).padStart(2, "0")}</span><h3>{interest}</h3></article>
          ))}
        </div>
      </section>

      <section className="statement-section">
        <p>Curiosity Drives Innovation.</p>
        <p>Discipline Builds Excellence.</p>
      </section>

      <section id="contact" className="content-section contact-section reveal">
        <SectionHeading kicker="08 / CONTACT" title="Have an Idea?" accent="Let’s Connect." />
        <div className="contact-grid">
          <aside className="contact-details">
            <p>Send a project idea, collaboration opportunity or just say hello.</p>
            <div><Mail size={18} /><span>Email address<br /><b>Not provided yet</b></span></div>
            <a href="#contact" onClick={(event) => event.preventDefault()}><Linkedin size={18} /><span>LinkedIn<br /><b>Link not provided yet</b></span></a>
            <a href="#contact" onClick={(event) => event.preventDefault()}><Github size={18} /><span>GitHub<br /><b>Link not provided yet</b></span></a>
            <p className="location">KARNATAKA, INDIA</p>
          </aside>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {submitted ? (
              <div className="form-success">Thank you. Your message has been validated and is ready to send once email delivery is configured.</div>
            ) : (
              <>
                <label>Name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
                {errors.name && <span className="form-error">{errors.name}</span>}
                <label>Email<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
                {errors.email && <span className="form-error">{errors.email}</span>}
                <label>Message<textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your idea" rows="5" /></label>
                {errors.message && <span className="form-error">{errors.message}</span>}
                <button className="primary-button" type="submit">SEND MESSAGE <ArrowUpRight size={14} /></button>
              </>
            )}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <span>Always curious. Always building. Always evolving.</span>
        <a href="#home" aria-label="Back to top"><ArrowDown size={16} /></a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
