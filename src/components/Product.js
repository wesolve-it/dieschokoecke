import React from 'react';

// --- FARBEN ---
const TEXT_COLOR = '#3E2723';
const ACCENT_COLOR = '#795548';
const CARD_BG = '#FFFFFF';

export default function Product({ product }) {
  const { price, title, image, description } = product.fields;
  const formattedPrice = price; 

  return (
    // ACHTUNG: Der umschließende Container muss nun h-full sein, um die Höhe des höchsten Elements im Grid zu übernehmen.
    <div className={`
        w-full h-full max-w-sm mx-auto
        bg-[#FFFFFF] rounded-xl overflow-hidden shadow-2xl shadow-gray-200 
        transition-all duration-500 
        group 
        hover:shadow-3xl hover:shadow-[#795548]/20 hover:scale-[1.03]
        border border-[#795548]/10
        flex flex-col // Muss Flexbox sein, damit die Details wachsen können
    `}>
      
      {/* --- Produktbild (Nicht dehnbar) --- */}
      <div className="relative overflow-hidden flex-shrink-0">
        <img 
          className="h-72 lg:h-80 w-full object-cover object-center 
          transition-transform duration-500 group-hover:scale-[1.1] group-hover:rotate-1" 
          src={image.fields.file.url} 
          alt={title} 
        />
        <div className={`absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[var(--formg-bg)] to-transparent`}></div>
      </div>
      
      {/* --- Details Sektion (Wachsend) --- */}
      <div className={`p-5 pt-3 text-[var(--text-color)] flex flex-col flex-grow`}>
        
        {/* Titel */}
        <h2 className={`mb-1 text-2xl font-serif italic font-normal text-[var(--accent-color)] transition-colors duration-300 group-hover:text-[var(--text-color)]`}>
            {title}
        </h2>
        
        {/*
          FEHLERBEHEBUNG HIER:
          - line-clamp und min-h entfernt. Der Text wird vollständig angezeigt.
          - Der div-Wrapper mit flex-grow sorgt dafür, dass dieser Bereich den gesamten verfügbaren Platz einnimmt.
        */}
        <div className="flex-grow">
             <p className={`mb-4 text-base font-light text-[var(--text-color)]/80`}>
                {description}
            </p>
        </div>
        
        {/* Preis und Button-Sektion (Wird durch mt-auto nach unten gedrückt) */}
        <div className="flex items-center justify-between border-t border-[var(--accent-color)]/30 pt-4 mt-auto">
          
          {/* Preis */}
          <p className={`text-2xl font-bold text-[var(--text-color)]`}>
            {formattedPrice}
          </p>
          
          {/* CTA-Button */}
          {/* <button
            className={`
                px-5 py-2 text-sm uppercase tracking-wider font-semibold 
                rounded-full bg-[var(--accent-color)] text-white 
                transition-all duration-300 shadow-md 
                hover:bg-[${TEXT_COLOR}] hover:shadow-lg hover:scale-[1.05]
            `}
          >
            Details
          </button> */}
        </div>
      </div>
    </div>
  )
}