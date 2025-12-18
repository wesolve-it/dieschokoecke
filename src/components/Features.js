import Cake from '../assets/cake.svg';
import Coffee from '../assets/coffee.svg';
import Acorn from '../assets/acorn.svg';
import Truffel from '../assets/FeaturesTruffel.svg';

// CSS Keyframes (für Floating-Effekt und Icon-Glühen)
const customStyles = `
  @keyframes float-feature {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  @keyframes icon-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(121, 85, 72, 0.5); }
    50% { box-shadow: 0 0 10px 5px rgba(121, 85, 72, 0.7); }
  }
  .float-feature { animation: float-feature 5s ease-in-out infinite; }
`;

// Feature-Daten zur einfacheren Iteration
const featuresData = [
    { title: "Handgefertigte Perfektion", description: "Von erfahrenen Chocolatiers fachmännisch hergestellt für ein einzigartiges Geschmackserlebnis.", icon: Acorn, delay: 0 },
    { title: "Reichhaltige Aromen", description: "Eine vielfältige Geschmacksvielfalt, von klassischer Milchschokolade bis hin zu intensiven dunklen Sorten.", icon: Coffee, delay: 200 },
    { title: "Ethisch angebauter Kakao", description: "Hergestellt aus feinsten Kakaobohnen und hochwertigen natürlichen Zutaten.", icon: Cake, delay: 400 },
];

export default function Features() {
  return (
    <>
      <style>{customStyles}</style>

      <div className={'bg-[var(--light-bg)] py-16 text-[var(--text-color)]'}>
        <div className='max-w-screen-xl px-6 xl:px-0 mx-auto relative'>
          
          {/* Hauptüberschrift */}
          <h2 
            className='text-3xl font-light mb-12 xl:text-5xl xl:mb-16 xl:w-2/3 xl:leading-snug'
            data-aos="fade-right" data-aos-duration="1000"
          >
            Außergewöhnliche Eigenschaften <span className='text-lg xl:text-3xl font-light'>unserer</span> 
            <span className={`font-serif italic text-[#795548] ml-2`}>Schokolade</span>
          </h2>

          {/* --- Grid-Layout für Features und Bild --- */}
          <div className='grid lg:grid-cols-12 lg:gap-12 items-start'>
            
            {/* LINKER BLOCK: Feature-Karten (Grid) - 7/12 Breite */}
            <div className='lg:col-span-7 space-y-8 lg:space-y-12'>
                {featuresData.map((feature) => (
                    <section 
                        key={feature.title} 
                        className={`group p-6 lg:p-8 rounded-xl bg-white shadow-lg border-t-4 border-[var(--accent-color)]/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]`}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={feature.delay}
                    >
                        <div className='flex items-start mb-4'>
                            {/* Micro-Interaction: Icon mit subtilem Skalierungs- und Schatten-Effekt */}
                            <div className={`flex-shrink-0 w-12 h-12 p-2 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/30 
                                transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-[var(--accent-color)]/40`}>
                                <img src={feature.icon} alt={feature.title} className='w-full h-full object-contain' />
                            </div>
                            <div className='ml-4'>
                                <h3 className='text-xl font-bold mb-1 group-hover:text-[var(--accent-color)] transition-colors duration-300'>{feature.title}</h3>
                                <p className='font-light leading-relaxed text-[var(--text-color)]/90'>{feature.description}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* RECHTER BLOCK: Großes Trüffel-Bild (Floating) - 5/12 Breite */}
            <div 
                className='lg:col-span-5 mt-12 lg:mt-0 flex justify-center lg:justify-end relative'
                data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300"
            >
                {/* Das Bild mit der Floating-Animation */}
                <img 
                    src={Truffel} 
                    alt="Mehrere Schokoladentrüffel" 
                    className='w-4/6 lg:w-full max-w-sm lg:max-w-none h-auto object-contain drop-shadow-2xl float-feature'
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}