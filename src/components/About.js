import React from 'react';
import Image1 from '../assets/image1.png'; // Bild Anja Scharf (Portrait)
import Image2 from '../assets/image2.png'; // Bild Trüffel-Auswahl
import Image3 from '../assets/image3.png'; // Bild Verpackung/Detail

import { Element } from 'react-scroll';

// --- BENUTZERDEFINIERTE CSS-KEYFRAMES (für dekorativen Akzent) ---
const customStyles = `
  @keyframes swirl-pulse {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.6; }
    50% { transform: scale(1.05) rotate(3deg); opacity: 0.8; }
  }
  .swirl-pulse { animation: swirl-pulse 5s ease-in-out infinite; }
`;
// ----------------------------------------------------------------------------

export default function About() {

    const [isContactClicked, setIsContactClicked] = React.useState(false);

    const handleContactClick = () => {
        setIsContactClicked(true);
        setTimeout(() => setIsContactClicked(false), 300);
        // Hier würde die eigentliche Kontaktaktion (z.B. Link-Aufruf) folgen
    };


    return (
        <>
            <style>{customStyles}</style>

            <Element 
                // HIER IST DIE ÄNDERUNG: Neuer Hintergrund
                className={`bg-[var(--new-bg-color)] text-[var(--text-color)] py-12 lg:py-24 overflow-hidden`} 
                id="about" 
                name="about"
            >
                <div className='max-w-screen-xl mx-auto px-6 xl:px-0 relative'>
                    
                    {/* DEKORATIVER AKZENT: Fließende Schokoladen-Form */}
                    <div 
                        className={`hidden lg:block absolute -top-8 right-1/4 w-32 h-32 bg-[var(--accent-color)]/10 rounded-full blur-xl swirl-pulse`} 
                        style={{animationDelay: '0.5s'}}
                    ></div>
                    
                    {/* Hauptüberschrift */}
                    <h2 
                        className={`text-center text-4xl lg:text-5xl font-extralight mb-12 lg:mb-16 border-b-2 border-dashed border-[var(--accent-color)]/50 pb-4`}
                        data-aos="fade-down"
                        data-aos-duration="800"
                    >
                        Die Geschichte hinter <span className={`font-serif italic text-[var(--accent-color)]`}>dieschokoecke</span>
                    </h2>

                    {/* --- Layout: Asymmetrisches 2-Spalten-Grid --- */}
                    <div className='lg:grid lg:grid-cols-12 lg:gap-12 items-start'>
                        
                        {/* LINKER BLOCK (Bilder & Details) - 4/12 Breite */}
                        <div className='lg:col-span-4 space-y-8 order-2 lg:order-1'>
                            
                            {/* Bild 2: Trüffel-Auswahl (HOVER-Effekt: 3D-Tilt) */}
                            <div 
                                className={`group relative rounded-xl overflow-hidden shadow-2xl shadow-[var(--accent-color)]/20 transition-transform duration-500 hover:rotate-1`}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <img 
                                    src={Image2} 
                                    alt="Detailaufnahme von Trüffeln" 
                                    className='w-full h-auto object-cover lg:h-[400px] transition-transform duration-500 group-hover:scale-[1.08] group-hover:brightness-110'
                                />
                                {/* Micro-Interaction: Overlay mit Callout beim Hover */}
                                <div className={`absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                    <span className='text-white text-xl font-medium tracking-wider border-2 border-white px-4 py-2'>Zum Reinbeißen</span>
                                </div>
                            </div>

                            {/* Bild 3: Verpackung/Detail (HOVER-Effekt: Text-Reveal) */}
                            <div 
                                className={`hidden lg:block relative rounded-xl overflow-hidden shadow-lg shadow-[var(--accent-color)]/10 mt-8 group`}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                            >
                                <img 
                                    src={Image3} 
                                    alt="Bild einer Geschenkverpackung" 
                                    className='w-full h-auto object-cover lg:h-[200px] opacity-90 transition-transform duration-500 group-hover:scale-[1.05]'
                                />
                                <div className='absolute inset-0 bg-black/30 transition-opacity duration-500'></div>
                                {/* Micro-Interaction: Text rutscht beim Hover herein */}
                                <p className={`absolute -bottom-10 left-4 text-white text-lg font-serif italic drop-shadow-md transition-all duration-300 group-hover:bottom-4`}>
                                    Perfekt als Geschenk
                                </p>
                            </div>
                        </div>


                        {/* RECHTER BLOCK (Text & Portrait) - 8/12 Breite */}
                        <div className='lg:col-span-8 space-y-10 order-1 lg:order-2 mt-10 lg:mt-0'>
                            
                            {/* Sektion 1: Begrüßung und Name */}
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <h1 className='text-3xl text-center lg:text-left font-light mb-4 lg:text-5xl border-b border-dashed border-[var(--accent-color)]/30 pb-2'>
                                    Anja Scharf – Ihre Expertin für Genuss
                                </h1>
                                
                                <p className={`font-light text-left text-lg leading-relaxed text-[var(--text-color)]/90`}>
                                    Mein Name ist Anja Scharf. Geboren in Bochum und seit 30 Jahren im schönen Lauf zu Hause, stehe ich hinter der <span className='font-semibold'>SchokoEcke</span>. Als leidenschaftliche Liebhaberin von feinen Pralinen freue ich mich, Ihnen seit September 2024 die <span className='font-semibold'>exklusiven Kakao-Trüffel und Pralinen</span> der Manufaktur Selectinas anbieten zu dürfen.
                                </p>
                            </div>

                            {/* Sektion 2: Die Trüffel-Tradition */}
                            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                                <h4 className={`text-2xl font-light text-[var(--accent-color)]`}>Die Tradition lebt weiter</h4>
                                <p className={`font-light text-left text-lg leading-relaxed mt-2 text-[var(--text-color)]/90`}>
                                    Die Trüffel von Selectinas sind vielen Kennern noch aus der Zeit der Firma Mundi-Weine bekannt, die mittlerweile geschlossen ist. Es ist mir eine Ehre, diese beliebte Tradition fortzuführen und Ihnen die gewohnte große Auswahl an hochwertigen Genussmomenten wieder zugänglich zu machen. Jeder Trüffel wird sorgfältig ausgewählt, um höchste Qualität zu garantieren.
                                </p>
                            </div>
                            
                            {/* Sektion 3: Portrait und Kontakt-CTA (Micro-Interaction: Klick-Rückmeldung) */}
                            <div className='lg:flex lg:gap-8 items-center pt-4' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                
                                {/* Bild 1: Portrait */}
                                <div className={`flex-shrink-0 mx-auto w-48 h-48 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[var(--accent-color)] shadow-xl transition-all duration-500 hover:rotate-2 hover:scale-[1.02]`}>
                                    <img src={Image1} alt="Portrait von Anja Scharf" className='w-full h-full object-cover' />
                                </div>

                                {/* Kontakttext */}
                                <div className='flex-1 text-center lg:text-left mt-6 lg:mt-0'>
                                    <p className={`font-light text-xl leading-snug italic text-[var(--text-color)]/90`}>
                                        Gerne dürfen Sie mich telefonisch, per Email oder WhatsApp kontaktieren.
                                    </p>
                                    <p className={`text-xl font-medium mt-3 text-[var(--accent-color)]`}>
                                        Ich freue mich auf Sie! <br/> Ihre Anja Scharf
                                    </p>
                                    <a 
                                        href="tel:+49 174 8130465" 
                                        onClick={handleContactClick}
                                        className={`mt-4 inline-block text-lg font-semibold border-b border-transparent hover:border-[var(--accent-color)] text-[#6D4C41] hover:text-black transition-all duration-300 
                                            ${isContactClicked ? `ring-4 ring-[var(--shine-color)] ring-offset-2 rounded-md` : ''}`}
                                    >
                                        Kontakt aufnehmen
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}