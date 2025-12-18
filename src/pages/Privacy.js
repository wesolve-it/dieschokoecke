const ACCENT_COLOR = '#795548';   // Akzent-Braun

// Hilfskomponente zum Formatieren von Sektionen
const Section = ({ id, title, children }) => (
    <section id={id} className='mb-12 p-6 rounded-xl bg-white shadow-lg'>
        <h2 className={`text-3xl font-semibold mb-6 border-l-4 border-[var(--accent-color)] pl-3`}>
            {title}
        </h2>
        <div className='text-lg font-light leading-relaxed space-y-4'>
            {children}
        </div>
    </section>
);

// Hilfsfunktion zum Rendern des Inhaltsverzeichnisses
const renderTableOfContents = (ACCENT_COLOR) => (
    <div className={`mb-12 p-6 rounded-xl bg-[var(--section-bg)] shadow-lg border-l-4 border-r-4 border-[var(--accent-color)]/50`}>
        <h2 className={`text-3xl font-semibold mb-4 text-[var(--text-color)]`}>Inhaltsübersicht</h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-light text-base leading-relaxed'>
            {/* Die Links verwenden die IDs aus Ihrem ursprünglichen Dokument */}
            <li><a href="#m4158" className={`hover:text-[var(--accent-color)] transition-colors`}>Präambel</a></li>
            <li><a href="#m3" className={`hover:text-[var(--accent-color)] transition-colors`}>Verantwortlicher</a></li>
            <li><a href="#mOverview" className={`hover:text-[var(--accent-color)] transition-colors`}>Übersicht der Verarbeitungen</a></li>
            <li><a href="#m2427" className={`hover:text-[var(--accent-color)] transition-colors`}>Maßgebliche Rechtsgrundlagen</a></li>
            <li><a href="#m27" className={`hover:text-[var(--accent-color)] transition-colors`}>Sicherheitsmaßnahmen</a></li>
            <li><a href="#m25" className={`hover:text-[var(--accent-color)] transition-colors`}>Übermittlung von Daten</a></li>
            <li><a href="#m12" className={`hover:text-[var(--accent-color)] transition-colors`}>Datenspeicherung und Löschung</a></li>
            <li><a href="#m10" className={`hover:text-[var(--accent-color)] transition-colors`}>Rechte der betroffenen Personen</a></li>
            <li><a href="#m317" className={`hover:text-[var(--accent-color)] transition-colors`}>Geschäftliche Leistungen</a></li>
            <li><a href="#m225" className={`hover:text-[var(--accent-color)] transition-colors`}>Webhosting</a></li>
            <li><a href="#m134" className={`hover:text-[var(--accent-color)] transition-colors`}>Einsatz von Cookies</a></li>
            <li><a href="#m182" className={`hover:text-[var(--accent-color)] transition-colors`}>Kontakt- und Anfrageverwaltung</a></li>
            <li><a href="#m136" className={`hover:text-[var(--accent-color)] transition-colors`}>Präsenzen in sozialen Netzwerken</a></li>
            <li><a href="#m328" className={`hover:text-[var(--accent-color)] transition-colors`}>Plug-ins und eingebettete Inhalte</a></li>
            <li><a href="#m15" className={`hover:text-[var(--accent-color)] transition-colors`}>Änderung und Aktualisierung</a></li>
        </ul>
    </div>
);


export default function Privacy() {
    return (
        <div className={`bg-[var(--light-bg)] py-16 lg:py-24 text-[var(--text-color)]`} data-aos="fade-in" data-aos-duration="800">
            <div className='max-w-screen-xl mx-auto px-6 xl:px-0'>

                {/* --- Haupt-Überschrift --- */}
                <h1 className={`text-5xl lg:text-6xl font-serif italic text-[var(--accent-color)] mb-10 border-b-2 border-[var(--accent-color)]/30 pb-4 pt-20 break-all`}>
                    Datenschutzerklärung
                </h1>

                {/* --- Inhaltsverzeichnis --- */}
                {renderTableOfContents(ACCENT_COLOR)}

                {/* --- Präambel --- */}
                <Section id="m4158" title="Präambel">
                    <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang im Rahmen der Bereitstellung unserer Applikation verarbeiten.</p>
                    <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
                    <p className='text-sm text-gray-500 mt-6'>Stand: 8. Oktober 2024</p>
                </Section>
                
                {/* --- Verantwortlicher --- */}
                <Section id="m3" title="Verantwortlicher">
                    <p>Anja, Scharf / dieschokoecke<br/>Höflas, 19<br/>91207, Lauf a.d. Pegnitz, Deutschland</p>
                    <p>E-Mail-Adresse: <a href="mailto:kontakt@dieschokoecke.de" className={`text-[var(--accent-color)] hover:underline`}>kontakt@dieschokoecke.de</a></p>
                </Section>

                {/* --- Übersicht der Verarbeitungen --- */}
                <Section id="mOverview" title="Übersicht der Verarbeitungen">
                    <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
                    
                    <h3 className={`text-xl font-semibold mb-3 mt-6 border-b border-[var(--accent-color)]/30 pb-1`}>Arten der verarbeiteten Daten</h3>
                    <ul className='list-disc list-inside ml-4 space-y-1'>
                        <li>Bestandsdaten, Zahlungsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten</li>
                        <li>Nutzungsdaten</li>
                        <li>Meta-, Kommunikations-, Verfahrens- und Protokolldaten</li>
                    </ul>

                    <h3 className={`text-xl font-semibold mb-3 mt-6 border-b border-[var(--accent-color)]/30 pb-1`}>Kategorien betroffener Personen</h3>
                    <ul className='list-disc list-inside ml-4 space-y-1'>
                        <li>Leistungsempfänger und Auftraggeber, Interessenten, Kommunikationspartner</li>
                        <li>Nutzer, Geschäfts- und Vertragspartner</li>
                    </ul>

                    <h3 className={`text-xl font-semibold mb-3 mt-6 border-b border-[var(--accent-color)]/30 pb-1`}>Zwecke der Verarbeitung</h3>
                    <ul className='list-disc list-inside ml-4 space-y-1'>
                        <li>Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten, Kommunikation, Sicherheitsmaßnahmen</li>
                        <li>Büro- und Organisationsverfahren, Feedback, Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
                        <li>Informationstechnische Infrastruktur, Öffentlichkeitsarbeit, Geschäftsprozesse und betriebswirtschaftliche Verfahren</li>
                    </ul>
                </Section>
                
                {/* --- Maßgebliche Rechtsgrundlagen --- */}
                <Section id="m2427" title="Maßgebliche Rechtsgrundlagen">
                    <h3 className={`text-xl font-semibold mb-3 border-b border-[var(--accent-color)]/30 pb-1`}>Maßgebliche Rechtsgrundlagen nach der DSGVO</h3>
                    <p>Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten:</p>
                    <ul className='list-disc list-inside ml-4 space-y-2'>
                        <li>**Einwilligung:** Art. 6 Abs. 1 S. 1 lit. a) DSGVO</li>
                        <li>**Vertragserfüllung und vorvertragliche Anfragen:** Art. 6 Abs. 1 S. 1 lit. b) DSGVO</li>
                        <li>**Rechtliche Verpflichtung:** Art. 6 Abs. 1 S. 1 lit. c) DSGVO</li>
                        <li>**Berechtigte Interessen:** Art. 6 Abs. 1 S. 1 lit. f) DSGVO</li>
                    </ul>
                    <p className='mt-6'>
                        **Nationale Datenschutzregelungen in Deutschland:** Zusätzlich zu den Regelungen der DSGVO gilt in Deutschland das Bundesdatenschutzgesetz (BDSG).
                    </p>
                    <p>
                        **Hinweis auf Geltung DSGVO und Schweizer DSG:** Es werden die Begriffe der DSGVO verwendet, die gesetzliche Bedeutung wird jedoch im Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.
                    </p>
                </Section>

                {/* --- Sicherheitsmaßnahmen --- */}
                <Section id="m27" title="Sicherheitsmaßnahmen">
                    <p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten (Vertraulichkeit, Integrität und Verfügbarkeit).</p>
                    <p>
                        **Sicherung von Online-Verbindungen:** Wir setzen auf die TLS-/SSL-Verschlüsselungstechnologie (HTTPS), um die über unsere Online-Dienste übertragenen Daten vor unbefugtem Zugriff zu schützen.
                    </p>
                </Section>
                
                {/* --- Übermittlung von personenbezogenen Daten --- */}
                <Section id="m25" title="Übermittlung von personenbezogenen Daten">
                    <p>Im Rahmen unserer Verarbeitung kommt es vor, dass Daten an andere Stellen, Unternehmen oder Personen übermittelt beziehungsweise ihnen gegenüber offengelegt werden. Dazu gehören z.B. IT-Dienstleister. Wir beachten die gesetzlichen Vorgaben und schließen entsprechende Verträge bzw. Vereinbarungen zum Schutz Ihrer Daten ab.</p>
                </Section>

                {/* --- Allgemeine Informationen zur Datenspeicherung und Löschung --- */}
                <Section id="m12" title="Allgemeine Informationen zur Datenspeicherung und Löschung">
                    <p>Wir löschen personenbezogene Daten, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung bestehen (wenn der Zweck entfällt oder die Daten nicht mehr benötigt werden).</p>
                    <p>Ausnahmen bestehen, wenn gesetzliche Pflichten (z.B. Archivierung für Steuerzwecke) oder die Rechtsverfolgung eine längere Aufbewahrung erfordern.</p>
                    
                    <h3 className={`text-xl font-semibold mb-3 mt-6 border-b border-[var(--accent-color)]/30 pb-1`}>Gültige Fristen nach deutschem Recht:</h3>
                    <ul className='list-disc list-inside ml-4 space-y-2'>
                        <li>**10 Jahre:** Aufbewahrungsfrist für Bücher, Rechnungen, Jahresabschlüsse und Buchungsbelege.</li>
                        <li>**6 Jahre:** Übrige Geschäftsunterlagen, empfangene und abgesandte Handels- oder Geschäftsbriefe.</li>
                        <li>**3 Jahre:** Daten für Gewährleistungs- und Schadensersatzansprüche.</li>
                    </ul>
                </Section>

                {/* --- Rechte der betroffenen Personen --- */}
                <Section id="m10" title="Rechte der betroffenen Personen">
                    <p>Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:</p>
                    <ul className='list-disc list-inside ml-4 space-y-2'>
                        <li>**Widerspruchsrecht:** Das Recht, jederzeit Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen, insbesondere gegen Direktwerbung.</li>
                        <li>**Widerrufsrecht bei Einwilligungen:** Das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</li>
                        <li>**Auskunftsrecht:** Das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden.</li>
                        <li>**Recht auf Berichtigung, Löschung und Einschränkung der Verarbeitung.**</li>
                        <li>**Recht auf Datenübertragbarkeit** sowie das Recht auf **Beschwerde bei einer Aufsichtsbehörde.**</li>
                    </ul>
                </Section>
                
                {/* --- Geschäftliche Leistungen --- */}
                <Section id="m317" title="Geschäftliche Leistungen">
                    <p>Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner (z.B. Kunden und Interessenten) zur Erfüllung unserer vertraglichen Verpflichtungen, zur Wahrung unserer Rechte und für Verwaltungsaufgaben. Dies schließt die Weitergabe von Daten an Dritte (z.B. Banken, Subunternehmer) ein, sofern dies erforderlich ist.</p>
                    <p>Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten (grundsätzlich nach vier Jahren, für Steuerzwecke im Regelfall zehn Jahre).</p>
                </Section>

                {/* --- Bereitstellung des Onlineangebots und Webhosting --- */}
                <Section id="m225" title="Bereitstellung des Onlineangebots und Webhosting">
                    <p>Wir verarbeiten die IP-Adresse des Nutzers zur Bereitstellung unserer Online-Dienste. Der Zugriff wird in Form von sogenannten "Server-Logfiles" protokolliert, die zur Sicherheit und Stabilität des Angebots dienen.</p>
                    <p>Logfile-Informationen werden maximal 30 Tage gespeichert und danach gelöscht oder anonymisiert.</p>
                </Section>

                {/* --- Einsatz von Cookies --- */}
                <Section id="m134" title="Einsatz von Cookies">
                    <p>Wir verwenden Cookies zur Funktionalität, Sicherheit und des Komforts unseres Onlineangebots und holen, wenn erforderlich, vorab die Zustimmung der Nutzer ein. Die Einwilligung kann jederzeit widerrufen werden.</p>
                    <p>Es wird zwischen temporären (Session-) Cookies und permanenten Cookies unterschieden. Die Speicherdauer permanenter Cookies kann bis zu zwei Jahre betragen.</p>
                    <p>Wir setzen eine Einwilligungs-Management-Lösung ein, um die Zustimmung der Nutzer zur Verwendung von Cookies einzuholen und zu verwalten.</p>
                </Section>

                {/* --- Kontakt- und Anfrageverwaltung --- */}
                <Section id="m182" title="Kontakt- und Anfrageverwaltung">
                    <p>Bei der Kontaktaufnahme mit uns (z.B. per E-Mail oder Kontaktformular) werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Anfragen erforderlich ist. Wir nutzen diese Daten ausschließlich für den angegebenen Zweck der Kontaktaufnahme und Kommunikation.</p>
                </Section>

                {/* --- Präsenzen in sozialen Netzwerken (Social Media) --- */}
                <Section id="m136" title="Präsenzen in sozialen Netzwerken (Social Media)">
                    <p>Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke. Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb der EU verarbeitet werden können und die Daten für Marktforschungs- und Werbezwecke (Nutzungsprofile) verarbeitet werden.</p>
                    <p>Auskunftsanfragen und die Geltendmachung von Betroffenenrechten sind am effektivsten bei den jeweiligen Anbietern geltend zu machen.</p>
                </Section>
                
                {/* --- Plug-ins und eingebettete Funktionen sowie Inhalte --- */}
                <Section id="m328" title="Plug-ins und eingebettete Funktionen sowie Inhalte">
                    <p>Wir integrieren in unser Onlineangebot funktionale und redaktionelle Elemente, die von den Servern ihrer jeweiligen Anbieter bezogen werden (z.B. Google Fonts). Diese Integration setzt immer voraus, dass die Drittanbieter die IP-Adresse der Nutzer verarbeiten, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten.</p>
                </Section>

                {/* --- Änderung und Aktualisierung --- */}
                <Section id="m15" title="Änderung und Aktualisierung der Datenschutzerklärung">
                    <p>Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Anpassungen der Datenschutzerklärung erfolgen, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald die Änderungen eine Mitwirkung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erfordern.</p>
                </Section>
                
            </div>
        </div>
    )
}