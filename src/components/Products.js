import Truffel from '../assets/truffel.svg';
import { Link } from 'react-router-dom';

// CSS Keyframes (für Floating-Effekt, wenn nicht global definiert)
const customStyles = `
  @keyframes float-truffle-products {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(-1deg); }
  }
  .float-truffle-products { animation: float-truffle-products 6s ease-in-out infinite; }
`;


export default function Products() {
  return (
    <>
      <style>{customStyles}</style>
      
      <div className={`max-w-screen-xl mx-auto px-6 xl:px-0 mt-16 lg:mt-32 pb-16 relative text-[var(--text-color)]`}>
        
        {/* Dekorativer Akzent: Goldene Plakette / Schimmer */}
        <div 
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-[#D4C1A5]/60 to-transparent rounded-full blur-3xl opacity-50`}
          data-aos="zoom-in" data-aos-duration="1200"
        ></div>

        <div className='lg:flex lg:flex-row-reverse lg:items-center relative z-10'>
          
          {/* TEXT-Sektion (Flex-1) */}
          <div className='lg:flex-1 lg:my-auto lg:pl-16 order-2' data-aos="fade-left" data-aos-duration="1000">
            
            <h2 className={`text-4xl text-center mb-6 lg:text-6xl lg:text-left font-extralight leading-snug text-[#4E342E]`}>
              Handwerkliche Qualität <span className='text-xl lg:text-3xl font-light'>bis</span> 
              <span className={`font-serif italic text-[var(--accent-color)] font-normal ml-2`}>ins Detail</span>
            </h2>
            
            <p className='mb-8 leading-relaxed font-light text-lg text-center lg:text-left'>
              Unsere <span className='font-semibold'>belgischen Kakao-Trüffel</span> sind wahre Gaumenschmeichler und der perfekte Geheimtipp für besondere Anlässe: ob zum Geburtstag, als elegantes Geschenk für gute Kunden oder einfach, um sich selbst zu beschenken.
            </p>
            
            <p className='mb-6 leading-relaxed font-light text-base text-center lg:text-left text-[var(--text-color)]/80'>
              Wählen Sie zwischen stilvollen Geschenkkartons oder einem liebevoll verpackten Organzasäckchen.
            </p>

            {/* Call-to-Action Button */}
            <section className='text-center lg:text-left pt-4'>
              <Link to="Produkte">
                <button 
                  className={`relative rounded-full py-3 px-8 bg-[var(--button-bg)] text-white font-medium uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.03]
                  group overflow-hidden`}
                >
                  <span className='relative z-10'>Sortiment entdecken</span>
                  {/* Micro-Interaction: Subtiler Licht-Wisch-Effekt beim Hover */}
                  <span className='absolute inset-0 block bg-white opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300'></span>
                  <span className='absolute inset-0 block bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full transform -skew-x-12 -translate-x-full transition-transform duration-500 group-hover:translate-x-full'></span>
                </button>
              </Link>
            </section>
            
          </div>

          {/* BILD-Sektion (Flex-1) */}
          <div className='lg:flex-1 order-1 mt-10 lg:mt-0' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            {/* Bild mit Floating-Animation und starkem Schatten */}
            <div className='float-truffle-products max-w-lg mx-auto lg:max-w-none'>
                <img 
                    src={Truffel} 
                    alt="Mehrere Trüffel in einer Auswahl" 
                    className='w-5/6 mx-auto lg:w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:rotate-1'
                />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}