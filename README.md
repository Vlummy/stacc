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

Som visualisering henter bygger jeg en hovedkomponent NedbetalingsContainer.js og noen subkomponenter som blir brukt her. 