// 1.Maak een functie die random een element uit de volgende array retourneert.
// const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 
// Tip: gebruik Math.random (zie bijvoorbeeld: https://www.geeksforgeeks.org/javascript-math-random-function/ )

const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

const getRandomLapRound = function (min, max) {
    // Math.random gives a number between 0 and 1
    // Example: number between 2 and 6
    // Math.random gives 0.7. 
    // 0.7 * (6 - 2) = 2.8 
    // 2.8 + 2 = 4.8
    // randomIndex = Math.floor(4.8) = 4
    let randomIndex = Math.floor(Math.random() * (max - min)) + min;
    console.log(randomIndex);
}

getRandomLapRound(2, 6);


// 2. Gegeven is de volgende 2-dimensionale array van al mijn platen:
// const allMyRecords = [
//    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
//    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
// ];
// Console.log alle waarden uit deze 2-dimensionale array. Tip: gebruik een dubbele loop.

const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

for (let i = 0; i < allMyRecords.length; i++) {
    for (let j = 0; j < allMyRecords[i].length; j++) {
        console.log(allMyRecords[i][j])    
    }
}

// 3. [Pittig]. Gegeven is de volgende for-loop op basis van de array uit vraag 1.
// const filteredLapRoundsWithForLoop = function () {
//    let newArray = [];
//    for (let i = 0; i < lapRounds.length; i++) {

//        if (lapRounds[i] < 4) {
//            newArray.push(lapRounds[i]);
//        }
//    }
//    return newArray;
// }
// Gebruik de .filter functie uit javascript om precies hetzelfde resultaat te behalen als de for-loop. Geef aan waarom de .filter functie fijner/beter werkt.

// option with forloop
const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {

        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
}

//option with filter, it is much shorter.
const filteredLapRounds = lapRounds.filter(function (element, index) {
    return element < 4;
});

console.log(filteredLapRounds);
