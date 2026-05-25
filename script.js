//1

function memorize(calculate) {
  const cache = {};

  return function (n) {
    if (n in cache) {
      return cache[n];
    }

    const result = calculate(n);
    cache[n] = result;

    return result;
  };
}

const square = memorize(n => n * n);

console.log(square(2));
console.log(square(2));
console.log(square(2));
console.log(square(3));
console.log(square(3));
console.log(square(2));

//2

function createTempValue(delay) {
  let value = null;

  return {
    set(newValue) {
      value = newValue;

      setTimeout(() => {
        value = null;
      }, delay);
    },

    get() {
      return value;
    }
  };
}

const temp = createTempValue(5000);

temp.set(5);
console.log(temp.get());