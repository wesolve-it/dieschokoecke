import React from 'react';
import Chocolate from '../assets/chocolateOne.svg';
import { Element } from 'react-scroll';

// --- BENUTZERDEFINIERTE CSS-KEYFRAMES (Würde in globaler CSS-Datei stehen) ---
const customStyles = `
  @keyframes float-truffle {
    0%, 100% { transform: translateY(0) rotate(-1deg); }
    50% { transform: translateY(-12px) rotate(1deg); }
  }
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .float-truffle { animation: float-truffle 6s ease-in-out infinite; }
  .animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
`;
// ----------------------------------------------------------------------------

export default function Hero() {
  return (
    <div className="pt-[80px] lg:pt-[90px]">
      <style>{customStyles}</style>

      <Element 
        className='relative bg-gradient-to-br from-[#F5F5F5] via-[#EDEBE4] to-[#EAE0D7] text-[#3E2723] py-10 lg:pt-20 overflow-hidden min-h-[70vh]' 
        id="home" 
        name="home"
      >
        {/* Dekorativer Hintergrund-Glow */}
        <div className='absolute top-1/4 left-1/4 w-72 h-72 bg-[#D4C1A5]/30 rounded-full blur-3xl opacity-50'></div>
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8D6E63]/20 rounded-full blur-3xl opacity-40'></div>

        <div className='max-w-screen-xl mx-auto px-6 xl:px-0 relative z-10'>
            
            {/* Kopfzeile */}
            <h1 
                className='text-center text-4xl lg:text-8xl text-[#4E342E]'
                data-aos="fade-down"
                data-aos-duration="800"
            >
                die <span className='italic font-light font-serif text-[#6D4C41]'>schokoecke</span>
            </h1>

            <div className='lg:flex lg:items-center mt-10 lg:mt-16'>
                
                {/* TEXT-Sektion (Links) */}
                <div 
                    className='lg:flex-1 lg:pr-10'
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <h2 className='text-center text-3xl font-light lg:text-7xl lg:font-extralight lg:text-left mt-6 lg:mt-0 leading-tight'>
                        Belgische<br/>
                        <span className='text-[#8D6E63] font-normal'>Pralinen</span>
                    </h2>
                    
                    <h3 className='text-center lg:text-left mt-4 lg:mt-6 font-light text-lg lg:text-xl text-[#5D4037] max-w-lg'>
                        Hallo, schön dass du in der SchokoEcke stöberst. Bei mir gibt es hochwertige belgische Pralinen der Firma <span className='font-semibold'>Selectinas</span>. Viel Spaß beim Entdecken des <span className='font-semibold'>puren Genusses</span>.
                    </h3>

                    {/* Neuer, hervorgehobener CTA-Bereich */}
                    <div className='mt-8 flex justify-center lg:justify-start'>
                      <a href="/produkte">
                        <button 
                            className='px-10 py-4 bg-[#6D4C41] text-white rounded-full text-lg font-medium hover:bg-[#8D6E63] transition-all duration-300 shadow-xl shadow-[#6D4C41]/30 hover:scale-[1.03]'
                        >
                            Zum Sortiment
                        </button>
                        </a>
                    </div>

                </div>
                
                {/* BILD-Sektion (Rechts) */}
                <div 
                    className='lg:flex-1 relative mt-10 lg:mt-0'
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    {/* Der animierte Container für das SVG */}
                    <div className='float-truffle max-w-sm lg:max-w-none mx-auto'>
                        <img 
                            src={Chocolate} 
                            alt="Schokoladenauswahl" 
                            className='w-4/6 mx-auto lg:w-full h-auto object-contain drop-shadow-2xl'
                        />
                    </div>
                    {/* Zusätzliche dekorative Elemente (z.B. fliegende Kakaobohne) */}
                    <div className='absolute top-10 right-0 w-16 h-16 bg-[#A1887F]/30 rounded-full float-truffle hidden lg:block' style={{animationDuration: '8s', animationDelay: '1s'}}></div>
                </div>
            </div>
        </div>
      </Element>
    </div>
  );
}