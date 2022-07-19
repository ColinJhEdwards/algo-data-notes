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
  for (let i = 0; i < a.length; i++) {
    let letter = a[i];
    // if letter exists, increment, otherwise set value to 1
    frequencyCounter1[letter]
      ? (frequencyCounter1[letter] += 1)
      : (frequencyCounter1[letter] = 1);
  }
  for (let i = 0; i < b.length; i++) {
    let letter = b[i];
    // cant find letter or letter is zero then its not an anagram return false
    if (!frequencyCounter1[letter]) {
      return false;
      //  we subtract 1 if a letter is found to account for multiple letters
    } else {
      frequencyCounter1[letter] -= 1;
    }
  }
  return true;
};

// write a function called sumZero which accepts a sorted array of integers. The funciton should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

const sumZero = (arr: Array<number>) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

const sumZero2 = (arr: Array<number>) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

// Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array.

const countUnique = (arr: Array<number>) => {
  if (arr.length === 0) return 0;
  let a = 0;
  for (let b = 1; b < arr.length; b++) {
    if (arr[a] !== arr[b]) {
      a++;
      arr[a] = arr[b];
    }
  }
  return a + 1;
};

countUnique([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]);

const maxSum = (arr: Array<number>, num: number) => {
  if (num > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

const maxSum2 = (arr: Array<number>, num: number) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    let temp = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

const search = (arr: Array<number>, val: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

const search2 = (arr: Array<number>, val: number) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    let currentElement = arr[middle];
    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

// Write a function called sameFrequency. given two positive intergers find out if the two numbers have the same frequency ofdigits.
// Ex. sameFrequency(182, 281) == true
const sameFrequency = (a: number, b: number) => {
  if (a.toString().length != b.toString().length) return false;
  let tracker = {};
  let tracker2 = {};
  for (let num of a.toString()) {
    tracker[num] = (tracker[num] || 0) + 1;
  }
  for (let num of b.toString()) {
    tracker2[num] = (tracker2[num] || 0) + 1;
  }
  for (let key in tracker) {
    if (tracker[key] != tracker2[key]) {
      return false;
    } else {
      return true;
    }
  }
};

// Example of a recursive function

const countdown = (num: number) => {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  num--;
  countdown(num);
};

// Another example of a recursive function

const sumRange = (num: number) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

// one more recursion function

const factorial = (num: number) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

// Given a list of numbers create a recursive function that stores all odd numbers in an array and return that array.

// const storeOdds = (arr: number[]) => {
//   let result = [];
//   function helper(input: number[]) {
//     if (input.length === 0) {
//       return;
//     }
//     if (input[0] % 2 !== 0) {
//       result.push(input[0]);
//     }
//     helper(input.slice(1));
//   }
//   helper(arr);

//   return result;
// };

// const collectOdds = (arr: number[]) => {
//   let newArr = [];
//   if (arr.length === 0) {
//     return newArr;
//   }
//   if (arr[0] % 2 !== 0) {
//     newArr.push(arr[0]);
//   }
//   newArr = newArr.concat(collectOdds(arr.slice(1)));
//   return newArr;
// };

const linearSearch = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
};

const binarySearch = (arr: number[], target: number) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== target && left <= right) {
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  if (arr[middle] == target) {
    return middle;
  } else {
    return -1;
  }
};

const naiveBubbleSort = (arr: number[]) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let tiny = i;
    for (let j = i + 1; arr.length; j++) {
      if (arr[tiny] > arr[j]) {
        tiny = j;
      }
    }
    if (i !== tiny) {
      let temp = arr[i];
      arr[i] = arr[tiny];
      arr[tiny] = temp;
    }
  }
};

const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

// Practice merging two arrays
const merge = (a: number[], b: number[]) => {
  const arr: number[] = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (b[j] > a[i]) {
      arr.push(a[i]);
      i++;
    } else {
      arr.push(b[j]);
      j++;
    }
  }
  while (i < a.length) {
    arr.push(a[i]);
    i++;
  }
  while (j < b.length) {
    arr.push(b[j]);
    j++;
  }
  return arr;
};

const mergeSort = (arr: number[]) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const pivot = (
  arr: number[],
  start: number = 0,
  end: number = arr.length + 1
) => {
  const swap = (array: number[], i: number, j: number) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  let pivot = arr[start];
  let swapInd = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapInd++;
      swap(arr, swapInd, i);
    }
  }
  swap(arr, start, swapInd);
  return swapInd;
};

const quickSort = (
  arr: number[],
  left: number = 0,
  right: number = arr.length - 1
) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

const getDigit = (num: number, i: number) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};
