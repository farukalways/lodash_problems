const values = [
  true,
  1,
  false,
  0,
  -0,
  56,
  0n,
  "",
  null,
  "hello",
  undefined,
  23,
  NaN,
  [],
  {},
];

function truthyValues(arr) {
  const result = [];

  for (let v of arr) {
    if (v) {
      result.push(v);
    }
  }

  return result;
}

// console.log(truthyValues(values));

// ES6

function truthyValuesReturn(arr) {
  return arr.filter(Boolean);
}

// console.log(truthyValuesReturn(values));
