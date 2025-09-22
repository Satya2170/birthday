import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NextButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, text, disabled = false }) => {
  if (disabled) return null;

  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={onClick}
        className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 text-lg font-semibold"
      >
        {text}
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default NextButton;