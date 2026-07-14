let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function leftRotate(arr) {
  const n = arr.length;
  const temp = arr[0];

  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = temp;

  return arr;
}

const solution = leftRotate(arr);

console.log(solution);
