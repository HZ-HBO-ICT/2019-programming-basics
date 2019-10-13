// 1. Bereken met JavaScript het gemiddelde op basis van de cijfers die in de tabel staan en plaats dit gemiddelde cijfer weer op een nieuwe tabelregel in de tabel (ook weer met JavaScript).

const allGradeTableCells = document.getElementsByClassName('grade');
console.log(allGradeTableCells[0].innerText); //check to see if i can get the grades

// map function will not work becasue allGradeTableCells is a specific array.
// const allGrades = allGradeTableCells.map(function(element, index, array){
//     return element.innerText;
// });
// console.log(allGrades);

let allGrades = [];
for (let index = 0; index < allGradeTableCells.length; index++) {
    allGrades.push(allGradeTableCells[index].innerText);
}
console.log(allGrades);

/**
 * Function to determine the average grade of an grade array
 * @param {*} gradeArray 
 */
function avarageGrade(gradeArray) {
    sumOfGrades = 0;
    for (let index = 0; index < gradeArray.length; index++) {
        sumOfGrades += parseFloat(gradeArray[index]); // use parseFloat to parse all elements from the array (which are text elements) to floating nummbers (for example 5.5)   
    }
    return sumOfGrades / gradeArray.length;
}

console.log(avarageGrade(allGrades));

// 2. Zorg ervoor dat alle even elementen een andere achtergrondkleur krijgen. Gebruik hiervoor JS en maak zoveel mogelijke gebruik van functies.
// i will be useing the same table as in assignment 1.

function changeBackground() {
    const table = document.getElementById('courses');
    const rows = table.getElementsByTagName("tr"); //get all the rows of the table
    for (i = 0; i < rows.length; i++) {
        //manipulate rows 
        if (i % 2 == 0) {
            rows[i].classList.add('even');
        }
    }
}
changeBackground();

// 3. Maak een functie een functie createImageElement(‘imageSrcName’) die een plaatje in JS maakt(img tag genereert met bijbehorende attributen) en deze vervolgens in het DOM zet.
function createImageElement(imageSrcName){
    // 1. where in the DOM
    const ph = document.getElementById('body');
    // 2. what to create
    const image = document.createElement('img');
    image.src = imageSrcName;
    image.alt = 'My beautifull image';
    // 3. add it to the dom
    ph.appendChild(image);
}

createImageElement('https://picsum.photos/200/300');