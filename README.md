# stacc

Kjøre program:

1. npm install
2. cd klient
3. npm install
4. cd ../
5. npm run dev

Jeg satt opp backend til frontend ved bruk av Express og React som frontend.

Server lytter på port 5000
React kjører på port 3000

Jeg henter data fra apiet deres på server siden i eksterneAPIS.js
React sender sprørringer til den lokale serveren som videre håndterer eksterne api.

Som visualisering bygger jeg en hovedkomponent NedbetalingsContainer.js og noen subkomponenter som blir brukt her. 
Ideen min her er at bruker kan legge inn de verdiene som trengs for å opprette en plan. Deretter vil set konverterer jeg de unike årene i en liste så bruker kan se betalinger avhengig av år. For meg virket dette som en oversiktlig måte å sette det hele opp på. 
