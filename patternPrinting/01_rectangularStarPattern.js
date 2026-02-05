// let row = 4;
// let col = 4;

// for (let i = 0; i < row; i++) {
//   let output = "";
//   for (let j = 0; j < col; j++) {
//     output += "* ";
//   }
//   console.log(output);
// }

function printRactangularStar(rows, col) {
  for (let i = 0; i < rows; i++) {
    output = "";
    for (let j = 0; j < col; j++) {
      output += "* ";
    }
    console.log(output);
  }
}

printRactangularStar(4, 5);
