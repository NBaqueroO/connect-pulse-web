
import React, { useState } from 'react';

interface NavigationArrowsProps {
  onNavigate: (direction: 'left' | 'right') => void;
}

const NavigationArrows = ({ onNavigate }: NavigationArrowsProps) => {
  const [isLeftClicked, setIsLeftClicked] = useState(false);
  const [isRightClicked, setIsRightClicked] = useState(false);

  const handleLeftClick = () => {
    setIsLeftClicked(true);
    onNavigate('left');
    setTimeout(() => setIsLeftClicked(false), 200);
  };

  const handleRightClick = () => {
    setIsRightClicked(true);
    onNavigate('right');
    setTimeout(() => setIsRightClicked(false), 200);
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
      {/* Left Arrow */}
      <button 
        onClick={handleLeftClick}
        className={`w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-200 ${
          isLeftClicked ? 'scale-90 bg-white/40' : 'hover:scale-110'
        }`}
      >
        <svg className="w-6 h-6 text-white" viewBox="0 0 46 40" fill="currentColor">
          <path d="M0 20.038c0 .7.3 1.5.8 2.1l16 17c1.1 1 3.2 1.4 4.4.3 1.2-1.1 1.2-3.3 0-4.4L10.9 23H43c1.7 0 3-1.3 3-3s-1.3-3-3-3H10.9l11.3-11.9c1-1 1.2-3.3 0-4.4-1.2-1.1-3.3-.8-4.4.3l-16 17c-.5.5-.8 1.1-.8 1.9z"/>
        </svg>
      </button>
      
      {/* Right Arrow */}
      <button 
        onClick={handleRightClick}
        className={`w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-200 ${
          isRightClicked ? 'scale-90 bg-white/40' : 'hover:scale-110'
        }`}
      >
        <svg className="w-6 h-6 text-white" viewBox="0 0 46 40" fill="currentColor">
          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"/>
        </svg>
      </button>
    </div>
  );
};

export default NavigationArrows;
