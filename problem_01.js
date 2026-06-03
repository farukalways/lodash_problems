// একটি array-এর উপাদানগুলোকে size অনুযায়ী গ্রুপে ভাগ করে একটি নতুন array তৈরি করে। যদি array-টিকে সমানভাবে ভাগ করা না যায়, তাহলে শেষ গ্রুপে বাকি থাকা উপাদানগুলো থাকবে।

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function chunk(arr, size) {
  let chunkedArr = [];

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result[result.length] = arr[i];

    if (result.length === size) {
      chunkedArr[chunkedArr.length] = result;
      result = [];
    }
  }

  if (result.length) {
    chunkedArr[chunkedArr.length] = result;
  }

  return chunkedArr;
}
// chunk(number, 2);
// console.log(chunk(number, 8));

// es6 versoin

function chunk(arr, size) {
  if (!Array.isArray(arr) || size <= 0) return [];

  const chunkedArr = [];

  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }

  return chunkedArr;
}

console.log(chunk(number, 5));
