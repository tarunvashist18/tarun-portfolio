
import { useState } from "react";
import "./App.css";

const EMAIL = "tarunvashist1806@gmail.com";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/tarun-vashisth-240b42319";

// Replace this with your actual GitHub profile URL.
const GITHUB_URL = "https://github.com/";

const RESUME_URL = "/Tarun_Kumar_Vashisth_Resume.pdf";

const projects = [
  {
    number: "01",
    name: "CloudStudent",
    category: "FULL-STACK · DEVOPS",
    description:
      "A student management platform built with Django and PostgreSQL, containerized with Docker and tested through an automated CI pipeline.",
    stack: ["Django", "PostgreSQL", "Docker", "GitHub Actions"],
    status: "CI TESTS PASSED",
    icon: "▣",
    link: GITHUB_URL,
  },
  {
    number: "02",
    name: "CI/CD Failure Prediction",
    category: "DEVOPS · MACHINE LEARNING",
    description:
      "A project exploring how pipeline data can help identify failure patterns and improve software delivery reliability.",
    stack: ["Python", "CI/CD", "Data Analysis", "ML"],
    status: "IN DEVELOPMENT",
    icon: "⌁",
    link: GITHUB_URL,
  },
  {
    number: "03",
    name: "University Dashboard",
    category: "BACKEND · API DEVELOPMENT",
    description:
      "Team project involving result management APIs, input validation, role-based authorization, and tenant isolation.",
    stack: ["JavaScript", "REST APIs", "SQL", "Backend"],
    status: "TEAM PROJECT",
    icon: "⌘",
    link: GITHUB_URL,
  },
  {
    number: "04",
    name: "Student Portal",
    category: "WEB DEVELOPMENT",
    description:
      "A student portal interface for presenting academic information through a modern web experience.",
    stack: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    status: "WEB PROJECT",
    icon: "◈",
    link: GITHUB_URL,
  },
];

const skillGroups = [
  {
    title: "CLOUD & DEVOPS",
    skills: [
      "Microsoft Azure",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub Actions",
      "Linux",
    ],
  },
  {
    title: "DEVELOPMENT",
    skills: ["Python", "JavaScript", "React", "Django", "REST APIs"],
  },
  {
    title: "DATABASES & TOOLS",
    skills: ["PostgreSQL", "MySQL", "Vite", "Docker Compose"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <><div className="portfolio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">T.</span>
          <span>
            tarun<span className="brand-muted">.dev</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's Connect <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              CLOUD ENGINEERING & DEVOPS
            </div>

            <p className="eyebrow">HELLO, WORLD! I'M</p>

            <h1>
              Tarun Kumar
              <br />
              <span className="gradient-text">Vashisth.</span>
            </h1>

            <h2>
              Aspiring Cloud <span className="purple">&</span> DevOps Engineer
            </h2>

            <p className="hero-description">
              I'm a Computer Science student passionate about cloud
              technologies, automation, and software development. I build
              practical projects while learning how to make software delivery
              more reliable.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>

              <a className="button button-secondary" href="#contact">
                Get In Touch
              </a>

              <a
                className="button button-secondary"
                href={RESUME_URL}
                download="Tarun_Kumar_Vashisth_Resume.pdf"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="hero-socials">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <span className="social-divider">/</span>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <span className="social-divider">/</span>
              <a href={`mailto:${EMAIL}`}>Email ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />

            <div className="terminal-card">
              <div className="terminal-top">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="terminal-title">tarun@dev: ~</span>
                <span className="terminal-menu">•••</span>
              </div>

              <div className="terminal-body">
                <p className="terminal-comment"># A little about me</p>
                <p><span className="terminal-purple">$</span> whoami</p>
                <p className="terminal-output">tarun-kumar-vashisth</p>

                <p><span className="terminal-purple">$</span> cat focus.txt</p>
                <p className="terminal-output">Cloud Engineering</p>
                <p className="terminal-output">DevOps & Automation</p>
                <p className="terminal-output">Continuous Learning</p>

                <p><span className="terminal-purple">$</span> git status</p>
                <p className="terminal-success">
                  ● Building something useful
                </p>
                <p className="terminal-prompt">
                  <span className="terminal-purple">$</span>
                  <span className="cursor" />
                </p>
              </div>
            </div>

            <div className="floating-chip chip-docker">
              <span className="chip-icon">▣</span> Docker
            </div>
            <div className="floating-chip chip-cloud">
              <span className="chip-icon">☁</span> Cloud
            </div>
            <div className="floating-chip chip-ci">
              <span className="chip-icon">⌘</span> CI/CD
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>
              A little about <span className="gradient-text">me.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm a B.Tech Computer Science Engineering student at SRM
                University, specializing in Cloud Engineering, DevOps, and
                Automation.
              </p>
              <p>
                My interests include application development, containerization,
                CI/CD pipelines, cloud infrastructure, and backend engineering.
                I enjoy learning by building and testing practical projects.
              </p>
              <p>
                I'm looking to grow as an engineer, contribute to collaborative
                teams, and develop reliable solutions to real-world problems.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-card">
                <span className="detail-icon">⌂</span>
                <div>
                  <span className="detail-label">EDUCATION</span>
                  <strong>B.Tech — Computer Science</strong>
                  <p>SRM University, Sonepat</p>
                </div>
              </div>

              <div className="detail-card">
                <span className="detail-icon">◇</span>
                <div>
                  <span className="detail-label">SPECIALIZATION</span>
                  <strong>Cloud Engineering & DevOps</strong>
                  <p>Automation and software delivery</p>
                </div>
              </div>

              <div className="detail-card">
                <span className="detail-icon">↗</span>
                <div>
                  <span className="detail-label">CURRENT FOCUS</span>
                  <strong>Learning Through Projects</strong>
                  <p>Cloud, containers, testing, and CI/CD</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-heading">
            <span className="section-index">02 / TOOLKIT</span>
            <h2>
              Technologies I <span className="gradient-text">work with.</span>
            </h2>
            <p className="section-description">
              Technologies and tools I've worked with through coursework,
              internships, and projects.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <div className="skill-card-top">
                  <span className="skill-symbol">✳</span>
                  <span className="skill-count">
                    {String(group.skills.length).padStart(2, "0")} TOOLS
                  </span>
                </div>

                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="section-heading">
            <span className="section-index">03 / SELECTED WORK</span>
            <h2>
              Projects I've <span className="gradient-text">worked on.</span>
            </h2>
            <p className="section-description">
              Practical projects focused on development, automation, and
              reliable software delivery.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">
                    {project.number} / 04
                  </span>
                  <span className="project-icon">{project.icon}</span>
                </div>

                <span className="project-category">{project.category}</span>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span className="project-status">{project.status}</span>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Source code ↗
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="project-note">
            Project source links need to be updated to their actual repositories
            before publishing.
          </p>
        </section>

        <section
          className="experience section-wrap section-block"
          id="experience"
        >
          <div className="section-heading">
            <span className="section-index">04 / EXPERIENCE</span>
            <h2>
              Learning through <span className="gradient-text">experience.</span>
            </h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span>INTERNSHIP</span>
                  <span>2025 · 8 WEEKS</span>
                </div>
                <h3>Xebia IT Architects</h3>
                <p>
                  Gained professional exposure while developing collaboration,
                  documentation, communication, and problem-solving skills.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span>INTERNSHIP</span>
                  <span>MAY – JUNE 2026</span>
                </div>
                <h3>Cognifyz IT Solutions Pvt. Ltd.</h3>
                <p>
                  Developed and tested Python application modules, performed
                  debugging, resolved issues, and documented development work.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span>INTERNSHIP</span>
                  <span>MAR – MAY 2025</span>
                </div>
                <h3>Plasmid Innovation Ltd.</h3>
                <p>
                  Worked with cloud services, infrastructure, storage,
                  networking, security configurations, and deployment
                  documentation.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span>CERTIFICATION</span>
                  <span>2024</span>
                </div>
                <h3>Microsoft Azure Fundamentals</h3>
                <p>
                  Foundational learning in cloud concepts and Azure monitoring
                  tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="contact-panel">
            <span className="section-index">05 / GET IN TOUCH</span>
            <p className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p>

            <h2>
              Let's build something <span className="gradient-text">reliable.</span>
            </h2>

            <p className="contact-description">
              I'm interested in opportunities to learn, contribute, and grow
              in cloud engineering, DevOps, and software development.
            </p>

             <a
              className="button button-primary"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Email Me <span>↗</span>
            </a>

            

          <div className="contact-links">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={`mailto:${EMAIL}`}>Email ↗</a>
            <a href={RESUME_URL} download="Tarun_Kumar_Vashisth_Resume.pdf">
              Resume ↓
            </a>
          </div>
        </div>
      
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">T.</span>
          <span>
            tarun<span className="brand-muted">.dev</span>
          </span>
        </a>

        <p>Designed & built with React.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
    </>
  );
}

export default App;
