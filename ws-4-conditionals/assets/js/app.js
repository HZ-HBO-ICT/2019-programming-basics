// 1. Maak een if-else statement die checkt of iemand een onvoldoende/voldoende/goed/uitmuntend voor het vak programming basics heeft behaald.  (onvoldoende:  kleiner dan 6; voldoende: tussen 6 en 7; goed: tussen 7 en 9; uitmuntend: groter dan 9).

const myNewestResult = 8;
if (myNewestResult < 6) {
    console.log('bleh een onvoldoende');
} else if (myNewestResult >= 6 && myNewestResult < 7) {
    console.log('Yes ik heb een voldoende');
} else if (myNewestResult >= 7 && myNewestResult < 9) {
    console.log('Yes ik heb een goed');
} else if (myNewestResult >= 9 && myNewestResult <= 10) {
    console.log('Yes ik heb een uitmuntend');
} else {
    console.log('Raar resultaat heb jij!', myNewestResult);
}

// 2. Maak opdracht 1 nu met behulp van het switch statement.

//option 1 - better to use a if-else in this case
const result = 7;

switch (true) {
    case (result < 6):
        console.log('helaas onvoldoende');
        break;
    case (result >= 6 && result < 7):
        console.log('voldoende');
        break;
    case (result >= 7 && result < 9):
        console.log('goed');
        break;
    case (result >= 9 && result <= 10):
        console.log('uitmuntend');
        break
    default:
        console.log('Dat is geen geldig resultaat', result);
        break;
}
// option 2 - a switch 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
const myResult = 'voldoende';

switch (myResult) {
    case 'onvoldoende':
        console.log('helaas onvoldoende');
        break;
    case 'voldoende':
        console.log('voldoende');
        break;
    case 'goed':
        console.log('goed');
        break;
    case 'uitmuntend':
        console.log('uitmuntend');
        break
    default:
        console.log('Dat is geen geldig resultaat', result);
        break;
}

// purchasedBook = true;
// job = ‘teacher’;
// inTrain = false;

// 3. Gegeven is de bovenstaande codesnippet. Maak een if-else statement die de waarden van de variabelen checkt. Als de 2 boolean variabelen ‘waar’ zijn en de job is ‘teacher’ dan moet in de console het volgende bericht worden getoond: ‘finally i can enjoy my book!’.  Voor alle andere mogelijkheden in de if-else structuur moet je ook een nette oplossing bedenken.
const purchasedBook = true;
const job = 'teacher';
const inTrain = false;

if (purchasedBook && job == 'teacher' && inTrain) {
    console.log('finally i can enjoy my book');
} else {
    console.log('to bad');
}