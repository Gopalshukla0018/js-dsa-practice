let n = 3547;

let count = 0;

while (n > 0) {
  n = n / 10;
  n = Math.round(n);
  count++;
}

console.log(count);
