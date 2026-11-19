import Product from '../components/Product';

import { NavLink } from 'react-router-dom';

export default function Products({ products, status = 'ready' }) {
  return (
    <div className={`bg-[var(--light-bg)] py-16 lg:py-24 text-[var(--text-color)]`} data-aos="fade-in" data-aos-duration="1000">
      
      {/* --- 1. Sektionstitel --- */}
      <header className='max-w-screen-xl mx-auto px-6 mb-12 lg:mb-16 pt-[80px] lg:pt-[90px]'>
        <h1 className='text-4xl lg:text-6xl font-extralight mb-2 text-center lg:text-left'>
          Exklusive Auswahl an 
        </h1>
        <h2 className={`text-5xl lg:text-7xl font-serif italic text-[var(--accent-color)] text-center lg:text-left`}>
          Kakao-Trüffeln
        </h2>
        <p className='mt-4 text-lg font-light text-center lg:text-left max-w-3xl'>
          Hier finden Sie unsere handverlesene Selektion an unwiderstehlichen Kakao-Trüffeln und Pralinen. Jeder Bissen ein Erlebnis.
        </p>
      </header>

      {/* --- 2. Produkt-Grid --- */}
      <div className='max-w-screen-xl mx-auto px-6 xl:px-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 sm:gap-y-12'>
          {
            products.map(chocolate => (
              <div key={chocolate.fields.title} data-aos="fade-up" data-aos-delay="100">
                <Product product={chocolate} />
              </div>
            ))
          }
        </div>
        
        {/* Lade-, Fehler- und Leerzustand */}
        {status === 'loading' && (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 sm:gap-y-12' aria-busy='true' aria-label='Produkte werden geladen'>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className='rounded-xl bg-[var(--surface)] border border-[var(--line)] overflow-hidden motion-safe:animate-pulse'>
                <div className='aspect-square bg-[var(--line)]'></div>
                <div className='p-6 space-y-3'>
                  <div className='h-5 w-2/3 rounded bg-[var(--line)]'></div>
                  <div className='h-4 w-full rounded bg-[var(--line)]'></div>
                </div>
              </div>
            ))}
          </div>
        )}
        {status !== 'loading' && products.length === 0 && (
          <div className='text-center py-20 max-w-xl mx-auto' role='status'>
            <p className='text-xl text-[var(--text-color)]'>
              {status === 'error'
                ? 'Die Produkte konnten gerade nicht geladen werden.'
                : 'Aktuell sind keine Produkte verfügbar.'}
            </p>
            <p className='mt-3 text-[var(--muted-text)]'>
              {status === 'error'
                ? 'Bitte laden Sie die Seite neu oder fragen Sie uns direkt nach unserem Sortiment.'
                : 'Fragen Sie gern direkt nach unserem aktuellen Sortiment.'}
            </p>
            <div className='mt-6 flex flex-col sm:flex-row gap-3 justify-center'>
              {status === 'error' && (
                <button type='button' onClick={() => window.location.reload()}
                  className='px-6 py-3 rounded-full border-2 border-[var(--accent-color)] text-[var(--accent-color)] font-semibold hover:bg-[var(--accent-strong)] hover:text-white transition-colors'>
                  Seite neu laden
                </button>
              )}
              <NavLink to='/kontakt'
                className='px-6 py-3 rounded-full bg-[var(--accent-strong)] text-white font-semibold hover:bg-[var(--button-hover)] transition-colors'>
                Kontakt aufnehmen
              </NavLink>
            </div>
          </div>
        )}
      </div>

      {/* --- 3. NEU: Bestell- und Kontakt-CTA --- */}
      <div 
        className='max-w-screen-xl mx-auto px-6 xl:px-0 mt-20'
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
      >
        <div className={`bg-[var(--cta-bg)] p-8 lg:p-12 rounded-xl text-center shadow-lg`}>
          <h3 className={`text-3xl lg:text-4xl font-light mb-4 text-[var(--text-color)]`}>
            Bestellen Sie Ihre Trüffel-Auswahl
          </h3>
          <p className='text-lg font-light mb-6'>
            Da wir alle Trüffel frisch zubereiten und individuell zusammenstellen, bitten wir Sie, uns <span className='font-semibold'>telefonisch</span> oder <span className='font-semibold'>per E-Mail</span> zu kontaktieren, um Ihre Bestellung aufzugeben.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            {/* Telefon/WhatsApp CTA */}
            <a 
              href="tel:+49 174 8130465" 
              className={`px-8 py-3 text-lg font-semibold rounded-full text-white bg-[var(--cta-button-bg)] transition-all duration-300 shadow-md 
                hover:bg-[var(--accent-strong)] hover:shadow-lg`}
            >
              Jetzt anrufen oder WhatsApp
            </a>

            {/* E-Mail CTA */}
            <a 
              href="mailto:kontakt@dieschokoecke.de" 
              className={`px-8 py-3 text-lg font-semibold rounded-full bg-[var(--surface)] border-2 border-[var(--cta-button-bg)] text-[var(--accent-color)] transition-all duration-300 shadow-md 
                hover:bg-[var(--cta-button-bg)] hover:text-white`}
            >
              E-Mail senden
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}