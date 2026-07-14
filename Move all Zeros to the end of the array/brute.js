const arr = [1, 0, 2, 3, 0, 4, 0, 1];

function moveZero(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      temp.push(arr[i]);
    }
  }

  return temp;
}

console.log(moveZero(arr));
