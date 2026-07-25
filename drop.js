// তোমাকে এমন একটি নতুন অ্যারে তৈরি করতে হবে, যেখানে শুরুর দিক থেকে n সংখ্যক উপাদান বাদ যাবে এবং বাকি উপাদানগুলো থাকবে।

/*
1. যদি n না দেওয়া হয়, তাহলে ধরে নিতে হবে n = 1।
2. মূল অ্যারেটি পরিবর্তন করা যাবে না।
3. নতুন একটি অ্যারে রিটার্ন করতে হবে।
4. যদি n অ্যারের দৈর্ঘ্যের সমান বা বড় হয়, তাহলে খালি অ্যারে রিটার্ন করতে হবে।
 */

const arr1 = [1, 2, 3, 45, 5];

function myDrop(arr, n = 1) {
  const arrLength = arr.length;
  const result = [];

  if (arrLength > n) {
    for (let i = 0; i < arrLength; i++) {
      if (i >= n) {
        result.push(arr[i]);
      }
    }
  } else {
    return result;
  }

  return result;
}

console.log(myDrop(arr1, 4));
