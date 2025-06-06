
import React from 'react';
import DownloadButton from '../DownloadButton';

const SpeakersArticle = () => {
  return (
    <div className="text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Nuestras Speakers</h2>
      <div className="mb-6">
        <img 
          src="/api/placeholder/600/400" 
          alt="Speakers del evento" 
          className="rounded-lg mx-auto shadow-lg max-w-full h-auto"
        />
      </div>
      <DownloadButton href="/api/placeholder/600/400" filename="speakers.jpg">
        Descargar imagen
      </DownloadButton>
    </div>
  );
};

export default SpeakersArticle;
