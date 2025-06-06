
import React from 'react';

const EventInfoArticle = () => {
  return (
    <div className="text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Women in Business Connect (WBC) — 10 de Abril</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <iframe 
            width="100%" 
            height="250" 
            src="https://www.youtube.com/embed/02Q7BRkPtz4" 
            title="¿Qué es WBC?" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="rounded-lg"
          />
          <h3 className="text-xl font-semibold">¿Qué es WBC?</h3>
        </div>
        <div className="space-y-4">
          <iframe 
            width="100%" 
            height="250" 
            src="https://www.youtube.com/embed/klhxKHxhQxU" 
            title="Asistentes" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="rounded-lg"
          />
          <h3 className="text-xl font-semibold">Asistentes</h3>
        </div>
      </div>
    </div>
  );
};

export default EventInfoArticle;
