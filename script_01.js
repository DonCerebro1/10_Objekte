
/***** Erinnerung: Arrays *******/
// let arr;


// arr = [["Ich","bin","Max"],["Ich","bin","Moritz"]];
// output(arr[0][2]);
// output(arr[1][2]);




/***** Objekte 1 Daten/Funktionen *******/
let person =
{
        firstName: "Chris ",
        lastName:  "Möllerfriedrich",
        salary: [120000,160000],
        permission: true,
        sayHello:
                function()
                {
                        return "Hi, ich bin " + person.firstName;
                }
};

// output(person.firstName + person.lastName);
// output(person.salary[1]);
// output(person.permission);


// const txt = "Ich bin " + person.firstName + " " +
// person.lastName + " und verdiene " +
// person.salary[1] + " K"

// output(txt);
// output(person.sayHello());

/***** Objekte 1 - Hierachie*******/

// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht.
// Der Baikalsee ist mein 1642 m der tiefste See der Erde..
// deep - deeper - deepest

const baikal  =
{
        value:"10m",
        deep: 
        {
                deeper:
                {
                        deepest:"Das Lich - auf 1642m!"
                }
        }
};

output(baikal.value);
output(baikal.deep.deeper.deepest);











/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}