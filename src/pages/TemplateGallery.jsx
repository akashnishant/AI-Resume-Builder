// src/pages/TemplateGallery.jsx
import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  Requirements:
  - Tailwind CSS enabled in your project
  - framer-motion installed (optional, for nicer animation): npm i framer-motion
*/

/* -------------------------
  Utility: consistent container
------------------------- */
const PreviewShell = ({ children }) => (
  <div className="w-full max-w-[880px] mx-auto">{children}</div>
);

/* -------------------------
  Template renderer helpers
  Each template is a function returning JSX representing the FULL resume layout.
  We'll create 15 unique templates across Clean / Elegant / Bold.
------------------------- */

/* ---------- CLEAN templates (simple, whitespace-first, sans) ---------- */

function Clean1() {
  return (
    <PreviewShell>
      <article className="bg-white text-slate-900 rounded-xl shadow-md border overflow-hidden">
        <header className="p-8">
          <h1 className="text-3xl font-semibold">John Doe</h1>
          <p className="text-sm text-slate-600 mt-1">
            Senior Software Engineer • john@example.com • +91 98765 43210
          </p>
        </header>

        <div className="px-8 pb-8 space-y-6">
          <section>
            <h2 className="text-base font-semibold text-slate-800">Summary</h2>
            <p className="text-sm text-slate-700">
              Full-stack engineer with 8+ years building scalable web platforms,
              strong focus on performance and observability.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-800">Skills</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "GraphQL",
                "Docker",
                "Kubernetes",
              ].map((s) => (
                <span
                  key={s}
                  className="text-xs bg-slate-100 px-2 py-1 rounded-md"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-800">
              Experience
            </h2>
            <div className="mt-2 text-sm space-y-2">
              <div>
                <div className="font-medium">Staff Engineer — Acme Corp</div>
                <div className="text-xs text-slate-600">2021 – Present</div>
                <ul className="list-disc ml-5 mt-1 text-slate-700 text-sm">
                  <li>
                    Led migration to microservices improving deploy velocity by
                    3x.
                  </li>
                  <li>Implemented observability that decreased MTTR by 45%.</li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Senior Engineer — BuildIt</div>
                <div className="text-xs text-slate-600">2017 – 2021</div>
                <p className="text-sm text-slate-700">
                  Worked on high-traffic front-end features and platform APIs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-800">Projects</h2>
            <ul className="list-disc ml-5 text-sm text-slate-700">
              <li>
                Real-time analytics dashboard (React, WebSockets, D3) — 100K DAU
              </li>
              <li>Automated CI pipelines with cost optimization</li>
            </ul>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Education</h3>
              <p className="text-sm text-slate-700">
                B.Tech Computer Science — IIT Roorkee
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Certifications</h3>
              <p className="text-sm text-slate-700">
                AWS Solutions Architect — Professional
              </p>
            </div>
          </section>
        </div>
      </article>
    </PreviewShell>
  );
}

function Clean2() {
  // Includes avatar
  return (
    <PreviewShell>
      <article className="bg-white text-slate-900 rounded-xl shadow-md border overflow-hidden">
        <header className="flex items-center gap-6 p-6">
          <div className="w-20 h-20 rounded-full bg-slate-200 flex-shrink-0" />
          <div>
            <h1 className="text-2xl font-semibold">Jane Smith</h1>
            <p className="text-sm text-slate-600">
              Product Designer • jane@design.com • portfolio.design/jane
            </p>
          </div>
        </header>

        <div className="px-6 pb-6 space-y-5">
          <section>
            <h2 className="font-semibold">Profile</h2>
            <p className="text-sm text-slate-700">
              Designs human-centered interfaces and design systems used by
              millions.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-3">
              <section>
                <h3 className="font-semibold">Experience</h3>
                <p className="text-sm text-slate-700">
                  Lead Product Designer — Pixel Labs (2019–Present)
                </p>
                <ul className="list-disc ml-5 text-slate-700 text-sm">
                  <li>Built component library adopted company-wide.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold">Projects</h3>
                <p className="text-sm text-slate-700">
                  Design system + guidelines, E-commerce exploration.
                </p>
              </section>
            </div>

            <aside className="bg-slate-50 p-3 rounded-md">
              <h3 className="font-semibold text-sm">Skills</h3>
              <ul className="text-sm mt-2 space-y-1 text-slate-700">
                <li>Figma</li>
                <li>Prototyping</li>
                <li>UX Research</li>
              </ul>
            </aside>
          </div>

          <section>
            <h3 className="font-semibold">Education</h3>
            <p className="text-sm text-slate-700">
              B.Des Interaction Design — NID
            </p>
          </section>
        </div>
      </article>
    </PreviewShell>
  );
}

function Clean3() {
  return (
    <PreviewShell>
      <article className="bg-white text-slate-900 rounded-xl shadow-sm border overflow-hidden">
        <header className="p-6">
          <h1 className="text-2xl font-semibold">Rahul Verma</h1>
          <p className="text-sm text-slate-600">
            Data Scientist • rahul@data.com • Bengaluru
          </p>
        </header>

        <div className="p-6 space-y-5">
          <section>
            <h2 className="font-semibold">Summary</h2>
            <p className="text-sm text-slate-700">
              Applied ML engineer with expertise in productionizing models and
              time-series forecasting.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">Technical Skills</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Python", "PyTorch", "sklearn", "SQL", "Airflow"].map((s) => (
                <span
                  key={s}
                  className="text-xs bg-slate-100 px-2 py-1 rounded"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-semibold">Experience</h2>
            <ul className="list-disc ml-5 text-sm text-slate-700">
              <li>Senior ML Engineer — DataWorks (2020–Present)</li>
              <li>ML Engineer — Insights Lab (2017–2020)</li>
            </ul>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Education</h3>
              <p className="text-sm text-slate-700">M.Tech — IISc</p>
            </div>
            <div>
              <h3 className="font-semibold">Publications</h3>
              <p className="text-sm text-slate-700">
                3 papers in top-tier ML conferences
              </p>
            </div>
          </section>

          <section>
            <h3 className="font-semibold">Certifications</h3>
            <p className="text-sm text-slate-700">
              Coursera Deep Learning Specialization
            </p>
          </section>
        </div>
      </article>
    </PreviewShell>
  );
}

/* ---------- ELEGANT templates (serif, muted palettes, two-column variants) ---------- */

function Elegant1() {
  // serif, muted beige top border
  return (
    <PreviewShell>
      <article className="bg-cream-50 bg-[#fbfaf7] text-slate-900 rounded-xl shadow-lg p-8 font-serif border-t-4 border-[#c6a15b]">
        <header className="mb-4">
          <h1 className="text-3xl font-bold text-[#8b5e34]">Sophia Williams</h1>
          <p className="italic text-slate-600">
            Communications Director • sophia@media.co
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold text-[#8b5e34]">Profile</h2>
            <p className="text-sm text-slate-700">
              Strategic communications lead with global brand experience.
            </p>

            <h3 className="mt-4 font-semibold">Education</h3>
            <p className="text-sm text-slate-700">MA in Communications — LSE</p>
          </div>

          <div>
            <h3 className="font-semibold text-[#8b5e34]">Experience</h3>
            <ul className="list-disc ml-5 text-sm text-slate-700">
              <li>Director of Communications — Global Media (2018–Present)</li>
              <li>Comm Manager — Bright Agency (2014–2018)</li>
            </ul>

            <h3 className="mt-4 font-semibold">Honors</h3>
            <p className="text-sm text-slate-700">
              Multiple industry awards for campaign excellence
            </p>
          </div>
        </section>

        <section className="mt-6">
          <h3 className="font-semibold">Skills & Tools</h3>
          <p className="text-sm text-slate-700">
            PR, Content Strategy, Campaign Management, Adobe Suite
          </p>
        </section>
      </article>
    </PreviewShell>
  );
}

function Elegant2() {
  // two-column with left sidebar image
  return (
    <PreviewShell>
      <article className="bg-white text-slate-900 rounded-xl shadow-lg overflow-hidden grid md:grid-cols-3">
        <aside className="md:col-span-1 bg-[#f3f6f7] p-6 flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-slate-200 mb-3"></div>
          <h2 className="text-lg font-semibold">Olivia Brown</h2>
          <p className="text-sm text-slate-600">HR Leader</p>
          <div className="mt-4 text-sm text-slate-700">
            <p>HR Strategy</p>
            <p>Leadership Development</p>
          </div>
        </aside>

        <div className="md:col-span-2 p-6 space-y-4">
          <h1 className="text-2xl font-serif font-bold">Olivia Brown</h1>
          <section>
            <h3 className="font-semibold">Profile</h3>
            <p className="text-sm text-slate-700">
              Senior HR leader with expertise in enterprise people strategy.
            </p>
          </section>

          <section>
            <h3 className="font-semibold">Experience</h3>
            <ul className="list-disc ml-5 text-sm text-slate-700">
              <li>Head of People — EnterpriseX (2019–Present)</li>
              <li>People Partner — BizCo (2014–2019)</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold">Education & Certificates</h3>
            <p className="text-sm text-slate-700">MBA — XLRI • SHRM-SCP</p>
          </section>
        </div>
      </article>
    </PreviewShell>
  );
}

function Elegant3() {
  // serif, headline with subtle gold accents
  return (
    <PreviewShell>
      <article className="bg-white text-slate-900 rounded-xl shadow p-8 font-serif border-b-4 border-[#b38b4a]">
        <header className="mb-4">
          <h1 className="text-3xl font-bold text-[#704214]">Liam Anderson</h1>
          <p className="italic text-slate-600">Financial Consultant</p>
        </header>

        <section className="space-y-3">
          <h3 className="font-semibold">Summary</h3>
          <p className="text-sm text-slate-700">
            Consultant with 10+ years advising enterprise clients on M&A and
            finance operations.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Experience</h4>
              <p className="text-sm text-slate-700">
                Senior Consultant — FinAdvisors (2016–Present)
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Education</h4>
              <p className="text-sm text-slate-700">MBA — IIM Ahmedabad</p>
            </div>
          </div>

          <h4 className="font-semibold">Notable Achievements</h4>
          <ul className="list-disc ml-5 text-sm text-slate-700">
            <li>IPO advisory for large tech firm</li>
          </ul>
        </section>
      </article>
    </PreviewShell>
  );
}

function Elegant4() {
  // subtle two-column lists and soft teal accent
  return (
    <PreviewShell>
      <article className="bg-[#f7fbfb] text-slate-900 rounded-xl shadow-lg p-8 font-serif border-l-4 border-teal-400">
        <h1 className="text-3xl font-bold text-teal-700">Noah Davis</h1>
        <p className="italic text-slate-600">Operations Strategist</p>

        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Profile</h3>
            <p className="text-sm text-slate-700">
              Ops specialist driving efficiency and supply chain modernization.
            </p>
            <h3 className="mt-3 font-semibold">Skills</h3>
            <p className="text-sm text-slate-700">
              Supply Chain, Lean, Process Design
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Experience</h3>
            <p className="text-sm text-slate-700">
              Operations Lead — SupplyNet (2017–Present)
            </p>
          </div>
        </div>

        <section className="mt-6">
          <h3 className="font-semibold">Education</h3>
          <p className="text-sm text-slate-700">B.Eng — IIT Bombay</p>
        </section>
      </article>
    </PreviewShell>
  );
}

function Elegant5() {
  // smaller card with top banner accent
  return (
    <PreviewShell>
      <article className="rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-[#efe6d6] to-white p-6">
          <h1 className="text-3xl font-serif font-bold text-[#6b4a2d]">
            Emma Thompson
          </h1>
          <p className="text-sm text-[#6b4a2d] italic">Creative Director</p>
        </div>

        <div className="bg-white p-6">
          <section>
            <h3 className="font-semibold">Projects</h3>
            <p className="text-sm text-slate-700">
              Led global creative campaigns and rebranding programs.
            </p>
          </section>

          <section className="mt-4">
            <h3 className="font-semibold">Clients</h3>
            <p className="text-sm text-slate-700">
              Multiple enterprise & consumer brands
            </p>
          </section>

          <section className="mt-4">
            <h3 className="font-semibold">Education</h3>
            <p className="text-sm text-slate-700">
              BA in Design — Central Saint Martins
            </p>
          </section>
        </div>
      </article>
    </PreviewShell>
  );
}

/* ---------- BOLD templates (multi-color, high contrast, creative) ---------- */

function Bold1() {
  // black base + red accent, includes avatar
  return (
    <PreviewShell>
      <article className="bg-black text-white rounded-xl shadow-lg p-6 border-t-4 border-red-600 font-sans">
        <header className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-full" />
          <div>
            <h1 className="text-2xl font-bold text-red-400">Aarav Patel</h1>
            <p className="text-sm text-gray-300">Cybersecurity Specialist</p>
          </div>
        </header>

        <div className="mt-4 space-y-4 text-sm text-gray-200">
          <section>
            <h3 className="font-semibold text-red-300">Summary</h3>
            <p>
              Security lead specializing in red-team testing and secure platform
              design.
            </p>
          </section>
          <section>
            <h3 className="font-semibold text-red-300">Experience</h3>
            <p>Senior Security Engineer — SecureNet (2018–Present)</p>
          </section>
          <section>
            <h3 className="font-semibold text-red-300">Certifications</h3>
            <p>OSCP, CISSP</p>
          </section>
        </div>
      </article>
    </PreviewShell>
  );
}

function Bold2() {
  // indigo -> emerald gradient, multi color headers
  return (
    <PreviewShell>
      <article className="rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-br from-indigo-900 to-emerald-700 text-white p-6 font-sans">
          <h1 className="text-2xl font-bold">Maya Verma</h1>
          <p className="text-sm">AI Researcher</p>
        </div>

        <div className="bg-white p-6">
          <section>
            <h3 className="font-semibold text-indigo-700">Research</h3>
            <p className="text-sm text-gray-700">
              Focus on NLP, model interpretability and LLM safety.
            </p>
          </section>

          <section className="mt-3">
            <h3 className="font-semibold text-emerald-700">Publications</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>Interpretable LLMs — ICML 2023</li>
              <li>Robustness in generative models — NeurIPS 2022</li>
            </ul>
          </section>

          <section className="mt-3">
            <h3 className="font-semibold text-indigo-700">Skills</h3>
            <p className="text-sm text-gray-700">
              PyTorch, Transformers, Prompt Engineering
            </p>
          </section>
        </div>
      </article>
    </PreviewShell>
  );
}

function Bold3() {
  // amber + slate blocks style
  return (
    <PreviewShell>
      <article className="rounded-xl shadow-lg overflow-hidden grid md:grid-cols-3">
        <div className="md:col-span-1 bg-amber-600 text-white p-6">
          <h2 className="text-xl font-bold">Kabir Singh</h2>
          <p className="text-sm">Product Manager</p>
          <div className="mt-4 text-sm">
            <p>Launched data-driven product roadmaps</p>
          </div>
        </div>
        <div className="md:col-span-2 bg-white p-6">
          <h3 className="font-semibold text-amber-700">Overview</h3>
          <p className="text-sm text-gray-700">
            Product leader with experience at scaleups and enterprise SaaS.
          </p>

          <section className="mt-3">
            <h4 className="font-semibold">Experience</h4>
            <p className="text-sm text-gray-700">PM — ScaleUp (2019–Present)</p>
          </section>

          <section className="mt-3">
            <h4 className="font-semibold">Achievements</h4>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>Grew user adoption by 4x for key product</li>
            </ul>
          </section>
        </div>
      </article>
    </PreviewShell>
  );
}

function Bold4() {
  // dark slate with cyan + orange accents
  return (
    <PreviewShell>
      <article className="bg-gradient-to-br from-slate-800 via-gray-900 to-black text-white rounded-xl shadow-lg p-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-cyan-300">Rohan Mehta</h1>
            <p className="text-sm text-gray-300">Blockchain Developer</p>
          </div>
          <div className="text-sm text-orange-300 font-semibold">
            Solidity • Rust
          </div>
        </header>

        <div className="mt-4 space-y-3 text-sm text-gray-200">
          <section>
            <h3 className="font-semibold text-cyan-300">Projects</h3>
            <p>
              DeFi protocol design, layer-2 implementations, smart contract
              audits.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-orange-300">Experience</h3>
            <p>Blockchain Engineer — ChainWorks (2020–Present)</p>
          </section>

          <section>
            <h3 className="font-semibold text-cyan-300">Open Source</h3>
            <p>Maintainer of wallet tools and test frameworks</p>
          </section>
        </div>
      </article>
    </PreviewShell>
  );
}

function Bold5() {
  // white base with purple footer accent and purple header line
  return (
    <PreviewShell>
      <article className="bg-white rounded-xl shadow-lg border-b-8 border-purple-600 overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-purple-700">Ananya Gupta</h1>
          <p className="text-sm text-gray-600">
            Creative Writer • ananya@words.com
          </p>

          <section className="mt-4">
            <h3 className="font-semibold">Bio</h3>
            <p className="text-sm text-gray-700">
              Published author and content strategist with focus on long-form
              narrative and storytelling.
            </p>
          </section>

          <section className="mt-3">
            <h3 className="font-semibold">Publications</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>Featured in LitMag</li>
              <li>Contributor — National Press</li>
            </ul>
          </section>

          <section className="mt-3">
            <h3 className="font-semibold">Education</h3>
            <p className="text-sm text-gray-700">
              M.A. Creative Writing — Delhi University
            </p>
          </section>
        </div>

        <footer className="bg-purple-600 text-white p-4">
          <div className="text-sm">
            Awards • Workshops • Speaker engagements
          </div>
        </footer>
      </article>
    </PreviewShell>
  );
}

/* -------------------------
  Templates map: categories -> array of {id, component}
------------------------- */

const CATEGORIES = {
  Clean: [
    { id: "clean1", component: <Clean1 /> },
    { id: "clean2", component: <Clean2 /> },
    { id: "clean3", component: <Clean3 /> },
  ],
  Elegant: [
    { id: "elegant1", component: <Elegant1 /> },
    { id: "elegant2", component: <Elegant2 /> },
    { id: "elegant3", component: <Elegant3 /> },
    { id: "elegant4", component: <Elegant4 /> },
    { id: "elegant5", component: <Elegant5 /> },
  ],
  Bold: [
    { id: "bold1", component: <Bold1 /> },
    { id: "bold2", component: <Bold2 /> },
    { id: "bold3", component: <Bold3 /> },
    { id: "bold4", component: <Bold4 /> },
    { id: "bold5", component: <Bold5 /> },
  ],
};

/* -------------------------
  TemplateGallery component
------------------------- */

export default function TemplateGallery() {
  const [category, setCategory] = useState("Clean");
  const [selected, setSelected] = useState(null); // { id, component }

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function ResumeCard({ comp }) {
    const cardRef = useRef(null);
    const contentRef = useRef(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
      function handleResize() {
        if (cardRef.current && contentRef.current) {
          const card = cardRef.current.getBoundingClientRect();
          const content = contentRef.current.getBoundingClientRect();

          // calculate the scale to fit without cutting
          const scaleX = card.width / content.width;
          const scaleY = card.height / content.height;
          const newScale = Math.min(scaleX, scaleY) * 0.95; // padding
          setScale(newScale);
        }
      }

      handleResize(); // run once
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <div
        ref={cardRef}
        className="h-[420px] w-full bg-white flex items-center justify-center overflow-hidden rounded-xl shadow-md"
      >
        <div
          ref={contentRef}
          className="origin-center"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          {comp}
        </div>
      </div>
    );
  }

  function RenderPreviewCard({ comp }) {
    return (
      <>
        <ResumeCard comp={comp} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-20 content-page">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
          AI Resume Template Gallery
        </h1>
        <p className="text-center text-sm text-gray-600 mb-8">
          Pick a style. Click any card to preview the full template. Modal opens
          above any fixed header.
        </p>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
          {Object.keys(CATEGORIES).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                category === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white border text-gray-700 hover:shadow"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES[category].map((t) => (
            <motion.div
              key={t.id}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(t)}
            >
              <RenderPreviewCard comp={t.component} />
              <div className="p-4 border-t">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-sm">
                    {t.id.replace(/([a-z]+)(\d)/i, (m) => m)}
                  </div>
                  <div className="text-xs text-gray-500">Preview</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal (top of header) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)} // outside click closes
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-y-auto relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 rounded-full bg-gray-800 text-white px-3 py-1 text-sm z-50"
                aria-label="Close preview"
              >
                Close
              </button>

              <div className="p-6">
                {/* Render the full template inside modal */}
                {selected.component}
                {/* Bottom CTA area */}
                <div className="mt-6 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelected(null)}
                    className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
