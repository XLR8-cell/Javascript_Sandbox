let x;

// x = 5 + '5';

// x = 5 + Number('5');


x = '5' * 5;

// x = 5 + null; // null is typically coerced to zero

// x = Number(null);

// x = Number(true);
// x = Number(false);
x = 5 + undefined;
//x = undefined + undefined;

console.log(x, typeof x);