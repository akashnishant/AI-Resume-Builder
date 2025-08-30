export default function AmazonTemplate() {
  return (
    <>
      <div class="max-w-4xl mx-auto p-10 shadow-2xl border border-gray-200 rounded-lg">
        {/* <!-- Header --> */}
        <div class="border-b-4 border-yellow-500 pb-4 mb-6">
          <h1 class="text-4xl font-extrabold tracking-wide text-gray-900">
            John Doe
          </h1>
          <p class="text-gray-600 mt-1">
            Software Engineer | AI & Cloud Specialist
          </p>
          <div class="flex flex-wrap gap-4 text-sm text-gray-500 mt-3">
            <span>📍 San Francisco, CA</span>
            <span>📧 john.doe@gmail.com</span>
            <span>📞 +1 123 456 7890</span>
            <span>🌐 linkedin.com/in/johndoe</span>
          </div>
        </div>

        {/* <!-- Summary --> */}
        <section class="mb-6">
          <h2 class="text-xl font-semibold border-b border-gray-300 mb-2 text-yellow-600">
            Summary
          </h2>
          <p class="text-gray-700 leading-relaxed">
            Results-driven Software Engineer with 6+ years of experience in
            cloud computing, distributed systems, and AI-driven solutions.
            Proven record of designing scalable products that reduced costs by
            30% and improved customer experience. Strong believer in Amazon’s
            Leadership Principles: Customer Obsession, Ownership, and Deliver
            Results.
          </p>
        </section>

        {/* <!-- Skills --> */}
        <section class="mb-6">
          <h2 class="text-xl font-semibold border-b border-gray-300 mb-2 text-yellow-600">
            Key Skills
          </h2>
          <ul class="grid grid-cols-2 gap-x-6 gap-y-1 text-gray-700 text-sm">
            <li>☑ AWS (EC2, Lambda, S3, DynamoDB)</li>
            <li>☑ Python, Java, Node.js</li>
            <li>☑ System Design & Scalability</li>
            <li>☑ Machine Learning & NLP</li>
            <li>☑ Microservices & APIs</li>
            <li>☑ Data Structures & Algorithms</li>
          </ul>
        </section>

        {/* <!-- Experience --> */}
        <section class="mb-6">
          <h2 class="text-xl font-semibold border-b border-gray-300 mb-2 text-yellow-600">
            Professional Experience
          </h2>

          <div class="mb-4">
            <div class="flex justify-between">
              <h3 class="font-bold text-lg text-gray-900">
                Senior Software Engineer
              </h3>
              <span class="text-gray-500">2019 – Present</span>
            </div>
            <p class="text-sm text-gray-600">Microsoft, Redmond, WA</p>
            <ul class="list-disc ml-6 text-gray-700 mt-1 text-sm leading-relaxed">
              <li>
                Designed and implemented scalable cloud services, serving 10M+
                users globally.
              </li>
              <li>
                Reduced latency by 40% by re-architecting microservices with AWS
                Lambda + DynamoDB.
              </li>
              <li>
                Led a team of 5 engineers, mentoring them on system design and
                cloud best practices.
              </li>
            </ul>
          </div>

          <div class="mb-4">
            <div class="flex justify-between">
              <h3 class="font-bold text-lg text-gray-900">Software Engineer</h3>
              <span class="text-gray-500">2016 – 2019</span>
            </div>
            <p class="text-sm text-gray-600">Infosys, Bangalore, India</p>
            <ul class="list-disc ml-6 text-gray-700 mt-1 text-sm leading-relaxed">
              <li>
                Developed ML-based recommendation engine that improved
                click-through rates by 25%.
              </li>
              <li>
                Collaborated with product teams to design customer-first
                solutions for enterprise clients.
              </li>
              <li>
                Optimized SQL queries, improving data retrieval time by 50%.
              </li>
            </ul>
          </div>
        </section>

        {/* <!-- Education --> */}
        <section class="mb-6">
          <h2 class="text-xl font-semibold border-b border-gray-300 mb-2 text-yellow-600">
            Education
          </h2>
          <p class="text-gray-800 font-medium">B.Tech in Computer Science</p>
          <p class="text-sm text-gray-600">
            Indian Institute of Technology (IIT), 2012 – 2016
          </p>
        </section>

        {/* <!-- Achievements --> */}
        <section>
          <h2 class="text-xl font-semibold border-b border-gray-300 mb-2 text-yellow-600">
            Achievements
          </h2>
          <ul class="list-disc ml-6 text-gray-700 text-sm">
            <li>Filed 2 patents in cloud infrastructure optimization.</li>
            <li>Awarded “Best Innovator” at Microsoft 2021 Hackathon.</li>
            <li>Published research paper in IEEE on distributed AI systems.</li>
          </ul>
        </section>
      </div>
    </>
  );
}
