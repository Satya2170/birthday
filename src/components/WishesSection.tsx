import React from 'react';
import { Heart, Star, Gift } from 'lucide-react';
import NextButton from './NextButton';

interface WishesSectionProps {
  onNext: () => void;
}

const WishesSection: React.FC<WishesSectionProps> = ({ onNext }) => {
  const wishes = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Love & Joy",
      message: "May your special day be filled with endless love, laughter, and joy that lasts throughout the year."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Dreams Come True",
      message: "Wishing you a year ahead where all your dreams come true and every moment sparkles with happiness."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Beautiful Surprises",
      message: "May life surprise you with beautiful moments, wonderful adventures, and incredible memories to cherish."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Birthday Wishes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50"
            >
              <div className="text-pink-500 mb-6 flex justify-center">
                {wish.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {wish.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {wish.message}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              A Special Message
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              "Happy Birthday to an amazing friend! Your kindness, laughter, and beautiful spirit 
              make the world a brighter place. Here's to another year of incredible adventures, 
              cherished moments, and all the happiness your heart can hold. You deserve nothing 
              but the absolute best today and always!"
            </p>
          </div>
        </div>
        
        <NextButton onClick={onNext} text="Discover Surprises" />
      </div>
    </section>
  );
};

export default WishesSection;