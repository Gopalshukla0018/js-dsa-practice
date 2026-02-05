// for any pattern :
// 1- no of lines
// 2- in each lines what is happening

// basic
// let rows=2
// let cols=3
// fn(rows,cols)

// function fn(rows,cols) {
//      for(let i = 0;i<=rows;i++){
//         let output="";
//         for(let j =1;j<cols;j++){
//             output+="*"
//         }
//         console.log(output)
//      }
// }

// 2-number square

let rows = 5;
fn(rows);

function fn(rows) {
  for (let i = 0; i <= rows; i++) {
    let output = "";
    for (let j = 1; j <= rows; j++) {
      output += j;
    }
    console.log(output);
  }
}
