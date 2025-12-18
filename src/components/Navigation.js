import React, { useState, useEffect } from 'react';
import Logo from '../assets/FullLogo_Transparent_NoBuffer.png';
import { NavLink, useNavigate } from 'react-router-dom';

// --- FARBEN ---
const TEXT_COLOR = '#3E2723';
const ACCENT_COLOR = '#795548';
const HEADER_BG = '#FFFFFF';
const CTA_BUTTON_BG = '#6D4C41';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // --- SCROLL-EFFEKT LOGIK ---
  useEffect(() => {
    const handleScroll = () => {
      // Wenn mehr als 50px gescrollt wurde, wird isScrolled true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = isScrolled ? 70 : 90; // Anpassung an die Header-Höhe
        window.scrollTo({
          top: section.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out
        ${isScrolled 
          ? `bg-[${HEADER_BG}]/F0 backdrop-blur-md py-2 shadow-xl` // Schlanker & Glas-Effekt
          : `bg-[${HEADER_BG}] py-5 shadow-sm` // Luftiger & Dezenter
        }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6">
        
        {/* --- Logo: Skaliert beim Scrollen --- */}
        <NavLink to="/" onClick={() => handleScrollToSection('home')} className="flex items-center group">
            <img 
                src={Logo} 
                className={`transition-all duration-500 object-contain ${isScrolled ? 'h-10' : 'h-12 lg:h-14'}`} 
                alt="dieschokoecke Logo" 
            />
        </NavLink>

        {/* --- Mobile Hamburger Button (Kein blauer Rahmen mehr!) --- */}
        <button
          onClick={toggleMenu}
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-[${TEXT_COLOR}] 
                     rounded-lg md:hidden hover:bg-[${ACCENT_COLOR}]/10 focus:outline-none transition-colors`}
        >
          <span className="sr-only">Menü</span>
          <div className="relative w-6 h-5">
            {/* Animierte Hamburger-Linien */}
            <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 top-2 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
          </div>
        </button>

        {/* --- Navigationslinks --- */}
        <div className={`
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 md:translate-y-0 md:opacity-100'}
          absolute md:relative top-full left-0 w-full md:top-auto md:w-auto transition-all duration-500 ease-in-out
          bg-white md:bg-transparent shadow-2xl md:shadow-none z-[-1] md:z-auto
        `}>
          <ul className="flex flex-col md:flex-row items-center p-8 md:p-0 md:space-x-8 font-light text-lg">
            
            {/* Links mit Hover-Underline-Effekt */}
            {[{ label: 'Home', id: 'home' }, { label: 'Über uns', id: 'about' }, { label: 'FAQ', id: 'faq' }].map(item => (
              <li key={item.id} className='w-full md:w-auto text-center mb-4 md:mb-0'>
                <button
                  onClick={() => handleScrollToSection(item.id)}
                  className={`relative py-2 md:py-0 text-[${TEXT_COLOR}] transition-colors group overflow-hidden`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[${ACCENT_COLOR}] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                </button>
              </li>
            ))}
            
            <li className='w-full md:w-auto text-center mb-4 md:mb-0'>
              <NavLink 
                to="produkte" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `relative py-2 md:py-0 transition-colors group
                  ${isActive ? `text-[${ACCENT_COLOR}] font-medium` : `text-[${TEXT_COLOR}]`}`}
              >
                Produkte
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[${ACCENT_COLOR}] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
              </NavLink>
            </li>

            {/* --- CTA-Button --- */}
            <li className='w-full md:w-auto'>
              <NavLink 
                to="kontakt" 
                onClick={() => setIsMenuOpen(false)}
                className={`
                  inline-flex items-center justify-center px-8 py-2.5 rounded-full text-white
                  bg-[${CTA_BUTTON_BG}] transition-all duration-300 shadow-md 
                  hover:bg-[${TEXT_COLOR}] hover:shadow-xl hover:scale-105 active:scale-95
                  text-base font-semibold w-full md:w-auto
                `}
              >
                Kontakt aufnehmen
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}