// 1.Schrijf de volgende array om in JSON. De array beschrijft rondetijden van een hardloper. Wat zijn de namen (keys) van de properties?
const lapRounds = [55.99, 63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12];

const lapRoundsJson = {
    "round1": 55.99,
    "round2": 63.00,
    "round3": 63.01,
    "round4": 54.01,
    "round5": 62.79,
    "round6": 52.88,
    "round7": 53.10,
    "round8": 54.12
}

// 2. Gegeven is een array met drie objecten:
// Gebruik een for-loop of foreach-loop en print voor elk object de regel: “I have a [profession] named [name] and he likes to work on a [brand] computer”. De vierkante haken zijn placeholders voor de bijbehorende properties uit de objecten hierboven.

const teachers = [{
        name: "Loek",
        profession: "Teacher",
        brand: "Linux"
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino"
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple"
    }
];

// teachers.forEach(function (element, index, array) {
//     console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a/an ${element.brand} `);
// });

for (let index = 0; index < teachers.length; index++) {
    const element = teachers[index];
    console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a/an ${element.brand}`);
}


// 3. [Pittig]. Gegeven is de array met objecten uit de vorige vraag. Voeg twee properties “hoursPerWeek” en “salary” toe. 
// Verzin zelf bijpassende waardes. Voeg nu een methode “salaryPerHour” toe, met daarin een functie die print 
// hoeveel de docenten per uur verdienen.

// i use a generic function which is called from each of the objects in moreTeachers array. The this keyword references to the calling(current) object
const printSalaryPerHour = function () {
    console.log(`${this.name} earns ${this.salaryPerHour} per hour`);
}

const moreTeachers = [{
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: 40,
        salaryPerHour: 10,
        printSalaryPerHour: printSalaryPerHour
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        hoursPerWeek: 40,
        salaryPerHour: 15,
        printSalaryPerHour: printSalaryPerHour
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek: 20,
        salaryPerHour: 15,
        printSalaryPerHour: printSalaryPerHour
    }
];

moreTeachers[0].printSalaryPerHour();