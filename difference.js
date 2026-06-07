const arr = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 5, 1];
const arr3 = [12, 14, 15, 11];
const arr4 = [132, 134, 135, 131];

function difference(arr1, ...miltiArr) {
  const filterArr = [];

  const newArr = miltiArr.flat();

  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr1[i] === newArr[j]) {
        found = true;
      }
    }

    if (!found) {
      filterArr.push(arr1[i]);
    }
  }

  return filterArr;
}

console.log(difference(arr, arr2, arr3, arr4));
