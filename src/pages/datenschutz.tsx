import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ButtonLink';
import Layout from '../components/Layout';
import { Image as ArrowIcon } from '../images/arrow-left.svg';

const ExternalLink = ({ href }: { href: string }) => (
    <a
        className="text-sky-600 dark:text-sky-500 hover:underline underline-offset-2 decoration-1 whitespace-nowrap"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
    >
        {href}
    </a>
)

const PrivacyPage = (): JSX.Element => (
    <>
        <main className="max-w-prose mx-auto font-body leading-relaxed">
            <h1 className="font-display text-5xl text-pink-500 font-light mt-20">Datenschutz&shy;erklärung</h1>

            <h2 className="text-2xl text-sky-500 mt-12 mb-6">Verantwortlicher</h2>

            <p className="my-6">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>

            <p className="my-6">
                Michael van Engelshoven<br />
                Nobelstraße 64<br />
                53757 Sankt Augustin<br />
                Deutschland
            </p>

            <p className="my-6">
                E-Mail:<br/>
                michael@van-engelshoven.de
            </p>

            <p className="my-6">
                Impressum:<br />
                <Link to="/impressum">https://michael-van-engelshoven.de/impressum</Link>
            </p>

            <p className="my-6">
                Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der
                Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
            </p>

            <h2 className="text-2xl text-sky-500 mt-12 mb-6">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h2>

            <p className="my-6">
                Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein
                Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
                formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung
                bleibt vom Widerruf unberührt.
            </p>

            <h2 className="text-2xl text-sky-500 mt-12 mb-6">
                Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
            </h2>

            <p className="my-6">
                Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der
                zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen
                ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens
                befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten
                bereit: https://www.bfdi.bund.de/DE/Service/Anschriften/anschriften_table.html.
            </p>

            <h2 className="text-2xl text-sky-500 mt-12 mb-6">
                Recht auf Datenübertragbarkeit
            </h2>

            <p className="my-6">
                Ihnen steht das Recht zu, Daten, die ich auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
                Vertrags automatisiert verarbeite, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung
                erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen
                anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h2 className="text-2xl text-sky-500 mt-12 mb-6">
                Recht auf Auskunft, Berichtigung, Sperrung, Löschung
            </h2>

            <p className="my-6">
                Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche
                Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den
                Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit
                über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
            </p>

            <h2 className="text-2xl text-sky-500 mt-12 mb-6">
                SSL- bzw. TLS-Verschlüsselung
            </h2>

            <p className="my-6">
                Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als
                Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten,
                die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte
                Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.
            </p>

            <h2 className="text-2xl text-sky-500 mt-12 mb-6">
                Externes Hosting und Server-Log-Dateien
            </h2>

            <p className="my-6">
                Diese Website wird auf Netlify, einem Dienst der Netlify, Inc., USA, auf der Grundlage einer
                Vereinbarung über Auftragsdatenverarbeitung gehostet. Die Datenschutzerklärung von
                Netlify finden Sie unter <ExternalLink href="https://www.netlify.com/privacy" />{' '}
                und <ExternalLink href="https://www.netlify.com/gdpr" />
            </p>

            <p className="my-6">
                Im Rahmen des Hosting erhebt und speichert Netlify automatisch Informationen in Server-Log-Dateien, die
                Ihr Browser automatisch an den Server übermittelt. Diese Informationen sind:
            </p>

            <ul className="list-disc list-inside">
                <li>Besuchte Seite auf unserer Domain</li>
                <li>Datum und Uhrzeit der Serveranfrage</li>
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>IP-Adresse</li>
            </ul>

            <p className="my-6">
                Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der
                Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines
                Vertrags oder vorvertraglicher Maßnahmen gestattet.
            </p>

            <p className="my-6">
                Quelle:<br/>
                Datenschutz-Konfigurator von <ExternalLink href="https://www.mein-datenschutzbeauftragter.de/"/>
            </p>
        </main>

        <footer className="mx-auto text-center mb-20 mt-10">
            <Button href="/" icon={<ArrowIcon />}>Zurück</Button>
        </footer>
    </>
);

export default PrivacyPage;
