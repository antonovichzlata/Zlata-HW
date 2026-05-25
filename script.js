//1

const animal = {
    eats: true
};

const rabbit = {
    __proto__: animal
};

//2

const mammal = {
    legs: 4
};

const dog = {
    bark() {
        console.log('Гав');
    }
};

mammal.__proto__ = animal;
dog.__proto__ = mammal;


//3
// адмін не має власної властивості age
// тому по ланццюгу прототипів йде шукати 
// через прототип в юзері

//4
// ми присвоїли адміну його власну властивість, 
// а не змінили властивість юзера

//5
// this посилається на контекст того хто її викликав, 
// а не де він лежить. його викликав адмін, 
// тож він посилається на контекст адміна

//6

function User(name) {
    this.name = name;
}

User.prototype.sayHi = function () {
    console.log(`Hi ${this.name}`);
};


//7

let user1 = new User("Олександр");
let user2 = new User("Андрій");

console.log(user1.sayHi === user2.sayHi);

// метод лежить в батьківському елементі, 
// а не копіюється в кожен об'єкт, 
// тож порівняння посилається на одну і ту саму функцію

//8

console.log(user1.constructor === User);

// конструктор лежить в прототипі. 
// після створення нового юзера об'єкт успадковує прототип, 
// в якому лежить конструктор, який посилається на юзера.

//9

const arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype);

// у масивів прототип посилається Array.prototype

//10

const arr2 = [];

console.log(arr2.push === Array.prototype.push);

// метод не зберігається в самому масиві, а в прототипі, тож це одне й те саме 

//11

Array.prototype.last = function () {
    return this[this.length - 1];
};