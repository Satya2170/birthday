import React, { useState } from 'react';
import ConfettiAnimation from './components/ConfettiAnimation';
import BackgroundMusic from './components/BackgroundMusic';
import PhotoGallery from './components/PhotoGallery';
import WishesSection from './components/WishesSection';
import FloatingElements from './components/FloatingElements';
import HomePage from './pages/HomePage';
import SurprisesPage from './pages/SurprisesPage';
import MusicPage from './pages/MusicPage';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  
  const pages = ['home', 'gallery', 'wishes', 'surprises', 'music'];
  
  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0); // Go back to home
    }
  };

  const renderPage = () => {
    switch (pages[currentPage]) {
      case 'home':
        return <HomePage onNext={nextPage} />;
      case 'gallery':
        return <PhotoGallery onNext={nextPage} />;
      case 'wishes':
        return <WishesSection onNext={nextPage} />;
      case 'surprises':
        return <SurprisesPage onNext={nextPage} />;
      case 'music':
        return <MusicPage onNext={nextPage} />;
      default:
        return <HomePage onNext={nextPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
      <ConfettiAnimation />
      <FloatingElements />
      <BackgroundMusic />
      
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              With Love & Best Wishes
            </h3>
            <p className="text-gray-700 text-lg">
              May your birthday be the start of a year filled with good luck, good health, 
              and much happiness. You are truly special and deserve all the wonderful things 
              life has to offer!
            </p>
            <div className="mt-6 text-3xl">
              🎊 🥳 🎉
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;