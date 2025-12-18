import Chocolate from '../assets/FullLogo_Transparent_NoBuffer.png';
import Instagram from '../assets/instagram.svg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate()

    const handleScrollToFAQ = () => {
        navigate('/');
        setTimeout(() => {
          const faqSection = document.getElementById('faq');
          if (faqSection) {
            window.scrollTo({
              top: faqSection.offsetTop,
              behavior: 'smooth'
            });
          }
        }, 300);
      };

  return (
    <footer className={`bg-[#4E342E] text-[#EAE0D7]`} data-aos="fade-up" data-aos-duration="1000">
        <div className="mx-auto w-full max-w-screen-xl p-6 py-10 lg:py-16">
            <div className="md:flex md:justify-between">
                
                {/* --- Sektion 1: Logo & Slogan --- */}
                <div className="mb-10 md:mb-0 md:w-1/4">
                    <NavLink to="/" className="flex items-center flex-col">
                        <img src={Chocolate} className="h-10 lg:h-24 transition-transform duration-300 hover:scale-[1.05]" alt="dieschokoecke Logo" />
                        <span className={`self-center mt-3 text-sm tracking-widest uppercase text-[var(--logo-text)] font-light`}>
                            QUALITÄT IN SCHOKOLADE
                        </span>
                    </NavLink>
                </div>

                {/* --- Sektion 2: Navigation & Kontakt (Grid) --- */}
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 md:w-3/4">
                    
                    {/* Information */}
                    <div>
                        <h2 className={`mb-6 text-base font-semibold uppercase tracking-wider text-[var(--accent-hover)]`}>Informationen</h2>
                        <ul className={`text-[var(--light-text)] font-light space-y-3`}>
                            <li>
                                <NavLink to="produkte" className="hover:text-[var(--accent-hover)] transition-colors duration-200">Produkte</NavLink>
                            </li>
                            <li>
                                <button onClick={handleScrollToFAQ} className="hover:text-[var(--accent-hover)] transition-colors duration-200">FAQ</button>
                            </li>
                        </ul>
                    </div>

                    {/* Kontakt */}
                    <div>
                        <h2 className={`mb-6 text-base font-semibold uppercase tracking-wider text-[var(--accent-hover)]`}>Kontakt</h2>
                        <ul className={`text-[var(--light-text)] font-light space-y-3`}>
                            <li>
                                <NavLink to="kontakt" className="hover:text-[var(--accent-hover)] transition-colors duration-200">Kontaktiere uns</NavLink>
                            </li>
                            <li>
                                <a href="mailto:kontakt@dieschokoecke.de" className="hover:text-[var(--accent-hover)] transition-colors duration-200">Email</a>
                            </li>
                            <li>
                                <a href="https://wa.me/491748130465" className="hover:text-[var(--accent-hover)] transition-colors duration-200">WhatsApp</a>
                            </li>
                        </ul>
                    </div>

                    {/* Rechtliches */}
                    <div>
                        <h2 className={`mb-6 text-base font-semibold uppercase tracking-wider text-[var(--accent-hover)]`}>Rechtliches</h2>
                        <ul className={`text-[var(--light-text)] font-light space-y-3`}>
                            <li>
                                <NavLink to="impressum" className="hover:text-[var(--accent-hover)] transition-colors duration-200">Impressum</NavLink>
                            </li>
                            <li>
                                <NavLink to="datenschutz" className="hover:text-[var(--accent-hover)] transition-colors duration-200">Datenschutz</NavLink>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Socials & Partner */}
                    <div>
                        <h2 className={`mb-6 text-base font-semibold uppercase tracking-wider text-[var(--accent-hover)]`}>Folge uns</h2>
                        
                        {/* Social Icons */}
                        <div className="flex flex-row gap-x-4 mb-6">
                            {/* Instagram */}
                            <a href="https://www.instagram.com/dieschokoecke/" className={`block transition-transform duration-300 hover:scale-[1.2]`}>
                                <img src={Instagram} alt="Instagram Logo" className='h-6 filter brightness-150' /> {/* Helligkeit angepasst für dunklen Hintergrund */}
                                <span className="sr-only">Instagram page</span>
                            </a>
                            
                            {/* Facebook (SVG beibehalten) */}
                            <a href="https://www.instagram.com/dieschokoecke/" className={`text-[var(--light-text)] hover:text-[var(--accent-hover)] transition-colors duration-200 block transition-transform duration-300 hover:scale-[1.2]`}>
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                        </div>
                        
                        {/* Partner Logo */}
                        <div className="mt-8">
                             <img src={require('../assets/n-land-1j9c4filjl4limt8zxul-logowide.png')} alt="Heimatgutschein Logo" className="h-auto w-32 filter brightness-150" /> 
                        </div>
                    </div>
                </div>
            </div>
            
            <hr className={`my-8 border-t border-[var(--accent-hover)]/30 lg:my-10`} />
            
            {/* --- Copyright --- */}
            <div className="sm:flex sm:items-center sm:justify-center">
                <span className={`text-sm text-[var(--logo-text)] font-light`}>
                    ©2025 <a href="https://dieschokoecke.de" className={`hover:text-[var(--accent-hover)] transition-colors duration-200`}>dieschokoecke</a>. All Rights Reserved.
                </span>
            </div>
        </div>
    </footer>
  );
}