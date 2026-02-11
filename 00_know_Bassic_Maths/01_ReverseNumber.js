// Input: N = 12345
// Output:54321
// Explanation: The reverse of 12345 is 54321.

// Input: N = 7789
// Output: 9877
// Explanation: The reverse of number 7789 is 9877.

function reverseNumber(N) {
  let reversed = 0;

  while (N > 0) {
    let digit = N % 10; // Extract last digit
    reversed = reversed * 10 + digit; // Build reversed number
    N = Math.floor(N / 10); // Remove last digit
  }

  return reversed;
}

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(7789)); // 9877
