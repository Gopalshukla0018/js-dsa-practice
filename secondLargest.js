

let arr=[1,2,3,4,5,100,98]
 
 let largest=arr[0];
 for(let i=0;i<arr.length;i++){
     if(arr[i]>largest){
         largest=arr[i];
     }
 }

let slargest=-1;
for(let i=0;i<arr.length;i++){
    if(arr[i]>slargest && arr[i]<largest){
        slargest=arr[i];
    }
}


console.log(largest);
console.log(slargest);