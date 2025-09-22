import React, { useState } from 'react';
import { Gift, Star, Heart, Sparkles } from 'lucide-react';
import NextButton from '../components/NextButton';

interface SurprisesPageProps {
  onNext: () => void;
}

const SurprisesPage: React.FC<SurprisesPageProps> = ({ onNext }) => {
  const [openedGifts, setOpenedGifts] = useState<number[]>([]);

  const surprises = [
    {
      id: 1,
      title: "Virtual Hug",
      content: "Sending you the biggest, warmest virtual hug! 🤗",
      icon: "🤗",
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 2,
      title: "Birthday Wish",
      content: "May all your dreams come true this year! ✨",
      icon: "✨",
      color: "from-purple-400 to-indigo-500"
    },
    {
      id: 3,
      title: "Smile Generator",
      content: "Here's a joke: Why did the birthday cake go to therapy? It had too many layers! 😄",
      icon: "😄",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 4,
      title: "Lucky Charm",
      content: "You're getting extra luck for the whole year! 🍀",
      icon: "🍀",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 5,
      title: "Dance Party",
      content: "Time to dance like nobody's watching! 💃",
      icon: "💃",
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 6,
      title: "Magic Moment",
      content: "This moment is specially crafted just for you! 🌟",
      icon: "🌟",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const openGift = (id: number) => {
    if (!openedGifts.includes(id)) {
      setOpenedGifts([...openedGifts, id]);
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Gift className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Birthday Surprises!
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Click on each gift box to reveal your special surprises! 🎁
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {surprises.map((surprise) => (
            <div
              key={surprise.id}
              className="relative group cursor-pointer"
              onClick={() => openGift(surprise.id)}
            >
              {!openedGifts.includes(surprise.id) ? (
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white text-center">
                  <Gift className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-xl font-bold mb-2">Mystery Gift #{surprise.id}</h3>
                  <p className="text-pink-100">Click to open!</p>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-8 h-8 text-yellow-300 animate-spin" />
                  </div>
                </div>
              ) : (
                <div className={`bg-gradient-to-br ${surprise.color} rounded-2xl p-8 shadow-lg text-white transform scale-105 transition-all duration-500`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4 animate-bounce">{surprise.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{surprise.title}</h3>
                    <p className="text-lg leading-relaxed">{surprise.content}</p>
                    <div className="mt-4 flex justify-center">
                      <Heart className="w-6 h-6 text-red-200 animate-pulse" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 max-w-2xl mx-auto">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4 animate-spin" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Special Birthday Message
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              You bring so much joy and light into this world. Your friendship is a gift that 
              keeps on giving, and today we celebrate the wonderful person you are. Here's to 
              another year of amazing adventures, beautiful memories, and endless happiness!
            </p>
          </div>
        </div>
        
        <NextButton onClick={onNext} text="Enjoy Music" />
      </div>
    </div>
  );
};

export default SurprisesPage;