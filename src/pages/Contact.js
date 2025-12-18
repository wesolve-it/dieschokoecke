export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Verhindert das Standardformularverhalten
    const form = event.target;
    const data = new FormData(form);

    // Netlify Form Submission
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => alert("Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen!"))
      .catch((error) => alert("Beim Senden des Formulars ist ein Fehler aufgetreten: ", error));
  };

  return (
    // Hintergrundsektion
    <section 
        id="kontakt"
        className={`bg-[var(--light-bg)] py-16 lg:py-24 text-[var(--text-color)]`}
        data-aos="fade-in" 
        data-aos-duration="800"
    >
        <div className="mx-auto max-w-screen-xl px-6 xl:px-0 pt-[80px] lg:pt-[90px]">
            
            {/* --- Titel und Einleitung --- */}
            <header className="mb-12 lg:mb-16 max-w-3xl mx-auto text-center">
                <h2 className={`text-5xl lg:text-6xl font-serif italic mb-4 text-[var(--accent-color)]`}>
                    Kontakt & Bestellung
                </h2>
                <p className={`font-light text-xl text-[var(--text-color)]/80`}>
                    Gerne nehmen wir Ihre individuelle Bestellung entgegen oder beantworten Ihre Fragen. Bitte füllen Sie das Formular aus – wir melden uns umgehend bei Ihnen.
                </p>
            </header>
            
            {/* --- Formular-Container --- */}
            <div className={`mx-auto max-w-3xl p-8 lg:p-12 rounded-xl bg-[var(--form-bg)] shadow-2xl`}>

                <form 
                    name="contact" 
                    method='POST' 
                    data-netlify="true" 
                    className="space-y-6" 
                    onSubmit={handleSubmit}
                >
                    {/* Wichtig für Netlify: Hidden Field */}
                    <input type='hidden' name="form-name" value="contact" />
                    
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className={`block mb-2 text-base font-semibold text-[var(--text-color)]`}>Ihr Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="Name" 
                            className={`block w-full p-3 text-base rounded-lg border-2 border-gray-200 
                                       focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] 
                                       transition-all duration-200`} 
                            placeholder="Vorname Nachname" 
                            required 
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className={`block mb-2 text-base font-semibold text-[var(--text-color)]`}>E-Mail-Adresse</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="Email" 
                            className={`block w-full p-3 text-base rounded-lg border-2 border-gray-200 
                                       focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] 
                                       transition-all duration-200`} 
                            placeholder="name@adresse.com" 
                            required 
                        />
                    </div>
                    
                    {/* Betreff */}
                    <div>
                        <label htmlFor="subject" className={`block mb-2 text-base font-semibold text-[var(--text-color)]`}>Betreff / Anliegen</label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="Betreff" 
                            className={`block w-full p-3 text-base rounded-lg border-2 border-gray-200 
                                       focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] 
                                       transition-all duration-200`} 
                            placeholder="z.B. Bestellung, Geschäftsanfrage oder Rückfrage" 
                            required 
                        />
                    </div>
                    
                    {/* Nachricht */}
                    <div>
                        <label htmlFor="message" className={`block mb-2 text-base font-semibold text-[var(--text-color)]`}>Ihre Nachricht (oder Bestellung)</label>
                        <textarea 
                            id="message" 
                            rows="6" 
                            name="Nachricht" 
                            className={`block w-full p-3 text-base rounded-lg border-2 border-gray-200 
                                       focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] 
                                       transition-all duration-200`} 
                            placeholder="Bitte beschreiben Sie hier Ihre Bestellung oder Ihr Anliegen..." 
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className={`mt-4 w-full sm:w-auto py-3 px-8 text-lg font-semibold 
                                   text-white rounded-full bg-[var(--cta-button-bg)] 
                                   transition-all duration-300 shadow-xl 
                                   hover:bg-[var(--accent-color)] hover:scale-[1.02] 
                                   focus:ring-4 focus:ring-[var(--accent-color)]/50`}
                    >
                        Nachricht senden
                    </button>
                    
                </form>
            </div>
        </div>
    </section>
  )
}