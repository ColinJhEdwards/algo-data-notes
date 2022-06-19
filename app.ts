// Write a function that calculates the sum of all number from 1 up to n
const addUpTo = (n: number) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const addUpToB = (n: number) => {
  return (n * (n + 1)) / 2;
};

const printAllPairs = (n: number) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

const charCount = (str: string) => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (arr[char] > 0) {
      arr[char]++;
    } else {
      arr[char] = 1;
    }
  }
  return arr;
};

console.log(charCount("boo"));
