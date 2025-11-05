console.log("Hello, HTML!");

let strong = document.querySelectorAll(".highlight"); //NodeList array is output
strong[0].textContent;

let strong2 = document.querySelector("#main-heading strong"); // if one result element is the target

strong2.innerText = "Tinkering innerText!";

document.getElementById("main-heading") === document.querySelector("#main-heading"); //true

