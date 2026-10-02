# Billy – QR-Rechnungen für die Schweiz (offline)

Eine einzelne HTML-Datei, keine Installation, kein Internet nötig. Alle Daten bleiben lokal auf dem Gerät.

## Benutzung

Gehostete Version (für alle Geräte): **https://laurinvalerian.github.io/billy/**
Die installierte App aktualisiert sich automatisch, sobald sie mit Internet geöffnet wird;
offline läuft die zuletzt geladene Version.

### MacBook
1. `billy.html` doppelklicken (lokal, ohne Internet) – oder die gehostete URL öffnen.
2. Einmalig den Absender ausfüllen (Name, Adresse, IBAN, ggf. UID) – wird automatisch gespeichert.
3. Kunde und Positionen erfassen → **Drucken / PDF** → unten links «Als PDF sichern»
   (A4, Skalierung 100 %, bei Drucker mit Rändern Papierformat «DIN A4 randlos») → PDF per Mail verschicken.

### iPhone
1. Die gehostete URL in **Safari** öffnen.
2. Teilen-Symbol → **«Zum Home-Bildschirm»** → Hinzufügen.
3. «Billy» vom Home-Bildschirm starten – läuft ab jetzt auch offline, mit eigenem Speicher.
4. Rechnung erstellen → **Drucken / PDF** → im Druckdialog oben «Als PDF» teilen/sichern.
   Falls der Druckdialog in der installierten App nicht erscheint: die Seite kurz in Safari
   öffnen und von dort drucken.

### Android
1. Die gehostete URL in **Chrome** öffnen (oder `billy.html` aufs Gerät kopieren und mit Chrome öffnen).
2. Menü ⋮ → **«App installieren»** (bzw. «Zum Startbildschirm hinzufügen»).
3. Rechnung erstellen → **Drucken / PDF** → als Ziel «Als PDF speichern» wählen.

`beispiel-rechnung.pdf` zeigt, wie das Resultat aussieht (fiktive Daten).

## Rechtsform-Auswahl

Im Absender lässt sich die Rechtsform wählen – die Rechnung passt sich automatisch an:

- **Privatperson / freischaffend**: UID- und MWST-Felder sind ausgeblendet; auf der Rechnung
  erscheint der Hinweis «Ohne MWST – nicht im Register der mehrwertsteuerpflichtigen Personen
  eingetragen» (abschaltbar). So weiss die Buchhaltung des Empfängers sofort, dass kein
  Vorsteuerabzug möglich ist.
- **Künstlername** (bei Privatperson und Einzelunternehmen): optionales Feld – erscheint gross
  im Briefkopf. Der bürgerliche Name bleibt im Adressblock und im QR-Zahlteil, denn dort muss
  der Name der Kontoinhaberin stehen, sonst kann die Bank die Zahlung beanstanden.
- **Einzelunternehmen**: UID optional (falls aus AHV-, Handelsregister- oder MWST-Anmeldung
  vorhanden); MWST nur, wenn tatsächlich im Register eingetragen.
- **GmbH / AG**: Die App erinnert daran, dass die UID auf die Rechnung gehört und die
  Rechtsform im Namen stehen muss.

## Was die App richtig macht (Compliance)

- **QR-Rechnung nach SIX Implementation Guidelines v2.3** (in Kraft seit 22.11.2025):
  nur strukturierte Adressen (Typ S), Swiss QR Code (SPC 0200) mit Schweizer Kreuz 7 mm,
  QR-Code 46×46 mm, Empfangsschein 62 mm, Zahlteil-Layout und Schriftgrössen gemäss Style Guide,
  Scherensymbole an den Trennlinien (Pflicht bei nicht perforiertem Papier/PDF).
- **QR-IBAN wird automatisch erkannt** (Instituts-ID 30000–31999): dann wird eine gültige
  27-stellige QR-Referenz mit Modulo-10-Prüfziffer aus der Rechnungsnummer erzeugt.
  Bei normaler IBAN läuft die Zahlung ohne Referenz (Typ NON), die Zuordnung erfolgt über die Mitteilung.
- **MWST-konform (Art. 26 MWSTG)**: UID mit Zusatz «MWST», Leistungsdatum, Satz und Steuerbetrag
  ausgewiesen. Sätze: 8.1 % Normalsatz, 2.6 % reduziert, 3.8 % Beherbergung (Stand 2026).
  Wer nicht MWST-pflichtig ist, lässt das Häkchen einfach weg.
- **EPC-QR (GiroCode) nach EPC069-12 v3.1**: Version 002, UTF-8, Fehlerkorrektur M, höchstens
  331 Byte, BIC bei Schweizer IBAN, Betrag im Format der Deutschen Kreditwirtschaft (z. B. EUR500).
- Zeichensatz, Feldlängen und Betragsgrenzen des Standards werden geprüft; Drucken ist erst
  möglich, wenn alle Pflichtangaben gültig sind.

## Währungen und Kunden im Ausland

- **CHF und EUR** laufen wie bisher über den QR-Zahlteil (der Swiss QR Code erlaubt nur diese
  beiden Währungen).
- **Kunde im Ausland** (Land nicht Schweiz/Liechtenstein): Zusätzlich zum Zahlteil kommt eine
  **Bankverbindung** mit Kontoinhaber/in, IBAN, BIC und Zahlungszweck auf die Rechnung, denn
  ausländische Banking-Apps können den Swiss QR Code meist nicht lesen. Dafür braucht es die
  **BIC/SWIFT** im Absender (Banken im Ausland verlangen sie für Zahlungen in die Schweiz).
  Abschaltbar in den Rechnungsdetails.
- **EUR an eine Firma im SEPA-Raum** (z. B. Deutschland, Österreich): Die Bankverbindung enthält
  zusätzlich einen **EPC-QR (GiroCode)**. Die Firma scannt ihn mit ihrer Banking-App und zahlt per
  SEPA-Überweisung in EUR. Für eine Schweizer IBAN gehört die BIC in den Code.
- **Andere Währungen** (USD, GBP, JPY, CAD, AUD, SEK, NOK, DKK, PLN und weitere): Statt des
  Zahlteils steht die Bankverbindung auf der Rechnung, für eine internationale Überweisung.
  Dafür braucht es die **BIC/SWIFT** im Absender. Ohne Zahlteil hat der Brief mehr Platz.
- **Eigenes Konto pro Währung** (optional): Wer z. B. ein EUR-Konto hat, trägt dessen IBAN unter
  «Eigenes Konto für EUR» ein, bei einer anderen Bank auch dessen BIC. Billy merkt sich das pro
  Währung. Leer bleibt die IBAN aus dem Absender; bei einem CHF-Konto rechnet die Bank den Betrag
  in CHF um. Ein Konto im Ausland (z. B. ein USD-Konto bei einer ausländischen Bank) gehört
  ebenfalls hierhin, die IBAN im Absender bleibt eine CH/LI-IBAN.
- Eine **QR-IBAN** kann keine Zahlungen aus dem Ausland empfangen. Für Kunden im Ausland oder
  Fremdwährungen die normale IBAN des Kontos verwenden. Ab 14.11.2026 (SIX v2.4) ist die QR-IBAN
  zudem nur noch für CHF vorgesehen; für EUR die normale IBAN unter «Eigenes Konto für EUR» eintragen.

## Vorlagen und gespeicherte Rechnungen

- **Vorlagen** (Karte ganz oben): «Aktuelle Rechnung als Vorlage speichern» sichert wirklich alles,
  also Absender, Kunde, Rechnungsdetails, Positionen, Texte, Währung, Konto und alle Häkchen.
  Ein Tipp auf die Vorlage übernimmt alles 1:1 als neue Rechnung; nur Rechnungsnummer und
  Rechnungsdatum werden neu gesetzt, damit keine gespeicherte Rechnung überschrieben wird.
  Gleicher Name ersetzt die Vorlage. Weicht der Absender in der Vorlage vom aktuellen ab
  (z. B. alte IBAN oder Adresse), fragt Billy nach: OK übernimmt ihn, Abbrechen behält den
  aktuellen Absender und übernimmt den Rest der Vorlage.
- **Gespeicherte Rechnungen** («Speichern» bzw. automatisch beim Drucken) lassen sich ebenfalls
  vollständig wieder laden, mit ihrer ursprünglichen Nummer und ihrem Datum (gleiche Rückfrage
  beim Absender). Ist unter einer Nummer schon eine Rechnung an einen anderen Kunden gespeichert,
  fragt Billy vor dem Ersetzen.
- **Bekannte Kunden:** Wird ein Kunde aus der Vorschlagsliste gewählt, übernimmt Billy beim
  Verlassen des Felds dessen Adresse samt Land aus der neusten Rechnung oder Vorlage, solange die
  Adressfelder noch leer sind.
- Vorlagen sind im Backup enthalten.

## Daten & Backup

- Absenderprofil, Vorlagen und gespeicherte Rechnungen liegen im Browser-Speicher (localStorage) –
  nur lokal, nichts verlässt das Gerät.
- Unter «Gespeicherte Rechnungen & Backup» regelmässig **Backup exportieren** (JSON-Datei);
  damit lassen sich die Daten auf einem anderen Gerät oder nach einem Browser-Reset wiederherstellen.
- Wichtig: Die Datei immer vom selben Ort aus öffnen (der Speicher hängt am Speicherort der Datei).

## iPhone / Android

Das Layout ist mobiltauglich (stapelt sich auf schmalen Bildschirmen). Die Wege unterscheiden sich:

- **Android:** `billy.html` aufs Gerät kopieren und mit Chrome öffnen – läuft offline,
  inklusive Speicher.
- **iPhone:** Safari kann lokale Dateien nicht direkt öffnen (die Dateien-App zeigt HTML nur
  als eingeschränkte Vorschau). Der saubere Weg ist die **installierbare Web-App (PWA)**:
  die Dateien dieses Ordners einmal irgendwo hosten (z. B. gratis via GitHub Pages), die URL
  in Safari öffnen und über Teilen → **«Zum Home-Bildschirm»** hinzufügen. Danach läuft Billy
  als eigene App **komplett offline**, mit Icon und dauerhaftem Speicher – auf iPhone,
  Android und auch auf dem Mac. Manifest, Service Worker und Icons liegen bereit
  (`manifest.webmanifest`, `sw.js`, `icon-*.png`); die lokale Einzeldatei-Nutzung auf dem
  MacBook bleibt davon unberührt.

  Gehostete Version: **https://laurinvalerian.github.io/billy/** (GitHub Pages aus diesem Repo).

Hinweis: Der Speicher (Profil, Rechnungsarchiv) ist pro Gerät und Herkunft getrennt –
zum Übertragen den JSON-Backup-Export verwenden.

## Grenzen

- Eine Rechnung = eine A4-Seite (bei zu vielen Positionen warnt die App).
- Ein MWST-Satz pro Rechnung.
- QR-Zahlteil nur in CHF oder EUR; andere Währungen mit Bankverbindung statt Zahlteil.
