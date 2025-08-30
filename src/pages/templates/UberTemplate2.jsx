// ---------- Shared Components ----------
const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">{title}</h2>
    {children}
  </div>
);

const Experience = ({ experience }) => (
  <Section title="Experience">
    {experience.map((job, idx) => (
      <div key={idx} className="mb-3">
        <h3 className="font-bold">{job.title} — {job.company}</h3>
        <p className="text-sm text-gray-600">{job.period}</p>
        <ul className="list-disc list-inside text-sm mt-1">
          {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    ))}
  </Section>
);

const Education = ({ education }) => (
  <Section title="Education">
    {education.map((ed, idx) => (
      <p key={idx}>
        <strong>{ed.degree}</strong>, {ed.school} <span className="text-sm text-gray-600">({ed.period})</span>
      </p>
    ))}
  </Section>
);

const Skills = ({ skills }) => (
  <Section title="Skills">
    <div className="flex flex-wrap gap-2">
      {skills.map((s, i) => (
        <span key={i} className="bg-gray-200 px-2 py-1 text-sm rounded">{s}</span>
      ))}
    </div>
  </Section>
);

const Projects = ({ projects }) => (
  <Section title="Projects">
    {projects.map((p, idx) => (
      <p key={idx}><strong>{p.name}:</strong> {p.desc}</p>
    ))}
  </Section>
);

const Certifications = ({ certifications }) => (
  <Section title="Certifications">
    <ul className="list-disc list-inside text-sm">
      {certifications.map((c, i) => <li key={i}>{c}</li>)}
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
    <p className="text-sm">{data.location} | {data.email} | {data.phone} | {data.website}</p>
  </div>
);

export default function UberTemplate2({ data = defaultResumeData }) {
  const d = data;
  return (
    <div className="border max-w-3xl mx-auto my-6 bg-black text-white">
      <Header data={d} color="bg-gray-900" />
      <div className="p-6">
        <p className="mb-4">{d.summary}</p>
        <Experience experience={d.experience} />
        <Projects projects={d.projects} />
        <Skills skills={d.skills} />
        <Education education={d.education} />
        <Certifications certifications={d.certifications} />
        <Languages languages={d.languages} />
      </div>
    </div>
  );
};