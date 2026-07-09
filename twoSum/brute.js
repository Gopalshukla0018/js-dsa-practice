const arr=[1,2,3,4,6,4]
let target=10;


for(let i=0;i<arr.length-1;i++){
    
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
 console.log(arr[i],"+",arr[j],"=",target)
        }
    }
}