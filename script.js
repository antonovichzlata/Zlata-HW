// 46

const users = [
  { name: "Ivan", age: 18 },
  { name: "Anna", age: 25 },
  { name: "Oleg", age: 30 },
  { name: "Olena", age: 22 },
  { name: "Dmytro", age: 27 }
];

function RandomUser(arr) {
  const used = [...arr];

  return function () {
    if (used.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * used.length);

    return used.splice(randomIndex, 1)[0];
  };
}

const getUser = RandomUser(users);

console.log(getUser());
console.log(getUser());
console.log(getUser());
console.log(getUser());
console.log(getUser());
console.log(getUser()); 

const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedUsers.map(u => u.name));

const str = "2026-03-18";
const reversedStr = str.split("-").reverse().join(".");
console.log(reversedStr);

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const editedText = text.replaceAll("o", "$$$");
console.log(editedText);

const numbers = [5, 10, 15, 20];
const sumOdd = numbers.reduce((sum, num) => {
  if (num % 2 !== 0) {
    return sum + num;
  }
  return sum;
}, 0);
console.log(sumOdd);

const users2 = [
{ name: "Ivan", age: 18 },
{ name: "Anna", age: 25 },
{ name: "Oleg", age: 30 },
{ name: "Olena", age: 22 },
{ name: "Petro", age: 17 }
];

const result = users2.reduce((result, user) => {
  if (user.age >= 18) {
    result.adult.push(user);
  } else {
    result.minor.push(user);
  }
  return result;
}, { adult: [], minor: [] });

console.log(result);

// 47

const n = 10;
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

const resultArr = arr.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.even++;
  } else {
    acc.odd++;
  }
  return acc;
}, { odd: 0, even: 0 });
console.log(resultArr);

const users3 = [
  { login: "user_1", age: 12 },
  { login: "devMax", age: 19 },
  { login: "codeMaster", age: 17 },
  { login: "frontend_guy", age: 22 },
  { login: "backend_pro", age: 16 },
  { login: "jsNinja", age: 27 },
  { login: "reactFan", age: 14 },
  { login: "nodeHero", age: 31 },
  { login: "fullstack_dev", age: 18 },
  { login: "testerQA", age: 15 }
];

users3.forEach(user => {
  user.age += 1;
});
console.log(users3);

const adultLogins = users3.reduce((acc, el) => {
  if (el.age >= 18) {
    acc.push(el.login);
  }
  return acc
}, []);
console.log(adultLogins);