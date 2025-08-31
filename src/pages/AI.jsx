"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Wand2,
  FileSearch,
  BrainCircuit,
  FileText,
  HelpCircle,
  LayoutTemplate,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import SecondaryButton from "../components/common/SecondaryButton";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import CopyBtn from "../components/common/CopyBtn";
import Progress from "../components/common/Progress";
import ScrollTop from "../components/ScrollTop";
import AIResumeForm from "./AIResumeForm";

/**
 * AI Demo Page
 * ------------------------------------------------------------
 * Requirements:
 *  - TailwindCSS enabled
 *  - npm i framer-motion lucide-react
 *
 * Notes:
 *  - All demos run fully client-side with lightweight logic for instant UX.
 *  - Replace callAI() with your backend fetch to wire up real models.
 *  - The full-screen Futuristic Loader overlay is included and reusable.
 */

// ---------- Utility: mock AI + helpers ----------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function callAI(fn, args) {
  // Simulate network + compute time and show the Futuristic Loader.
  await sleep(500 + Math.random() * 700);
  return fn(args);
}

const STOPWORDS = new Set(
  "a,an,the,of,to,in,and,or,for,on,with,by,as,is,are,was,were,be,been,being,that,this,from,at,into,it,its,over,under,we,our,your,you,he,she,they,them,his,her,their,which,who,whom,about,than,then,also,not,no,yes,can,could,should,would,may,might,have,has,had,do,does,did,done,but,so,if,when,while,where,there,here".split(",")
);

function tokenize(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9+.# ]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w));
}

function unique(arr) {
  return Array.from(new Set(arr));
}

// Power verbs for the bullet improver
const POWER_VERBS = [
  "Spearheaded",
  "Engineered",
  "Optimized",
  "Automated",
  "Architected",
  "Orchestrated",
  "Accelerated",
  "Reduced",
  "Improved",
  "Delivered",
  "Scaled",
];

function improveBullet({ text, tone = "professional", seniority = "mid" }) {
  const trimmed = text.trim();
  if (!trimmed) return "";

  // Ensure starts with a verb
  const verb = POWER_VERBS[Math.floor(Math.random() * POWER_VERBS.length)];

  // Try to pull a metric from text (very naive)
  const hasNumber = /\b\d{1,3}(?:%|x|X|\+)?\b/.test(trimmed);
  const metricAddon = hasNumber ? " — quantified impact maintained." : " — measurable outcomes delivered.";

  const toneMap = {
    professional: ["clear", "concise"],
    confident: ["confident", "impactful"],
    friendly: ["approachable", "user-focused"],
  };
  const [t1, t2] = toneMap[tone] || toneMap.professional;

  const seniorityTag = {
    junior: "(foundational)",
    mid: "(end-to-end)",
    senior: "(strategic)",
  }[seniority];

  let core = trimmed
    .replace(/^[-•\s]*/, "")
    .replace(/^(worked on|helped|involved in)/i, verb)
    .replace(/\.$/, "");

  if (!/^\b[A-Z]/.test(core)) {
    core = core.charAt(0).toUpperCase() + core.slice(1);
  }

  return `${verb} ${core.replace(/^\b\w+\b\s/, "")} (${t1}, ${t2}) ${seniorityTag}${metricAddon}`;
}

function keywordGap({ resume, jd }) {
  const r = unique(tokenize(resume));
  const j = unique(tokenize(jd));
  const rset = new Set(r);
  const common = j.filter((w) => rset.has(w));
  const missing = j.filter((w) => !rset.has(w)).slice(0, 20);
  const score = j.length ? Math.round((common.length / j.length) * 100) : 0;
  return { score, missing: missing.slice(0, 25).sort(), hits: common.length, total: j.length };
}

function extractSkills(text) {
  const skillsDict = [
    "javascript","typescript","react","next","node","express","java","spring","python","django","flask","c#",".net","go","rust","kotlin","swift","sql","mysql","postgres","mongodb","redis","docker","kubernetes","aws","gcp","azure","lambda","s3","ec2","terraform","ansible","git","ci/cd","graphql","rest","microservices","nlp","llm","prompt","huggingface","pytorch","tensorflow","sklearn","html","css","tailwind","redux","jest","cypress"
  ];
  const tokens = new Set(tokenize(text));
  return skillsDict.filter((s) => tokens.has(s.replace(/\+/g, "")));
}

function draftCoverLetter({ name, role, company, skills = [] }) {
  const intro = `Dear Hiring Team at ${company || "[Company]"},`;
  const line1 = `I'm excited to apply for the ${role || "[Role]"} role. I combine hands-on delivery with systems thinking, focusing on outcomes over outputs.`;
  const line2 = skills.length
    ? `Recently, I've been working with ${skills.slice(0, 6).join(", ")}, and I love solving ambiguous problems end-to-end.`
    : `I love solving ambiguous problems end-to-end and iterating quickly with users.`;
  const line3 = `I'd welcome the chance to demonstrate how my experience maps to ${company || "your team"}'s goals.`;
  const sign = `\n\nBest regards,\n${name || "Your Name"}`;
  return [intro, "", line1, line2, line3, sign].join("\n");
}

function generateInterviewQs(jd) {
  const keys = unique(tokenize(jd)).slice(0, 8);
  const base = [
    "Walk me through a project you're most proud of. What was the user impact?",
    "How do you prioritize when everything seems important?",
    "Tell me about a time you reduced toil via automation.",
  ];
  const techQs = keys.slice(0, 5).map((k) => `How have you used ${k} in production? What trade-offs did you make?`);
  return unique([...base, ...techQs]).slice(0, 8);
}

// ---------- Loader Overlay ----------
function FuturisticLoader({ visible, label = "Assembling your AI demo..." }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-gray-950/80">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse" />
      <div className="relative w-[90vw] max-w-md rounded-2xl bg-gray-900/90 p-6 shadow-2xl">
        <div className="mx-auto mb-5 flex justify-center">
          <div className="flex space-x-2">
            <span className="h-3 w-3 animate-bounce rounded-full bg-blue-400" />
            <span className="h-3 w-3 animate-bounce rounded-full bg-purple-400 [animation-delay:150ms]" />
            <span className="h-3 w-3 animate-bounce rounded-full bg-pink-400 [animation-delay:300ms]" />
          </div>
        </div>
        <p className="text-center text-sm text-gray-200">{label}</p>
      </div>
    </div>
  );
}

// ---------- Demo Page ----------
const SAMPLE = {
  bullet: "built api endpoints for resume parsing in node and improved response time by 30%",
  resume:
    "Senior Software Engineer with 8+ years. React, Node, Python, AWS, Docker, Kubernetes, PostgreSQL, Redis, REST, GraphQL, CI/CD. Led migration to microservices and improved reliability.",
  jd:
    "We seek a senior full‑stack engineer skilled in React, Node, AWS, Docker, Kubernetes, PostgreSQL, CI/CD, and microservices. Experience with GraphQL, performance optimization, and mentoring is a plus.",
  name: "Akash Nishant",
  role: "Senior Full‑Stack Engineer",
  company: "Acme Corp",
};

export default function AI() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // --- Bullet Improver ---
  const [bulletIn, setBulletIn] = useState(SAMPLE.bullet);
  const [tone, setTone] = useState("professional");
  const [seniority, setSeniority] = useState("mid");
  const [bulletOut, setBulletOut] = useState("");

  // --- Job Match ---
  const [resumeText, setResumeText] = useState(SAMPLE.resume);
  const [jdText, setJdText] = useState(SAMPLE.jd);
  const [match, setMatch] = useState({ score: 0, missing: [], hits: 0, total: 0 });

  // --- Skills Extractor ---
  const [skillsIn, setSkillsIn] = useState(SAMPLE.resume);
  const [skillsOut, setSkillsOut] = useState([]);

  // --- Cover Letter ---
  const [yourName, setYourName] = useState(SAMPLE.name);
  const [role, setRole] = useState(SAMPLE.role);
  const [company, setCompany] = useState(SAMPLE.company);
  const [letter, setLetter] = useState("");

  // --- Interview Questions ---
  const [qs, setQs] = useState([]);

  // --- Template Preview ---
  const templates = [
    { key: "clean", name: "Clean", accent: "from-blue-500/20 to-blue-500/5" },
    { key: "elegant", name: "Elegant", accent: "from-purple-500/20 to-purple-500/5" },
    { key: "bold", name: "Bold", accent: "from-pink-500/20 to-pink-500/5" },
  ];
  const [tpl, setTpl] = useState("clean");

  const selectedSkills = useMemo(() => extractSkills(skillsIn), [skillsIn]);

  async function runBullet() {
    setLoading(true);
    const out = await callAI(() => improveBullet({ text: bulletIn, tone, seniority }));
    setBulletOut(out);
    setLoading(false);
  }

  async function runMatch() {
    setLoading(true);
    const out = await callAI(() => keywordGap({ resume: resumeText, jd: jdText }));
    setMatch(out);
    setLoading(false);
  }

  async function runSkills() {
    setLoading(true);
    const out = await callAI(() => extractSkills(skillsIn));
    setSkillsOut(out);
    setLoading(false);
  }

  async function runLetter() {
    setLoading(true);
    const out = await callAI(() => draftCoverLetter({ name: yourName, role, company, skills: selectedSkills }));
    setLetter(out);
    setLoading(false);
  }

  async function runQs() {
    setLoading(true);
    const out = await callAI(() => generateInterviewQs(jdText));
    setQs(out);
    setLoading(false);
  }

  const handleAISummaryModal = () => {
    setOpenAISummaryModal(true);
  }

  return (
    <>
    <ScrollTop />
    <div className="min-h-screen bg-gray-950 text-white mt-20 content-page">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-gray-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <SecondaryButton onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4" /> Back
            </SecondaryButton>
          </div>
          <div className="flex gap-2">
            
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.12),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(236,72,153,0.10),transparent_45%)]" />
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-2xl font-semibold md:text-4xl"
          >
            Create Resume with the <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Power of AI</span>
          </motion.h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-300 md:text-base">
            Build your resume faster with AI-assisted tools. Improve bullets, match jobs, extract skills, draft cover letters, and prep for interviews — all in one place.
          </p>
        </div>
      </section>

      {/* Grid of Demos */}
      <main className="mx-auto max-w-6xl px-4 pb-16">
        <AIResumeForm />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          
          {/* Job Match & Gap */}
          <Card
            icon={FileSearch}
            title="Job Match & Keyword Gap"
            subtitle="Paste resume + JD to see match score and missing keywords"
            actions={
              <>
                <SecondaryButton onClick={() => { setResumeText(SAMPLE.resume); setJdText(SAMPLE.jd); setMatch({ score: 0, missing: [], hits: 0, total: 0 }); }}>Use sample</SecondaryButton>
                <Button onClick={runMatch}><FileSearch className="h-4 w-4" /> Analyze</Button>
              </>
            }
          >
            <TextArea label="Resume (snippet)" value={resumeText} onChange={setResumeText} rows={3} />
            <TextArea label="Job Description" value={jdText} onChange={setJdText} rows={3} />
            <div className="mt-1">
              <div className="mb-2 flex items-center justify-between text-xs text-gray-300">
                <span>Match Score</span>
                <span>{match.score}%</span>
              </div>
              <Progress value={match.score} />
              {match.total > 0 && (
                <p className="mt-2 text-xs text-gray-400">
                  {match.hits}/{match.total} keywords covered. Missing keywords:
                </p>
              )}
              {match.missing?.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {match.missing.map((m) => (
                    <span key={m} className="rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-200">{m}</span>
                  ))}
                </div>
              )}
            </div>
          </Card>

          {/* Skills Extractor */}
          <Card
            icon={BrainCircuit}
            title="Skills Extractor"
            subtitle="We detect hard skills from any text instantly"
            actions={
              <>
                <SecondaryButton onClick={() => { setSkillsIn(SAMPLE.resume); setSkillsOut([]); }}>Use sample</SecondaryButton>
                <Button onClick={runSkills}><BrainCircuit className="h-4 w-4" /> Extract</Button>
                {skillsOut?.length > 0 && <CopyBtn text={skillsOut.join(", ")} />}
              </>
            }
          >
            <TextArea label="Paste text" value={skillsIn} onChange={setSkillsIn} rows={4} />
            {skillsOut?.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {skillsOut.map((s) => (
                  <span key={s} className="rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-200">{s}</span>
                ))}
              </div>
            )}
          </Card>

          {/* Cover Letter Draft */}
          <Card
            icon={FileText}
            title="Cover Letter – First Paragraph"
            subtitle="Role + company + your name → a crisp intro paragraph"
            actions={
              <>
                <SecondaryButton onClick={() => { setYourName(SAMPLE.name); setRole(SAMPLE.role); setCompany(SAMPLE.company); setLetter(""); }}>Use sample</SecondaryButton>
                <Button onClick={runLetter}><FileText className="h-4 w-4" /> Draft</Button>
                {letter && <CopyBtn text={letter} />}
              </>
            }
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Input label="Your name" value={yourName} onChange={setYourName} placeholder="Your name" />
              <Input label="Role" value={role} onChange={setRole} placeholder="e.g. Senior Engineer" />
              <Input label="Company" value={company} onChange={setCompany} placeholder="e.g. Acme Corp" />
            </div>
            {selectedSkills.length > 0 && (
              <p className="text-xs text-gray-400">Using skills: {selectedSkills.slice(0, 8).join(", ")}</p>
            )}
            {letter && (
              <pre className="whitespace-pre-wrap rounded-xl border border-white/10 bg-gray-950 p-3 text-[13px] leading-relaxed text-gray-100">{letter}</pre>
            )}
          </Card>

          {/* Interview Questions */}
          <Card
            icon={HelpCircle}
            title="Interview Questions"
            subtitle="Top questions derived from the JD"
            actions={
              <>
                <SecondaryButton onClick={() => { setJdText(SAMPLE.jd); setQs([]); }}>Use sample JD</SecondaryButton>
                <Button onClick={runQs}><HelpCircle className="h-4 w-4" /> Generate</Button>
                {qs?.length > 0 && <CopyBtn text={qs.map((q, i) => `${i + 1}. ${q}`).join("\n")} />}
              </>
            }
          >
            <TextArea label="Job Description" value={jdText} onChange={setJdText} rows={4} />
            {qs?.length > 0 && (
              <ol className="list-decimal space-y-1 pl-5 text-sm text-gray-100">
                {qs.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ol>
            )}
          </Card>

          {/* Template Preview */}
          {/* <Card
            icon={LayoutTemplate}
            title="Template Preview"
            subtitle="Switch between themes to see different vibes"
            actions={
              <>
                <div className="inline-flex rounded-lg bg-gray-800 p-1 text-xs">
                  {templates.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setTpl(t.key)}
                      className={`rounded-md px-2 py-1 ${tpl === t.key ? "bg-gray-700" : "hover:bg-gray-700/60"}`}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
                <SecondaryButton onClick={() => navigate('/templates')}>Open gallery</SecondaryButton>
              </>
            }
          >
            <div className="overflow-hidden rounded-xl border border-white/10">
              <div className={`bg-gradient-to-br ${templates.find((t) => t.key === tpl)?.accent} p-5`}> 
                <div className="rounded-xl bg-gray-950 p-5">
                  
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-800" />
                    <div>
                      <div className="h-3 w-40 rounded bg-gray-800" />
                      <div className="mt-1 h-2 w-24 rounded bg-gray-800" />
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-2 rounded bg-gray-800" />
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-2 w-[90%] rounded bg-gray-800" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card> */}
        </div>
      </main>

      {/* Global Loader */}
      <FuturisticLoader visible={loading} />
    </div>
    </>
  );
}
