function PalindromeNumber(num) {
  let origionalNum = num;
  let reversedNum = 0;

  while (num > 0) {
    let lastDigit = num % 10; // Extract last digit
    reversedNum = reversedNum * 10 + lastDigit; // Build reversed number
    num = Math.floor(num / 10); // Remove last digit
  }
  return origionalNum === reversedNum;
}

