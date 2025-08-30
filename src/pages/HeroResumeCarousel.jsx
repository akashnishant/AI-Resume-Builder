// HeroResumeCarousel.jsx
import React, { useEffect, useMemo, useState } from "react";

/* ---------- Shared demo data (used by all templates) ---------- */
const resumeData = {
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
  certifications: [
    "AWS Certified Developer – Associate",
    "Scrum Master (PSM I)",
  ],
  languages: ["English (Native)", "Spanish (Professional)"],
};

/* ---------- Small utilities ---------- */
const Section = ({ title, children, className = "" }) => (
  <section className={`space-y-1 ${className}`}>
    <h3 className="text-[11px] font-semibold tracking-wider uppercase opacity-80">
      {title}
    </h3>
    {children}
  </section>
);

const Avatar = ({ ring = "ring-slate-300", bg = "bg-slate-200" }) => (
  <div
    className={`shrink-0 size-16 rounded-full ${bg} ring-2 ${ring} grid place-items-center text-[10px] font-medium text-slate-600`}
  >
    User
  </div>
);

/* ---------- Template 1: Minimal White (Clean) ---------- */
const TemplateMinimal = ({ d }) => (
  <div className="h-full w-full bg-white text-slate-800 p-6 sm:p-8 md:p-10 text-[11px] sm:text-[12px] leading-relaxed">
    <header className="flex items-center gap-4 border-b pb-4">
      <Avatar />
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{d.name}</h1>
        <p className="text-sm opacity-70">{d.role}</p>
      </div>
      <div className="ml-auto text-[11px] text-right opacity-80">
        <p>{d.location}</p>
        <p>{d.email}</p>
        <p>{d.phone}</p>
        <p>{d.website}</p>
      </div>
    </header>

    <main className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
      <div className="md:col-span-2 space-y-4">
        <Section title="Profile">
          <p>{d.summary}</p>
        </Section>
        <Section title="Experience">
          <div className="space-y-3">
            {d.experience.map((e, i) => (
              <div key={i} className="border-l-2 border-slate-200 pl-3">
                <div className="flex justify-between text-sm font-semibold">
                  <span>
                    {e.title} — <span className="font-normal">{e.company}</span>
                  </span>
                  <span className="opacity-70">{e.period}</span>
                </div>
                <ul className="list-disc ml-4 mt-1 space-y-1">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Projects">
          <ul className="space-y-1">
            {d.projects.map((p, i) => (
              <li key={i}>
                <span className="font-semibold">{p.name}:</span> {p.desc}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <aside className="space-y-4">
        <Section title="Skills">
          <div className="flex flex-wrap gap-2">
            {d.skills.map((s, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded border text-[10px] bg-white"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Education">
          {d.education.map((e, i) => (
            <div key={i} className="space-y-0.5">
              <p className="font-semibold">{e.school}</p>
              <p>{e.degree}</p>
              <p className="opacity-70">{e.period}</p>
            </div>
          ))}
        </Section>

        <Section title="Certifications">
          <ul className="list-disc ml-4 space-y-1">
            {d.certifications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </Section>

        <Section title="Languages">
          <p>{d.languages.join(" • ")}</p>
        </Section>
      </aside>
    </main>
  </div>
);

/* ---------- Template 2: Elegant Navy / Gold (Serif + Sidebar) ---------- */
const TemplateElegant = ({ d }) => (
  <div className="h-full w-full bg-[#0b1536] text-slate-100 grid grid-cols-3">
    {/* Sidebar */}
    <aside className="col-span-1 p-6 sm:p-8 bg-[#0f1d4d] text-[11px] sm:text-[12px]">
      <div className="flex items-center gap-3 mb-4">
        <Avatar ring="ring-yellow-300" bg="bg-yellow-100" />
        <div>
          <h1 className="text-xl font-serif font-semibold">{d.name}</h1>
          <p className="text-yellow-300">{d.role}</p>
        </div>
      </div>
      <div className="h-px bg-yellow-500/30 mb-4" />
      <Section title="Contact" className="font-serif">
        <p>{d.location}</p>
        <p>{d.email}</p>
        <p>{d.phone}</p>
        <p>{d.website}</p>
      </Section>
      <Section title="Skills" className="font-serif mt-4">
        <ul className="grid grid-cols-2 gap-1">
          {d.skills.map((s, i) => (
            <li key={i} className="before:content-['•'] before:text-yellow-400 before:mr-2">
              {s}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Languages" className="font-serif mt-4">
        <p>{d.languages.join(" • ")}</p>
      </Section>
    </aside>

    {/* Main */}
    <main className="col-span-2 p-6 sm:p-8 md:p-10 text-[11px] sm:text-[12px] leading-relaxed">
      <Section title="Professional Summary">
        <p className="font-serif">{d.summary}</p>
      </Section>
      <Section title="Experience" className="mt-4">
        <div className="space-y-3">
          {d.experience.map((e, i) => (
            <div key={i} className="rounded-lg bg-white/5 p-3 border border-yellow-400/20">
              <div className="flex justify-between font-semibold">
                <span>
                  {e.title} — <span className="font-normal text-yellow-300">{e.company}</span>
                </span>
                <span className="opacity-80">{e.period}</span>
              </div>
              <ul className="list-disc ml-4 mt-1 space-y-1">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Section title="Education">
          {d.education.map((e, i) => (
            <div key={i}>
              <p className="font-semibold">{e.school}</p>
              <p>{e.degree}</p>
              <p className="opacity-80">{e.period}</p>
            </div>
          ))}
        </Section>
        <Section title="Projects">
          <ul className="space-y-1">
            {d.projects.map((p, i) => (
              <li key={i}>
                <span className="text-yellow-300 font-semibold">{p.name}:</span> {p.desc}
              </li>
            ))}
          </ul>
        </Section>
      </div>
      <Section title="Certifications" className="mt-4">
        <ul className="list-disc ml-4 space-y-1">
          {d.certifications.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </Section>
    </main>
  </div>
);

/* ---------- Template 3: Bold Cobalt / Black (Chunky headings) ---------- */
const TemplateBold = ({ d }) => (
  <div className="h-full w-full bg-white text-slate-900 p-6 sm:p-8 md:p-10 text-[11px] sm:text-[12px]">
    <header className="mb-3">
      <div className="flex items-center gap-4">
        <Avatar ring="ring-blue-600" bg="bg-blue-100" />
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight uppercase">
            {d.name}
          </h1>
          <p className="text-sm text-blue-700 font-semibold">{d.role}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {[d.location, d.email, d.phone, d.website].map((chip, i) => (
          <span key={i} className="px-2 py-1 rounded-md bg-slate-900 text-white text-[10px]">
            {chip}
          </span>
        ))}
      </div>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        <Section title="Summary">
          <p>{d.summary}</p>
        </Section>
        <Section title="Experience">
          <div className="space-y-3">
            {d.experience.map((e, i) => (
              <div key={i} className="border-2 border-blue-600 rounded-lg p-3">
                <div className="flex justify-between font-bold">
                  <span>
                    {e.title} — <span className="text-blue-700">{e.company}</span>
                  </span>
                  <span>{e.period}</span>
                </div>
                <ul className="list-disc ml-4 mt-1 space-y-1">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {d.projects.map((p, i) => (
              <div key={i} className="bg-blue-50 border border-blue-200 rounded p-2">
                <p className="font-bold">{p.name}</p>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <aside className="space-y-4">
        <Section title="Skills">
          <div className="flex flex-wrap gap-2">
            {d.skills.map((s, i) => (
              <span key={i} className="px-2 py-1 rounded bg-blue-600/10 text-blue-800 border border-blue-600/30">
                {s}
              </span>
            ))}
          </div>
        </Section>
        <Section title="Education">
          {d.education.map((e, i) => (
            <div key={i}>
              <p className="font-bold">{e.school}</p>
              <p>{e.degree}</p>
              <p className="opacity-70">{e.period}</p>
            </div>
          ))}
        </Section>
        <Section title="Certifications">
          <ul className="list-[square] ml-5 space-y-1">
            {d.certifications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </Section>
        <Section title="Languages">
          <p>{d.languages.join(" • ")}</p>
        </Section>
      </aside>
    </div>
  </div>
);

/* ---------- Template 4: Soft Pastel (Cards + two-column) ---------- */
const TemplatePastel = ({ d }) => (
  <div className="h-full w-full bg-gradient-to-br from-sky-50 to-emerald-50 p-6 sm:p-8 md:p-10 text-[11px] sm:text-[12px] text-slate-800">
    <header className="flex items-center justify-between bg-white/70 backdrop-blur rounded-xl p-3 border border-slate-200">
      <div className="flex items-center gap-3">
        <Avatar ring="ring-emerald-400" bg="bg-emerald-100" />
        <div>
          <h1 className="text-2xl font-semibold">{d.name}</h1>
          <p className="text-emerald-700">{d.role}</p>
        </div>
      </div>
      <div className="text-right text-[11px]">
        <p>{d.email}</p>
        <p>{d.phone}</p>
        <p>{d.location}</p>
      </div>
    </header>

    <main className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="md:col-span-2 space-y-4">
        <div className="bg-white rounded-xl border p-3">
          <Section title="Profile">
            <p>{d.summary}</p>
          </Section>
        </div>
        <div className="bg-white rounded-xl border p-3">
          <Section title="Experience">
            <div className="space-y-3">
              {d.experience.map((e, i) => (
                <div key={i} className="grid grid-cols-[1fr_auto] gap-2">
                  <div>
                    <p className="font-semibold">
                      {e.title} — <span className="text-sky-700">{e.company}</span>
                    </p>
                    <ul className="list-disc ml-4 mt-1 space-y-1">
                      {e.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="text-right text-slate-500">{e.period}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border p-3">
            <Section title="Projects">
              {d.projects.map((p, i) => (
                <p key={i} className="mb-1">
                  <span className="font-semibold">{p.name}:</span> {p.desc}
                </p>
              ))}
            </Section>
          </div>
          <div className="bg-white rounded-xl border p-3">
            <Section title="Education">
              {d.education.map((e, i) => (
                <div key={i}>
                  <p className="font-semibold">{e.school}</p>
                  <p>{e.degree}</p>
                  <p className="opacity-70">{e.period}</p>
                </div>
              ))}
            </Section>
          </div>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="bg-white rounded-xl border p-3">
          <Section title="Skills">
            <div className="flex flex-wrap gap-2">
              {d.skills.map((s, i) => (
                <span key={i} className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-900">
                  {s}
                </span>
              ))}
            </div>
          </Section>
        </div>
        <div className="bg-white rounded-xl border p-3">
          <Section title="Certifications">
            <ul className="list-disc ml-4 space-y-1">
              {d.certifications.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Section>
        </div>
        <div className="bg-white rounded-xl border p-3">
          <Section title="Languages">
            <p>{d.languages.join(" • ")}</p>
          </Section>
        </div>
      </aside>
    </main>
  </div>
);

/* ---------- Template 5: Monochrome Timeline (Mono headings) ---------- */
const TemplateTimeline = ({ d }) => (
  <div className="h-full w-full bg-zinc-50 text-zinc-900 p-6 sm:p-8 md:p-10 text-[11px] sm:text-[12px]">
    <header className="flex items-center gap-4">
      <Avatar ring="ring-zinc-400" bg="bg-zinc-200" />
      <div>
        <h1 className="text-2xl font-mono font-bold">{d.name}</h1>
        <p className="font-mono text-sm opacity-80">{d.role}</p>
      </div>
      <div className="ml-auto text-right font-mono text-[11px] opacity-80">
        <p>{d.email}</p>
        <p>{d.phone}</p>
        <p>{d.website}</p>
        <p>{d.location}</p>
      </div>
    </header>

    <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3">
      <div className="md:col-span-2">
        <Section title="About">
          <p>{d.summary}</p>
        </Section>

        <Section title="Experience" className="mt-3">
          <div className="relative pl-6">
            <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-zinc-300" />
            {d.experience.map((e, i) => (
              <div key={i} className="relative pb-4">
                <div className="absolute -left-1 top-1 size-3 rounded-full bg-zinc-800" />
                <div className="flex justify-between font-mono">
                  <span className="font-bold">
                    {e.title} @ {e.company}
                  </span>
                  <span className="opacity-70">{e.period}</span>
                </div>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Projects" className="mt-3">
          {d.projects.map((p, i) => (
            <p key={i} className="mb-1">
              <span className="font-mono font-bold">{p.name}:</span> {p.desc}
            </p>
          ))}
        </Section>
      </div>

      <aside className="space-y-4">
        <Section title="Skills">
          <div className="flex flex-wrap gap-1.5">
            {d.skills.map((s, i) => (
              <span key={i} className="px-2 py-0.5 rounded border border-zinc-300 bg-white">
                {s}
              </span>
            ))}
          </div>
        </Section>
        <Section title="Education">
          {d.education.map((e, i) => (
            <div key={i}>
              <p className="font-bold">{e.school}</p>
              <p>{e.degree}</p>
              <p className="opacity-70">{e.period}</p>
            </div>
          ))}
        </Section>
        <Section title="Certifications">
          <ul className="list-disc ml-4 space-y-1">
            {d.certifications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </Section>
        <Section title="Languages">
          <p>{d.languages.join(" • ")}</p>
        </Section>
      </aside>
    </main>
  </div>
);

/* ---------- Carousel Shell ---------- */
const slides = [
  { id: "clean", component: TemplateMinimal },
  { id: "elegant", component: TemplateElegant },
  { id: "bold", component: TemplateBold },
  { id: "pastel", component: TemplatePastel },
  { id: "timeline", component: TemplateTimeline },
];

export default function HeroResumeCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = slides.length;

  // Autoplay (pause on hover)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(id);
  }, [paused, total]);

  const go = (dir) => {
    setIndex((i) => (i + dir + total) % total);
  };

  const SlideComp = useMemo(() => slides[index].component, [index]);

  return (
    <div
      className="relative w-full mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Mesmerizing background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-8 -right-10 size-72 rounded-full bg-cyan-400/20 blur-3xl animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-0 -left-10 size-80 rounded-full bg-indigo-400/20 blur-3xl animate-[spin_30s_linear_infinite_reverse]" />
      </div>

      {/* Viewport with A4 ratio (fits hero column) */}
      <div className="relative mx-auto aspect-[210/297] w-[min(90vw,720px)] sm:w-[min(90vw,640px)] lg:w-[min(40vw,720px)]">
        {/* Track (we swap content for smooth fade/slide illusion) */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full rounded-2xl shadow-2xl ring-1 ring-black/10 overflow-hidden transition-all duration-700"
            style={{
              transform: "translateZ(0)",
              boxShadow:
                "0 30px 60px -15px rgba(2,6,23,0.35), inset 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            <SlideComp d={resumeData} />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 -bottom-10 flex items-center justify-between px-2 sm:px-4">
        <button
          aria-label="Previous"
          onClick={() => go(-1)}
          className="rounded-full bg-white/90 shadow-md ring-1 ring-black/10 px-3 py-2 text-sm hover:bg-white"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-slate-900" : "w-2 bg-slate-400/60"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next"
          onClick={() => go(1)}
          className="rounded-full bg-white/90 shadow-md ring-1 ring-black/10 px-3 py-2 text-sm hover:bg-white"
        >
          ›
        </button>
      </div>
    </div>
  );
}
