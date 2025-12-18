export default function Impressum() {
  return (
    <div className={`bg-[var(--light-bg)] py-16 lg:py-24 text-[var(--text-color)]`} data-aos="fade-in" data-aos-duration="800">
      <div className='max-w-screen-xl mx-auto px-6 xl:px-0'>
        
        {/* --- Haupt-Überschrift --- */}
        <h1 className={`text-5xl lg:text-6xl font-serif italic text-[var(--accent-color)] mb-10 border-b-2 border-[var(--accent-color)]/30 pb-4 pt-20`}>
            Impressum
        </h1>

        {/* --- 1. Allgemeine Angaben --- */}
        <section className='mb-10 p-6 rounded-xl bg-white shadow-lg'>
          <h2 className={`text-2xl font-semibold mb-4 border-l-4 border-[var(--accent-color)] pl-3`}>
            Verantwortlich für den Inhalt
          </h2>
          <div className='text-lg font-light leading-relaxed'>
            <p className='mb-1'>Anja Scharf</p>
            <p className='mb-1'>Verkauf von Schokopralinen</p>
            <p className='mb-1'>Heuchlinger Hauptstraße 21</p>
            <p>91207 Lauf a. d. Pegnitz</p>
          </div>
        </section>

        {/* --- 2. Kontakt --- */}
        <section className='mb-10 p-6 rounded-xl bg-white shadow-lg'>
          <h2 className={`text-2xl font-semibold mb-4 border-l-4 border-[var(--accent-color)] pl-3`}>
            Kontakt
          </h2>
          <div className='text-lg font-light leading-relaxed'>
            <p className='mb-1'>
                Telefon: 
                <a href="tel:+491748130465" className={`ml-2 text-[var(--accent-color)] hover:underline`}>
                    +49 174 8130465
                </a>
            </p>
            <p>
                E-Mail: 
                <a href="mailto:kontakt@dieschokoecke.de" className={`ml-2 text-[var(--accent-color)] hover:underline`}>
                    kontakt@dieschokoecke.de
                </a>
            </p>
          </div>
        </section>

        {/* --- 3. Rechtliche Hinweise (Grid oder Container) --- */}
        <div className='grid lg:grid-cols-2 gap-8'>
            <section className='p-6 rounded-xl bg-white shadow-lg'>
                <h2 className={`text-xl font-semibold mb-3 border-l-4 border-[var(--accent-color)]/50 pl-3`}>
                    EU-Streitschlichtung
                </h2>
                <p className='font-light leading-relaxed text-base'>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a 
                        href="https://ec.europa.eu/consumers/odr/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`block mt-2 text-[var(--accent-color)] hover:underline font-normal`}
                    >
                        https://ec.europa.eu/consumers/odr/
                    </a>
                    <br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
            </section>

            <section className='p-6 rounded-xl bg-white shadow-lg'>
                <h2 className={`text-xl font-semibold mb-3 border-l-4 border-[var(--accent-color)]/50 pl-3`}>
                    Verbraucherstreitbeilegung
                </h2>
                <p className='font-light leading-relaxed text-base'>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>
        </div>

        {/* --- Quelle --- */}
        <p className='mt-12 text-sm text-gray-500 font-light text-center'>
            Quelle: <a href="https://www.e-recht24.de/impressum-generator.html" className='hover:underline'>e-recht24.de Impressum Generator</a>
        </p>

      </div>
    </div>
  )
}