const lastIndexOf = function (array, value) {
  for (let i = 0; i <= array.length; i++) {
    if (array.length != 0) {
      return array.lastIndexOf(value);
    } else if (array.length == 0) {
      return -1;
    }
  }
};

console.log(lastIndexOf([0, 1, 4, 1, 2], 1));
console.log(lastIndexOf([0, 1, 4, 1, 2], 2));
console.log(lastIndexOf([0, 1, 4, 1, 2], 3));
console.log(lastIndexOf([5, 5, 5], 5));
console.log(lastIndexOf([0, 0, 3], 3));

// const lastIndexOf = function (arr, value) {
//   // let newarry = Array.from(arr);

//   for (let i = 0; i <= arr.length; i++) {

//       return arr.lastIndexOf(value);
//     }
//   }
//   if (arr.length === 0) {
//     return -1;
//   }
// };

// console.log(lastIndexOf([0, 1, 4, 1, 2], 1));
// console.log(lastIndexOf([0, 1, 4, 1, 2], 2));
// console.log(lastIndexOf([0, 1, 4, 1, 2], 3));
// console.log(lastIndexOf([5, 5, 5], 5));
// console.log(lastIndexOf([0, 0, 3], 3));
