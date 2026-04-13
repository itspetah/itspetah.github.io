"use client";

import { useState } from "react";


const ME = {
  name:       "Peter Wang",
  photo:      "",
  photoAlt:   "Peter Wang",
  tagline:    "Data Analyst at NYC Taxi & Limousine Commission",
  funFact:    "yes i do actually read the docs",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/itspeter/" },
    { label: "GitHub",   href: "https://github.com/itspetah" },
    { label: "Email",    href: "mailto:itspeterwang3@gmail.com" },
  ],
};


const PERSONAL_NOTE = {
  show: true,
  label: "WHAT I'M WORKING ON",
  text: `Brushing up on full-stack and building projects using both data and full-stack
Staying consistent in Leetcoding
Learning: How to use Raspberry Pi to set up my own Minecraft server 
Reading: Grokking Algorithms`,
};

const ACHIEVEMENTS = {
  show: false,
  items: 
  [
  {
    headline: "CUNY RF Research",
    detail: "Selected as one of 10 undergrads for CUNY Research Fellowship 2022 - 2023",
    link: { label: null, href: null },
  },
  {
    headline: "Hackathon Winner",
    detail: "Hack CUNY Winner",
    link: { label: "devpost", href: "#" },
  },
]}; 

const WORK = [
  {
    role:       "Data Analyst Fellow @ ",
    company:    "NYC Taxi & Limousine Commission",
    companyUrl: "https://www.nyc.gov/site/tlc/index.page",
    badge:      null,
    period:     "July 2025 – Present",
    bullets: [
    ],
  },
  {
    role:       "Software Engineer Intern @ ",
    company:    "Con Edison",
    companyUrl: "https://www.coned.com/en",
    badge:      null,
    period:     "2023 - 2025", 
    bullets: [],
  },
  {
    role:       "B.S. Computer Science @ ",
    company:    "CUNY College of Staten Island",
    companyUrl: "https://www.csi.cuny.edu/",
    badge:      null,
    period:     "2021 – 2025",
    bullets:    ["Relevant coursework: Data Structures & Algorithms, Computer Networking & Security, Databases, OS, Computer Architecture, Circuit Design, Intro to Machine Learning"],
  },
];

const PROJECTS = [
  {
    name:    "Live Taxi View",
    period:  "Present",
    detail:  "A full-stack app that displays taxi trips using TLC's open source data using trip data.",
    stack:   ["React", "FastAPI", "PostgreSQL", "Mapbox"],
    links:   [{ label: "live", href: "#" }, { label: "code", href: "#" }],
  },
  {
    name:    "Property Data Explorer",
    period:  "2024",
    detail:  "Built a web scraping script to collect property data from various sources and present them using a React frontend with Google's Maps API.",         // 👉
    stack:   ["Python", "Selenium", "Airflow (orchestration)", "React", "Google Maps API"],
    links:   [{ label: "code", href: "#" }],
  },
];

const SKILLS = [
  "Python", "TypeScript", "JavaScript", "SQL", "Java",
  "React", "Next.js", "Node.js", "FastAPI",
  "PostgreSQL", "MongoDB", "MySQL",
  "pandas", "scikit-learn", "NumPy",
  "Git", "Docker", "AWS", "Tailwind CSS",
];

// ─────────────────────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────────────────────

export default function Home() {
  const [dark, setDark] = useState(true);

  const bg  = dark ? "#0f0f0f" : "#f5f5f0";
  const fg  = dark ? "#e8e8e8" : "#111111";
  const dim = dark ? "#666"    : "#888";
  const card= dark ? "#1a1a1a" : "#e5e5e0";
  const bdr = dark ? "#2a2a2a" : "#d0d0cb";
  const acc = dark ? "#a8ff78" : "#1a7a1a";

  return (
    <>
      {/* Theme toggle */}
      <button
        className="toggle-btn"
        onClick={() => setDark(!dark)}
        style={{ color: fg, borderColor: bdr }}
      >
        {dark ? "☀ light" : "◐ dark"}
      </button>

      <div style={{ background: bg, color: fg, minHeight: "100vh", transition: "background .25s, color .2s" }}>
        <div className="outer">
          <div className="layout">

            {/* ── LEFT ── */}
            <div className="left">
              <div className="photo-wrap" style={{ background: card, border: `1px solid ${bdr}`, color: dim, textAlign: "center", padding: "16px" }}>
                {ME.photo
                  ? <img src={ME.photo} alt={ME.photoAlt} />
                  : "currently self-conscious about photos, will add one later :)"
                }
              </div>
              <h1 className="name">{ME.name}</h1>
              <div className="left-links">
                {ME.links.map((l) => (
                  <a key={l.label} href={l.href} style={{ color: acc }} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
              <p className="tagline" style={{ color: dim }}>{ME.tagline}</p>
              <p className="quip" style={{ color: dim }}>{ME.funFact}</p>
            </div>

            {/* ── RIGHT ── */}
            <div className="right">

              {/* Personal note */}
              {PERSONAL_NOTE.show && (
                <div>
                  <p className="sec-label" style={{ color: dim, borderColor: bdr }}>{PERSONAL_NOTE.label}</p>
                  <p className="note-text">{PERSONAL_NOTE.text}</p>
                </div>
              )}
            {/* Achievements */}
            {ACHIEVEMENTS.show && (
              <div>
                <p className="sec-label" style={{ color: dim, borderColor: bdr }}>ACHIEVEMENTS</p>
                <div className="ach-list">
                  {ACHIEVEMENTS.items.map((a, i) => (
                    <div className="ach-row" key={i}>
                      <span className="ach-bullet" style={{ color: dim }}>◆</span>
                      <div>
                        <span className="ach-head">{a.headline} </span>
                        <span style={{ color: dim }}>{a.detail} </span>
                        {a.link.label && (
                          <a className="ach-link" href={a.link.href!} style={{ color: acc }} target="_blank" rel="noreferrer">
                            — {a.link.label}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

              {/* Work */}
              <div>
                <p className="sec-label" style={{ color: dim, borderColor: bdr }}>WORK</p>
                <div className="work-list">
                  {WORK.map((w, i) => (
                    <div key={i}>
                      <div className="work-header">
                        <div>
                          <span className="work-role">{w.role} </span>
                          {w.companyUrl
                            ? <a className="work-company" href={w.companyUrl} style={{ color: acc }} target="_blank" rel="noreferrer">{w.company}</a>
                            : <span className="work-company" style={{ color: dim }}>{w.company}</span>
                          }
                          {w.badge && <span style={{ fontSize: 11, color: dim, marginLeft: 6 }}>({w.badge})</span>}
                        </div>
                        <span className="work-period" style={{ color: dim }}>{w.period}</span>
                      </div>
                      {w.bullets.length > 0 && (
                        <ul className="work-bullets" style={{ color: dim }}>
                          {w.bullets.map((b, j) => <li key={j}>{b}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <p className="sec-label" style={{ color: dim, borderColor: bdr }}>PROJECTS</p>
                <div className="proj-list">
                  {PROJECTS.map((p, i) => (
                    <div key={i}>
                      <div className="proj-header">
                        <span className="proj-name">{p.name}</span>
                        <span className="proj-period" style={{ color: dim }}>{p.period}</span>
                      </div>
                      <p className="proj-detail" style={{ color: dim }}>{p.detail}</p>
                      <div className="proj-stack">
                        {p.stack.map((t) => (
                          <span className="proj-tag" key={t} style={{ color: dim, borderColor: bdr }}>{t}</span>
                        ))}
                      </div>
                      <div className="proj-links">
                        {p.links.map((l) => (
                          <a key={l.label} href={l.href} style={{ color: acc }} target="_blank" rel="noreferrer">
                            {l.label} ↗
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <p className="sec-label" style={{ color: dim, borderColor: bdr }}>SKILLS</p>
                <div className="skills-wrap">
                  {SKILLS.map((s) => (
                    <span className="skill-item" key={s} style={{ color: dim }}>{s}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="footer" style={{ borderColor: bdr, color: dim }}>
            © {new Date().getFullYear()} {ME.name}
          </div>
        </div>
      </div>
    </>
  );
}