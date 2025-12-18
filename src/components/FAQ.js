import { useState } from 'react';

// Interner CTA-Block (angepasst auf die Konstanten)
export function ContactCTA() {
  return (
    <div className="mt-24 mb-16 px-6">
      <div 
        className={`max-w-4xl mx-auto p-10 lg:p-16 text-center rounded-3xl border border-[var(--accent-color)]/10 bg-[var(--cta-bg)] shadow-sm relative overflow-hidden`}
        data-aos="zoom-in"
      >
        <div className={`absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent-color)]/5 rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--accent-color)]/5 rounded-full blur-3xl`}></div>

        <div className="relative z-10">
          <div className={`w-12 h-0.5 bg-[var(--accent-color)]/30 mx-auto mb-6`}></div>
          <h3 className={`text-2xl lg:text-3xl font-serif italic mb-4 text-[var(--text-color)]`}>
            Haben Sie noch weitere Fragen?
          </h3>
          <p className="text-lg mb-8 font-light max-w-md mx-auto leading-relaxed">
            Ob individuelle Wünsche oder Details zu unseren Pralinen – wir sind gerne für Sie da.
          </p>
          <a 
            href="kontakt" 
            className={`inline-block px-10 py-4 rounded-full font-semibold text-white bg-[var(--accent-color)] shadow-lg transition-all duration-300 hover:bg-[var(--text-color)] hover:scale-105`}
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ faqEntries }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`bg-[var(--light-bg)] py-16 lg:py-24 text-[var(--text-color)]`} id="faq">
      <div className='max-w-screen-xl mx-auto px-6 xl:px-0'>
        
        {/* --- Header --- */}
        <div className='text-center mb-12 lg:mb-20'>
          <h2 className='text-3xl font-light lg:text-5xl mb-2 tracking-wide'>Häufig gefragt</h2>
          <h3 className={`text-4xl lg:text-6xl font-serif italic text-[var(--accent-color)]`}>Antworten</h3>
          <div className={`w-24 h-1 bg-[var(--accent-color)]/30 mx-auto mt-6`}></div>
        </div>

        {/* --- Akkordeon-Container (Zentriert durch max-w-4xl und mx-auto) --- */}
        <div className='max-w-4xl mx-auto space-y-4 lg:space-y-6' data-aos="fade-up" data-aos-duration="1000">
          {faqEntries.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-md transition-all duration-300 overflow-hidden
                ${openIndex === index ? `ring-1 ring-[var(--accent-color)]/30 shadow-xl` : 'hover:shadow-lg'}`}
            >
              <h2>
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`flex items-center justify-between text-left w-full py-6 px-8 transition-all duration-300
                    ${openIndex === index ? `bg-[var(--accent-color)]/5` : `bg-white`}`}
                >
                  <span className={`text-lg lg:text-xl font-medium ${openIndex === index ? `text-[var(--accent-color)]` : `text-[var(--text-color)]`}`}>
                    {faq.fields.question}
                  </span>
                  
                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-[var(--accent-color)]' : 'text-gray-400'}`}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              
              {/* --- Antwort-Sektion --- */}
              <div 
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className='overflow-hidden'>
                  {/* pt-5 sorgt für den nötigen Abstand zum Header-Trenner */}
                  <div className={`pt-5 pb-8 px-8 text-[var(--text-color)]/80 font-light text-base lg:text-lg leading-relaxed border-t border-gray-100 mx-8`}>
                    {faq.fields.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Kontakt CTA */}
        <ContactCTA />
      </div>
    </div>
  );
}