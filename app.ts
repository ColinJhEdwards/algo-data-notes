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

//  Write a function called same which accepts two arrays. The function should return true if every value in the array has its
//  coresponding value squared in the second array.
const same = (arr1: Array<number>, arr2: Array<number>) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] * 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

const same2 = (arr1: Array<number>, arr2: Array<number>) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(parseInt(key) * 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[parseInt(key) * 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
};

// Given two strings write a function to determine if the second string is an anagram of the first.
// (An anagram is a word, phrase, or name formed by rearranging the letters of another such as cinema formed from iceman.)

const isAnagram = (a: string, b: string) => {
  if (a.length !== b.length) return false;
  return a.split("").sort().join("") === b.split("").sort().join("");
};

const isAnagram2 = (a: string, b: string) => {
  if (a.length !== b.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of a) {
    frequencyCounter1[val] === val;
  }
  for (let val of b) {
    frequencyCounter2[val] === val;
  }
  console.log(frequencyCounter1, frequencyCounter2);
};

isAnagram2("cinema", "iceman");
