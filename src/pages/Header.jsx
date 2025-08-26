import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { connect } from "react-redux";
import "./Header.css";
import { logout } from "../redux/actions/authAction";

const Header = ({userInfo, logout}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Update active item when route changes
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const handleNavClick = (path) => {
    setActiveItem(path);
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    setActiveItem('/'); // Reset active state when going to home
    navigate('/');
  };
  
  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={handleLogoClick}>
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

        {/* Desktop Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a 
            href="features" 
            className={`nav-link ${activeItem === '/features' ? 'nav-active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/features');
            }}
          >
            Features
          </a>
          <a 
            href="pricing" 
            className={`nav-link ${activeItem === '/pricing' ? 'nav-active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/pricing');
            }}
          >
            Pricing
          </a>
          {!userInfo && <a 
            href="login" 
            className={`nav-link ${activeItem === '/login' ? 'nav-active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/login');
            }}
          >
            Login
          </a>}
          {userInfo && <a 
            href="dashboard" 
            className={`nav-link ${activeItem === '/dashboard' ? 'nav-active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/dashboard');
            }}
          >
            Dashboard
          </a>}
          {!userInfo && <button className="btn btn-primary" onClick={() => handleNavClick('/login')}>
            Get Started
          </button>}
          {userInfo && <button className="btn btn-primary" onClick={() => handleLogout()}>
            Logout
          </button>}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  userInfo: state.auth.userInfo,
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);