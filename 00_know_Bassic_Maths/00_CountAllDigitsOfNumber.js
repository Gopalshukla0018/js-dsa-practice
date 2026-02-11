let n = 3547;

let arr = [];
let count = 0;

while (n > 0) {
  let lastDigit = n % 10;

  arr.push(lastDigit);
  n = n / 10;
  n = Math.round(n);
  count++;
}

console.log(count);
