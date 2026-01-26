const checkLogin = login => login.length > 8;

console.log(checkLogin("javascript"));
console.log(checkLogin("login"));

const replaceA = str => str.replaceAll("a", "@");

console.log(replaceA("banana"));

const isEmail = email => {
  const aIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");
  
  return aIndex > 0 &&
         dotIndex > aIndex + 1 &&
         dotIndex < email.length - 1;
};

console.log(isEmail("test@gmail.com"));
console.log(isEmail("gmail.com"));

const trimText = str => str.trim();

console.log(trimText("   hello world "));

const capitalize = str => {
  const words = str.split(" ");
  const result = [];
  
  for (let i = 0; i < words.length; i++) {
    const capitalized = words[i][0].toUpperCase() + words[i].slice(1);
    
    result.push(capitalized);
  }
  
  return result.join(" ");
};

console.log(capitalize("javascript is a language"));

const countChar = (str, char) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
};

console.log(countChar("banana", "a"));