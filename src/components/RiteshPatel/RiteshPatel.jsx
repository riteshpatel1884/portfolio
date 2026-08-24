"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {GitHubCalendar} from "react-github-calendar";

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
const ArrowIcon = (p) => (
  <Icon {...p}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
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
    link: "road-to-offer.vercel.app",
    href: "https://road-to-offer.vercel.app",
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

/* ---------------------------------------------------------- */
/* Commitment to Growth — live GitHub calendar                 */
/* ---------------------------------------------------------- */
const CommitmentToGrowth = ({ theme }) => (
  <section className="rp-card rp-ledger">
    <div className="rp-ledger-head">
      <div>
        <h2 className="rp-eyebrow">Commitment to Growth</h2>
        <p className="rp-caption">Live GitHub activity · @riteshpatel1884</p>
      </div>
    </div>

    <div className="rp-calendar-wrap">
      <GitHubCalendar
        username="riteshpatel1884"
        colorScheme={theme}
        theme={{
          light: ["#efefef", "#c4c4c4", "#8a8a8a", "#4a4a4a", "#0a0a0a"],
          dark: ["#1c1c1c", "#3a3a3a", "#666666", "#a8a8a8", "#f5f5f5"],
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

  return (
    <div className="rp-resume" data-theme={theme}>
      <style>{`
        .rp-resume {
          --paper: #ffffff;
          --paper-2: #f2f2f2;
          --ink: #0a0a0a;
          --muted: #6e6e6e;
          --rule: rgba(10,10,10,0.16);
          --accent: #0a0a0a;
          --accent-2: #0a0a0a;
          --card: #ffffff;
          --shadow: rgba(10,10,10,0.06);
          --invert: #ffffff;
          font-family: ui-sans-serif, -apple-system, "Segoe UI", Roboto, sans-serif;
          background: var(--paper);
          color: var(--ink);
          min-height: 100vh;
          transition: background 0.35s ease, color 0.35s ease;
        }
        .rp-resume[data-theme='dark'] {
          --paper: #0a0a0a;
          --paper-2: #141414;
          --ink: #f5f5f5;
          --muted: #969696;
          --rule: rgba(245,245,245,0.16);
          --accent: #f5f5f5;
          --accent-2: #f5f5f5;
          --card: #111111;
          --shadow: rgba(0,0,0,0.6);
          --invert: #0a0a0a;
        }
        .rp-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
        .rp-mono { font-family: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace; }
        .rp-eyebrow {
          font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink);
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .rp-eyebrow::before {
          content: "";
          width: 14px;
          height: 1px;
          background: var(--ink);
          display: inline-block;
        }
        .rp-caption { font-size: 12px; color: var(--muted); margin-top: 2px; }
        .rp-card {
          background: var(--card);
          border: 1px solid var(--rule);
          border-radius: 0;
          box-shadow: none;
        }
        .rp-rule { border: none; border-top: 1px solid var(--ink); margin: 0; }
        .rp-rule-thin { border: none; border-top: 1px solid var(--rule); margin: 0; }

        /* Signature toggle — sliding switch, not an icon button */
        .rp-switch {
          width: 64px; height: 32px;
          border: 1px solid var(--ink);
          border-radius: 999px;
          background: var(--paper);
          position: relative;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
          transition: background 0.3s ease;
        }
        .rp-switch-knob {
          position: absolute;
          top: 2px; left: 2px;
          width: 26px; height: 26px;
          border-radius: 999px;
          background: var(--ink);
          color: var(--paper);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.32s cubic-bezier(.65,0,.35,1), background 0.3s ease, color 0.3s ease;
        }
        .rp-resume[data-theme='dark'] .rp-switch-knob { transform: translateX(32px); }
        .rp-switch-label {
          font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* Commitment to Growth card */
        .rp-ledger { padding: 28px 24px; margin: 0; position: relative; }
        .rp-ledger-head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 20px; margin-bottom: 22px; }
        .rp-calendar-wrap { overflow-x: auto; padding: 4px 2px 6px; }
        .rp-calendar-wrap .react-activity-calendar__scroll-container { padding-bottom: 4px; }
        .rp-calendar-wrap text { fill: var(--muted) !important; font-family: ui-monospace, monospace !important; }

        /* Skill pill — flat outlined rectangle, no radius */
        .rp-pill {
          border: 1px solid var(--ink); border-radius: 0; padding: 4px 11px;
          font-size: 11.5px; color: var(--ink); white-space: nowrap;
          font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .rp-pill:hover { background: var(--ink); color: var(--paper); }

        /* Timeline dot */
        .rp-dot { width: 6px; height: 6px; border-radius: 0; background: var(--ink); transform: rotate(45deg); }

        /* Project link */
        .rp-project-link { text-decoration: none; border-bottom: 1px solid var(--ink); padding-bottom: 1px; }

        .rp-index {
          font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
          font-size: 11px;
          color: var(--muted);
        }

        @media print {
          .rp-switch { display: none; }
        }
      `}</style>

      <div className="max-w-[820px] mx-auto px-5 md:px-10 py-10 md:py-16">
        {/* Masthead */}
        <header className="flex items-start justify-between gap-6 mb-10">
          <div>
            <h1
              className="rp-serif"
              style={{
                fontSize: "clamp(34px, 6vw, 52px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
                borderBottom: "3px solid var(--ink)",
                display: "inline-block",
                paddingBottom: 6,
              }}
            >
              Ritesh Patel
            </h1>
            <p className="rp-eyebrow" style={{ marginTop: 12 }}>
              GenAI Developer / Full-Stack Engineer
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 rp-mono" style={{ fontSize: 12, color: "var(--muted)" }}>
              <span className="flex items-center gap-1.5"><PinIcon size={13} /> Ghaziabad, India</span>
              <a href="mailto:riteshpatel1884@gmail.com" className="flex items-center gap-1.5 hover:opacity-70">
                <MailIcon size={13} /> riteshpatel1884@gmail.com
              </a>
              <span className="flex items-center gap-1.5"><PhoneIcon size={13} /> +91 8858295418</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4 shrink-0">
            <div className="flex items-center gap-2">
              <span className="rp-switch-label">{theme === "light" ? "Day" : "Night"}</span>
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="rp-switch"
                aria-label="Toggle theme"
              >
                <span className="rp-switch-knob">
                  {theme === "light" ? <SunIcon size={13} /> : <MoonIcon size={13} />}
                </span>
              </button>
            </div>
            <div className="flex gap-3" style={{ color: "var(--ink)" }}>
              <a href="https://github.com/riteshpatel1884" target="_blank" rel="noopener noreferrer">
                <GithubIcon size={17} className="hover:opacity-50 cursor-pointer" />
              </a>
              <a href="https://linkedin.com/in/riteshpatel1884" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={17} className="hover:opacity-50 cursor-pointer" />
              </a>
            </div>
          </div>
        </header>

        <hr className="rp-rule mb-10" />

        {/* Summary */}
        <section className="mb-12">
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink)", maxWidth: 640 }}>
            Fourth year Computer Science student building expertise in <strong>Backend Engineering and
            Generative AI</strong>. Experienced in designing scalable backend systems, secure APIs,
            databases, authentication, and deploying full-stack applications while exploring
            AI-driven products and intelligent software.
          </p>
        </section>

        {/* Commitment to Growth */}
        <section className="mb-12">
          <CommitmentToGrowth theme={theme} />
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="rp-eyebrow mb-6">Experience</h2>
          <div className="flex flex-col">
            {experience.map((e, i) => (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-8 py-6"
                style={{ borderTop: i === 0 ? "none" : "1px solid var(--rule)" }}
              >
                <div>
                  <span className="rp-mono block" style={{ fontSize: 11, color: "var(--muted)" }}>{e.date}</span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="rp-serif" style={{ fontSize: 20, fontWeight: 700 }}>{e.role}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 2, marginBottom: 10 }}>{e.company}</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {e.points.map((pt, idx) => (
                      <li key={idx} className="flex gap-2.5" style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink)" }}>
                        <span className="rp-dot shrink-0" style={{ marginTop: 7 }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {e.tech.map((t) => (
                      <span key={t} className="rp-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="rp-eyebrow mb-6">Selected Work</h2>
          <div className="flex flex-col">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-8 py-6"
                style={{ borderTop: i === 0 ? "none" : "1px solid var(--rule)" }}
              >
                <div>
                  <span className="rp-index block">{String(i + 1).padStart(2, "0")}</span>
                  <span className="rp-mono block mt-2" style={{ fontSize: 11, color: "var(--muted)" }}>{p.date}</span>
                  <span className="rp-mono block mt-1" style={{ fontSize: 10, color: "var(--ink)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700 }}>
                    {p.tag}
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="rp-serif" style={{ fontSize: 20, fontWeight: 700 }}>{p.title}</h3>
                    {p.link && (
                      <a
                        href={p.href || `https://${p.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rp-mono rp-project-link"
                        style={{ fontSize: 11, color: "var(--ink)" }}
                      >
                        <ArrowIcon size={11} /> {p.link}
                      </a>
                    )}
                  </div>
                  <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 2, marginBottom: 10 }}>{p.subtitle}</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {p.points.map((pt, idx) => (
                      <li key={idx} className="flex gap-2.5" style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink)" }}>
                        <span className="rp-dot shrink-0" style={{ marginTop: 7 }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map((t) => (
                      <span key={t} className="rp-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills + Education */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <section>
            <h2 className="rp-eyebrow mb-6">Skills</h2>
            <div className="flex flex-col gap-5">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <span className="rp-mono block mb-2" style={{ fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {g.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span key={s} className="rp-pill">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="rp-eyebrow mb-6">Education</h2>
            <div className="flex flex-col gap-5">
              {education.map((e) => (
                <div key={e.degree} className="flex justify-between gap-4" style={{ borderBottom: "1px solid var(--rule)", paddingBottom: 14 }}>
                  <div>
                    <h4 className="rp-serif" style={{ fontSize: 15.5, fontWeight: 700 }}>{e.degree}</h4>
                    <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2 }}>{e.school}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="rp-mono block" style={{ fontSize: 11, color: "var(--muted)" }}>{e.year}</span>
                    <span className="rp-mono block mt-1" style={{ fontSize: 12.5, color: "var(--ink)", fontWeight: 700 }}>{e.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="rp-eyebrow mb-6">Certifications</h2>
          <div className="flex flex-col gap-3">
            {certifications.map((c) => (
              <div key={c.title} className="flex items-start gap-3" style={{ fontSize: 13.5, color: "var(--ink)" }}>
                <AwardIcon size={16} className="shrink-0" style={{ color: "var(--ink)", marginTop: 2 }} />
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                  <span>{c.title}</span>
                  <span className="rp-mono" style={{ fontSize: 11, color: "var(--muted)" }}>{c.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section style={{ borderTop: "1px solid var(--ink)", paddingTop: 32 }} className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="rp-serif" style={{ fontSize: 28, fontWeight: 700 }}>Let's work together.</h2>
          </div>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=riteshpatel1884@gmail.com"
            className="flex items-center gap-2 self-start rp-mono"
            style={{
              fontSize: 12.5,
              padding: "10px 18px",
              border: "1px solid var(--ink)",
              borderRadius: 0,
              color: "var(--ink)",
              background: "var(--paper)",
              transition: "background 0.15s ease, color 0.15s ease",
            }}
            onMouseEnter={(ev) => { ev.currentTarget.style.background = "var(--ink)"; ev.currentTarget.style.color = "var(--paper)"; }}
            onMouseLeave={(ev) => { ev.currentTarget.style.background = "var(--paper)"; ev.currentTarget.style.color = "var(--ink)"; }}
          >
            <MailIcon size={14} /> Mail me
          </a>
        </section>

        <footer className="flex flex-col md:flex-row justify-between gap-2 mt-14 rp-mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          <span>© Ritesh Patel — 2026</span>
          <span>Ghaziabad, India</span>
        </footer>
      </div>
    </div>
  );
}