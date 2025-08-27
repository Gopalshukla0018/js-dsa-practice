/*Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.*/

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [4,2,5,3,6];
const m = 3;
const n = 5;

const mergeShortedArr = (nums, nums2, m, n) => {
  const temp = [];
  for (let i = 0; i < m; i++) temp.push(nums1[i]);
  for (let j = 0; j< n; j++) temp.push(nums2[j]);
    console.log(temp);// without sort
  temp.sort();
  console.log(temp); // sorted;
};

mergeShortedArr(nums1, nums2, m, n);
