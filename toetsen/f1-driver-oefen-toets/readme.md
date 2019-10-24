# Casustoets

- starttijd: 13.00 uur
- eindtijd: 16.00 uur
- hulpmiddelen: internet, huiswerk en voorbeelden uit les. Het is uitdrukkelijk verboden om sociale media in te zetten en contact te zoeken met anderen.
- eigenaarschap: de code die je hebt opgeleverd is door jou ontwikkeld.
- inleveren: lever via learn een .zip bestand in van al je bestanden.

## Casusomschrijving

![f1 driver](laptimes.png)  

```
const laps = [
    {
        racer: 'Ricciardo',
        laps: [11, 22, 33],
        total: 0
    },
    {
        racer: 'Verstappen',
        laps: [22, 11, 23],
        total: 0
    },
];
```

Gegeven is het bovenstaande plaatje en de eerste 3 rondetijden (in seconden) van 2 coureurs. In deze opdracht ga je ingevoerde rondetijden voor 2 coureurs verwerken en de totale tijd dat ze aan het rijden zijn berekenen en toevoegen aan de webpagina. Dit gebeurt als volgt:

- kies een coureur met het pulldown menu
- voer de nieuwe rondetijd in
- druk op submit. Vervolgens wordt de ingevoerde rondetijd aan de rondetijden array van de coureur toegevoegd
- Het blauwe gedeelte van de webpagina wordt geüpdated met de totale rondetijd van elke coureur. De totale rondetijd wordt berekend in seconden.

De HTML en CSS voor deze opdracht is gegeven en staat in de map 'start'.


## Nakijkcriteria

1. Je mag geen jQuery gebruiken, alleen native JavaScript. Wanneer er wel jQuery wordt gebruikt dan wordt de opdracht niet nagekeken.
2. Je applicatie wordt alleen nagekeken op het moment dat de waarde uit het invoerveld wordt toegevoegd aan de array met rondetijden en er een bericht wordt geschreven naar de DOM.
3. Je kunt voor de 10 gaan door de opdracht volledig af te maken.

## Beoordelingscriteria

Nr | Leeropbrengsten | Punten
---|---|---
1 | Gebruikt consistente naamgeving | 5
2 | Gebruikt const, let, var in de gevraagde situatie | 5
3 | Gebruikt array's om data in op te slaan | 5
4 | Gebruikt een conditional (if else)| 10
5 | Gebruikt een loop om herhaling van stappen te voorkomen | 10
6 | Schrijft een functie om code te structureren | 10
7 | Schrijft een functie om herhaling te voorkomen | 5
8 | Schrijft commentaar volgens de JS docs richtlijnen | 5
9 | Gebruikt de juiste operatoren bij vergelijkingen | 5
10 | Gebruikt console.log om te debuggen | 5
11 | Gebruikt een object om gestructureerde data in op te slaan | 5
12 | Gebruikt Events voor interactie | 10
13 | Gebruikt DOM methods (interfaces) om HTML elementen te maken en te plaatsen in het DOM | 10
14 | Gebruikt DOM methods (interfaces) methoden om door de DOM te wandelen | 10

## Puntenverdeling

Beoordeling | Cijfer | Aantal punten
---|---|---
onvoldoende | 4 | < 60
matig | 5 | 60 tot 70
voldoende | 6 | 70 tot 80
ruim voldoende | 7 | 80 tot 85
goed | 8 | 85 - 90
zeer goed | 9 | 90 - 95
uitmuntend | 10 | 95 - 100