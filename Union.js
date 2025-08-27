// unnion of two arrays
const Arr1 = [10,18,1,1,1,1, 2, 3, 4, 5];
const Arr2 = [4, 5, 6, 7,20,50, 8];

getunion = () => {
  let mergeArr = [...new Set([...Arr1,...Arr2])];

 console.log(mergeArr.sort((a,b)=>a-b));
};

getunion();