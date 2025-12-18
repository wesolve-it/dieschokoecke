import React, { useState, useEffect } from 'react';

// --- FARBEN (Konsistent mit den anderen Komponenten) ---
const TEXT_COLOR = '#3E2723';     // Dunkelbraun
const ACCENT_COLOR = '#795548';   // Akzent-Braun
const MODAL_BG = '#FDFCFB';       // Sehr helles, fast weißes Creme für das Modal
const BUTTON_BG = '#6D4C41';      // Sattes Schokoladenbraun für den Button

const CouponModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Modal nach 3 Sekunden anzeigen
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 3000);

    // Cleanup timer falls die Komponente unmontiert wird
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setModalVisible(false);

  if (!isModalVisible) return null;

  return (
    // Hintergrund-Overlay
    <div 
      className="fixed inset-0 bg-gray-900 bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300"
      onClick={closeModal} // Schließen bei Klick außerhalb
    >
      {/* Modal-Container mit Animation */}
      <div 
        className={`
          bg-[var(--modal-bg)] text-[var(--text-color)] p-6 sm:p-8 rounded-xl w-11/12 max-w-lg shadow-2xl transition-transform duration-300 
          scale-100 opacity-100
        `}
        // Verhindert, dass Klick auf Modal den Hintergrund schließt
        onClick={(e) => e.stopPropagation()} 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        
        {/* 1. Visueller Header/Logo Bereich */}
        <div className={`p-4 mb-4 rounded-lg bg-[var(--accent-color)]/10`}>
          <img 
            className='object-contain w-3/4 max-h-20 mx-auto' 
            src={require('../assets/n-land-1j9c4filjl4limt8zxul-logowide.png')} 
            alt='N-LAND Heimatgutschein Logo' 
          />
        </div>

        {/* 2. Textlicher Inhalt */}
        <h2 id="modal-title" className={`text-3xl font-serif italic mb-3 text-[var(--button-bg)]`}>
          Herzlich willkommen!
        </h2>
        <h3 className={`text-2xl font-light mb-4 text-[var(--text-color)]`}>
           Wir akzeptieren den Heimatgutschein!
        </h3>
        
        <p className="mb-6 text-base font-light">
          Ab sofort bieten wir auch die Möglichkeit, bei uns den Heimatgutschein zu nutzen. Eine perfekte Gelegenheit, unsere <span className='font-semibold'>exquisiten Trüffel</span> zu genießen.
        </p>
        
        {/* 3. Button Sektion */}
        <div className="flex flex-col sm:flex-row justify-center gap-3">
            {/* CTA für mehr Infos */}
            <a 
                href="https://www.heimatgutschein.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-6 py-2 font-semibold rounded-full 
                    bg-[var(--accent-color)] text-white transition-all duration-300 shadow-md 
                    hover:bg-[var(--button-bg)] hover:scale-105 text-sm sm:text-base`}
            >
                Details
            </a>

            {/* Schließen Button */}
            <button
                className={`px-6 py-2 font-semibold rounded-full 
                    bg-gray-200 text-gray-700 transition-colors duration-300 
                    hover:bg-gray-300 hover:text-gray-800 text-sm sm:text-base`}
                onClick={closeModal}
            >
                Später erinnern
            </button>
        </div>

      </div>
    </div>
  );
};

export default CouponModal;