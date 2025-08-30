import React, { useState } from "react";

const CreateResume = () => {
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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-20 content-page create-resume-page">
      <h1 className="text-2xl font-bold mb-6 text-center">Resume Builder</h1>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          className="border p-2 rounded"
          placeholder="Full Name"
          value={resumeData.name}
          onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Role"
          value={resumeData.role}
          onChange={(e) => setResumeData({ ...resumeData, role: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Location"
          value={resumeData.location}
          onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Email"
          value={resumeData.email}
          onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Phone"
          value={resumeData.phone}
          onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Website"
          value={resumeData.website}
          onChange={(e) => setResumeData({ ...resumeData, website: e.target.value })}
        />
      </div>

      {/* Summary */}
      <textarea
        className="w-full border p-2 rounded mb-6"
        rows="3"
        placeholder="Summary"
        value={resumeData.summary}
        onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
      />

      {/* Experience Section */}
      <h2 className="text-xl font-semibold mb-2">Experience</h2>
      {resumeData.experience.map((exp, i) => (
        <div key={i} className="border p-4 rounded mb-4 bg-gray-50">
          <input
            className="border p-2 rounded w-full mb-2"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => handleChange("experience", i, "company", e.target.value)}
          />
          <input
            className="border p-2 rounded w-full mb-2"
            placeholder="Title"
            value={exp.title}
            onChange={(e) => handleChange("experience", i, "title", e.target.value)}
          />
          <input
            className="border p-2 rounded w-full mb-2"
            placeholder="Period"
            value={exp.period}
            onChange={(e) => handleChange("experience", i, "period", e.target.value)}
          />
          <textarea
            className="border p-2 rounded w-full mb-2"
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
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
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
      </button>

      {/* Education Section */}
      <h2 className="text-xl font-semibold mb-2">Education</h2>
      {resumeData.education.map((exp, i) => (
        <div key={i} className="border p-4 rounded mb-4 bg-gray-50">
          <input
            className="border p-2 rounded w-full mb-2"
            placeholder="School"
            value={exp.school}
            onChange={(e) => handleChange("education", i, "school", e.target.value)}
          />
          <input
            className="border p-2 rounded w-full mb-2"
            placeholder="Degree"
            value={exp.degree}
            onChange={(e) => handleChange("education", i, "degree", e.target.value)}
          />
          <input
            className="border p-2 rounded w-full mb-2"
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
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
        onClick={() =>
          handleAdd("education", {
            school: "",
            degree: "",
            period: "",
          })
        }
      >
        ➕ Add Education
      </button>

      {/* Skills Section */}
      <h2 className="text-xl font-semibold mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {resumeData.skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
            <input
              className="bg-transparent border-b border-gray-400 focus:outline-none"
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
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-6"
        onClick={() => handleAdd("skills", "")}
      >
        ➕ Add Skill
      </button>

      {/* Similar Add/Remove logic can be applied for Projects, Education, Certifications, Languages */}

      {/* Submit */}
      <div className="mt-6 text-right">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
          Generate Resume
        </button>
      </div>
    </div>
  );
};

export default CreateResume;
