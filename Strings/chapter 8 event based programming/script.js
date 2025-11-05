// let heading = document.querySelector("#main-heading");

// heading.addEventListener("click", () => {
//   console.log("You are clicking the heading!");
// });

// /*method chaining: we chain multiple method calls together, so that the result of the
// first link in the chain is used as the object for the next method call. */
// document.querySelector("em").addEventListener("click", () => {
//   console.log("You have clicked the em element!");
// });

// document.querySelector("body").addEventListener("click", () => {
//   console.log("You have clicked the body!");
// });

/* Event Bubbling - When an event is triggered on an element, it also gets triggered on all the
element’s ancestors (that is, the parent of the element, the parent’s parent, and so on) */

let wordList = document.querySelector("#word-list");
let sentence = document.querySelector("#sentence");

wordList.addEventListener("click", (event) => {
  //event is the object that the DOM API gives all info about the triggered event
  let word = event.target.textContent; //currentTarget property would be used to get the ul element. target gets the clicked li element
  sentence.textContent += word;
  sentence.textContent += " ";
});

let box = document.querySelector("#box");

document.querySelector("html").addEventListener("mousemove", (e) => {
  console.log(`mousemove X: ${e.clientX}, y: ${e.clientY}`);
  box.style.top = e.clientY + "px";
  box.style.left = e.clientX + "px";
});
