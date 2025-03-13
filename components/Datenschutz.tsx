"use client";

import React from 'react';

export default function Datenschutz() {
  return (
    <div className="text-gray-800 dark:text-gray-200 max-w-none">
      <p className="mb-6">
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Diese Datenschutzerklärung informiert Sie über die Verarbeitung Ihrer Daten auf unserer Website.
      </p>

      <h3 className="text-xl font-bold mb-3">Verantwortliche</h3>
      <p className="mb-6">
        Gemeinsam für die Datenverarbeitung verantwortlich sind die queo ventures GmbH und die move elevator GmbH. Die Kontaktdaten beider Unternehmen finden Sie in unserem Impressum.
      </p>

      <h3 className="text-xl font-bold mb-3">Kontaktformular</h3>
      <p className="mb-6">
        Wenn Sie unser Kontaktformular nutzen, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Nachricht) an beide Partnerunternehmen übermittelt und zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden ausschließlich für die Kommunikation mit Ihnen verwendet und nicht an weitere Dritte weitergegeben. Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).
      </p>

      <h3 className="text-xl font-bold mb-3">Server-Logs</h3>
      <p className="mb-2">
        Unser Hoster Hostinger erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
      </p>
      <ul className="list-disc pl-6 mb-2">
        <li>Browsertyp und -version</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>IP-Adresse des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
      </ul>
      <p className="mb-6">
        Diese Daten sind nicht bestimmten Personen zuordenbar und dienen der Sicherstellung eines störungsfreien Betriebs unserer Website sowie der Verbesserung unseres Angebots. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
      </p>

      <h3 className="text-xl font-bold mb-3">Analyse mit Umami</h3>
      <p className="mb-6">
        Wir nutzen den Webanalysedienst Umami, um die Nutzung unserer Website zu analysieren. Umami arbeitet ohne Cookies und speichert keine personenbezogenen Daten. Es werden lediglich anonymisierte Nutzungsdaten erhoben, die keine Rückschlüsse auf Ihre Person zulassen. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
      </p>

      <h3 className="text-xl font-bold mb-3">Cookies</h3>
      <p className="mb-6">
        Unsere Website verwendet keine Cookies oder ähnliche Technologien zur Speicherung von Informationen.
      </p>

      <h3 className="text-xl font-bold mb-3">Ihre Rechte</h3>
      <p className="mb-6">
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Zudem haben Sie das Recht auf Datenübertragbarkeit und können der Verarbeitung widersprechen. Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte über die im Impressum angegebenen Kontaktdaten.
      </p>

      <h3 className="text-xl font-bold mb-3">Beschwerderecht</h3>
      <p>
        Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
      </p>
    </div>
  );
}
