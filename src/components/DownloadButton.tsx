
import React from 'react';

interface DownloadButtonProps {
  href: string;
  filename: string;
  children: React.ReactNode;
}

const DownloadButton = ({ href, filename, children }: DownloadButtonProps) => {
  return (
    <a 
      href={href} 
      download={filename}
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
    >
      <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor">
        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
      </svg>
      {children}
    </a>
  );
};

export default DownloadButton;
