const arr=[1,2,4];
n=4;  

const maximumNumber=(arr,n)=>{

   for(let i=1;i<=n;i++){
    found=false;
    for(let j=0;j<arr.length;j++){
      if(arr[j]==i) found=true;
      
    }
    if(!found) return i;
   }

};
console.log((maximumNumber(arr,n)));

