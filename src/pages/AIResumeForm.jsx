import React, { useState } from "react";
import Button from "../components/common/Button";

const AIResumeForm = () => {
  const [resumeData, setResumeData] = useState({
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
        bullets: [""],
      },
    ],
    education: [
      {
        school: "University of California, Berkeley",
        degree: "B.S. Computer Science",
        period: "2013 — 2017",
      },
    ],
    skills: ["React", "TypeScript"],
    projects: [{ name: "ResumeAI", desc: "LLM-powered resume writer." }],
    certifications: ["AWS Certified Developer – Associate"],
    languages: ["English (Native)"],
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
        className="w-full p-2 rounded mb-6 bg-black"
        rows="3"
        placeholder="Summary"
        value={resumeData.summary}
        onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
      />

      {/* Experience Section */}
      <h2 className="text-xl font-semibold mb-2">Experience</h2>
      {resumeData.experience.map((exp, i) => (
        <div key={i} className="p-4 rounded mb-4 bg-gray-50 bg-transparent">
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
            placeholder="Period"
            value={exp.period}
            onChange={(e) => handleChange("experience", i, "period", e.target.value)}
          />
          <textarea
            className="p-2 rounded w-full mb-2 bg-black"
            placeholder="Achievements / Bullets"
            rows="2"
            value={exp.bullets.join("\n")}
            onChange={(e) =>
              handleChange("experience", i, "bullets", e.target.value.split("\n"))
            }
          />
          <button
            className="text-red-500 text-sm"
            onClick={() => handleRemove("experience", i)}
          >
            ❌ Remove Experience
          </button>
        </div>
      ))}
      <div className="mb-6">
      <Button
        onClick={() =>
          handleAdd("experience", {
            company: "",
            title: "",
            period: "",
            bullets: [""],
          })
        }
      >
        ➕ Add Experience
      </Button>
      </div>

      {/* Education Section */}
      <h2 className="text-xl font-semibold mb-2">Education</h2>
      {resumeData.education.map((exp, i) => (
        <div key={i} className="p-4 rounded mb-4 bg-gray-50 bg-transparent">
          <input
            className="p-2 rounded w-full mb-2 bg-black"
            placeholder="School"
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
      <Button
        onClick={() =>
          handleAdd("education", {
            school: "",
            degree: "",
            period: "",
          })
        }
      >
        ➕ Add Education
      </Button>
      </div>

      {/* Skills Section */}
      <h2 className="text-xl font-semibold mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2 mb-4 py-2">
        {resumeData.skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded bg-transparent">
            <input
              className="bg-black border-b border-gray-400 focus:outline-none"
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
      <Button
        onClick={() => handleAdd("skills", "")}
      >
        ➕ Add Skill
      </Button>
      </div>

      {/* Similar Add/Remove logic can be applied for Projects, Education, Certifications, Languages */}

      {/* Submit */}
      <div className="mt-6 text-right">
        <Button onClick={() => alert('Resume Generated! (Mock)')}>Select Template</Button>
      </div>
    </div>
  );
};

export default AIResumeForm;
