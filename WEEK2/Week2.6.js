// mapping
// given an array double inputs of initial array

const arr1 = [1, 2, 3, 4, 5];

const ans = arr1.map((i) => {
  return i * 2;
});

console.log(ans);
// filtering
// given an array give me only even values.

const arr2 = [1, 2, 3, 4, 5, 6];

const ans1 = arr2.filter((i) => {
  if (i % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(ans1);

// create a map function that takes 2 inputs
//an array ,and a transformation callback/fn .
// and transforms the array into a new one using the transformation fn .

const map = (arr1, fn) => {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(fn(arr1[i]));
  }
  return arr2;
};
