//1. const a = [1, 1, 2, 3, 3, 7];
//тільки повторювані [1, 3]

const a = [1, 1, 2, 3, 3, 7];
const repeat = a.filter(el => a.indexOf(el) !== a.lastIndexOf(el));
const set = new Set(repeat);
const repeatResult = Array.from(set);
console.log(repeatResult);

//2. Функція, шо приймає масив, і перевіряє, чи всі елементи унікальні

function isUnique (arr) {
    arr.length === new Set(arr).size;
}

//const arr = [1, 2, 2, 3, 4, 4, 5]; тільки елементи, що повторюються 1 раз => [1, 3, 5]

const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = a.filter(el => a.indexOf(el) === a.lastIndexOf(el));
console.log(unique);

//4. const set = new Set();
//set.add([1,2]);
//set.add([1,2]);
//console.log(set.size === 1); що і чому?

//false бо set порівнює посилання на об'єкти, а не значення