// 1
// 22
// 333
// 4444
// 55555

function repeatedNumberTriangle(n) {
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
}

repeatedNumberTriangle(5);
