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
