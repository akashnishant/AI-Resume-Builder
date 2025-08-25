import React from "react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out our AI resume builder",
    features: [
      "1 Resume Template",
      "Basic AI Suggestions",
      "PDF Export",
      "24/7 Email Support",
      "Basic Analytics"
    ],
    buttonText: "Get Started",
    highlighted: false
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "Best for professionals seeking career growth",
    features: [
      "All Free Features",
      "20+ Premium Templates",
      "Advanced AI Assistant",
      "Multiple Resume Versions",
      "ATS Optimization",
      "Cover Letter Generator",
      "Priority Support"
    ],
    buttonText: "Start Pro Plan",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$29",
    period: "per month",
    description: "For teams and businesses",
    features: [
      "All Pro Features",
      "Custom Branding",
      "Team Management",
      "API Access",
      "Advanced Analytics",
      "Dedicated Account Manager",
      "Custom Integration"
    ],
    buttonText: "Contact Sales",
    highlighted: false
  }
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-gray-50 to-indigo-50 min-h-screen py-12 px-4" style={{ paddingTop: '6rem' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your resume building needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 ${
                plan.highlighted
                  ? "bg-indigo-600 text-white transform scale-105"
                  : "bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className={`text-xl font-semibold mb-2 ${
                  plan.highlighted ? "text-white" : "text-gray-800"
                }`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${
                    plan.highlighted ? "text-indigo-100" : "text-gray-500"
                  }`}>/{plan.period}</span>
                </div>
                <p className={`text-sm mb-6 ${
                  plan.highlighted ? "text-indigo-100" : "text-gray-500"
                }`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <svg
                        className={`w-5 h-5 mr-2 ${
                          plan.highlighted ? "text-indigo-200" : "text-indigo-500"
                        }`}
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("/signup")}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-white text-indigo-600 hover:bg-gray-100"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 14-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}