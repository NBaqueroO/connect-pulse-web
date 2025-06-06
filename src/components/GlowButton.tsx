
import React from 'react';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const GlowButton = ({ children, onClick, href, className = '' }: GlowButtonProps) => {
  const baseClasses = `
    relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 
    text-white font-bold rounded-lg overflow-hidden
    transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:to-pink-400
    before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
    after:absolute after:inset-[2px] after:bg-gradient-to-r after:from-purple-600 after:to-pink-600
    after:rounded-md after:transition-all after:duration-300
    group ${className}
  `;

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Stars effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-ping" />
        <div className="absolute top-4 right-6 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
        <div className="absolute bottom-3 left-8 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
      </div>
      
      {/* Glow circles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

export default GlowButton;
