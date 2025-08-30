// MicrosoftResumeTemplate.jsx
import React from "react";

/**
 * Microsoft-inspired Resume Template (React + Tailwind)
 *
 * Requirements:
 *  - Tailwind CSS (v2+ with arbitrary value support for aspect ratio OR include aspect plugin)
 *  - Recommended font: 'Segoe UI' available on system; fallback to system fonts otherwise.
 *
 * Usage:
 *  <MicrosoftResumeTemplate data={resumeData} />
 *
 * The component defaults to the resumeData you provided if no `data` prop is passed.
 */

// ---------- default sample data (use your provided data) ----------
const defaultResumeData = {
  name: "John Doe",
  role: "Senior Software Engineer",
  location: "San Francisco, CA",
  email: "john.doe@email.com",
  phone: "+1 (415) 555-0101",
  website: "johndoe.dev",
  summary:
    "Seasoned engineer with 8+ years building scalable web platforms. Passionate about DX, performance, and elegant UX.",
  experience: [
    {
      company: "NovaLabs",
      title: "Lead Frontend Engineer",
      period: "2022 — Present",
      bullets: [
        "Led migration to React Server Components; cut TTFB by 34%.",
        "Shipped design system used across 7 product lines.",
        "Mentored 5 engineers, instituted testing culture (95% coverage).",
      ],
    },
    {
      company: "Cloudyard",
      title: "Software Engineer",
      period: "2019 — 2022",
      bullets: [
        "Delivered billing microservice handling 1M+ tx/month.",
        "Introduced CI/CD with feature previews; reduced regressions by 40%.",
      ],
    },
    {
      company: "PixelForge",
      title: "Frontend Engineer",
      period: "2017 — 2019",
      bullets: [
        "Built component library with a11y-first patterns.",
        "Improved Lighthouse scores from 58 to 95+.",
      ],
    },
  ],
  education: [
    {
      school: "University of California, Berkeley",
      degree: "B.S. Computer Science",
      period: "2013 — 2017",
    },
  ],
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Tailwind",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "Playwright",
  ],
  projects: [
    {
      name: "ResumeAI",
      desc: "LLM-powered resume writer with live preview.",
    },
    {
      name: "OpenCharts",
      desc: "Headless chart components for React.",
    },
  ],
  certifications: ["AWS Certified Developer – Associate", "Scrum Master (PSM I)"],
  languages: ["English (Native)", "Spanish (Professional)"],
};

// ---------- helper components ----------
const Accent = ({ children }) => (
  <span style={{ color: "#0078D4" }} className="font-semibold">
    {children}
  </span>
);

const SectionTitle = ({ children }) => (
  <h4 className="text-xs uppercase tracking-wider text-slate-600 font-semibold">
    {children}
  </h4>
);

const Pill = ({ children }) => (
  <span className="inline-block px-2 py-1 text-[11px] bg-slate-100 rounded-md border text-slate-700">
    {children}
  </span>
);

// ---------- main component ----------
export default function MicrosoftTemplate({ data = defaultResumeData }) {
  const accent = "#0078D4";

  return (
    <div
      // A4-like framed card — keep within hero column: width constrained
      className="mx-auto"
      style={{ fontFamily: `'Segoe UI', Roboto, -apple-system, 'Helvetica Neue', Arial` }}
    >
      {/* Outer frame: aspect ratio for A4 (210/297) and max width */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{
          width: "min(92vw, 760px)",
          aspectRatio: "210 / 297", // use if Tailwind supports; inline style fallback
          border: "1px solid rgba(2,6,23,0.06)",
        }}
      >
        {/* Top accent bar */}
        <div
          className="h-2"
          style={{
            background: `linear-gradient(90deg, ${accent}, ${shade(accent, -16)})`,
          }}
        />

        {/* Content grid */}
        <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8">
          {/* LEFT SIDEBAR: contact, skills, tech, certs */}
          <aside className="md:col-span-1 bg-slate-50 rounded-lg p-4 flex flex-col gap-4">
            {/* "Microsoft tile" decoration */}
            <div className="flex items-center gap-3">
              <div
                aria-hidden
                className="w-10 h-10 rounded-sm flex items-center justify-center"
                style={{
                  background: accent,
                  color: "white",
                  fontWeight: 700,
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                }}
              >
                MS
              </div>
              <div>
                <div className="text-sm text-slate-600">Profile</div>
              </div>
            </div>

            <div className="pt-1">
              <h1 className="text-xl font-bold leading-tight">{data.name}</h1>
              <div className="text-sm text-slate-700 mt-1">{data.role}</div>
            </div>

            <div className="pt-2 border-t border-slate-200" />

            <div>
              <SectionTitle>Contact</SectionTitle>
              <div className="mt-2 text-sm text-slate-700 space-y-1">
                <div>
                  <span className="font-medium">Email: </span>
                  <a href={`mailto:${data.email}`} className="text-slate-700 hover:underline">
                    {data.email}
                  </a>
                </div>
                <div>
                  <span className="font-medium">Phone: </span>
                  <a href={`tel:${data.phone}`} className="text-slate-700 hover:underline">
                    {data.phone}
                  </a>
                </div>
                <div>
                  <span className="font-medium">Location: </span>
                  <span>{data.location}</span>
                </div>
                <div>
                  <span className="font-medium">Website: </span>
                  <a href={`https://${data.website}`} target="_blank" rel="noreferrer" className="text-slate-700 hover:underline">
                    {data.website}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <SectionTitle>Skills</SectionTitle>
              <div className="mt-2 flex flex-wrap gap-2">
                {data.skills.map((s, idx) => (
                  <Pill key={idx}>{s}</Pill>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle>Certifications</SectionTitle>
              <ul className="list-disc ml-4 mt-2 text-sm text-slate-700 space-y-1">
                {data.certifications.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <SectionTitle>Languages</SectionTitle>
              <div className="mt-2 text-sm text-slate-700">{data.languages.join(" • ")}</div>
            </div>
          </aside>

          {/* RIGHT MAIN: summary, experience, projects, education */}
          <main className="md:col-span-2 p-1 md:p-0 flex flex-col gap-6">
            {/* Header Row */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Summary</div>
                <p className="mt-2 text-sm text-slate-700">{data.summary}</p>
              </div>

              {/* quick contact badges */}
              <div className="ml-6 hidden md:flex flex-col gap-2 items-end">
                <div className="px-3 py-1 rounded-full text-[12px] font-semibold" style={{ background: `${accent}10`, color: accent }}>
                  Available for Microsoft roles
                </div>
                <div className="text-xs text-slate-500">Profile last updated</div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-700">Experience</div>
                <div className="text-xs text-slate-500">Selected roles</div>
              </div>

              <div className="mt-3 space-y-4">
                {data.experience.map((exp, i) => (
                  <article key={i} className="p-4 rounded-lg border border-slate-100 bg-white shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-slate-800">{exp.title}</div>
                        <div className="text-xs text-slate-600">{exp.company}</div>
                      </div>
                      <div className="text-xs text-slate-500">{exp.period}</div>
                    </div>

                    <ul className="list-disc ml-5 mt-3 text-sm text-slate-700 space-y-1">
                      {exp.bullets.map((b, k) => (
                        <li key={k}>{b}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            {/* Projects + Education Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-semibold text-slate-700">Projects</div>
                <div className="mt-2 space-y-2">
                  {data.projects.map((p, i) => (
                    <div key={i} className="p-3 rounded border border-slate-100 bg-white">
                      <div className="text-sm font-semibold text-slate-800">{p.name}</div>
                      <div className="text-xs text-slate-600 mt-1">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-700">Education</div>
                <div className="mt-2 space-y-2">
                  {data.education.map((e, idx) => (
                    <div key={idx} className="p-3 rounded border border-slate-100 bg-white">
                      <div className="text-sm font-semibold text-slate-800">{e.school}</div>
                      <div className="text-xs text-slate-600">{e.degree}</div>
                      <div className="text-xs text-slate-500 mt-1">{e.period}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer: small contact + skills summary */}
            <div className="mt-auto border-t border-slate-100 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="text-sm text-slate-600">
                <span className="font-medium">Contact:</span>{" "}
                <a href={`mailto:${data.email}`} className="hover:underline">{data.email}</a> • {data.phone} • {data.website}
              </div>

              <div className="flex flex-wrap gap-2">
                {/* Highlighted top skills */}
                {data.skills.slice(0, 5).map((s, i) => (
                  <span key={i} className="text-[12px] px-3 py-1 rounded-full border" style={{ borderColor: "rgba(0,120,212,0.12)" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------- small utility: shade a hex color (simple) ---------- */
function shade(hex, percent) {
  // hex must be like '#rrggbb'
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);

  const t = percent < 0 ? 0 : 255;
  const p = Math.abs(percent) / 100;

  const R = Math.round((t - r) * p + r);
  const G = Math.round((t - g) * p + g);
  const B = Math.round((t - b) * p + b);

  return `rgb(${R}, ${G}, ${B})`;
}
