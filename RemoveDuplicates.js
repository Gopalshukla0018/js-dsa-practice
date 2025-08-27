// let arr = [1, 1,1,2,3,3,4,5];
// function removeDuplicates(arr) {
//   // bruteforce ractine
//   //   let result = [];
//   //   for(let i=0;i<arr.length;i++){
//   //     if(!result.includes(arr[i])){
//   //         result.push(arr[i]);
//   //     }
//   //   }
//   //     return result;
//   // }

//   // better solution

//   let x = 0;
//   for (let i = 1; i <= arr.length; i++) {
//     if (arr[i] !==arr[x]) {
//       x = x + 1;
//       arr[x] = arr[i];
//     }
//   }
//   return x;
// }

// console.log(removeDuplicates(arr));



var removeDuplicates = function(nums) {
  let x = 0;
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i]!==nums[x]) {
      x=x+1;
      nums[x]=nums[i]
    }
  }
  return x; 
};


let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));