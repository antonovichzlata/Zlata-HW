//1

// різниця в скопі. 
// var глобальна - одна спільна змінна. 
// let локальна - нова копія змінної кожну ітерацію.

//2

function createAdder() {
  let sum = 0;

  return function (n) {
    sum += n;
    return sum;
  };
}

//3

function createRange(min, max) {
  return function (n) {
    return n >= min && n <= max;
  };
}

//4

function createBank(balance) {
  return {
    deposit(amount) {
      balance += amount;
    },

    withdraw(amount) {
      balance -= amount;
    },

    getBalance() {
      return balance;
    }
  };
}