"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

/* ---------------------------------------------------------- */
/* Icons                                                       */
/* ---------------------------------------------------------- */
const Icon = ({ children, size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const GithubIcon = (p) => (
  <Icon {...p}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Icon>
);
const LinkedinIcon = (p) => (
  <Icon {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);
const MailIcon = (p) => (
  <Icon {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </Icon>
);
const PhoneIcon = (p) => (
  <Icon {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </Icon>
);
const PinIcon = (p) => (
  <Icon {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);
const SunIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </Icon>
);
const MoonIcon = (p) => (
  <Icon {...p}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </Icon>
);
const AwardIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </Icon>
);

/* ---------------------------------------------------------- */
/* Data — synced with resume                                   */
/* ---------------------------------------------------------- */
const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "SQL"] },
  {
    label: "AI / ML",
    items: ["LLMs", "RAG", "Prompt Engineering", "Vector Search", "Model Evaluation", "PyTorch", "Hugging Face"],
  },
  {
    label: "Frameworks",
    items: ["LangChain", "LangGraph", "FastAPI", "Next.js"],
  },
  {
    label: "Databases & Tools",
    items: ["PostgreSQL", "MongoDB", "Docker", "Git", "GitHub", "OpenAI", "Gemini"],
  },
];

const experience = [
  {
    role: "Data Analyst Intern",
    company: "Airkrit India",
    date: "May — Aug 2026",
    points: [
      "Built data preprocessing pipelines (Python, Pandas, NumPy) on 10K+ records, applying cleaning, feature engineering and anomaly detection techniques.",
      "Applied statistical analysis and pattern detection to identify sales and customer behavior trends, feeding into 15+ visualizations for stakeholder decision-making.",
      "Automated report generation using LLM-based summarization, reducing manual reporting time by 30%.",
    ],
    tech: ["Python", "Pandas", "NumPy", "LLM Summarization"],
  },
];

const projects = [
  {
    tag: "GenAI Platform",
    date: "Aug 2026 — Present",
    title: "LLM Evaluation Platform",
    subtitle: "Full-stack eval suite for LLM & RAG quality",
    points: [
      "Built a full-stack eval platform supporting rule-based, embedding-similarity and LLM-as-a-judge scoring (faithfulness, relevance, hallucination detection) across 150+ test cases.",
      "Implemented regression tracking across prompt/model versions, enabling before/after comparison of eval scores to catch quality drops from prompt or retrieval changes.",
      "Applied the platform to evaluate a self-built RAG system, using Ragas metrics for context precision, context recall and faithfulness to validate retrieval quality improvements.",
    ],
    tech: ["FastAPI", "Next.js", "PostgreSQL", "Groq API", "Ragas"],
  },
  {
    tag: "GenAI / RAG",
    date: "Jun — Aug 2026",
    title: "Ambiguity-Aware RAG Text-to-SQL System",
    subtitle: "DataPilot — natural language to SQL over 100+ columns",
    link: "datapilot-dp.vercel.app",
    href: "https://datapilot-dp.vercel.app",
    points: [
      "Built a RAG-based Text-to-SQL system using LLMs, embeddings and vector search over PostgreSQL, achieving 87% SQL execution accuracy on 100+ test queries.",
      "Designed an ambiguity detection layer classifying queries as clear/ambiguous/invalid with 91% classification accuracy, reducing incorrect SQL execution by 35%.",
      "Built multi-turn clarification workflows for ambiguous queries with schema-aware retrieval across 20+ tables and 100+ columns, plus SELECT-only guardrails preventing destructive query execution.",
    ],
    tech: ["Python", "FastAPI", "RAG", "LangChain"],
  },
  {
    tag: "Web Platform",
    date: "Mar — May 2026",
    title: "Job Application Tracker & Rejection Analytics",
    subtitle: "Road to Offer — end-to-end application tracking",
    link: "leaderlab.in",
    href: "https://leaderlab.in",
    points: [
      "Built a platform to track job applications end-to-end, logging status, rejection stage and rejection reason (resume screening, technical round, skill gap, etc.) across 40+ tracked applications.",
      "Designed a rejection-pattern analytics dashboard classifying rejection causes, helping users identify whether failures are resume-driven or skill-gap-driven.",
      "Built visual analytics (charts/graphs) showing rejection rate by stage and reason category, giving users a clear, data-backed view of where to focus improvement efforts.",
    ],
    tech: ["Next.js", "JavaScript", "PostgreSQL"],
  },
];

const education = [
  {
    degree: "B.Tech, Computer Science",
    school: "KIET Deemed to be University",
    year: "Oct 2023 — Jun 2027",
    score: "7.48 GPA",
  },
  {
    degree: "Class XII (ISC)",
    school: "Rani Laxmi Bai Memorial School",
    year: "2021 — 2022",
    score: "84%",
  },
  {
    degree: "Class X (ICSE)",
    school: "Rani Laxmi Bai Memorial School",
    year: "2019 — 2020",
    score: "86%",
  },
];

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    date: "30 Sep 2025",
  },
];

// Real numbers pulled from the DataPilot project — used as the hero's
// calibration strip instead of a generic stat-card.
const calibration = [
  { value: 87, label: "SQL execution accuracy", side: "left", rise: 30 },
  { value: 91, label: "Ambiguity classification accuracy", side: "right", rise: 54 },
];


/* ---------------------------------------------------------- */
/* GitHub activity                                              */
/* ---------------------------------------------------------- */
const GithubActivity = ({ theme }) => (
  <section className="rp-panel rp-activity">
    <div className="rp-section-head">
      <span className="rp-tick" />
      <div>
        <h2>Recent activity</h2>
        <p className="rp-caption">Live from github.com/riteshpatel1884</p>
      </div>
    </div>
    <div className="rp-calendar-wrap">
      <GitHubCalendar
        username="riteshpatel1884"
        colorScheme={theme}
        theme={{
          light: ["#E7E4D8", "#BFDCC7", "#8AC3A2", "#4E9C79", "#2F6E5C"],
          dark: ["#20241D", "#2B4A3B", "#3D7B60", "#63A98A", "#93D8B4"],
        }}
        fontSize={12}
        blockSize={11}
        blockMargin={3}
        style={{ color: "var(--muted)" }}
      />
    </div>
  </section>
);

/* ---------------------------------------------------------- */
/* Main                                                         */
/* ---------------------------------------------------------- */
export default function Portfolio() {
  const [theme, setTheme] = useState("light");
  const tagPalette = ["accent", "warm", "muted"];

  return (
    <div className="rp-resume" data-theme={theme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;1,500;1,600&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .rp-resume {
          --paper: #EEF0E9;
          --panel: #F8F9F4;
          --ink: #191C17;
          --muted: #666C60;
          --rule: rgba(25,28,23,0.13);
          --accent: #2F6E5C;
          --accent-soft: rgba(47,110,92,0.12);
          --warm: #B9752E;
          --warm-soft: rgba(185,117,46,0.14);
          --shadow: rgba(25,28,23,0.06);
          font-family: 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
          background: var(--paper);
          color: var(--ink);
          min-height: 100vh;
          transition: background 0.35s ease, color 0.35s ease;
        }
        .rp-resume[data-theme='dark'] {
          --paper: #14160F;
          --panel: #1B1E16;
          --ink: #ECE9DE;
          --muted: #9BA192;
          --rule: rgba(236,233,222,0.13);
          --accent: #74C09E;
          --accent-soft: rgba(116,192,158,0.14);
          --warm: #E0A15E;
          --warm-soft: rgba(224,161,94,0.15);
          --shadow: rgba(0,0,0,0.35);
        }
        .rp-serif { font-family: 'Fraunces', Georgia, serif; }
        .rp-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

        .rp-resume * { box-sizing: border-box; }
        .rp-resume a { color: inherit; }
        .rp-resume :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

        .rp-panel {
          background: var(--panel);
          border: 1px solid var(--rule);
          border-radius: 10px;
        }

        .rp-tick {
          width: 9px; height: 9px;
          background: var(--accent);
          border-radius: 2px;
          display: inline-block;
          flex-shrink: 0;
          margin-top: 6px;
        }
        .rp-section-head { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 26px; }
        .rp-section-head h2 {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 600;
          font-size: 21px;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .rp-caption { font-size: 12.5px; color: var(--muted); margin: 3px 0 0; }

        /* Theme toggle */
        .rp-switch {
          width: 58px; height: 30px;
          border: 1px solid var(--rule);
          border-radius: 999px;
          background: var(--panel);
          position: relative;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
          transition: background 0.3s ease;
        }
        .rp-switch-knob {
          position: absolute;
          top: 2px; left: 2px;
          width: 24px; height: 24px;
          border-radius: 999px;
          background: var(--accent);
          color: var(--panel);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.32s cubic-bezier(.65,0,.35,1);
        }
        .rp-resume[data-theme='dark'] .rp-switch-knob { transform: translateX(28px); }

        .rp-page { max-width: 1360px; width: 100%; }

        /* Hero as a grid so mobile can reorder the toggle without duplicating markup */
        .rp-hero-grid {
          display: grid;
          row-gap: 18px;
          grid-template-columns: 1fr;
          grid-template-areas:
            "name"
            "toggle"
            "role"
            "tagline"
            "contact"
            "cal"
            "social";
        }
        @media (min-width: 768px) {
          .rp-hero-grid {
            column-gap: 40px;
            row-gap: 4px;
            grid-template-columns: 1fr auto;
            grid-template-areas:
              "name    toggle"
              "role    social"
              "tagline social"
              "contact social"
              "cal     social";
            align-items: start;
          }
        }

        /* Main/sidebar split — fills wide viewports without stretching prose */
        .rp-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 56px;
        }
        @media (min-width: 960px) {
          .rp-layout { grid-template-columns: minmax(0, 1fr) 300px; gap: 72px; align-items: start; }
          .rp-aside { position: sticky; top: 28px; }
        }

        /* ---- Hero ---- */
        .rp-hero-name {
          font-size: clamp(36px, 6vw, 54px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.02;
          margin: 0;
        }
        .rp-hero-role {
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-weight: 500;
          font-size: 17px;
          color: var(--accent);
          margin: 10px 0 0;
        }
        .rp-hero-tagline {
          font-size: 14.5px;
          color: var(--muted);
          max-width: 46ch;
          line-height: 1.55;
          margin: 12px 0 0;
        }
        .rp-contact-row {
          display: flex; flex-wrap: wrap; gap: 16px 22px;
          margin-top: 22px;
          font-size: 13px;
          color: var(--muted);
        }
        .rp-contact-row a, .rp-contact-row span { display: flex; align-items: center; gap: 7px; }
        .rp-contact-row a:hover { color: var(--ink); }

        /* Calibration strip */
        .rp-cal { margin-top: 34px; max-width: 460px; }
        .rp-cal-track { position: relative; height: 78px; }
        .rp-cal-baseline {
          position: absolute; left: 0; right: 0; bottom: 8px;
          height: 1px; background: var(--rule);
        }
        .rp-cal-tick {
          position: absolute; bottom: 5px; width: 1px; height: 6px;
          background: var(--rule); transform: translateX(-0.5px);
        }
        .rp-cal-marker { position: absolute; bottom: 8px; }
        .rp-cal-stem {
          position: absolute; bottom: 0; left: 0;
          width: 1px; height: var(--rise);
          background: var(--accent); opacity: 0.55;
        }
        .rp-cal-dot {
          position: absolute; bottom: -3px; left: -3px;
          width: 7px; height: 7px; border-radius: 999px;
          background: var(--accent);
        }
        .rp-cal-readout {
          position: absolute;
          bottom: calc(var(--rise) + 6px);
          font-size: 11.5px; color: var(--muted);
          white-space: nowrap;
        }
        .rp-cal-readout b { color: var(--ink); font-size: 13px; margin-right: 4px; }
        .rp-cal-marker--left .rp-cal-readout { right: 6px; text-align: right; }
        .rp-cal-marker--right .rp-cal-readout { left: 6px; text-align: left; }

        /* Activity */
        .rp-activity { padding: 28px 26px; margin: 0; }
        .rp-calendar-wrap { display: flex; justify-content: center; overflow-x: auto; padding: 2px 2px 4px; }
        .rp-calendar-wrap text { fill: var(--muted) !important; font-family: 'IBM Plex Mono', monospace !important; }

        /* Timeline (experience + projects) */
        .rp-timeline { position: relative; }
        .rp-timeline-rail {
          position: absolute; left: 6px; top: 6px; bottom: 6px;
          width: 1px; background: var(--rule);
        }
        .rp-timeline-item {
          position: relative;
          padding-left: 34px;
          padding-bottom: 34px;
        }
        .rp-timeline-item:last-child { padding-bottom: 0; }
        .rp-node-dot {
          position: absolute; left: 0; top: 5px;
          width: 13px; height: 13px; border-radius: 999px;
          background: var(--panel);
          border: 2px solid var(--dot-color, var(--accent));
        }
        .rp-node-date {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; color: var(--muted);
          display: block; margin-bottom: 6px;
        }
        .rp-item-body { max-width: 640px; }
        .rp-item-title {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 600; font-size: 19px;
          margin: 0;
        }
        .rp-item-sub { font-size: 13px; color: var(--muted); margin: 3px 0 12px; }
        .rp-item-points { display: flex; flex-direction: column; gap: 7px; margin: 0 0 14px; padding: 0; list-style: none; }
        .rp-item-points li { display: flex; gap: 10px; font-size: 13.5px; line-height: 1.6; }
        .rp-item-points li::before {
          content: ""; width: 5px; height: 5px; border-radius: 999px;
          background: var(--muted); opacity: 0.6;
          margin-top: 8px; flex-shrink: 0;
        }
        .rp-tag-row { display: flex; flex-wrap: wrap; gap: 7px; }
        .rp-tag {
          font-size: 12px; padding: 4px 10px; border-radius: 999px;
          background: var(--tag-bg); color: var(--tag-color);
          font-weight: 500;
        }
        .rp-project-link {
          font-size: 12.5px; color: var(--accent);
          text-decoration: underline; text-underline-offset: 3px;
          margin-left: 10px;
        }

        /* Skills */
        .rp-skill-group { margin-bottom: 20px; }
        .rp-skill-group:last-child { margin-bottom: 0; }
        .rp-skill-label {
          font-size: 12px; font-weight: 600; color: var(--muted);
          margin-bottom: 9px; display: block;
        }
        .rp-skill-tags { display: flex; flex-wrap: wrap; gap: 7px; }
        .rp-skill-tag {
          font-size: 12.5px; padding: 5px 12px; border-radius: 7px;
          background: var(--panel); border: 1px solid var(--rule);
        }

        /* Education */
        .rp-edu-row {
          display: flex; justify-content: space-between; gap: 16px;
          padding: 15px 0; border-bottom: 1px solid var(--rule);
        }
        .rp-edu-row:last-child { border-bottom: none; }
        .rp-edu-degree { font-family: 'Fraunces', Georgia, serif; font-weight: 600; font-size: 15.5px; margin: 0; }
        .rp-edu-school { font-size: 12.5px; color: var(--muted); margin: 3px 0 0; }
        .rp-edu-score { font-family: 'IBM Plex Mono', monospace; font-size: 13px; text-align: right; }
        .rp-edu-year { font-size: 11px; color: var(--muted); display: block; margin-bottom: 3px; }

        @media (prefers-reduced-motion: reduce) {
          .rp-resume * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="rp-page mx-auto px-6 md:px-14 lg:px-20 py-12 md:py-16">
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rp-hero-grid mb-16"
        >
          <h1 className="rp-serif rp-hero-name" style={{ gridArea: "name" }}>Ritesh Patel</h1>

          <div style={{ gridArea: "toggle" }} className="flex md:justify-end">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rp-switch"
              aria-label="Toggle theme"
            >
              <span className="rp-switch-knob">
                {theme === "light" ? <SunIcon size={12} /> : <MoonIcon size={12} />}
              </span>
            </button>
          </div>

          <p className="rp-hero-role" style={{ gridArea: "role" }}>AI Engineer </p>

          <p className="rp-hero-tagline" style={{ gridArea: "tagline" }}>
            I build intelligent systems with LLMs, RAG, and agents and engineer them for real world use.
          </p>

          <div className="rp-contact-row" style={{ gridArea: "contact" }}>
            <span><PinIcon size={13} /> Ghaziabad, India</span>
            <a href="mailto:riteshpatel1884@gmail.com"><MailIcon size={13} /> riteshpatel1884@gmail.com</a>
            <span><PhoneIcon size={13} /> +91 8858295418</span>
          </div>

      

          <div style={{ gridArea: "social" }} className="flex gap-4 md:justify-end md:items-start">
            <a href="https://github.com/riteshpatel1884" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={18} className="hover:opacity-60" />
            </a>
            <a href="https://linkedin.com/in/riteshpatel1884" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} className="hover:opacity-60" />
            </a>
          </div>
        </motion.header>

        {/* GitHub activity — full width beneath the hero */}
        <section className="mb-14">
          <GithubActivity theme={theme} />
        </section>

        <div className="rp-layout">
          {/* Main column: the chronological record */}
          <main>
            <section className="mb-14">
              <div className="rp-section-head">
                <span className="rp-tick" style={{ background: "var(--warm)" }} />
                <div><h2>Experience</h2></div>
              </div>
              <div className="rp-timeline">
                <div className="rp-timeline-rail" />
                {experience.map((e) => (
                  <div key={e.company} className="rp-timeline-item">
                    <span className="rp-node-dot" style={{ "--dot-color": "var(--warm)" }} />
                    <span className="rp-node-date">{e.date}</span>
                    <div className="rp-item-body">
                      <h3 className="rp-serif rp-item-title">{e.role}</h3>
                      <p className="rp-item-sub">{e.company}</p>
                      <ul className="rp-item-points">
                        {e.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
                      </ul>
                      <div className="rp-tag-row">
                        {e.tech.map((t) => (
                          <span key={t} className="rp-tag" style={{ "--tag-bg": "var(--warm-soft)", "--tag-color": "var(--warm)" }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="rp-section-head">
                <span className="rp-tick" />
                <div><h2>Selected work</h2></div>
              </div>
              <div className="rp-timeline">
                <div className="rp-timeline-rail" />
                {projects.map((p, i) => {
                  const palette = tagPalette[i % tagPalette.length];
                  const tagBg = palette === "warm" ? "var(--warm-soft)" : "var(--accent-soft)";
                  const tagColor = palette === "warm" ? "var(--warm)" : "var(--accent)";
                  const dotColor = palette === "warm" ? "var(--warm)" : "var(--accent)";
                  return (
                    <div key={p.title} className="rp-timeline-item">
                      <span className="rp-node-dot" style={{ "--dot-color": dotColor }} />
                      <span className="rp-node-date">{p.date} · {p.tag}</span>
                      <div className="rp-item-body">
                        <div className="flex items-baseline flex-wrap">
                          <h3 className="rp-serif rp-item-title">{p.title}</h3>
                          {p.link && (
                            <a href={p.href} target="_blank" rel="noopener noreferrer" className="rp-project-link">
                              {p.link}
                            </a>
                          )}
                        </div>
                        <p className="rp-item-sub">{p.subtitle}</p>
                        <ul className="rp-item-points">
                          {p.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
                        </ul>
                        <div className="rp-tag-row">
                          {p.tech.map((t) => (
                            <span key={t} className="rp-tag" style={{ "--tag-bg": tagBg, "--tag-color": tagColor }}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </main>

          {/* Sidebar: glanceable facts, alongside the timeline on wide screens */}
          <aside className="rp-aside">
            <section className="mb-12">
              <div className="rp-section-head">
                <span className="rp-tick" style={{ background: "var(--warm)" }} />
                <div><h2>Skills</h2></div>
              </div>
              {skillGroups.map((g) => (
                <div key={g.label} className="rp-skill-group">
                  <span className="rp-skill-label">{g.label}</span>
                  <div className="rp-skill-tags">
                    {g.items.map((s) => <span key={s} className="rp-skill-tag">{s}</span>)}
                  </div>
                </div>
              ))}
            </section>

            <section className="mb-12">
              <div className="rp-section-head">
                <span className="rp-tick" />
                <div><h2>Education</h2></div>
              </div>
              {education.map((e) => (
                <div key={e.degree} className="rp-edu-row">
                  <div>
                    <h4 className="rp-edu-degree">{e.degree}</h4>
                    <p className="rp-edu-school">{e.school}</p>
                  </div>
                  <div>
                    <span className="rp-edu-year">{e.year}</span>
                    <span className="rp-edu-score">{e.score}</span>
                  </div>
                </div>
              ))}
            </section>

            <section>
              <div className="rp-section-head">
                <span className="rp-tick" style={{ background: "var(--warm)" }} />
                <div><h2>Certifications</h2></div>
              </div>
              <div className="flex flex-col gap-3">
                {certifications.map((c) => (
                  <div key={c.title} className="flex items-start gap-3" style={{ fontSize: 13.5 }}>
                    <AwardIcon size={16} className="shrink-0" style={{ color: "var(--warm)", marginTop: 2 }} />
                    <div className="flex flex-col md:gap-1">
                      <span>{c.title}</span>
                      <span className="rp-mono" style={{ fontSize: 11, color: "var(--muted)" }}>{c.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>

        {/* Contact */}
        <section style={{ borderTop: "1px solid var(--rule)", paddingTop: 34 }} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="rp-serif" style={{ fontSize: 27, fontWeight: 600 }}>Let's work together.</h2>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=riteshpatel1884@gmail.com"
            className="flex items-center gap-2"
            style={{
              fontSize: 13,
              padding: "10px 20px",
              borderRadius: 999,
              color: "var(--panel)",
              background: "var(--accent)",
              fontWeight: 500,
            }}
          >
            <MailIcon size={14} /> Mail me
          </a>
        </section>

        <footer className="flex flex-col md:flex-row justify-between gap-2 mt-14" style={{ fontSize: 11.5, color: "var(--muted)" }}>
          <span>© 2026 Ritesh Patel</span>
          <span>Ghaziabad, India</span>
        </footer>
      </div>
    </div>
  );
}