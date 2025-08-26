import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12 justify-between">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-white mb-2">Stay updated with career tips</h3>
              <p className="text-gray-400">Get the latest resume advice and career insights.</p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">AI Resume Builder</h4>
            <p className="text-gray-400 mb-4">
              Creating professional resumes with the power of artificial intelligence.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {[
                { icon: "facebook", href: "#" },
                { icon: "twitter", href: "#" },
                { icon: "linkedin", href: "#" },
                { icon: "instagram", href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-cyan-500 transition-colors"
                  aria-label={social.icon}
                >
                  <i className={`fab fa-${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { text: "Create Resume", path: "/create" },
                { text: "Templates", path: "/templates" },
                { text: "AI Features", path: "/ai-features" },
                { text: "Pricing", path: "/pricing" },
                { text: "Blog", path: "/blog" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="hover:text-cyan-500 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { text: "Career Advice", path: "/career-advice" },
                { text: "Resume Tips", path: "/resume-tips" },
                { text: "Interview Prep", path: "/interview-prep" },
                { text: "Job Search", path: "/job-search" },
                { text: "Help Center", path: "/help" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="hover:text-cyan-500 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-cyan-500"></i>
                <span>support@airesume.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-cyan-500"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-location-dot text-cyan-500"></i>
                <span>123 AI Street, Tech City, 12345</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} AI Resume Builder. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-cyan-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-cyan-500 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;