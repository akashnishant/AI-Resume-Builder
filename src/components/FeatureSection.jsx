import React from 'react'
import './FeatureSection.css'

const FeatureSection = () => {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" stroke="#e2e8f0" strokeWidth="2"/>
          <path d="M16 24l6 6 12-12" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'AI-Powered',
      description: 'Get personalized suggestions to optimize your resume'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="4" stroke="#e2e8f0" strokeWidth="2"/>
          <path d="M16 20h16M16 24h12M16 28h16" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Easy-to-use',
      description: 'Simple and intuitive design with drag-and-drop functionality'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="4" stroke="#e2e8f0" strokeWidth="2"/>
          <rect x="12" y="12" width="8" height="2" fill="#06b6d4"/>
          <rect x="12" y="16" width="12" height="2" fill="#e2e8f0"/>
          <rect x="12" y="20" width="10" height="2" fill="#e2e8f0"/>
          <rect x="12" y="24" width="14" height="2" fill="#e2e8f0"/>
          <rect x="12" y="28" width="8" height="2" fill="#e2e8f0"/>
          <rect x="12" y="32" width="12" height="2" fill="#e2e8f0"/>
        </svg>
      ),
      title: 'Customizable',
      description: 'Select from a variety of templates and tailor them to your needs'
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <h2 className="features-title">Build a standout resume with ease</h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
