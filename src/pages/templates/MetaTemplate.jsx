// src/components/MetaResume.jsx
export default function MetaTemplate() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Inter'] p-6 md:p-12 max-w-3xl mx-auto p-8 rounded-2xl shadow-2xl border border-gray-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Akash Nishant</h1>
        <p className="text-lg md:text-xl mt-1">Aspiring Software Engineer | Building Impactful Tech</p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm md:text-base">
          <span>📍 Kolkata, India</span>
          <span>✉️ akash@example.com</span>
          <span>🌐 thefactdrop.com</span>
          <span>💼 linkedin.com/in/akash</span>
          <span>🐙 github.com/akashnishant</span>
        </div>
      </header>

      {/* Body */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {/* Left Column */}
        <aside className="md:col-span-1 space-y-8">
          {/* Education */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 border-b-2 border-gradient-to-r from-blue-600 to-purple-600 inline-block pb-1">
              🎓 Education
            </h2>
            <div className="mt-4 space-y-2">
              <p className="font-semibold">B.Tech, Computer Science</p>
              <p className="text-gray-700">IIT XYZ, 2010 - 2014</p>
              <p className="text-gray-600">GPA: 9.0/10</p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-bold text-purple-700 border-b-2 border-gradient-to-r from-purple-600 to-blue-600 inline-block pb-1">
              🛠 Skills
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Python", "Java", "JavaScript", "React", "Node.js", "GraphQL", "Kubernetes"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </section>

          {/* Meta Values */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 border-b-2 border-gradient-to-r from-blue-600 to-purple-600 inline-block pb-1">
              🌍 Meta Values
            </h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>🚀 Move Fast</li>
              <li>🧩 Build Awesome Things</li>
              <li>🌍 Bring the World Closer</li>
            </ul>
          </section>
        </aside>

        {/* Right Column */}
        <section className="md:col-span-2 space-y-8">
          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              💼 Experience
            </h2>
            <div className="mt-6 space-y-6">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700">Software Engineer</h3>
                <p className="text-gray-700">Microsoft | 2018 – Present</p>
                <ul className="list-disc list-inside mt-2 text-gray-800">
                  <li>Improved app performance by <b>35%</b>, reducing load time from 2.1s → 1.3s.</li>
                  <li>Led a cross-team GraphQL integration, improving query efficiency by <b>50%</b>.</li>
                  <li>Mentored 5 junior developers in modern React + cloud practices.</li>
                </ul>
              </div>
              <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-purple-700">Software Engineer</h3>
                <p className="text-gray-700">Amazon | 2014 – 2018</p>
                <ul className="list-disc list-inside mt-2 text-gray-800">
                  <li>Built distributed systems handling <b>10M+ requests/day</b>.</li>
                  <li>Optimized AWS infra → reduced monthly cost by <b>20%</b>.</li>
                  <li>Won internal Hackathon (AI-powered chatbot project).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              🚀 Projects
            </h2>
            <div className="mt-6 space-y-6">
              <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded-md shadow-sm">
                <h3 className="font-semibold text-blue-700">AI Resume Builder</h3>
                <p className="text-gray-700">React & Puppeteer • Used by 2k+ users globally.</p>
              </div>
              <div className="p-4 border-l-4 border-purple-600 bg-purple-50 rounded-md shadow-sm">
                <h3 className="font-semibold text-purple-700">Cloud Infra Optimizer</h3>
                <p className="text-gray-700">Reduced AWS monthly costs by 20% via autoscaling strategies.</p>
              </div>
            </div>
          </section>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-600 italic">
        “Let’s build technology that connects the world.” 🌐
      </footer>
    </div>
  );
}
