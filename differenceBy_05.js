function differenceBy(array, values) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let found = false;

    for (let j = 0; j < values.length; j++) {
      if (Math.floor(array[i]) === Math.floor(values[j])) {
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(differenceBy([2.1, 1.2], [2.3, 3.4]));
