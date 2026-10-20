function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const array = [0, 1];

  for (let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  return array;
}

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const previous = fibsRec(n - 1);
  const result = previous.at(-1) + previous.at(-2);
  previous.push(result);
  return previous;
}

