const person = {
  name: "Арія",
  age: "24",
  greet() {
    console.log(Привіт, мене звати ${this.name});
  }
};

person.greet();

const rectangle = {
  width: 15,
  height: 20,
  area() {
    return this.width * this.height;
  }
};

const result = rectangle.area();
console.log(result);

const car = {
  brand: "Audi",
  speed: 120,
  accelerate(value) {
    this.speed += value;
  }
};

car.accelerate(20);
console.log(car.speed);

const student = {
  grades: [12, 10, 11, 9],
  showGrades() {
    console.log(this.grades.join(", "));
  }
};

student.showGrades();

const user = {
  password: "12345",
  checkPassword(input) {
    return input === this.password;
  }
};

console.log(user.checkPassword("12345"));
console.log(user.checkPassword("0000"));

const text = {
  content: "привіт світ",
  capitalize() {
    return this.content[0].toUpperCase() + this.content.slice(1);
  }
};

console.log(text.capitalize()); 

const shoppingList = {
  items: [],
  addItem(item) {
    this.items.push(item);
  }
};

shoppingList.addItem("Молоко");
shoppingList.addItem("Хліб");
console.log(shoppingList.items);

const counter = {
  value: 0,
  increment() {
    this.value++;
  },
  decrement() {
    this.value--;
  }
};

counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value);

const event = {
  date: "19-01-2026",
  formatDate() {
    const [day, month, year] = this.date.split("-");
    return ${day}.${month}.${year};
  };
};

console.log(event.formatDate());

const todoList = {
    tasks: [],
    isEmpty() {
        return this.tasks.length === 0;
    }
};

console.log(todoList.isEmpty());

todoList.tasks.push("Вивчити JS");

console.log(todoList.isEmpty());