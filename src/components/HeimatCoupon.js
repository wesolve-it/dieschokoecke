import React from 'react';

// --- FARBEN (Konsistent mit den anderen Komponenten) ---
const TEXT_COLOR = '#3E2723';     // Dunkelbraun
const ACCENT_COLOR = '#795548';   // Akzent-Braun (z.B. für Ränder)
const CTA_BG = '#EAE0D7';         // Helles Creme-Braun für den Block-Hintergrund

export default function HeimatCoupon() {
  return (
    <div className={`bg-[#EAE0D7] py-16 lg:py-24 text-[#3E2723]`} data-aos="fade-up" data-aos-duration="1000">
      <div className='max-w-screen-xl mx-auto px-6 xl:px-0'>
        
        {/* --- Container für Inhalt und Logo --- */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16'>

          {/* 1. Text-Sektion */}
          <div className='lg:w-1/2 text-center lg:text-left'>
            
            <span className={`text-sm uppercase tracking-widest font-semibold text-[#795548] mb-2 block`}>
                Lokale Partnerschaft
            </span>
            
            <h2 className={`text-4xl lg:text-5xl font-serif italic font-normal mb-6`}>
              Bezahlen mit dem Heimatgutschein
            </h2>
            
            <p className='text-xl font-light leading-relaxed mb-6'>
              Als regional verwurzeltes Geschäft akzeptieren wir den <span className='font-semibold'>Heimatgutschein</span> von N-LAND. Nutzen Sie Ihren Gutschein ganz bequem für unsere exquisiten Trüffel und Pralinen.
            </p>

            {/* Optional: CTA für Details */}
            <a 
              href="https://www.heimatgutschein.com/" // Link zur offiziellen Seite oder Ihrer FAQ
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-block mt-4 px-6 py-3 text-base font-semibold rounded-full 
                bg-[#795548] text-white transition-all duration-300 shadow-md 
                hover:bg-[#795548] hover:shadow-lg hover:scale-[1.05]`}
            >
              Mehr zum Gutschein erfahren
            </a>
          </div>

          {/* 2. Logo-Sektion */}
          <div className='lg:w-1/2 flex justify-center lg:justify-end p-4 rounded-xl bg-white shadow-2xl'>
            <img 
              src={require('../assets/n-land-1j9c4filjl4limt8zxul-logowide.png')} 
              alt="Logo Heimatgutschein N-LAND" 
              // Bildgröße kontrollieren, um es nicht zu dominant zu machen
              className='max-w-full h-auto w-auto max-h-36 object-contain mx-auto pl-6 lg:pl-10' 
            />
          </div>

        </div>
      </div>
    </div>
  )
}