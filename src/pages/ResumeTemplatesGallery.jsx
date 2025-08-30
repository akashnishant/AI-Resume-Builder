import React, { useState } from "react";
import { X } from "lucide-react";

import GoogleTemplate2 from "./templates/GoogleTemplate2";
import MicrosoftTemplate2 from "./templates/MicrosoftTemplate2";
import AmazonTemplate2 from "./templates/AmazonTemplate2";
import MetaTemplate2 from "./templates/MetaTemplate2";
import AdobeTemplate2 from "./templates/AdobeTemplate2";
import UberTemplate2 from "./templates/UberTemplate2";

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
  certifications: [
    "AWS Certified Developer – Associate",
    "Scrum Master (PSM I)",
  ],
  languages: ["English (Native)", "Spanish (Professional)"],
};

const templates = [
  { name: "Google Template", component: GoogleTemplate2 },
  { name: "Microsoft Template", component: MicrosoftTemplate2 },
  { name: "Amazon Template", component: AmazonTemplate2 },
  { name: "Meta Template", component: MetaTemplate2 },
  { name: "Adobe Template", component: AdobeTemplate2 },
  { name: "Uber Template", component: UberTemplate2 },
];

// ---------- Shared Components ----------
const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
      {title}
    </h2>
    {children}
  </div>
);

const Experience = ({ experience }) => (
  <Section title="Experience">
    {experience.map((job, idx) => (
      <div key={idx} className="mb-3">
        <h3 className="font-bold">
          {job.title} — {job.company}
        </h3>
        <p className="text-sm text-gray-600">{job.period}</p>
        <ul className="list-disc list-inside text-sm mt-1">
          {job.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    ))}
  </Section>
);

const Education = ({ education }) => (
  <Section title="Education">
    {education.map((ed, idx) => (
      <p key={idx}>
        <strong>{ed.degree}</strong>, {ed.school}{" "}
        <span className="text-sm text-gray-600">({ed.period})</span>
      </p>
    ))}
  </Section>
);

const Skills = ({ skills }) => (
  <Section title="Skills">
    <div className="flex flex-wrap gap-2">
      {skills.map((s, i) => (
        <span key={i} className="bg-gray-200 px-2 py-1 text-sm rounded">
          {s}
        </span>
      ))}
    </div>
  </Section>
);

const Projects = ({ projects }) => (
  <Section title="Projects">
    {projects.map((p, idx) => (
      <p key={idx}>
        <strong>{p.name}:</strong> {p.desc}
      </p>
    ))}
  </Section>
);

const Certifications = ({ certifications }) => (
  <Section title="Certifications">
    <ul className="list-disc list-inside text-sm">
      {certifications.map((c, i) => (
        <li key={i}>{c}</li>
      ))}
    </ul>
  </Section>
);

const Languages = ({ languages }) => (
  <Section title="Languages">
    <p>{languages.join(", ")}</p>
  </Section>
);

// ---------- Template Wrappers ----------
const Header = ({ data, color }) => (
  <div className={`p-4 ${color} text-white`}>
    <h1 className="text-2xl font-bold">{data.name}</h1>
    <p>{data.role}</p>
    <p className="text-sm">
      {data.location} | {data.email} | {data.phone} | {data.website}
    </p>
  </div>
);

export default function ResumeTemplatesGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="p-6 mt-20">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Choose Your Resume Template
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((t, idx) => {
            const Comp = t.component;
            return (
              <div
                key={t.name}
                onClick={() => setSelected(idx)}
                className="border rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden bg-white"
                style={{ height: '30rem'}}
              >
                <div className="h-auto overflow-hidden" style={{ padding: '17px 0px', height: '89%'}}>
                  {/* Thumbnail (scaled down view) */}
                  <div className="scale-75 origin-top -translate-y-10">
                    <Comp data={defaultResumeData} />
                  </div>
                </div>
                <div className="p-3 text-center font-medium">{t.name}</div>
              </div>
            );
          })}
        </div>

        {/* Modal Preview */}
        {selected !== null && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[9999]">
            <div className="bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 rounded-lg relative shadow-2xl">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-6">
                {(() => {
                  const Comp = templates[selected].component;
                  return <Comp data={defaultResumeData} />;
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
