import React from "react";

export default function AIDemo() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50 py-8 px-4" style={{ padding: '6rem 0 6rem' }}>
      <div className="w-full max-w-xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">AI Resume Demo</h1>
        <p className="text-lg text-gray-600 mb-8">
          Experience how AI can help you build a professional resume in seconds.
        </p>
        <div className="flex justify-center items-center min-h-[220px]">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full flex flex-col items-center gap-4">
            <span
              role="img"
              aria-label="AI"
              className="text-5xl animate-pulse"
              style={{ filter: "drop-shadow(0 0 12px #facc15)" }}
            >
              🤖
            </span>
            <p className="text-indigo-600 font-semibold text-base md:text-lg">
              AI demo coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}