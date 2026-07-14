let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function leftRotate(arr) {
  let temp = new Array(arr.length);

  for (let i = 1; i < arr.length; i++) {
    temp[i - 1] = arr[i];
  }

  temp[arr.length - 1] = arr[0];
  return temp;
}

const solution = leftRotate(arr);

console.log(solution);
