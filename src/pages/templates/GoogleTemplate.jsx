export default function GoogleTemplate() {
  return (
    <div className="bg-white text-gray-800 font-sans max-w-3xl mx-auto p-8 rounded-2xl shadow-2xl border border-gray-200">
      
      {/* Header */}
      <div className="border-b-2 border-gray-200 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Akash Nishant</h1>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>
        <div className="mt-2 sm:mt-0 text-sm text-gray-600">
          <p>akash.nishant@gmail.com</p>
          <p>+91 98765 43210</p>
          <p>Kolkata, India</p>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 border-l-4 border-blue-500 pl-2 mb-2">Summary</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Software Engineer with 8+ years of experience in building scalable applications. Passionate about 
          solving challenging problems, optimizing systems, and contributing to impactful products. Strong 
          foundation in algorithms, system design, and cloud computing.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 border-l-4 border-green-500 pl-2 mb-2">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          <li>Java, Python, JavaScript</li>
          <li>React, Node.js, Express</li>
          <li>AWS, GCP, Docker, Kubernetes</li>
          <li>Data Structures & Algorithms</li>
          <li>System Design</li>
          <li>SQL, NoSQL</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 border-l-4 border-red-500 pl-2 mb-2">Experience</h2>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">Senior Software Engineer</h3>
          <p className="text-sm text-gray-500">TCS | 2019 – Present</p>
          <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed mt-1">
            <li>Led a team of 5 engineers to design and develop scalable web applications.</li>
            <li>Optimized backend services, reducing API response time by 35%.</li>
            <li>Collaborated with product and design teams to improve user experience.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">Software Engineer</h3>
          <p className="text-sm text-gray-500">Infosys | 2015 – 2019</p>
          <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed mt-1">
            <li>Developed enterprise applications using Java and Spring Boot.</li>
            <li>Improved system reliability by implementing automated monitoring tools.</li>
            <li>Mentored junior engineers and contributed to knowledge-sharing sessions.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 border-l-4 border-yellow-500 pl-2 mb-2">Projects</h2>
        <div className="text-sm text-gray-700 leading-relaxed">
          <p><span className="font-semibold">AI Resume Builder:</span> Built an AI-powered resume builder that generates ATS-optimized resumes using NLP.</p>
          <p><span className="font-semibold">Scalable Chatbot:</span> Designed and deployed a chatbot using Node.js and GCP handling 100k+ requests/day.</p>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 border-l-4 border-blue-500 pl-2 mb-2">Education</h2>
        <p className="text-sm text-gray-700">
          B.Tech in Computer Science, <span className="font-semibold">IIT Kharagpur</span>, 2011 – 2015
        </p>
      </section>
    </div>
  );
}
