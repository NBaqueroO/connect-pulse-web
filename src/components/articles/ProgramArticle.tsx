
import React from 'react';
import DownloadButton from '../DownloadButton';

const ProgramArticle = () => {
  return (
    <div className="text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Programa del evento</h2>
      <div className="mb-6">
        <img 
          src="/api/placeholder/600/800" 
          alt="Programa del evento" 
          className="rounded-lg mx-auto shadow-lg max-w-full h-auto"
        />
      </div>
      <DownloadButton href="/api/placeholder/600/800" filename="programa.png">
        Descargar programa
      </DownloadButton>
    </div>
  );
};

export default ProgramArticle;
