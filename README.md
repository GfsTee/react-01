npx create-react-app .
installiert react in dem aktuellen Ordner

wenn man einen neuen Ordner haben will kann man den . durch den Ordnernamen ersetzen
npx create-react-app new-project

node_modules
packeges die react braucht
dort arbeiten wir NIE

git init schon gemacht und eine gitignore erstellt

package-lock.json:
was alles an node-modules gebraucht wird
auch hier machen wir NICHTS

package.json:
kurz Infos zu dem Projekt, ua scripts 

Ordner public
index.html: bearbeiten wir nur wenn wir dinge im Head ändern wollen (title, meta, etc)

Ordner src
index.js: auch hier arbeiten wir selten, es packt unsere App in das html

App.js

JSX:
wir können "html" schreiben
Aber wir können nur EIN Element zurückgeben!
Keine Geschwister! 

class => className (da class von JS genutzt wird)
zwischen {} können wir normales JS schreiben


# Liveserver:
im Terminal => npm start


import VARIABLENNAME from './PATH/TO/FILE' 
Wichtig mit ./ beginnen sonst sucht er in den node_modules

import './NAME.css' 
wirkt sich global aus!
kann man trotzdem verwenden, dass das CSS der komponente genutzt schneller zu finden ist

<img src="998-200x300.jpeg" alt="" />
die Datei befindet sich im public folder

wenn wir Hintergrundbilder aus dem CSS einfügen => müssen die Bilder im src Ordner liegen

wenn sie über "inline-style" eingefügt werden müssen sie im public sein


Wenn wir ein Projekt von github holen hat es keine node_modules
um diese herunterzuladen
npm i
installiert alle benötigten packages

Seite online stellen:
https://www.netlify.com/
new site from git
projekt suchen
bei Einstellungen nichts ändern
