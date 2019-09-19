// 1. Schrijf een simpele statement die aangeeft of een getal even of oneven is.
const number = 4;
const even = (number % 2) == 0;
console.log(even);

// 2. Ik wil graag in de volgende string ‘Programming is not so cool’ het woordje ‘not’ verwijderen. Schrijf een programma dat dit doet.
const sentence = 'Programming is not so cool';
const firstPartOfSentence = sentence.substr(0,14);
const secondPartofSentence = sentence.substr(18);
console.log(firstPartOfSentence + secondPartofSentence);

// 3. Vergelijk de waarden ‘1400’ met de string ‘Ik woon in Naboo’. Programmeer deze opdracht en geef aan (met commentaar in je code) waarom dit niet een slimme vraag is. 
const niceNumber = 1400;
const niceSentence = 'Ik woon op Naboo';
console.log(niceNumber == niceSentence); //compair a number with a string is not a good idea