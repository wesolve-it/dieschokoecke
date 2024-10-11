import React from 'react'

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Verhindert das Standardformularverhalten
    const form = event.target; // Zugriff auf das aktuelle Formular
    const data = new FormData(form); // Erstellen von FormData aus dem Formular

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(), // Umwandeln in URLSearchParams
    })
      .then(() => alert("Formular erfolgreich gesendet!")) // Erfolgsnachricht
      .catch((error) => alert("Fehler beim Senden des Formulars", error)); // Fehlerbehandlung
  };

  return (
    <section className="bg-white dark:bg-gray-900 mb-10">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Kontaktiere uns</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Haben Sie ein technisches Problem? Möchten Sie Feedback zu einer Beta-Funktion senden? Benötigen Sie Details zu unserem Businessplan? Lassen Sie es uns wissen.</p>
      <form name="contact" method='POST' data-netlify="true" className="space-y-8" onSubmit={handleSubmit}>
        <input type='hidden' name="form-name" value="contact" />
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@adresse.com" name="Email" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Betreff</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Lass uns wissen, wie wir Dir helfen können" required name="Betreff" />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Nachricht</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Schreibe hier, was du bestellen, oder uns mitteilen möchtest..." required name="Nachricht"></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm text-center text-textBrown rounded-lg bg-bgBrown sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Nachricht senden</button>
      </form>
  </div>
</section>
  )
}
