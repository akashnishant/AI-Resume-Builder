// components/FullPageLoader.jsx
import { motion } from "framer-motion";

export default function FullPageLoader(props) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-950 text-white z-50">
      {/* Gradient animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse blur-3xl" />

      {/* Loader animation */}
      <div className="relative flex space-x-3 mb-6">
        {[0, 0.2, 0.4].map((delay, idx) => (
          <motion.span
            key={idx}
            className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "loop",
              delay: delay,
            }}
          />
        ))}
      </div>

      {/* Loading text */}
      <h2 className="text-lg md:text-xl font-medium tracking-wide animate-pulse">
        {props.message || "Loading..."}
      </h2>
    </div>
  );
}
