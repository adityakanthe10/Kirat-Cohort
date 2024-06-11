// Loops,functions and callbacks in JS

// function findSum(n) {
//   let ans = 0;
//   for (let i = 1; i < n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

// let ans = findSum(100);
// console.log(ans);

// let ans2 = findSum(1000);
// console.log(ans2);

// function square(n) {
//   return n * n;
// }

// function cube(n) {
//   return n * n * n;
// }

// function sumOfSquares(a, b) {
//   const val1 = square(a);
//   const val2 = square(b);
//   return val1 + val2;
// }

// function sumOfCube(a, b) {
//   const val1 = cube(a);
//   const val2 = cube(b);
//   return val1 + val2;
// }

// const answer = sumOfCube(2, 2);
// console.log(ans);

// // DRY

function square(a) {
  return a * a;
}

function sumOfSomething(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}

const value2 = sumOfSomething(1, 2, square);
console.log(value2);
