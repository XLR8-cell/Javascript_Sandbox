// Declaration Notation where you start with the function keyword
// It is slightly easier to write and doesn’t require a semicolon after the function.

console.log("I just told her: ", flirt("Cate"));

function flirt(name) {
  return `I love the ring of your middle name, ${name}!`;
}

// The preceding code works, even though the function is defined below the code that uses it.

// For Arrow functions, These two definitions of square do the same thing:
const square1 = (x) => {
  return x * x;
};
const square2 = (x) => x * x;

/*JavaScript is extremely broad-minded about the number of arguments you
can pass to a function. If you pass too many, the extra ones are ignored. If
you pass too few, the missing parameters are assigned the value undefined.*/

const roundTo = function (n, step) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};
console.log(roundTo(23, 10));
