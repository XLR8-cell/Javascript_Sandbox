//Template Literals
let x;

const name = "Gilbert";
const age = 22;

x = `Hello, my name is ${name} and I am ${age} years old`;

console.log(x);
//String properties and methods 'Properties don't have parenthesis'
const s = "Hello World";

x = s.length; //s is wrapped temporarily to form a string object inorder to take the property length
// const s = new String("Hello World"); behind the scenes
// Access value by number key
x = s[0];

x = s.__proto__; // Double underscores are for prototypes which make all functions

console.log(x);
x = s.charAt(3);
x = s.indexOf("l");
x = s.toLowerCase();
x = s.toUpperCase();
x = s.substring(2, 5);
x = s.substring(7);
x = s.slice(7); // slice is similar but allows use of -ve==j  numbers as keys to count from the back of a word
x = s.slice(-4, -2); // -4 upto but not including -2

x = "          Hello Guys!         ";

x = x.trim();
x = x.trimStart();
x = x.trimEnd();
x = x.replace("Guys", "Gilbert");
x = x.includes("Guys");
x = s.valueOf();
x = s.split();
console.log(x);

const myString = "developer";
const newString = myString.charAt(0).toUpperCase() + myString.substring(1);

const anotherNewString = myString[0].toUpperCase() + myString.substring(1);

const latestString = myString[0].toUpperCase() + myString.slice(-8);

console.log(latestString);

//Change to a capitalized version of the Initials of the first name and second name joined by a .
let fullName = "Gilbert Ondonga Nyamberi";
let separateNames = fullName.split(" ");
// [0][0] and charAt(0) are both still valid
let firstNameInitial = separateNames[0].substring(0, 1).toUpperCase();
let secondNameInitial = separateNames[1].substring(0, 1).toUpperCase();
let thirdNameInitial = separateNames[2].slice(0, 1).toUpperCase();
let fullNameInitials =
  firstNameInitial + "." + secondNameInitial + "." + thirdNameInitial;
console.log(fullNameInitials);
