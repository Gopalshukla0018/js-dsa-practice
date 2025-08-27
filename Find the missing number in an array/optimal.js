const arr = [1, 2, 4];
n = 4;

const maximumNumber = (arr, n) => {

    const s = (n*(n+1))/2;
    s2=0;
    for(let i=0;i<arr.length;i++){
        s2=s2+arr[i];
    }
    const missingNum=s-s2;
    return missingNum;
    


};
console.log(maximumNumber(arr, n));
