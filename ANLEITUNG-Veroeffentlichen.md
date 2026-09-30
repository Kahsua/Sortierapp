# Fotos sortieren – als App veröffentlichen (GitHub Pages)

Damit Chrome die Seite als echte App installieren kann, muss sie über eine
https-Adresse erreichbar sein (eine per WhatsApp verschickte Datei reicht dafür nicht).

1. Neues GitHub-Repository anlegen (z. B. `fotos-sortieren`, public).
2. ALLE Dateien aus diesem Ordner hochladen (inkl. der Ordner `icons`, `vendor`, `fonts`
   sowie `sw.js`, `manifest.webmanifest`, `.nojekyll`). `index.html` muss im Hauptordner liegen.
3. Settings → Pages → Branch `main` / Ordner `/ (root)` → Save.
4. Nach 1–2 Minuten ist die App erreichbar unter
   `https://DEIN-NAME.github.io/fotos-sortieren/`
5. Diesen Link per WhatsApp an deine Mutter schicken.

## Installation auf dem Handy/Tablet (Android, Chrome)
Link antippen → in Chrome die drei Punkte ⋮ → **„App installieren“**
(bzw. „Zum Startbildschirm hinzufügen“) → Installieren.
Danach liegt ein Symbol auf dem Startbildschirm; die App startet im Vollbild
und funktioniert nach dem ersten Öffnen auch ohne Internet.

## Updates
Wenn du `index.html` änderst: in `sw.js` die Zeile
`const CACHE = 'fotos-sortieren-v1';` auf `v2`, `v3` … erhöhen. Die App holt sich dann
beim nächsten Start mit Internet automatisch die neue Version.
