// 1. const arr = [5, 10, 15];
// Отримай через деструктуризацію змінні first і second.

const arr1 = [5, 10, 15];
const [a, b] = arr1;

// 2. Є об’єкт:
// const user = {
//   name: "Ivan",
//   age: 25
// };
// Дістань name в змінну userName.

const user1 = {
  name: "Ivan",
  age: 25
};

const { name: userName } = user1;

// 3. Є масив:
// const arr = [1, 2, 3, 4];
// Отримай:
// first — перший елемент
// others — масив з решти елементів

const arr2 = [1, 2, 3, 4];
const [first, ...others] = arr2;

// 4. Є об’єкт:
// const user = {
//   name: "Ivan",
//   age: 25,
//   city: "Dnipro"
// };
// Отримай:
// змінну name
// об’єкт rest (всі інші властивості без name)

const user2 = {
  name: "Ivan",
  age: 25,
  city: "Dnipro"
};

const { name, ...rest2 } = user2;

// 5. Є масиви:
// const a = [1, 2];
// const b = [3, 4];
// Об’єднай їх в один масив [1, 2, 3, 4].

const a1 = [1, 2];
const b1 = [3, 4];
const c1 = [...a1, ...b1];

// 6. Є об’єкт:
// const user = { name: "Ivan" };
// Створи копію об’єкта (не посилання).

const user3 = { name: "Ivan" };
const copy = { ...user3 };

// 7. Є об’єкт:
// const user = {
//   name: "Ivan",
//   age: 25,
//   city: "Dnipro"
// };
// Створи новий об’єкт:
// без city
// додай country: "Ukraine"

const user4 = {
  name: "Ivan",
  age: 25,
  city: "Dnipro"
};

const { city: city1, ...rest3 } = user4;
const newUser4 = {
    ...rest3,
    country: "Ukraine"
}

// 8. Є масив:
// const arr = [1, 2, 3];
// Створи новий масив:
// додай 0 на початок
// додай 4 в кінець

const arr3 = [1, 2, 3];
const newArr3 = [0, ...arr3, 4];

// 9. Є об’єкт:
// const user = {
//   name: "Ivan",
//   address: {
//     city: "Dnipro"
//   }
// };
// Дістань значення city через деструктуризацію.

const user5 = {
  name: "Ivan",
  address: {
    city: "Dnipro"
  }
};

const { address: { city: city2 } } = user5;

// 10. Є код:
// const a = [1, 2, 3];
// const b = a;
// Зроби так, щоб b була копією масиву, а не посиланням.

const a2 = [1, 2, 3];
const b2 = [...a2];

// 11. Є об’єкт:
// const user = {
//   name: "Ivan",
//   age: 25
// };
// Напиши функцію:
// function updateUser(user) {
//   // додати isAdmin: true
// }
// Не змінюй оригінальний об’єкт.

const user6 = {
  name: "Ivan",
  age: 25
};

function updateUser(user) {
    return {
        ...user,
        isAdmin: true
    };
}

console.log(updateUser(user6));

// 12. Є масив:
// const arr = [1, 2, 3, 4, 5];
// Через деструктуризацію отримай:
// перший елемент
// останній елемент

const arr4 = [1, 2, 3, 4, 5];
const [first1, ...rest4] = arr4;
const last = rest4[rest4.length - 1];