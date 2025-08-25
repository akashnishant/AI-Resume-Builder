import FeatureSection from "../components/FeatureSection";
import { useNavigate } from "react-router-dom";
import './LandingPage.css';
export default function LandingPage() {
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
            <div style={{ display: 'flex' }}>
              <button className="btn btn-primary btn-large" onClick={() => navigate("/login")}>
                Get Started
              </button>
              <button
                className="btn btn-secondary"
                style={{ marginLeft: '10px', display: 'flex', alignItems: 'center', gap: '10px', padding: '0 18px 0 0' }}
                onClick={() => navigate('/ai-demo')}
              >
                {/* Large AI SVG with nodes */}
                <span className='logo-icon' style={{ display: 'flex', alignItems: 'center' }}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M9 9h6v6H9z" fill="currentColor" />
                  </svg>
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
    </>
  )
}