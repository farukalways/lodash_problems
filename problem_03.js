// Creates a new array concatenating array with any additional arrays and/or values.
// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);

// console.log(other);
// => [1, 2, 3, [4]]

// console.log(array);
// => [1]

const arr1 = 3;

const arr2 = [2, [4], 67];
const arr3 = 5;

function concatArr(arr1, ...arr2) {
  let result = Array.isArray(arr1) ? [...arr1] : [arr1];

  for (let i = 0; i < arr2.length; i++) {
    if (Array.isArray(arr2[i])) {
      for (let j = 0; j < arr2[i].length; j++) {
        result.push(arr2[i][j]);
      }
    } else {
      result.push(arr2[i]);
    }
  }

  return result;
}
// concatArr(arr1, arr2, arr3);
console.log(concatArr(arr1, arr2, arr3));
