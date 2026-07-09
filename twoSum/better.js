// two sum

let arr = [
  3, 12, 3, 45, 1, 23, 5, 56, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  19, 20,
];
let target = 10;
arr = arr.sort((a, b) => a - b);
function twoSum(arr) {
  let left = arr[0];
  let right = arr[arr.length - 1];
  while (left < right) {
    let sum = left + right;

    if (sum == target) {
      console.log(left, "+", right, "=", target);
      break;
    } else if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    }
  }
  return;
}

twoSum(arr);
