"use client";

import React from 'react';

export default function Impressum() {
  return (
    <div className="text-gray-800 dark:text-gray-200">
      <p className="mb-6">
        Diese Website wird gemeinsam betrieben von:
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* queonext */}
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-queonext">queo ventures GmbH</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <address className="not-italic">
                <p className="font-medium">Anschrift:</p>
                <p>Tharandter Str. 13</p>
                <p>01159 Dresden</p>
                <p>Deutschland</p>
              </address>
            </div>
            <div>
              <p className="font-medium">Kontakt:</p>
              <p>Telefon: +49 351 21 30 38 0</p>
              <p>Fax: +49 351 21 30 38 99</p>
              <p>E-Mail: info@queo-group.com</p>
              <p>Web: www.queo.de</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-medium">Geschäftsführer:</p>
            <p>André Pinkert, Dirk Cosmar, Dominik Bock, Silvio Kilian</p>
            <p className="mt-2 font-medium">Handelsregister:</p>
            <p>Amtsgericht Dresden</p>
            <p>Handelsregisternummer: HRB 34821</p>
            <p>USt-IdNr.: DE303348370</p>
          </div>
        </div>

        {/* move-elevator */}
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-moveelevator">move elevator GmbH</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <address className="not-italic">
                <p className="font-medium">Anschrift:</p>
                <p>Zum Aquarium 6a</p>
                <p>46047 Oberhausen</p>
              </address>
            </div>
            <div>
              <p className="font-medium">Kontakt:</p>
              <p>Telefon: 0208 377110</p>
              <p>Fax: 0208 3771111</p>
              <p>E-Mail: oberhausen@move-elevator.de</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-medium">Geschäftsführer:</p>
            <p>Hans Piechatzek, Markus Lacum, Alexander Hippe</p>
            <p className="mt-2 font-medium">Handelsregister:</p>
            <p>Amtsgericht Duisburg</p>
            <p>Handelsregisternummer: HRB 13465</p>
            <p>USt-IdNr.: DE215629447</p>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
      <p className="mb-6">
        André Pinkert (queo ventures GmbH) und Hans Piechatzek (move elevator GmbH)
      </p>

      <h3 className="text-lg font-bold mb-3">Haftungshinweis</h3>
      <p className="mb-3">
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
        Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>
      <p>
        Alle Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und 
        Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
      </p>
    </div>
  );
}
