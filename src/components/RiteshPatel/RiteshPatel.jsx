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

/* ---------------------------------------------------------- */
/* Data                                                         */
/* ---------------------------------------------------------- */
const skillGroups = [
  { label: "Languages", items: ["Java", "Python", "JavaScript", "SQL"] },
  {
    label: "GenAI / ML",
    items: ["LLM Integration", "RAG", "TensorFlow", "Scikit-learn", "Computer Vision", "NLP"],
  },
  {
    label: "Web Stack",
    items: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "Prisma", "Neon", "Clerk", "Git", "Docker", "Vercel"],
  },
];

const experience = [
  {
    role: "Data Analytics Intern",
    company: "Airkrit India Pvt. Ltd.",
    date: "2025",
    points: [
      "Cleaned and analysed a 10-sheet Credit_Banking Excel workbook covering spend, repayment and interest calculations.",
      "Delivered segment-level insights to support lending decisions.",
    ],
    tech: ["Excel", "Data Cleaning", "Financial Analysis"],
  },
];

const projects = [
  {
    tag: "Web Platform",
    date: "Jun 2026 — Present",
    title: "Road to Offer",
    subtitle: "45-day placement preparation tracker",
    link: "road-to-offer.vercel.app",
    href: "https://road-to-offer.vercel.app",
    points: [
      "Built a Next.js study tracker spanning DSA, Data Analyst, GenAI, Backend, Core and Aptitude tracks with per-topic tagging, notes and a “Today” filter.",
      "Implemented a full dark/light theming system driven by CSS variables across every view.",
      "Added Vercel Analytics to monitor daily study consistency.",
    ],
    tech: ["Next.js", "Tailwind", "CSS Variables", "Vercel Analytics"],
  },
  {
    tag: "Web Platform",
    date: "2025 — 2026",
    title: "LeaderLab",
    subtitle: "Job application tracker & analytics suite",
    link: "leaderlab.in",
    href: "https://leaderlab.in",
    points: [
      "Designed an analytics dashboard with Recharts — radar charts, activity heatmaps and custom dark tooltips.",
      "Built a Prep Tracker linking daily study plans to live job applications.",
      "Automated day-complete, follow-up and weekly-digest emails via Resend and Vercel cron.",
    ],
    tech: ["Next.js", "Recharts", "Resend", "Prisma", "Clerk"],
  },
  {
    tag: "Machine Learning",
    date: "Academic Project · KIET",
    title: "MedLeaf-ViT",
    subtitle: "Medicinal plant identification, CNN-ViT hybrid",
    points: [
      "Co-developed a hybrid CNN-Vision Transformer architecture to classify 120+ medicinal plant species for Ayurvedic raw-material authentication.",
      "Trained and iterated on the model using a Kaggle workflow with peers at KIET.",
    ],
    tech: ["Python", "TensorFlow", "Computer Vision", "ViT"],
  },
];

const education = [
  {
    degree: "B.Tech, Computer Science",
    school: "KIET Group of Institutions",
    year: "2023 — 2027",
    score: "7.48 CGPA",
  },
  {
    degree: "Senior Secondary (XII)",
    school: "Rani Laxmi Bai School",
    year: "2021 — 2022",
    score: "84%",
  },
  {
    degree: "Secondary (X)",
    school: "Rani Laxmi Bai School",
    year: "2019 — 2020",
    score: "86%",
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
          light: ["rgba(30,28,22,0.08)", "#cdd9c4", "#93b586", "#5c9260", "#33553c"],
          dark: ["rgba(236,229,212,0.06)", "#2a3a28", "#3d5b3c", "#588a55", "#86b98d"],
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
          --paper: #f6f2e8;
          --paper-2: #efe9db;
          --ink: #1e1c16;
          --muted: #746c5c;
          --rule: rgba(30,28,22,0.14);
          --accent: #33553c;
          --accent-2: #a6763a;
          --card: #fffdf8;
          --shadow: rgba(30,28,22,0.08);
          font-family: ui-sans-serif, -apple-system, "Segoe UI", Roboto, sans-serif;
          background: var(--paper);
          color: var(--ink);
          min-height: 100vh;
          transition: background 0.35s ease, color 0.35s ease;
        }
        .rp-resume[data-theme='dark'] {
          --paper: #16150f;
          --paper-2: #1d1c15;
          --ink: #ece5d4;
          --muted: #a39a86;
          --rule: rgba(236,229,212,0.14);
          --accent: #86b98d;
          --accent-2: #d9a75f;
          --card: #1c1b14;
          --shadow: rgba(0,0,0,0.5);
        }
        .rp-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
        .rp-mono { font-family: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace; }
        .rp-eyebrow {
          font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 600;
        }
        .rp-caption { font-size: 12px; color: var(--muted); margin-top: 2px; }
        .rp-card {
          background: var(--card);
          border: 1px solid var(--rule);
          border-radius: 4px;
          box-shadow: 0 1px 2px var(--shadow);
        }
        .rp-rule { border: none; border-top: 1px solid var(--rule); margin: 0; }
        .rp-toggle {
          width: 40px; height: 40px; border-radius: 999px;
          border: 1px solid var(--rule);
          background: var(--card);
          display: flex; align-items: center; justify-content: center;
          color: var(--ink); cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .rp-toggle:hover { transform: rotate(20deg); }

        /* Commitment to Growth card */
        .rp-ledger { padding: 28px 24px; margin: 0; position: relative; }
        .rp-ledger-head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 20px; margin-bottom: 22px; }
        .rp-calendar-wrap { overflow-x: auto; padding: 4px 2px 6px; }
        .rp-calendar-wrap .react-activity-calendar__scroll-container { padding-bottom: 4px; }
        .rp-calendar-wrap text { fill: var(--muted) !important; font-family: ui-monospace, monospace !important; }
        .rp-calendar-wrap svg rect { rx: 2px; }

        /* Skill pill */
        .rp-pill {
          border: 1px solid var(--rule); border-radius: 999px; padding: 4px 12px;
          font-size: 12px; color: var(--ink); white-space: nowrap;
        }

        /* Timeline dot */
        .rp-dot { width: 7px; height: 7px; border-radius: 999px; background: var(--accent); }

        /* Project link */
        .rp-project-link { text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.15s ease; }
        .rp-project-link:hover { border-color: var(--accent); }

        @media print {
          .rp-toggle { display: none; }
        }
      `}</style>

      <div className="max-w-[820px] mx-auto px-5 md:px-10 py-10 md:py-16">
        {/* Masthead */}
        <header className="flex items-start justify-between gap-6 mb-10">
          <div>
            <h1 className="rp-serif" style={{ fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.05 }}>
              Ritesh Patel
            </h1>
            <p className="rp-eyebrow" style={{ marginTop: 8 }}>
              GenAI Developer · Full-Stack Engineer
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
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rp-toggle"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <SunIcon size={17} /> : <MoonIcon size={17} />}
            </button>
            <div className="flex gap-3" style={{ color: "var(--muted)" }}>
              <GithubIcon size={17} className="hover:opacity-60 cursor-pointer" />
              <LinkedinIcon size={17} className="hover:opacity-60 cursor-pointer" />
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
                  <span className="rp-mono block" style={{ fontSize: 11, color: "var(--muted)" }}>{p.date}</span>
                  <span className="rp-mono block mt-1" style={{ fontSize: 10, color: "var(--accent-2)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
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
                        style={{ fontSize: 11, color: "var(--accent)" }}
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
                    <span className="rp-mono block mt-1" style={{ fontSize: 12.5, color: "var(--accent)", fontWeight: 700 }}>{e.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Contact */}
        <section style={{ borderTop: "1px solid var(--rule)", paddingTop: 32 }} className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="rp-serif" style={{ fontSize: 26, fontWeight: 700 }}>Let's work together.</h2>
           
          </div>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=riteshpatel1884@gmail.com"
            className="flex items-center gap-2 self-start rp-mono"
            style={{
              fontSize: 12.5,
              padding: "10px 18px",
              border: "1px solid var(--rule)",
              borderRadius: 999,
              color: "var(--ink)",
            }}
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