import React, { useState, useEffect } from 'react';
import { Cake, Sparkles, Music } from 'lucide-react';
import NextButton from '../components/NextButton';

interface HomePageProps {
  onNext: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNext }) => {
  const [showContent, setShowContent] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Show welcome message immediately
    setShowWelcome(true);
    
    // Show main content after fireworks start
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    // Hide welcome message after fireworks
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 6500);

    return () => {
      clearTimeout(timer);
      clearTimeout(welcomeTimer);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Welcome overlay during fireworks */}
      {showWelcome && (
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900/90 via-pink-900/90 to-indigo-900/90 flex items-center justify-center z-40">
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-pulse">
              🎆 SURPRISE! 🎆
            </h1>
            <p className="text-3xl md:text-4xl text-white font-semibold animate-bounce">
              Get ready for something special...
            </p>
          </div>
        </div>
      )}
      
      <div className={`text-center max-w-4xl mx-auto transition-all duration-2000 ${
        showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}>
        <div className="mb-8 relative">
          <Cake className="w-20 h-20 text-pink-500 mx-auto mb-6 animate-bounce" />
          <Sparkles className="w-12 h-12 text-purple-400 absolute -top-2 -right-4 animate-pulse" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">
          Happy Birthday!
        </h1>
        
        <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            🎉 It's Your Special Day! 🎉
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Today we celebrate the amazing person you are. May this new year of your life 
            be filled with endless joy, beautiful moments, and all your heart's desires!
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-4xl mb-8">
          <span className="animate-bounce delay-100">🎂</span>
          <span className="animate-bounce delay-200">🎈</span>
          <span className="animate-bounce delay-300">🎁</span>
          <span className="animate-bounce delay-400">🌟</span>
          <span className="animate-bounce delay-500">💖</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gradient-to-br from-pink-400 to-purple-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3">🌟 You're Amazing!</h3>
            <p className="text-lg">Your kindness and beautiful spirit light up every room you enter.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-400 to-indigo-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3">🎈 Celebrate Big!</h3>
            <p className="text-lg">Today is all about you - enjoy every magical moment!</p>
          </div>
        </div>
        
        <NextButton onClick={onNext} text="View Gallery" />
      </div>
    </section>
  );
};

export default HomePage;