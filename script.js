// //   function

function addition(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
function subtraction(num1, num2) {
  let sub = num1 - num2;
  return sub;
}
function multiplication(num1, num2) {
  let pr = num1 * num2;
  return pr;
}
function division(num1, num2) {
  let dv = num1 / num2;
  return dv;
}

function calculator(num1, num2, op) {
  let result;
  switch (op) {
    case "+":
      result = addition(num1, num2);
      break;

    case "-":
      result = subtraction(num1, num2);
      break;

    case "*":
      result = multiplication(num1, num2);
      break;

    case "/":
      result = division(num1, num2);
      break;

    default:
      result = "invalid operator";
  }

  return result;
}
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let op = prompt("Enter operator:");

let result = calculator(parseInt(num1), parseInt(num2), op);
console.log(result);
console.log("Result is here!");

alert("result is " + result);

// Programming concepts

// variables
let a = 3;
let b = 8;
let c = 5;
let r = 10;
let m = 2;
let u = 4;
let y = 3;

// Arithmetic operators
let x = (100 + 50) * a;

console.log(x);

// modulus operator
let z = r % y;
console.log(z);

// increment operator
y++;
console.log(y);

// decrement operator
m--;
console.log(m);

// relational operator

let languages = ["HTML", "CSS", "Javascript"];
console.log(3 in languages);

// in operator
const data = {
  name: "Peter",
  age: "30",
  city: "Portsmouth",
};

console.log("name" in data);
console.log("address" in data);

// instanceof operator
console.log(languages instanceof Array);
console.log(languages instanceof Object);
console.log(languages instanceof String);
console.log(languages instanceof Number);

// = operator

let sm = 50;
let rs = 10 + sm;
console.log(rs);

// += operator

let ty = 5;
ty += 3;
console.log(ty);

let text = "Hello";
text += " World";
console.log(text);

// -= operator
let ui = 60;
ui -= 30;
console.log(ui);

// **= operator
let qw = 2;
qw **= 3;
console.log(qw);

// array

let arr = [1, 2, 3, 4, "Something"];
console.log(arr[3]);

// object
let obj = {
  name: "John",
  age: 40,
  country: "India",
};

console.log(obj.age);
console.log(obj["country"]);

let details = {
  name: "Peter",
  age: 30,
  skills: ["html", "css", "javascript", "react"],
  exp: {
    html: "1 year",
    css: "1 year",
    javascript: "3 year",
    react: "1 year",
  },
};

console.log(details.exp.html);
console.log(details.exp.javascript);

// object inside array
let arry = [
  "string",
  true,
  "another string",
  false,
  {
    name: "Michael",
    age: 29,
    skills: ["html", "css", "javascript", "bootstrap"],
    exp: {
      html: "3 year",
      css: "2 year",
      javascript: "2 year",
      bootstrap: "3 months",
    },
  },
];

console.log(arry[4].exp);
console.log(arry[4].exp.bootstrap);

// first class function example 1

let sum = function (num1, num2, callback) {
  let add = num1 + num2;

  let res = callback(add);

  return res;
};

let square = function (num) {
  return num * num;
};

let rsult = sum(1, 2, square);

console.log(rsult);

// first class function example 2

function hello() {
  return function () {
    console.log("this is from return function");
  };
}

let reslt = hello();

reslt();
