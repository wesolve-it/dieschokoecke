import { useState } from 'react';
export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      // Netlify Form Submission
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
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
                <p className={`font-light text-xl text-[color:color-mix(in_srgb,var(--text-color)_80%,transparent)]`}>
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
                            className={`block w-full p-3 text-base rounded-lg border-2 border-[var(--line)] bg-[var(--light-bg)] text-[var(--text-color)] placeholder:text-[var(--muted-text)] 
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
                            className={`block w-full p-3 text-base rounded-lg border-2 border-[var(--line)] bg-[var(--light-bg)] text-[var(--text-color)] placeholder:text-[var(--muted-text)] 
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
                            className={`block w-full p-3 text-base rounded-lg border-2 border-[var(--line)] bg-[var(--light-bg)] text-[var(--text-color)] placeholder:text-[var(--muted-text)] 
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
                            className={`block w-full p-3 text-base rounded-lg border-2 border-[var(--line)] bg-[var(--light-bg)] text-[var(--text-color)] placeholder:text-[var(--muted-text)] 
                                       focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] 
                                       transition-all duration-200`} 
                            placeholder="Bitte beschreiben Sie hier Ihre Bestellung oder Ihr Anliegen..." 
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        disabled={status === 'sending'}
                        className={`mt-4 w-full sm:w-auto py-3 px-8 text-lg font-semibold 
                                   text-white rounded-full bg-[var(--cta-button-bg)] 
                                   transition-all duration-300 shadow-xl 
                                   hover:bg-[var(--accent-strong)] hover:scale-[1.02] 
                                   focus:ring-4 focus:ring-[color:color-mix(in_srgb,var(--accent-color)_50%,transparent)]
                                   disabled:opacity-60 disabled:cursor-wait disabled:hover:scale-100`}
                    >
                        {status === 'sending' ? 'Wird gesendet …' : 'Nachricht senden'}
                    </button>

                    <div aria-live="polite" role="status">
                        {status === 'success' && (
                            <p className="rounded-lg border border-[var(--line)] bg-[var(--light-bg)] p-4 text-[var(--text-color)]">
                                Vielen Dank! Ihre Nachricht ist bei uns angekommen. Wir melden uns in Kürze bei Ihnen.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="rounded-lg border border-[var(--accent-color)] bg-[var(--light-bg)] p-4 text-[var(--text-color)]">
                                Ihre Nachricht konnte nicht gesendet werden. Ihre Eingaben sind noch da – bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.
                            </p>
                        )}
                    </div>
                    
                </form>
            </div>
        </div>
    </section>
  )
}