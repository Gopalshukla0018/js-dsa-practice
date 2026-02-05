// 1
// 12
// 123
// 1234
// 12345

function printNumberTriangle(n) {
  for (let i = 0; i <=n; i++) {
    let output = " ";
    for (let j = 1; j <= i; j++) {
      output += j;
    }
    console.log(output);
  }
}

printNumberTriangle(5);
