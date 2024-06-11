// console.log("hello world");

// 1. Write the program to greet a person given their first and last name.

// let name = "aditya";
// let lastname = "kanthe";
// let isMarried = false;
// if (isMarried == true) {
//   console.log("Hello " + name + " " + lastname + " is Married ");
// } else {
//   console.log("aditya kanthe is not married");
// }

// 2. Write a program that greets a person based on their gender.(If else)
// let Name = input("Enter your Name: ");
// let gender = input("ENter Your Gender: ");

// if (gender == Male) {
//   console.log(name + " is a boy");
// } else if (gender == female) {
//   console.log(name + "is a girl");
// }

// 3. Write a program that counts from 0-1000 and prints (for loop)
// for (let i = 1; i < 1001; i++) {
//   console.log(i);
// }
// let n = 0;
// for (let j = 1; j <= 1000; j++) {
//   n = n + j;
// }
// console.log(n);

// COMPLEX PRIMITIVES

// 1. Write a program prints all the even numbers in an array

// const ages = [21, 22, 23, 24, 25];
// const ageLength = ages.length;

// for (let i = 0; i <= ageLength; i++) {
//   if (ages[i] % 2 === 0) {
//     console.log(ages[i]);
//   }
// }

// 2. Write A program that prints the biggest number in an array

// const NumberArray = [2, 3, 4, 5, 6, 7, 22];
// let biggestNum = NumberArray[0];
// for (let i = 1; i <= NumberArray.length; i++) {
//   if (biggestNum < NumberArray[i]) {
//     biggestNum = NumberArray[i];
//   }
// }
// console.log(biggestNum);

// 3. Write a program that prints all the male people's first name given a complex object

// const allUsers = [
//   {
//     firstName: "aditya",
//     gender: "male",
//   },
//   {
//     firstName: "abhijeet",
//     gender: "male",
//   },
//   {
//     firstName: "isha",
//     gender: "female",
//   },
// ];

// for (let i = 0; i < allUsers.length; i++) {
//   if (allUsers[i].gender == "male") {
//     console.log(allUsers[i].firstName);
//   }
// }

// 4. Write a program that reverses all the elements of an array

// const arrayRev = [1, 2, 3, 4, 5, 6];
// let reversedArray = [];

// for (i = arrayRev.length - 1; i >= 0; i--) {
//   reversedArray.push(arrayRev[i]);
// }
// console.log(reversedArray);

// Functions

// 1. Write a function that finds the sum of two numbers.

// function TwoSum() {
//   let a = 10;
//   let b = 20;
//   let c = a + b;
//   console.log(c);
// }
// TwoSum();

// function sum(a, b) {
//   return a + b;
// }
// let value = sum(10, 20);
// console.log(value);

// 2. Write another function that displays this result in a pretty format

// function calculateArithmetic(a, b, Finalfunction) {
//   ans = Finalfunction(a, b);
//   //   console.log(ans);
//   return ans;
// }

// function add(a, b) {
//   sum = a + b;
//   return sum;
// }

// function sub(a, b) {
//   sum = a - b;
//   return sum;
// }

// const value = calculateArithmetic(1, 4, add);
// console.log(value);
