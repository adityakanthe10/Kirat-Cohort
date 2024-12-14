// const x: number = 1;
// console.log(x);

// function greet(firstName: string) {
//   console.log("Hello" + firstName);
// }

// greet("harkirat");

// sum function

// function sum(a: number, b: number): number {
//   return a + b;
// }

// return true or false based on a user is 18+ -TYPE INTERFERENCE

// function isLegal(age: number) {
//   if (age < 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let y = isLegal(18);

// create a function that takes another function as input and runs the other function after 1 second

// function runafter1sec(fn: () => void) {
//   setTimeout(fn, 1000);
// }

// runafter1sec(function () {
//   console.log("hi there");
// });

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
//   email?: string;
// }

// function isLegal(user: User) {
//   if (user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function greet(user: User) {
//   console.log("hi there" + user.firstName);
// }

// isLegal({
//   firstName: "harkirat",
//   lastName: "singh",
//   age: 20,
//   email: "asasad",
// });

// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// class Employee implements Person {
//   name: string;
//   age: number;

//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }

//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   }
// }

// const e = new Employee("harkirat", 22);
// console.log(e.name);

// Unions -print an id of an user which can be number or a string

// type StringOrNumber = string | number;

// function printId(id:StringOrNumber){
//     console.log(`ID:${id}`);
// }

// printId(101);
// printId("101")

// Intersection - what if you want to create a type that has every property of multiple types/interfaces

// type Employee = {
//     name:string;
//     startDate: Date;
// }

// type Manager ={
//     name: string;
//     department:string;
// }

// type TL = Employee & Manager;

// const tL : TL ={
//     name:"aditya",
//     startDate: new Date(),
//     department:"Computer",
// }

// Arrays
// Given an array of positive integers as input ,return the maximum value in the array

function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue([1, 2, 3]));

// Given a list of users,filter out the users that are legal(Greater than 18 years of age)

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

function maxxValue(users: User[]) {
  let maxUser = users[0];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > maxUser.age) {
      maxUser = users[i];
    }
  }
  return maxUser;
}

console.log(
  maxxValue([
    { firstName: "aditya", lastName: "kanthe", age: 12 },
    { firstName: "Rahul", lastName: "Sharma", age: 34 },
    { firstName: "Priya", lastName: "Gupta", age: 28 },
  ])
);
