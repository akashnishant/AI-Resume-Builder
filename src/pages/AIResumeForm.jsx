import React, { useState } from "react";
import Button from "../components/common/Button";
import { Wand2, X } from "lucide-react";
import Card from "../components/common/Card";
import SecondaryButton from "../components/common/SecondaryButton";
import TextArea from "../components/common/TextArea";
import getSystemPrompt from "../utils/systemPrompt";
import getExperienceSystemPrompt from "../utils/experienceSystemPrompt";
import getProjectSystemPrompt from "../utils/projectSystemPrompt";

const AIResumeForm = (props) => {
  const WORKER_ENDPOINT = "https://ai-resume.akashnishant25.workers.dev";

  const [loading, setLoading] = useState(false);
  const [openAISummaryModal, setOpenAISummaryModal] = useState(false);
  const [openAIExpBulletModal, setOpenAIExpBulletModal] = useState(false);
  const [openAIProjectDescModal, setOpenAIProjectDescModal] = useState(false);
  const [tone, setTone] = useState("professional");
  const [seniority, setSeniority] = useState("mid");
  const [improvedSummary, setImprovedSummary] = useState("");
  const [improvedExpBullet, setImprovedExpBullet] = useState("");
  const [improvedExpBulletPosition, setImprovedExpBulletPosition] = useState(0);
  const [improvedProjectDesc, setImprovedProjectDesc] = useState("");
  const [improvedProjectDescPosition, setImprovedProjectDescPosition] = useState(0);

  const [resumeData, setResumeData] = useState({
    name: "",
    role: "",
    location: "",
    email: "",
    phone: "",
    website: "",
    summary: "",
    experience: [
      {
        company: "",
        title: "",
        period: "",
        bullets: [""],
      },
    ],
    education: [
      {
        school: "",
        degree: "",
        period: "",
      },
    ],
    skills: [""],
    projects: [{ name: "", desc: [""] }],
    certifications: [""],
    languages: [""],
  });

  // Generic handler
  const handleChange = (section, index, field, value) => {
    const updated = { ...resumeData };
    updated[section][index][field] = value;
    setResumeData(updated);
  };

  // Add item
  const handleAdd = (section, newItem) => {
    setResumeData({
      ...resumeData,
      [section]: [...resumeData[section], newItem],
    });
  };

  // Remove item
  const handleRemove = (section, index) => {
    const updated = { ...resumeData };
    updated[section].splice(index, 1);
    setResumeData({ ...updated });
  };

  //Handle AI Summary Modal
  const handleAISummaryModal = (st) => {
    setOpenAISummaryModal(st);
    setImprovedSummary("");
  };

  // Improve Summary with AI
  const improveSummaryWithAI = async (summary) => {
    setLoading(true);
    const data = await callGroqAPIForSummary(summary + `\n\nTone: ${tone}\nSeniority: ${seniority}`);
    let aiResponse = "";
    if(data && data?.choices?.length) {
      aiResponse = data?.choices[0]?.message?.content;
    } else if(aiResponse?.error?.message === "Internal Server Error") {
      aiResponse = "There is some error at my end. Please try after some time."
    } else {
      aiResponse = "Please try after few minutes";
    }
    setImprovedSummary(aiResponse);
  }
  
  //Handle AI Exp Bullet Modal
  const handleAIExpBulletModal = (st, position) => {
    setOpenAIExpBulletModal(st);
    setImprovedExpBulletPosition(position);
    setImprovedExpBullet("");
  };

  // Improve Exp Bullet with AI
  const improveExpBulletWithAI = async (expBullet) => {
    setLoading(true);
    const data = await callGroqAPIForExperience(expBullet + `\n\nTone: ${tone}\nSeniority: ${seniority}`);
    let aiResponse = "";
    if(data && data?.choices?.length) {
      aiResponse = data?.choices[0]?.message?.content;
    } else if(aiResponse?.error?.message === "Internal Server Error") {
      aiResponse = "There is some error at my end. Please try after some time."
    } else {
      aiResponse = "Please try after few minutes";
    }
    setImprovedExpBullet(aiResponse);
  }
  
  //Handle AI Project Desc Modal
  const handleAIProjectDescModal = (st, position) => {
    setOpenAIProjectDescModal(st);
    setImprovedProjectDescPosition(position);
    setImprovedProjectDesc("");
  };

  // Improve Project Desc with AI
  const improveProjectDescWithAI = async (projectDesc) => {
    setLoading(true);
    const data = await callGroqAPIForProject(projectDesc + `\n\nTone: ${tone}\nSeniority: ${seniority}`);
    let aiResponse = "";
    if(data && data?.choices?.length) {
      aiResponse = data?.choices[0]?.message?.content;
    } else if(aiResponse?.error?.message === "Internal Server Error") {
      aiResponse = "There is some error at my end. Please try after some time."
    } else {
      aiResponse = "Please try after few minutes";
    }
    setImprovedProjectDesc(aiResponse);
  }

  // AI APIs would go here - Summary
  async function callGroqAPIForSummary(text) {
    if (
      !WORKER_ENDPOINT
    ) {
      throw new Error("Cloudflare Worker endpoint not configured");
    }

    const requestBody = {
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: getSystemPrompt() },
          { role: "user", content: text },
        ],
        temperature: 0.5,
        max_tokens: 1000,
      };

    const response = await fetch(WORKER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Worker Error Response:", errorText);
      setLoading(false);
      throw new Error(`Worker Error: ${response.status} - ${errorText}`);
    }

    setLoading(false);
    return await response.json();
  }
  
  // AI APIs would go here - Experience
  async function callGroqAPIForExperience(text) {
    if (
      !WORKER_ENDPOINT
    ) {
      throw new Error("Cloudflare Worker endpoint not configured");
    }

    const requestBody = {
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: getExperienceSystemPrompt() },
          { role: "user", content: text },
        ],
        temperature: 0.5,
        max_tokens: 1000,
      };

    const response = await fetch(WORKER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Worker Error Response:", errorText);
      setLoading(false);
      throw new Error(`Worker Error: ${response.status} - ${errorText}`);
    }

    setLoading(false);
    return await response.json();
  }
  
  // AI APIs would go here - Project
  async function callGroqAPIForProject(text) {
    if (
      !WORKER_ENDPOINT
    ) {
      throw new Error("Cloudflare Worker endpoint not configured");
    }

    const requestBody = {
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: getProjectSystemPrompt() },
          { role: "user", content: text },
        ],
        temperature: 0.5,
        max_tokens: 1000,
      };

    const response = await fetch(WORKER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Worker Error Response:", errorText);
      setLoading(false);
      throw new Error(`Worker Error: ${response.status} - ${errorText}`);
    }

    setLoading(false);
    return await response.json();
  }

  // ---------- Loader Overlay ----------
  function FuturisticLoader({ visible, label = "Improving your data..." }) {
    if (!visible) return null;
    return (
      <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-gray-950/80">
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

  return (
    <div className="max-w-6xl mx-auto p-6 bg-transparet rounded-2xl shadow-lg mb-6 bg-gray-900/80 p-5 shadow-lg" style={{marginTop: '-30px'}}>
      <h1 className="text-2xl font-bold mb-6 text-center">Fill Your Details</h1>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          className="p-2 rounded bg-black"
          placeholder="Full Name"
          value={resumeData.name}
          onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}
        />
        <input
          className="p-2 rounded bg-black"
          placeholder="Role"
          value={resumeData.role}
          onChange={(e) => setResumeData({ ...resumeData, role: e.target.value })}
        />
        <input
          className="p-2 rounded bg-black"
          placeholder="Location"
          value={resumeData.location}
          onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })}
        />
        <input
          className="p-2 rounded bg-black"
          placeholder="Email"
          value={resumeData.email}
          onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })}
        />
        <input
          className="p-2 rounded bg-black"
          placeholder="Phone"
          value={resumeData.phone}
          onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })}
        />
        <input
          className="p-2 rounded bg-black"
          placeholder="Website"
          value={resumeData.website}
          onChange={(e) => setResumeData({ ...resumeData, website: e.target.value })}
        />
      </div>

      {/* Summary */}
      <textarea
        className="w-full p-2 rounded mb-2 bg-black"
        rows="6"
        placeholder="Seasoned engineer with 8+ years building scalable web platforms. Passionate about DX, performance, and elegant UX."
        value={resumeData.summary}
        onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
      />
      <div className="mb-6">
        <Button disabled={resumeData?.summary?.length === 0 ? true : false} onClick={() => handleAISummaryModal(true)}><Wand2 className="h-4 w-4" /> Improve Summary with our AI</Button>
      </div>

      {/* Experience Section */}
      <h2 className="text-xl font-semibold mb-2">Experience</h2>
      {resumeData.experience.map((exp, i) => (
        <div key={i} className="p-4 rounded mb-0 bg-gray-50 bg-transparent">
          <input
            className="p-2 rounded w-full mb-2 bg-black"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => handleChange("experience", i, "company", e.target.value)}
          />
          <input
            className="p-2 rounded w-full mb-2 bg-black"
            placeholder="Title"
            value={exp.title}
            onChange={(e) => handleChange("experience", i, "title", e.target.value)}
          />
          <input
            className="p-2 rounded w-full mb-2 bg-black"
            placeholder="2020 — Present"
            value={exp.period}
            onChange={(e) => handleChange("experience", i, "period", e.target.value)}
          />
          <textarea
            className="p-2 rounded w-full mb-2 bg-black"
            placeholder="Achievements / Bullets"
            rows="6"
            value={exp.bullets.join("\n")}
            onChange={(e) =>
              handleChange("experience", i, "bullets", e.target.value.split("\n"))
            }
          />
          <div className="mb-6">
            <Button disabled={exp.bullets.join("\n")?.length > 0 ? false : true} onClick={() => {handleAIExpBulletModal(true, i)}}><Wand2 className="h-4 w-4" /> Improve Bullets with our AI</Button>
          </div>
          <button
            className="text-red-500 text-sm"
            onClick={() => handleRemove("experience", i)}
          >
            ❌ Remove Experience
          </button>
        </div>
      ))}
      <div className="mb-6">
      <button 
        type="button" 
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={() =>
          handleAdd("experience", {
            company: "",
            title: "",
            period: "",
            bullets: [""],
          })
        }>➕ Add Experience</button>
      </div>
      
      {/* Projects Section */}
      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      {resumeData.projects.map((exp, i) => (
        <div key={i} className="p-4 rounded mb-0 bg-gray-50 bg-transparent">
          <input
            className="p-2 rounded w-full mb-2 bg-black"
            placeholder="Name"
            value={exp.name}
            onChange={(e) => handleChange("projects", i, "name", e.target.value)}
          />
          <textarea
            className="p-2 rounded w-full mb-2 bg-black"
            placeholder="Description"
            rows="6"
            value={exp.desc.join("\n")}
            onChange={(e) =>
              handleChange("projects", i, "desc", e.target.value.split("\n"))
            }
          />
          <div className="mb-6">
            <Button disabled={exp.desc.join("\n")?.length > 0 ? false : true} onClick={() => {handleAIProjectDescModal(true, i)}}><Wand2 className="h-4 w-4" /> Improve Project Desc with our AI</Button>
          </div>
          <button
            className="text-red-500 text-sm"
            onClick={() => handleRemove("projects", i)}
          >
            ❌ Remove Project
          </button>
        </div>
      ))}
      <div className="mb-6">
      <button 
        type="button" 
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={() =>
          handleAdd("projects", {
            name: "",
            desc: [""],
          })
        }>➕ Add Project</button>
      </div>

      {/* Education Section */}
      <h2 className="text-xl font-semibold mb-2">Education</h2>
      {resumeData.education.map((exp, i) => (
        <div key={i} className="p-4 rounded mb-0 bg-gray-50 bg-transparent">
          <input
            className="p-2 rounded w-full mb-2 bg-black"
            placeholder="School / University"
            value={exp.school}
            onChange={(e) => handleChange("education", i, "school", e.target.value)}
          />
          <input
            className="p-2 rounded w-full mb-2 bg-black"
            placeholder="Degree"
            value={exp.degree}
            onChange={(e) => handleChange("education", i, "degree", e.target.value)}
          />
          <input
            className="p-2 rounded w-full mb-2 bg-black"
            placeholder="Period"
            value={exp.period}
            onChange={(e) => handleChange("experience", i, "period", e.target.value)}
          />
          <button
            className="text-red-500 text-sm"
            onClick={() => handleRemove("education", i)}
          >
            ❌ Remove Education
          </button>
        </div>
      ))}
      <div className="mb-6">
      <button 
        type="button" 
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={() =>
          handleAdd("education", {
            school: "",
            degree: "",
            period: "",
          })
        }>➕ Add Education</button>
      </div>

      {/* Skills Section */}
      <h2 className="text-xl font-semibold mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2 mb-4 py-2 ml-1">
        {resumeData.skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded bg-transparent">
            <input
              className="bg-black border-b border-gray-400 focus:outline-none"
              placeholder="Skill"
              value={skill}
              onChange={(e) => {
                const updated = [...resumeData.skills];
                updated[i] = e.target.value;
                setResumeData({ ...resumeData, skills: updated });
              }}
            />
            <button
              className="text-red-500"
              onClick={() => handleRemove("skills", i)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
      <div className="mb-6">
      <button 
        type="button" 
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={() => handleAdd("skills", "")}>
          ➕ Add Skill
      </button>
      </div>
      
      {/* Certifications Section */}
      <h2 className="text-xl font-semibold mb-2">Certifications</h2>
      <div className="flex flex-wrap gap-2 mb-4 py-2 ml-1">
        {resumeData.certifications.map((certification, i) => (
          <div key={i} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded bg-transparent">
            <input
              className="bg-black border-b border-gray-400 focus:outline-none"
              placeholder="Certification"
              value={certification}
              onChange={(e) => {
                const updated = [...resumeData.certifications];
                updated[i] = e.target.value;
                setResumeData({ ...resumeData, certifications: updated });
              }}
            />
            <button
              className="text-red-500"
              onClick={() => handleRemove("certifications", i)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
      <div className="mb-6">
      <button 
        type="button" 
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={() => handleAdd("certifications", "")}>
          ➕ Add Certification
      </button>
      </div>
      
      {/* Languages Section */}
      <h2 className="text-xl font-semibold mb-2">Languages</h2>
      <div className="flex flex-wrap gap-2 mb-4 py-2 ml-1">
        {resumeData.languages.map((language, i) => (
          <div key={i} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded bg-transparent">
            <input
              className="bg-black border-b border-gray-400 focus:outline-none"
              placeholder="Languages"
              value={language}
              onChange={(e) => {
                const updated = [...resumeData.languages];
                updated[i] = e.target.value;
                setResumeData({ ...resumeData, languages: updated });
              }}
            />
            <button
              className="text-red-500"
              onClick={() => handleRemove("languages", i)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
      <div className="mb-6">
      <button 
        type="button" 
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={() => handleAdd("languages", "")}>
          ➕ Add Language
      </button>
      </div>

      {/* Similar Add/Remove logic can be applied for Projects, Education, Certifications, Languages */}

      {/* Submit */}
      <div className="mt-6 text-right">
        <Button onClick={() => alert('Resume Generated! (Mock)')}>Choose Template</Button>
      </div>

      {/* AI Summary - Modal Preview */}
        {openAISummaryModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[9999]">
            <div className="bg-black max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 rounded-lg relative shadow-2xl">
              <button
                onClick={() => handleAISummaryModal(false)}
                className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-6">
                {
                  (<Card
                    icon={Wand2}
                    title="Resume Summary Improver"
                    subtitle="Make summary sharper with tone & seniority controls"
                    actions={
                      <>
                        <Button onClick={() => improveSummaryWithAI(resumeData?.summary)} disabled={improvedSummary?.length > 0 ? true : false}><Wand2 className="h-4 w-4" /> Improve</Button>
                        {improvedSummary?.length > 0 && <SecondaryButton onClick={() => {setResumeData({ ...resumeData, summary: improvedSummary }); handleAISummaryModal(false)}}>Use AI Summary</SecondaryButton>}
                      </>
                    }
                  >
                    <div className="rounded-xl border border-white/10 bg-gray-950 p-3 text-sm">
                      <p className="leading-relaxed">{resumeData?.summary}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="text-sm">
                        <span className="mb-1 block text-gray-300">Tone</span>
                        <select
                          className="w-full rounded-lg border border-white/10 bg-gray-950 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
                          value={tone}
                          onChange={(e) => setTone(e.target.value)}
                        >
                          <option value="professional">Professional</option>
                          <option value="confident">Confident</option>
                          <option value="friendly">Friendly</option>
                        </select>
                      </label>
                      <label className="text-sm">
                        <span className="mb-1 block text-gray-300">Seniority</span>
                        <select
                          className="w-full rounded-lg border border-white/10 bg-gray-950 px-3 py-2 text-sm text-white outline-none focus:border-blue-500 mb-2"
                          value={seniority}
                          onChange={(e) => setSeniority(e.target.value)}
                        >
                          <option value="junior">Junior</option>
                          <option value="mid">Mid</option>
                          <option value="senior">Senior</option>
                        </select>
                      </label>
                    </div>
                    {improvedSummary?.length > 0 && (
                      <div>
                      <span className="mb-1 block text-gray-300 text-sm">Improved Summary By AI</span>
                      <div className="rounded-xl border border-white/10 bg-gray-950 p-3 text-sm">
                        <p className="leading-relaxed">{improvedSummary}</p>
                      </div>
                      </div>
                    )}
                  </Card>)
                }
              </div>
            </div>
          </div>
        )}
      
      {/* AI Exp Bullet - Modal Preview */}
        {openAIExpBulletModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[9999]">
            <div className="bg-black max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 rounded-lg relative shadow-2xl">
              <button
                onClick={() => handleAIExpBulletModal(false, improvedExpBulletPosition)}
                className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-6">
                {
                  (<Card
                    icon={Wand2}
                    title="Resume Experience Bullet Improver"
                    subtitle="Make bullet sharper with tone & seniority controls"
                    actions={
                      <>
                        <Button onClick={() => improveExpBulletWithAI(resumeData?.experience[improvedExpBulletPosition]?.bullets?.join("\n"))} disabled={improvedExpBullet?.length > 0 ? true : false}><Wand2 className="h-4 w-4" /> Improve</Button>
                        {improvedExpBullet?.length > 0 && <SecondaryButton onClick={() => {handleChange("experience", improvedExpBulletPosition, "bullets", improvedExpBullet?.split("\n")); handleAIExpBulletModal(false, improvedExpBulletPosition)}}>Use AI Bullet</SecondaryButton>}
                      </>
                    }
                  >
                    <div className="rounded-xl border border-white/10 bg-gray-950 p-3 text-sm">
                      <p className="leading-relaxed">{resumeData?.experience[improvedExpBulletPosition]?.bullets?.join("\n")}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="text-sm">
                        <span className="mb-1 block text-gray-300">Tone</span>
                        <select
                          className="w-full rounded-lg border border-white/10 bg-gray-950 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
                          value={tone}
                          onChange={(e) => setTone(e.target.value)}
                        >
                          <option value="professional">Professional</option>
                          <option value="confident">Confident</option>
                          <option value="friendly">Friendly</option>
                        </select>
                      </label>
                      <label className="text-sm">
                        <span className="mb-1 block text-gray-300">Seniority</span>
                        <select
                          className="w-full rounded-lg border border-white/10 bg-gray-950 px-3 py-2 text-sm text-white outline-none focus:border-blue-500 mb-2"
                          value={seniority}
                          onChange={(e) => setSeniority(e.target.value)}
                        >
                          <option value="junior">Junior</option>
                          <option value="mid">Mid</option>
                          <option value="senior">Senior</option>
                        </select>
                      </label>
                    </div>
                    {improvedExpBullet?.length > 0 && (
                      <div>
                        <span className="mb-1 block text-gray-300 text-sm">Improved Bullet By AI</span>
                        <div className="rounded-xl border border-white/10 bg-gray-950 p-3 text-sm">
                          <p className="leading-relaxed">{improvedExpBullet}</p>
                        </div>
                      </div>
                    )}
                  </Card>)
                }
              </div>
            </div>
          </div>
        )}

      {/* AI Project Desc - Modal Preview */}
        {openAIProjectDescModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[9999]">
            <div className="bg-black max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 rounded-lg relative shadow-2xl">
              <button
                onClick={() => handleAIProjectDescModal(false, improvedProjectDescPosition)}
                className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-6">
                {
                  (<Card
                    icon={Wand2}
                    title="Resume Project Description Improver"
                    subtitle="Make description sharper with tone & seniority controls"
                    actions={
                      <>
                        <Button onClick={() => improveProjectDescWithAI(resumeData?.projects[improvedProjectDescPosition]?.desc?.join("\n"))} disabled={improvedProjectDesc?.length > 0 ? true : false}><Wand2 className="h-4 w-4" /> Improve</Button>
                        {improvedProjectDesc?.length > 0 && <SecondaryButton onClick={() => {handleChange("projects", improvedProjectDescPosition, "desc", improvedProjectDesc?.split("\n")); handleAIProjectDescModal(false, improvedProjectDescPosition)}}>Use AI Description</SecondaryButton>}
                      </>
                    }
                  >
                    <div className="rounded-xl border border-white/10 bg-gray-950 p-3 text-sm">
                      <p className="leading-relaxed">{resumeData?.projects[improvedProjectDescPosition]?.desc?.join("\n")}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="text-sm">
                        <span className="mb-1 block text-gray-300">Tone</span>
                        <select
                          className="w-full rounded-lg border border-white/10 bg-gray-950 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
                          value={tone}
                          onChange={(e) => setTone(e.target.value)}
                        >
                          <option value="professional">Professional</option>
                          <option value="confident">Confident</option>
                          <option value="friendly">Friendly</option>
                        </select>
                      </label>
                      <label className="text-sm">
                        <span className="mb-1 block text-gray-300">Seniority</span>
                        <select
                          className="w-full rounded-lg border border-white/10 bg-gray-950 px-3 py-2 text-sm text-white outline-none focus:border-blue-500 mb-2"
                          value={seniority}
                          onChange={(e) => setSeniority(e.target.value)}
                        >
                          <option value="junior">Junior</option>
                          <option value="mid">Mid</option>
                          <option value="senior">Senior</option>
                        </select>
                      </label>
                    </div>
                    {improvedProjectDesc?.length > 0 && (
                      <div>
                        <span className="mb-1 block text-gray-300 text-sm">Improved Project Description By AI</span>
                        <div className="rounded-xl border border-white/10 bg-gray-950 p-3 text-sm">
                          <p className="leading-relaxed">{improvedProjectDesc}</p>
                        </div>
                      </div>
                    )}
                  </Card>)
                }
              </div>
            </div>
          </div>
        )}
        {/* Global Loader */}
      <FuturisticLoader visible={loading} />
    </div>
  );
};

export default AIResumeForm;
