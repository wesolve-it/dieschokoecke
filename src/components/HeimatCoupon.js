export default function HeimatCoupon() {
  return (
    <div className={`bg-[var(--cta-bg)] py-16 lg:py-24 text-[var(--text-color)]`} data-aos="fade-up" data-aos-duration="1000">
      <div className='max-w-screen-xl mx-auto px-6 xl:px-0'>
        
        {/* --- Container für Inhalt und Logo --- */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16'>

          {/* 1. Text-Sektion */}
          <div className='lg:w-1/2 text-center lg:text-left'>
            
            <span className={`text-sm uppercase tracking-widest font-semibold text-[var(--accent-color)] mb-2 block`}>
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
                bg-[var(--accent-strong)] text-white transition-all duration-300 shadow-md 
                hover:bg-[var(--accent-strong)] hover:shadow-lg hover:scale-[1.05]`}
            >
              Mehr zum Gutschein erfahren
            </a>
          </div>

          {/* 2. Logo-Sektion */}
          <div className='lg:w-1/2 flex justify-center lg:justify-end p-4 rounded-xl bg-[var(--surface)] shadow-2xl'>
            <img loading="lazy" decoding="async" 
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