
import React, { useState } from 'react';
import CenterBox from './CenterBox';
import ArticlesContainer from './ArticlesContainer';
import NavigationArrows from './NavigationArrows';
import SocialLinks from './SocialLinks';

const StageContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setCurrentArticleIndex(0);
  };

  const handleNavigate = (direction: 'left' | 'right') => {
    const totalArticles = 4;
    if (direction === 'left') {
      setCurrentArticleIndex(prev => prev > 0 ? prev - 1 : totalArticles - 1);
    } else {
      setCurrentArticleIndex(prev => prev < totalArticles - 1 ? prev + 1 : 0);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className={`fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 transition-all duration-1000 ${
        isOpen ? 'scale-110 blur-sm' : 'scale-100'
      }`} />
      
      {/* Main Stage */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Social Links */}
        <SocialLinks />
        
        {/* Articles Container */}
        {isOpen && (
          <ArticlesContainer 
            currentIndex={currentArticleIndex} 
            onClose={() => setIsOpen(false)}
          />
        )}
        
        {/* Navigation Menu */}
        <div className={`fixed top-4 left-4 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        }`}>
          <nav className="bg-black/20 backdrop-blur-md rounded-lg p-4">
            <ul className="space-y-2 text-white">
              <li><a href="https://desufuturo.com/" className="hover:text-purple-300 transition-colors">Inicio</a></li>
              <li><a href="https://desufuturo.com/es/pages/enConstruccion.html" className="hover:text-purple-300 transition-colors">Planeación Financiera</a></li>
              <li><a href="https://desufuturo.com/es/pages/enConstruccion.html" className="hover:text-purple-300 transition-colors">Marketing</a></li>
            </ul>
          </nav>
        </div>
        
        {/* Center Box */}
        {!isOpen && <CenterBox onToggle={handleToggle} />}
        
        {/* Navigation Arrows */}
        {isOpen && <NavigationArrows onNavigate={handleNavigate} />}
      </div>
    </div>
  );
};

export default StageContainer;
