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
- Zeichensatz, Feldlängen und Betragsgrenzen des Standards werden geprüft; Drucken ist erst
  möglich, wenn alle Pflichtangaben gültig sind.

## Daten & Backup

- Absenderprofil und gespeicherte Rechnungen liegen im Browser-Speicher (localStorage) –
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
- Rechnungen in CHF oder EUR.
