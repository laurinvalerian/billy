# Billy – QR-Rechnungen für die Schweiz (offline)

Eine einzelne HTML-Datei, keine Installation, kein Internet nötig. Alle Daten bleiben lokal auf dem Gerät.

## Benutzung

1. `billy.html` doppelklicken (öffnet sich im Browser, z. B. Safari oder Chrome).
2. Einmalig den Absender ausfüllen (Name, Adresse, IBAN, ggf. UID) – wird automatisch gespeichert.
3. Kunde und Positionen erfassen, dann **Drucken / PDF**:
   - Im Druckdialog **A4**, Skalierung **100 %** (kein «An Seite anpassen»), Ränder «Standard/Keine».
   - Als PDF sichern («PDF» unten links im macOS-Druckdialog) und per Mail verschicken, oder direkt drucken.

`beispiel-rechnung.pdf` zeigt, wie das Resultat aussieht.

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

Die Datei ist mobiltauglich (das Layout stapelt sich auf schmalen Bildschirmen):
`billy.html` z. B. per AirDrop aufs iPhone schicken, in der Dateien-App ablegen und von dort
öffnen – funktioniert offline. Drucken/PDF geht auch mobil über den Teilen-Dialog von Safari.
Hinweis: Der Browser-Speicher ist beim Öffnen aus der Dateien-App nicht immer dauerhaft –
für die Ablage der Rechnungen ist das MacBook zuverlässiger.

## Grenzen

- Eine Rechnung = eine A4-Seite (bei zu vielen Positionen warnt die App).
- Ein MWST-Satz pro Rechnung.
- Rechnungen in CHF oder EUR.
