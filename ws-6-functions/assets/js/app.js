// 1. Zet de uitwerking van de Fibonacci getallenreeks uit de vorige les om in een functie.
function fibonacci(num) {
    var a = 1,
        b = 0,
        temp;

    while (num >= 0) {
        console.log(b);
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}
// 2. Schrijf een functie countdown die van 10 - 1 aftelt (dit wordt ook in de console getoond). Geef aan de functie een jaartal parameter mee die als hij bij ‘0’ is zegt ‘Happy {jaartal}’.
function finalCountDown(){} // declaratie
const finalCountDown = function (newYear) { // expressie
    let startingNumber = 10;
    while (startingNumber >= 1) {
        console.log('Yup', startingNumber);
        if (startingNumber == 1) {
            console.log('Happy', newYear);
        }
        startingNumber--;
    }
}

finalCountDown('2018');

// 3. Schrijf een functie expressie en declaratie waarmee je aantoont dat een expressie en een declaratie op een andere manier met hoisting omgaan. (als je deze vraag niet snapt dan moet je de videoreeks uit udacity kijken. Daar wordt hoisting goed uitgelegd).
// https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052
functionalExpression(); // reference error because function is declared after initialization
functionDeclaration(); // this will work

const functionalExpression = function (){
    console.log('this is an function expression, and is not hoisted');
}

function functionDeclaration(){
    console.log('this is a function declaration, and is hoisted');
}