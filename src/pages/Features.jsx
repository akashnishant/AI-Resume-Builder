import React from "react";

const features = [
  {
    title: "Instant Resume Generation",
    description: "Create a professional resume in seconds using advanced AI technology.",
    icon: (
      <svg className="w-10 h-10 text-indigo-500" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
        <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Smart Suggestions",
    description: "Get personalized content and formatting tips tailored to your experience.",
    icon: (
      <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" opacity="0.1"/>
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Multiple Templates",
    description: "Choose from a variety of modern, ATS-friendly resume templates.",
    icon: (
      <svg className="w-10 h-10 text-cyan-500" fill="none" viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="10" ry="7" fill="currentColor" opacity="0.1"/>
        <path d="M8 16l4-8 4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Easy Export",
    description: "Download your resume in PDF or DOCX formats instantly.",
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24">
        <rect x="6" y="6" width="12" height="12" rx="3" fill="currentColor" opacity="0.1"/>
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Secure & Private",
    description: "Your data is encrypted and never shared. Privacy is our priority.",
    icon: (
      <svg className="w-10 h-10 text-pink-500" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
        <path d="M8 12v-2a4 4 0 118 0v2M8 12h8v4a4 4 0 01-8 0v-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Live Preview",
    description: "See your resume update in real-time as you edit.",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="8" width="16" height="8" rx="4" fill="currentColor" opacity="0.1"/>
        <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-indigo-50 min-h-screen py-12" style={{ paddingTop: '6rem' }}>
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">Features</h1>
        <p className="text-lg text-gray-600 mb-10">
          Discover the powerful features that make AI Resume Builder stand out.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}