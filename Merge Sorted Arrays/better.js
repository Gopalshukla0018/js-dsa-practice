/*Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.*/

const nums1 = [1, 2, 5, 0, 0, 0];
const nums2 = [2,5,6,8,9];
let m = 3;
let n = 5;


const mergeShortedArr = (nums1,m,nums2,n)=>{

    let i=0;
    let j=0;
   
    let temp =[];
    while(i<m && j<n){
        if(nums1[i]<nums2[j]){
            temp.push(nums1[i]);
            i++
        }
        else {
            temp.push(nums2[j]);
            j++
        }
    }
     
    while(i<m){
        temp.push(nums[i]);
        i++
    }
    while(j<n){
        temp.push(nums2[j]);
        j++;
    }
        
for(let k=0;k<m+n;k++){
    nums1[k]=temp[k];
}
   console.log(nums1);

}











mergeShortedArr(nums1, m, nums2, n);