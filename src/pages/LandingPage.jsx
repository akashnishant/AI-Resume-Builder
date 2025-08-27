import FeatureSection from "../components/FeatureSection";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./LandingPage.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Sparkles } from "lucide-react";

const LandingPage = ({userInfo}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                AI-Powered
                <br />
                Resume
                <br />
                Builder
              </h1>
              <p className="hero-description">
                Build a professional resume
                <br />
                in minutes with the help of AI
              </p>
              <div style={{ display: "flex" }}>
                {!userInfo && <button
                  className="btn btn-primary btn-large"
                  onClick={() => navigate("/login")}
                >
                  Get Started
                </button>}
                {userInfo && <button
                  className="btn btn-primary btn-large"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </button>}
                <button
                  className="btn btn-secondary"
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "0 18px 0 0",
                  }}
                  onClick={() => navigate("/ai-demo")}
                >
                  {/* Large AI SVG with nodes */}
                  <span
                    className="ai-demo-icon"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Sparkles className="h-6 w-6 text-blue-400" />
                  </span>
                  Try AI Demo
                </button>
              </div>
            </div>

            <div className="hero-illustration">
              <div className="illustration-container">
                <div className="person">
                  <div className="person-head"></div>
                  <div className="person-body"></div>
                  <div className="person-arm"></div>
                </div>
                <div className="chat-bubble">
                  <div className="chat-icon">
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
                <div className="resume-preview">
                  <div className="resume-header">
                    <div className="avatar"></div>
                    <div className="header-lines">
                      <div className="line long"></div>
                      <div className="line medium"></div>
                    </div>
                  </div>
                  <div className="resume-content">
                    <div className="content-line long"></div>
                    <div className="content-line medium"></div>
                    <div className="content-line short"></div>
                    <div className="content-line long"></div>
                    <div className="content-line medium"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeatureSection />
      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in">
            Why Choose Our Resume Builder?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                title: "AI-Powered Insights",
                description:
                  "Advanced machine learning algorithms analyze your experience to suggest impactful content",
              },
              {
                icon: "⚡",
                title: "Real-Time Preview",
                description:
                  "See changes instantly as you type with our dynamic preview system",
              },
              {
                icon: "🎯",
                title: "ATS-Optimized",
                description:
                  "Built-in ATS compatibility ensures your resume reaches human recruiters",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/30"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Resumes Created" },
              { number: "89%", label: "Success Rate" },
              { number: "24/7", label: "Support" },
              { number: "100+", label: "Templates" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-cyan-500/30 -z-10"></div>
            {[
              {
                step: "1",
                title: "Input Your Details",
                description:
                  "Fill in your professional information using our smart forms",
              },
              {
                step: "2",
                title: "AI Enhancement",
                description:
                  "Our AI analyzes and optimizes your content for maximum impact",
              },
              {
                step: "3",
                title: "Download & Apply",
                description:
                  "Get your polished resume in multiple formats, ready to land interviews",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="bg-gray-800 rounded-lg p-6 relative z-10">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Software Engineer",
                company: "Tech Giant Corp",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
                quote:
                  "The AI suggestions helped me highlight achievements I hadn't even considered!",
              },
              {
                name: "Sarah Williams",
                role: "Marketing Manager",
                company: "Creative Studios",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
                quote:
                  "Landed my dream job within 2 weeks of using this amazing platform!",
              },
              {
                name: "Michael Chen",
                role: "Data Scientist",
                company: "Analytics Co",
                image: "https://randomuser.me/api/portraits/men/3.jpg",
                quote:
                  "The ATS optimization feature is a game-changer. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto" data-aos="zoom-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Dream Resume?
            </h2>
            <p className="text-gray-300 mb-8">
              Join thousands of successful professionals who have advanced their
              careers using our platform
            </p>
            <button className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-300 animate-pulse" onClick={() => navigate("/login")}>
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  userInfo: state.auth.userInfo,
});

const mapDispatchToProps = {
  // login,
  // register,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
