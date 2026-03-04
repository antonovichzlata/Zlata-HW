let bigNumber = 5.6e6;
console.log(bigNumber);
let litNumber = 78e-6;
console.log(litNumber);

let a = 250e3;
let b = 4e2;
let sum = a + b;
console.log(sum);

let n = 238;
console.log(n.toString(16));
console.log(n.toString(2));
console.log(n.toString(8));

console.log(parseInt("111", 2));
console.log(parseInt("ff", 16));
console.log(parseInt("77", 8));

console.log(isNaN("hello"));
console.log(Number.isNaN("hello"));

console.log(parseInt("12px"));
console.log(parseFloat("100.5em"));
console.log(parseFloat("45.67.89"));

// Number("12px") повертає інший результат, ніж parseInt("12px") 
// бо Number() вимагає щоб весь рядок був коректним числом, а 
// parseInt() читає рядок до першого нечислового символа або другої крапки

let number = -3.4

console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.trunc(number));

let x = 12.34567;
console.log(x.toFixed(2));