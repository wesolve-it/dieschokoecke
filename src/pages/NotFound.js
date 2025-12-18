import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className={`min-h-[85vh] bg-[var(--light-bg)] flex items-center justify-center px-6 py-20 overflow-hidden relative`}>
      
      {/* Sanfte Lichteffekte im Hintergrund */}
      <div className={`absolute top-20 left-10 w-32 h-32 bg-[var(--accent-color)]/5 rounded-full blur-3xl `}></div>
      <div className={`absolute bottom-20 right-10 w-48 h-48 bg-[var(--accent-color)]/5 rounded-full blur-3xl`}></div>

      <div className="max-w-2xl text-center relative z-10" data-aos="fade-up">
        
        {/* --- Pralinen-Illustration Bereich --- */}
        <div className="relative mb-8 flex justify-center pt-[80px] lg:pt-[90px]">
          {/* Große "404" im Hintergrund */}
          <h1 className={`text-[120px] md:text-[180px] font-serif italic leading-none opacity-5 text-[var(--text-color)] select-none`}>
            404
          </h1>
          
          {/* Handgezeichnete SVG einer belgischen Praline */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg 
              viewBox="0 0 100 100" 
              className="w-32 h-32 md:w-44 md:h-44 drop-shadow-2xl transition-transform duration-700 hover:rotate-6"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Körper der Praline (Marmorierte Optik) */}
              <path d="M20 70C20 50 35 30 50 30C65 30 80 50 80 70C80 85 65 90 50 90C35 90 20 85 20 70Z" fill="#795548" />
              <path d="M25 65C25 55 35 40 50 40C65 40 75 55 75 65C75 75 65 82 50 82C35 82 25 75 25 65Z" fill="#A1887F" opacity="0.4" />
              {/* Glanzpunkte */}
              <circle cx="40" cy="50" r="3" fill="white" opacity="0.3" />
              <path d="M55 35C58 35 62 38 63 42" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
            </svg>
          </div>
        </div>

        {/* --- Text-Inhalt (Gleich wie Schokoladen-Version) --- */}
        <h2 className={`text-3xl md:text-4xl font-serif italic mb-6 text-[var(--accent-color)]`}>
          Hoppla! Diese Praline wurde wohl schon vernascht.
        </h2>
        
        <p className={`text-lg md:text-xl font-light mb-10 text-[var(--text-color)]/80 max-w-md mx-auto`}>
          Die Seite, die Sie suchen, scheint nicht mehr da zu sein. Vielleicht haben wir sie gegen etwas noch Leckeres ausgetauscht?
        </p>

        {/* --- Call-to-Action Buttons --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NavLink 
            to="/" 
            className={`px-8 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg 
                       transition-all duration-300 hover:bg-[var(--text-color)] hover:scale-105 hover:shadow-xl`}
          >
            Zurück zur Schokoecke
          </NavLink>
          
          <NavLink 
            to="/produkte" 
            className={`px-8 py-3 rounded-full border-2 border-[var(--accent-color)] text-[var(--accent-color)] 
                       font-semibold transition-all duration-300 hover:bg-[var(--accent-color)] hover:text-white`}
          >
            Unsere Produkte entdecken
          </NavLink>
        </div>

        <p className="mt-16 text-sm text-gray-400 font-light italic">
          Tipp: Ein Stück Schokolade hilft fast immer gegen Verirrungen.
        </p>
      </div>
    </div>
  );
}