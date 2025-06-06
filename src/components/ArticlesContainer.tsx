
import React from 'react';
import SpeakersArticle from './articles/SpeakersArticle';
import EventInfoArticle from './articles/EventInfoArticle';
import ProgramArticle from './articles/ProgramArticle';
import TicketsArticle from './articles/TicketsArticle';

interface ArticlesContainerProps {
  currentIndex: number;
  onClose: () => void;
}

const ArticlesContainer = ({ currentIndex, onClose }: ArticlesContainerProps) => {
  const articles = [
    <SpeakersArticle key="speakers" />,
    <EventInfoArticle key="info" />,
    <ProgramArticle key="program" />,
    <TicketsArticle key="tickets" />
  ];

  return (
    <div className="flex-1 flex items-center justify-center p-4 relative">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
      >
        ✕
      </button>
      
      {/* Article container */}
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
        <div className="transition-all duration-500 transform">
          {articles[currentIndex]}
        </div>
      </div>
    </div>
  );
};

export default ArticlesContainer;
