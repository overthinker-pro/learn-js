// // //   function

// function addition(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// function subtraction(num1, num2) {
//   let sub = num1 - num2;
//   return sub;
// }
// function multiplication(num1, num2) {
//   let pr = num1 * num2;
//   return pr;
// }
// function division(num1, num2) {
//   let dv = num1 / num2;
//   return dv;
// }

// function calculator(num1, num2, op) {
//   let result;
//   switch (op) {
//     case "+":
//       result = addition(num1, num2);
//       break;

//     case "-":
//       result = subtraction(num1, num2);
//       break;

//     case "*":
//       result = multiplication(num1, num2);
//       break;

//     case "/":
//       result = division(num1, num2);
//       break;

//     default:
//       result = "invalid operator";
//   }

//   return result;
// }
// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");
// let op = prompt("Enter operator:");

// let result = calculator(parseInt(num1), parseInt(num2), op);
// console.log(result);
// console.log("Result is here!");

// alert("result is " + result);

// // Programming concepts

// // variables
// let a = 3;
// let b = 8;
// let c = 5;
// let r = 10;
// let m = 2;
// let u = 4;
// let y = 3;

// // Arithmetic operators
// let x = (100 + 50) * a;

// console.log(x);

// // modulus operator
// let z = r % y;
// console.log(z);

// // increment operator
// y++;
// console.log(y);

// // decrement operator
// m--;
// console.log(m);

// // relational operator

// let languages = ["HTML", "CSS", "Javascript"];
// console.log(3 in languages);

// // in operator
// const data = {
//   name: "Peter",
//   age: "30",
//   city: "Portsmouth",
// };

// console.log("name" in data);
// console.log("address" in data);

// // instanceof operator
// console.log(languages instanceof Array);
// console.log(languages instanceof Object);
// console.log(languages instanceof String);
// console.log(languages instanceof Number);

// // = operator

// let sm = 50;
// let rs = 10 + sm;
// console.log(rs);

// // += operator

// let ty = 5;
// ty += 3;
// console.log(ty);

// let text = "Hello";
// text += " World";
// console.log(text);

// // -= operator
// let ui = 60;
// ui -= 30;
// console.log(ui);

// // **= operator
// let qw = 2;
// qw **= 3;
// console.log(qw);

// // array

// let arr = [1, 2, 3, 4, "Something"];
// console.log(arr[3]);

// // object
// let obj = {
//   name: "John",
//   age: 40,
//   country: "India",
// };

// console.log(obj.age);
// console.log(obj["country"]);

// let details = {
//   name: "Peter",
//   age: 30,
//   skills: ["html", "css", "javascript", "react"],
//   exp: {
//     html: "1 year",
//     css: "1 year",
//     javascript: "3 year",
//     react: "1 year",
//   },
// };

// console.log(details.exp.html);
// console.log(details.exp.javascript);

// // object inside array
// let arry = [
//   "string",
//   true,
//   "another string",
//   false,
//   {
//     name: "Michael",
//     age: 29,
//     skills: ["html", "css", "javascript", "bootstrap"],
//     exp: {
//       html: "3 year",
//       css: "2 year",
//       javascript: "2 year",
//       bootstrap: "3 months",
//     },
//   },
// ];

// console.log(arry[4].exp);
// console.log(arry[4].exp.bootstrap);

// // first class function example 1

// let sum = function (num1, num2, callback) {
//   let add = num1 + num2;

//   let res = callback(add);

//   return res;
// };

// let square = function (num) {
//   return num * num;
// };

// let rsult = sum(1, 2, square);

// console.log(rsult);

// // first class function example 2

// function hello() {
//   return function () {
//     console.log("this is from return function");
//   };
// }

// let reslt = hello();

// reslt();

// console.log('Something is cooking');

// console.log('master');

// tasks

// find if a number is odd or even

function even(num){
    if (num % 2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(even(3));
console.log(even(8));


// function to find the sum of the numbers in an array using for loop

const arr = [10, 11, 12, 13, 14];

function ForLoop(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

console.log(ForLoop(arr));


// sum of the numbers in an array with while loop

const sumWhile = [30, 5, 15, 50];

function WhileLoop(sumWhile){
    let sum = 0;
    let i = 0;
    while (i < sumWhile.length){
        sum += sumWhile[i];
        i++;
    }

    return sum;
}

console.log(WhileLoop(sumWhile));


// sum of array numbers with do-while loop

const dw = [40, 30, 80, 50];

function DoWhile(dw){
    let sum = 0;
    let i = 0;
    if (dw.length === 0) return 0;
    do {
        sum += dw[i];
        i++;
    } while (i < dw.length);

    return sum;
}


console.log(DoWhile(dw));


// function to find the largest of 2 numbers

function largeNumber(num1, num2){
    if (num1 > num2){
        return num1;
    }else{
        return num2;
    }
}


console.log(largeNumber(40,45));
console.log(largeNumber(9,5));
console.log(largeNumber(90, 150));


// find the largest in 3 numbers

function largeIn3(n1, n2, n3){
    if(n1 >= n2 && n1 >=n3){
        return n1;
    }else if(n2 >= n1 && n2 >=n3){
        return n2;
    }else{
        return n3;
    }
}


console.log(largeIn3(10, 60, 140));
console.log(largeIn3(1, 7, 2));
console.log(largeIn3(9, 56, 23));



// finding the area of a square

function squareArea(side){
    return side * side;
}

console.log('The area of the square is ' + squareArea(10));


// finding the area of a rectangle

function rectangleArea(l, w){
    return l * w;
}

console.log("The area of the rectangle is " + rectangleArea(15, 8));
