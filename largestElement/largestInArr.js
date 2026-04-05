let arr=[1,2,3,113,56,99]

function largest(arr){
    let largest=0;
    for(let i=0;i<arr.length;i++){
     if(arr[i]>largest){
         largest=arr[i]
     }
    }
    return largest;
}

console.log(largest(arr))
