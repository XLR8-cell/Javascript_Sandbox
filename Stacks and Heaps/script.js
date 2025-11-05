//Primitive Datatypes store their variables and values in Stacks

const age = 30;

let nigga = "Gilbert";

let newName = nigga;
newName = "Jonathan";
/* Reference Types store their data in heaps but their variables in stacks
   thats why the variable points (references) from the stack to the value in the heap.
*/

// Using the keyword let allows you to reassign a new value to a variable directly.

let number = 34;

let numeral = number;

numeral = 400;

console.log(nigga, newName);
console.log(person, newPerson);
console.log(number, numeral);

const niece = {
  firstName: "Brielle",
  lastName: "Onchuru",
  skinColor: "Brown",
};

let nyamu = niece;

nyamu.middleName = "Kwamby";
console.log(nyamu["skinColor"]);
console.log(nyamu.lastName);
console.log(nyamu.firstName);

while (numeral == 402) {
  console.log(niece.middleName);
}
let wiz;
do {
  wiz = "Ondonga";
} while (numeral == 34);
console.log(wiz); //similar to while loop but runs atleast once before checking condition

for (var count = 0; count < 7; count++) {
  console.log("Seven");
}

// The for/in statement allows iteration over properties of an object.
var description = "";
var person1 = { fname: "Paul", lname: "Ken", age: 18 };
for (var x in person1) {
  description += person1[x] + " ";
} // description = 'Paul Ken 18 '

// The for/of statement allows iteration over iterable objects (including the built-in String,
// Array, e.g. the Array-like arguments or NodeList objects, TypedArray, Map and Set,
// and user-defined iterables).

var myPets = "";
var pets = ["cat", "dog", "hamster", "hedgehog"];
for (var pet of pets) {
  myPets += pet + " ";
} // myPets = 'cat dog hamster hedgehog '

// && and || "short circuit", which is useful for setting default values.
let otherName;
var name = otherName || "default";
console.log(name);

grade = "B";
switch (grade) {
  case "A":
    console.log("Great job");
    break;
  case "B":
    console.log("OK job");
    break;
  case "C":
    console.log("You can do better");
    break;
  default:
    console.log("zero sufuri");
    break;
}
