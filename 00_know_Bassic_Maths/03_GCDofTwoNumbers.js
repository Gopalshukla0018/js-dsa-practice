

function printGCD(x,y){
    let gcd=1;
  for(let i=Math.min(x,y);i>1;i--){
      
      if(x%i===0 && y%i==0){
          gcd=i;
            break;
      }
    

      
  }
        console.log(gcd)
}

printGCD(45,60) / 15
printGCD(101,10) // 1
printGCD(54,24) // 6
 