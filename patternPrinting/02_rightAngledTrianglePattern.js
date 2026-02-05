// let row=5;

// for(let i=0;i<row;i++){
//     output="";
//     for(let j=0;j<i;j++){
//         output += "* "
//     }
//     console.log(output)
// }



function printTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let output = "";

    for (let j = 1; j <= i; j++) {
      output += "* ";
    }

    console.log(output);
  }
}

// input
printTriangle(5);
