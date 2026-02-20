// Example 1:
// Input:N = 153
// Output:True
// Explanation: 1^3+5^3+3^3 = 1 + 125 + 27 = 153

// Example 2:
// Input:N = 371
// Output: True
// Explanation: 3^3+7^3+1^3 = 27 + 343 + 1 = 371

function armStrong(n) {
  let origionalNum = n;
  let sum = 0;

  // Step 1: count digits
  let digits = n.toString().length;

  while (n > 0) {
    let ld = n % 10;
    sum = sum + ld ** digits;
    n = Math.floor(n / 10);
  }

  return origionalNum === sum ? 1 : -1;
}

console.log(armStrong(371)); // 1
console.log(armStrong(1634)); // 1
console.log(armStrong(123)); // -1
