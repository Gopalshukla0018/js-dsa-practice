const arr = [1, 2, 4];
n = 4;

const maximumNumber = (arr, n) => {
  const hash = new Array(n+1).fill(0);
  console.log(hash);

  for (let i = 0; i <arr.length; i++) {
    hash[arr[i]]=1;
  }

  for (let j = 1; j <= n; j++) {
    if (hash[j] == 0) return j;
  }
};
console.log(maximumNumber(arr, n));
