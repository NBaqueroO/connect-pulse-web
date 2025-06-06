
import React from 'react';
import GlowButton from '../GlowButton';

const TicketsArticle = () => {
  return (
    <div className="text-center text-white space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Compra tu entrada</h2>
        <div className="space-y-4">
          <GlowButton href="https://mpago.li/2iKoCtH" className="block w-full">
            Entrada General - $59.000 COP
          </GlowButton>
          <GlowButton href="https://mpago.li/2kvbSg3" className="block w-full">
            Entrada VIP - $99.999 COP
          </GlowButton>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Únete a la Comunidad de Connect</h2>
        <a 
          href="https://chat.whatsapp.com/DloW3JsJMcvCn00iQuFWE2" 
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>📱</span>
          Únete al grupo de WhatsApp
        </a>
      </div>
    </div>
  );
};

export default TicketsArticle;
