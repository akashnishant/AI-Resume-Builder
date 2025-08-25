import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={() => navigate("/")}>
          <div className="logo-icon">
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
          </div>
          <span className="logo-text">AI Resume Builder</span>
        </div>

        <nav className="nav">
          <a href="features" className="nav-link" onClick={() => navigate('/features')}>
            Features
          </a>
          <a href="pricing" className="nav-link" onClick={() => navigate('/pricing')}>
            Pricing
          </a>
          <a href="login" className="nav-link" onClick={() => navigate('/login')}>
            Login
          </a>
          <button className="btn btn-primary" onClick={() => navigate('/login')}>Get Started</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
