import React, { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import ScrollTop from "../components/ScrollTop";

const ForgotPassword = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);

    if (emailError) {
      setError(emailError);
      return;
    }

    // Here you would typically make an API call to handle password reset
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
    setError("");
  };

  return (
    <>
      <ScrollTop />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center text-slate-600 hover:text-slate-800 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Login
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">
                    Forgot Password?
                  </h2>
                  <p className="text-slate-600">
                    Enter your email address and we'll send you instructions to
                    reset your password.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none z-10" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError("");
                        }}
                        className={`w-full pl-10 pr-4 py-3 border ${
                          error
                            ? "border-red-500 focus:ring-red-400 focus:border-red-400"
                            : "border-slate-300 focus:ring-cyan-400 focus:border-cyan-400"
                        } rounded-lg outline-none transition-all duration-200 text-slate-800 placeholder-slate-400`}
                        placeholder="Enter your email"
                      />
                    </div>
                    {error && (
                      <p className="text-sm text-red-500 mt-1">{error}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    Send Reset Instructions
                  </button>
                </form>
              </>
            ) : (
              // Success Message
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Check Your Email
                </h3>
                <p className="text-slate-600 mb-6">
                  We've sent password reset instructions to:
                  <br />
                  <span className="font-medium">{email}</span>
                </p>
                <button
                  onClick={onBack}
                  className="text-cyan-500 hover:text-cyan-600 font-semibold transition-colors"
                >
                  Back to Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
