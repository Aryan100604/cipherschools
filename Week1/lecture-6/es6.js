// var x = 15;
// {
//   let x = 5;
//   console.log(x);
// }
// console.log(x);

// var x = function (x, y) {
//   return x + y;
// };

// const x = (x, y) => x + y;
// console.log(x(5, 7));

// const q1 = ["Jan", "Feb", "March"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "Dec"];
// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year);

const myNumbers = [22, 45, -34, 66, 37];
// let maxVlaue = Math.max(...myNumbers);
// console.log(maxVlaue);
// var sum = 0;
// for (let num of myNumbers) {
//   sum += num;
// }
// console.log(sum);

// const name = "CipherSchools";
// let text = "";
// for (let ch of name) {
//   text += ch + " ";
// }
// console.log(text);
// const fruits = new Map([
//   ["Apple", 500],
//   ["Mangoes", 300],
//   ["Oranges", 200],
// ]);

// console.log(fruits);
// console.log(fruits.get("Oranges"));
// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("a");
// console.log(letters);
// class Car {
//   constructor(name, mfgyear) {
//     this.name = name;
//     this.mfgyear = mfgyear;
//   }
// }

// const Car1 = new Car("Mercedes", 2023);
// const Car2 = new Car("Mustang", 1986);

// console.log(Car1, Car2);

// let myFunction = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Inside the rsolve");
//       resolve();
//     }, 2000);
//   });
// };

// myFunction()
//   .then(() => {
//     console.log("Resolved");
//   })
//   .catch(() => {
//     console.error("Rejected");
//   });

// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 30,
//   eyecolor: "green",
// };

// let id = Symbol("id");
// person[id] = 13002;
// console.log(person);

// const addTwoNumbers = (a, b = 10) => a + b;
// console.log(addTwoNumbers(12));

const addNumbers = (...args) => {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }

  return sum;
};

console.log(addNumbers(44, 22, 11, 3, 6, 9));
