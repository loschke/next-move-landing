# NextMove Landing Page - Optimierungsplan

## Übersicht

Dieses Dokument beschreibt den Implementierungsplan für die Optimierung der NextMove Landing Page. Die Optimierungen sind in vier Phasen unterteilt, die nacheinander abgearbeitet werden können.

**Hauptziele:**
- Mobile Optimierung (WICHTIG)
- Funktionales Formular
- Basis SEO-Anpassungen
- Dark/Light Mode (BONUS)

---

## Phase 1: Mobile Optimierung

### 1.1 Responsive Design-Audit

- [ ] Alle Komponenten auf verschiedenen Bildschirmgrößen testen (320px, 375px, 425px, 768px, 1024px)
- [ ] Kritische Breakpoints identifizieren, an denen das Layout problematisch wird
- [ ] Problematische Komponenten dokumentieren

### 1.2 Header & Navigation

- [ ] Header-Komponente für mobile Geräte optimieren
  - Datei: `components/Header.tsx`
  - Anpassungen: Größe des Logos, Abstände, Touch-Targets
- [ ] Mobile Menü implementieren oder verbessern
  - Hamburger-Menü für kleinere Bildschirme
  - Touch-freundliche Menüpunkte (min. 44x44px)

### 1.3 Hero-Sektion

- [ ] Text-Größen für mobile Geräte anpassen
  - Datei: `components/Hero.tsx`
  - Kleinere Überschriften auf mobilen Geräten
- [ ] CTA-Button-Größe und Positionierung optimieren
- [ ] Hintergrund-Elemente für mobile Ansicht anpassen

### 1.4 Content-Sektionen

- [ ] Grid-Layouts für mobile Geräte optimieren
  - Dateien: `components/FeaturesGrid.tsx`, `components/Team.tsx`, `components/ExpertTeam.tsx`
  - Einspaltiges Layout für mobile Geräte
- [ ] Abstände und Paddings für mobile Ansicht anpassen
- [ ] Schriftgrößen für bessere Lesbarkeit auf kleinen Bildschirmen optimieren

### 1.5 Bilder & Medien

- [ ] Responsive Bildgrößen implementieren
  - Next.js Image-Komponente mit verschiedenen Größen konfigurieren
  - `sizes`-Attribut für optimale Bildauswahl hinzufügen
- [ ] Bilder für mobile Geräte optimieren (Qualität, Größe)
- [ ] Lazy Loading für Bilder unterhalb des Viewports sicherstellen

### 1.6 Touch-Interaktionen

- [ ] Touch-Targets vergrößern (min. 44x44px)
- [ ] Hover-Effekte durch Touch-freundliche Alternativen ersetzen
- [ ] Scrolling-Verhalten optimieren

### 1.7 Performance-Optimierung für mobile Geräte

- [ ] CSS und JavaScript minimieren
- [ ] Kritische CSS inline laden
- [ ] Unnötige Animationen auf mobilen Geräten reduzieren

---

## Phase 2: Funktionales Formular

### 2.1 API-Route erstellen

- [ ] API-Route für Formularverarbeitung erstellen
  - Datei: `app/api/contact/route.ts`
  - HTTP POST-Handler implementieren
  - Validierung der Eingabedaten
  - Fehlerbehandlung

### 2.2 E-Mail-Versand implementieren

- [ ] E-Mail-Service auswählen (Nodemailer, SendGrid, etc.)
- [ ] Abhängigkeit installieren: `npm install nodemailer` oder `npm install @sendgrid/mail`
- [ ] E-Mail-Versand in API-Route implementieren
- [ ] E-Mail-Templates erstellen

### 2.3 Formular-Komponente anpassen

- [ ] Formular-Submission an neue API-Route anpassen
  - Datei: `components/Contact.tsx`
  - `onSubmit`-Funktion aktualisieren
  - Fehlerbehandlung verbessern
- [ ] Ladeindikator während der Submission hinzufügen
- [ ] Erfolgs- und Fehlermeldungen verbessern

### 2.4 Sicherheitsmaßnahmen

- [ ] CSRF-Schutz implementieren
- [ ] Rate-Limiting für Formular-Submissions hinzufügen
- [ ] Honeypot-Feld gegen Spam hinzufügen

### 2.5 DSGVO-Konformität

- [ ] Datenschutz-Checkbox hinzufügen
- [ ] Link zur Datenschutzerklärung einfügen
- [ ] Validierung für Datenschutz-Zustimmung hinzufügen

### 2.6 Testen

- [ ] Formular-Submission testen
- [ ] E-Mail-Empfang testen
- [ ] Fehlerszenarien testen
- [ ] Mobile Ansicht des Formulars testen

---

## Phase 3: Basis SEO-Anpassungen

### 3.1 Metadaten optimieren

- [ ] Titel und Beschreibungen für alle Seiten optimieren
  - Datei: `app/layout.tsx`
  - Seitentitel, Beschreibung, Keywords
- [ ] Open Graph und Twitter Card Metadaten hinzufügen
  - Vorschaubilder für Social Media
  - Titel und Beschreibungen für Social Media

### 3.2 Strukturierte Daten

- [ ] JSON-LD für strukturierte Daten implementieren
  - Datei: `app/layout.tsx` oder neue Komponente
  - Organization Schema
  - WebSite Schema
  - Service Schema

### 3.3 Technische SEO

- [ ] Sitemap.xml erstellen
  - Datei: `app/sitemap.ts` oder `public/sitemap.xml`
- [ ] Robots.txt erstellen
  - Datei: `public/robots.txt`
- [ ] Canonical URLs einrichten
- [ ] Hreflang-Tags für mehrsprachige Inhalte (falls vorhanden)

### 3.4 Bild-Optimierung

- [ ] Alt-Texte für alle Bilder hinzufügen/überprüfen
- [ ] Bildgrößen und Formate optimieren (WebP, AVIF)
- [ ] Lazy Loading für Bilder implementieren

### 3.5 Performance-Optimierung

- [ ] Core Web Vitals verbessern
  - Largest Contentful Paint (LCP)
  - First Input Delay (FID)
  - Cumulative Layout Shift (CLS)
- [ ] Code-Splitting und dynamisches Laden implementieren
- [ ] Caching-Strategien implementieren

---

## Phase 4: Dark/Light Mode (BONUS)

### 4.1 Tailwind-Konfiguration anpassen

- [ ] Dark Mode auf 'class' umstellen
  - Datei: `tailwind.config.js`
  - `darkMode: 'class'` hinzufügen

### 4.2 Theme Context erstellen

- [ ] Theme Provider Komponente erstellen
  - Datei: `components/ThemeProvider.tsx`
  - Context für Theme-State
  - Toggle-Funktion
  - Persistierung in localStorage

### 4.3 Layout anpassen

- [ ] Theme Provider in Layout einbinden
  - Datei: `app/layout.tsx`
  - Theme-Klasse auf HTML-Element anwenden

### 4.4 Toggle-Button implementieren

- [ ] Dark/Light Mode Toggle in Header hinzufügen
  - Datei: `components/Header.tsx`
  - Icon für Sonne/Mond
  - Animierter Übergang

### 4.5 Farbschema anpassen

- [ ] CSS-Variablen für beide Modi überprüfen
  - Datei: `app/globals.css`
  - Konsistente Farbpalette für beide Modi
- [ ] Komponenten auf Dark Mode testen und anpassen

### 4.6 System-Präferenzen berücksichtigen

- [ ] `prefers-color-scheme` Media Query einbinden
- [ ] Initialen Theme-State basierend auf System-Präferenz setzen

---

## Abschluss und Qualitätssicherung

### Finale Tests

- [ ] Cross-Browser-Tests (Chrome, Firefox, Safari, Edge)
- [ ] Mobile Tests auf verschiedenen Geräten
- [ ] Lighthouse-Audit für Performance, Accessibility, SEO
- [ ] Formular-Funktionalität testen
- [ ] Dark/Light Mode testen

### Dokumentation

- [ ] README aktualisieren
- [ ] Codebase dokumentieren
- [ ] Deployment-Anweisungen aktualisieren

---

## Ressourcen und Tools

- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)
- [Next.js Dokumentation](https://nextjs.org/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
