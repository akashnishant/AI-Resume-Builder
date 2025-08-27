// components/FuturisticResumeLoader.jsx
export default function FuturisticResumeLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-950 z-50">
      {/* Subtle glowing gradient AI background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse blur-3xl"></div>

      {/* Skeleton Resume Container */}
      <div className="relative w-full max-w-3xl p-6 rounded-2xl bg-gray-900/90 shadow-2xl animate-pulse">
        
        {/* Header with avatar + name */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
          <div className="flex-1 space-y-3">
            <div className="h-5 w-40 bg-gray-700 rounded"></div>
            <div className="h-4 w-28 bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* First section */}
        <div className="h-4 w-32 bg-gray-700 rounded mb-4"></div>
        <div className="space-y-2 mb-6">
          <div className="h-3 w-full bg-gray-700 rounded"></div>
          <div className="h-3 w-11/12 bg-gray-700 rounded"></div>
          <div className="h-3 w-10/12 bg-gray-700 rounded"></div>
        </div>

        {/* Second section */}
        <div className="h-4 w-36 bg-gray-700 rounded mb-4"></div>
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-700 rounded"></div>
          <div className="h-3 w-9/12 bg-gray-700 rounded"></div>
          <div className="h-3 w-10/12 bg-gray-700 rounded"></div>
          <div className="h-3 w-8/12 bg-gray-700 rounded"></div>
        </div>

        {/* AI activity indicator */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-blue-400 animate-bounce"></span>
          <span className="w-3 h-3 rounded-full bg-purple-400 animate-bounce [animation-delay:200ms]"></span>
          <span className="w-3 h-3 rounded-full bg-pink-400 animate-bounce [animation-delay:400ms]"></span>
        </div>
      </div>
    </div>
  );
}
