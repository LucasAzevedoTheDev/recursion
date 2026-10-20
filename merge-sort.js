function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(right[0]);
      right.shift();
    } else if (left[0] < right[0]) {
      result.push(left[0]);
      left.shift();
    } else if (left[0] === right[0]) {
      result.push(right[0]);
      result.push(left[0]);
      right.shift();
      left.shift();
    }
  }
  while (right.length > 0) {
    result.push(right[0]);
    right.shift();
  }
  while (left.length > 0) {
    result.push(left[0]);
    left.shift();
  }
  return result;
}
