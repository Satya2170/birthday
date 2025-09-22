import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute top-1/4 left-1/4 animate-bounce text-pink-300 text-4xl">
        💖
      </div>
      <div className="absolute top-1/3 right-1/4 animate-pulse text-purple-300 text-3xl">
        ✨
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-bounce text-pink-400 text-2xl delay-1000">
        🎈
      </div>
      <div className="absolute top-2/3 right-1/3 animate-pulse text-yellow-300 text-3xl delay-500">
        🎂
      </div>
      <div className="absolute bottom-1/4 right-1/2 animate-bounce text-purple-400 text-4xl delay-2000">
        🌟
      </div>
      
      {/* Floating bubbles */}
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-pink-300 rounded-full opacity-70 animate-ping"></div>
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-purple-300 rounded-full opacity-60 animate-ping delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-yellow-300 rounded-full opacity-50 animate-ping delay-2000"></div>
    </div>
  );
};

export default FloatingElements;