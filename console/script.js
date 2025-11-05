console.log(1000);
console.log("HELLO world");
console.log(20,"Hello",true);
const x = 23;

console.table(
{
    name:"Bram",
    email:"brad@gmail.com",
    sirname:"Mwakideu"
}
);

console.group("Simple");
console.log(x);

console.warn("Current Warning");

console.error("Alert Newest Error");

console.groupEnd;

// single line comments

/* multiple-line comments
or what nigga
lets go fellas.
*/ 

let score = 1;

let z; // declaration

z = 23; // Initialization / Assignment

var g;
g=78;
console.log(g)
score = 45;
console.log(score);

const arr = [1,2,3,4];
arr.push(89,45,67); 
console.log(arr);
arr.pop();

const person = {
    name:"Brad"
};

person.name = "Gilbert Ondonga";
person.age = 67;
person.email = "gilbert@gmail.com";
console.log(person)

let p={};

console.log(typeof(p));

function SayHello(){
    console.log("Hello Guys");
}

const data = SayHello();

console.log(data, typeof(data)); 

const Neighbours = {
    name:"Victor Ouma",
    tribe:"Bukusu",
    initials:"V.O.W"
};

Neighbours.initials = "G.O.N";
Neighbours.mobile = 2540789582375;
Neighbours.skill = "coding";

console.log(Neighbours);

var arrayOne = ["Hello", 45, true];
console.log(arrayOne[1]);

