import Bild from '../assets/266.png';

// Beispiel-Review-Daten
const reviews = [
    {
        name: "Michael R.",
        text: "Jeder Bissen ist ein Erlebnis. Die Texturen und Aromen sind gut ausbalanciert, was sie zur besten Schokolade macht, die ich seit langem probiert habe.",
        rating: 5,
        delay: 0
    },
    {
        name: "Sabine K.",
        text: "Die Pralinen sind von außergewöhnlicher Qualität. Perfekt für besondere Anlässe, aber auch, um sich selbst etwas Gutes zu tun. Die Verpackung ist wunderschön.",
        rating: 5,
        delay: 200
    },
    {
        name: "Thomas W.",
        text: "Ich bin begeistert von der Frische und dem reichen Kakaogeschmack. Man schmeckt sofort, dass hier handwerkliche Perfektion im Detail steckt. Absolut empfehlenswert!",
        rating: 5,
        delay: 400
    }
];

// Hilfskomponente für die Stern-Bewertung
const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-1 text-yellow-500 mb-3">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < rating ? `text-[var(--star-color)]` : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

export default function Reviews() {
  return (
    <div className={`relative bg-[var(--light-bg)]  text-[var(--text-color)] overflow-hidden`}>

        {/* --- 1. Top Bild-Banner (Dekorativ) --- */}
        <div className="relative w-full h-32 lg:h-56">
            <img 
                src={Bild} 
                alt="Glückliche Menschen genießen Süßigkeiten" 
                className='object-cover w-full h-full opacity-60' 
            />
            {/* Overlay, um das Bild zu dämpfen und dem Stil anzupassen */}
            <div className={`absolute inset-0 bg-gradient-to-t from-[var(--light-bg)] to-[var(--accent-color)]/10`}></div>
        </div>

        {/* --- 2. Haupt-Inhalt Sektion --- */}
        <div className='max-w-screen-xl mx-auto px-6 xl:px-0 pt-8 pb-16 lg:pb-24 relative -mt-16 lg:-mt-24 z-10'>
            
            {/* Header */}
            <h2 className='text-center text-4xl lg:text-6xl font-light mb-2'>Kundenstimmen</h2>
            <p className={`text-center text-xl lg:text-3xl font-serif italic text-[var(--accent-color)] mb-12 lg:mb-16`}>
                Was unsere Kunden sagen
            </p>

            {/* Reviews Grid */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
                {reviews.map((review, index) => (
                    <div 
                        key={index}
                        className={`bg-white p-6 lg:p-8 rounded-xl shadow-xl border-t-4 border-[var(--accent-color)]/50 transition-transform duration-300 hover:scale-[1.02]`}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={review.delay}
                    >
                        {/* Sterne-Bewertung */}
                        <StarRating rating={review.rating} />

                        {/* Zitat-Text */}
                        <p className={`text-lg font-normal mb-4 leading-relaxed text-[var(--text-color)]`}>
                           "{review.text}"
                        </p>

                        {/* Autor */}
                        <p className={`text-base font-semibold text-[var(--accent-color)]`}>
                            {review.name}
                        </p>
                    </div>
                ))}
            </div>
            
            {/* Optional: CTA am Ende der Reviews */}
            <div className='text-center mt-16'>
                <a href="produkte" className={`px-8 py-3 bg-white border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-full font-medium hover:bg-[var(--accent-color)] hover:text-white transition-all duration-300 shadow-md`}>
                    Jetzt selbst überzeugen
                </a>
            </div>

        </div>
    </div>
  );
}