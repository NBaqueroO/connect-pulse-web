
import React from 'react';
import GlowButton from './GlowButton';

interface CenterBoxProps {
  onToggle: () => void;
}

const CenterBox = ({ onToggle }: CenterBoxProps) => {
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Illustration placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-4xl">🎯</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-wider">
            Connect
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Da click y conoce más del evento
          </p>
        </div>
        
        {/* Button */}
        <GlowButton onClick={onToggle}>
          Click aquí
        </GlowButton>
        
        {/* Mobile Button */}
        <div className="md:hidden mt-8">
          <GlowButton onClick={onToggle}>
            Click Aquí
          </GlowButton>
        </div>
      </div>
    </div>
  );
};

export default CenterBox;
