// Write a function that calculates the sum of all number from 1 up to n
var addUpTo = function (n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
var addUpToB = function (n) {
    return (n * (n + 1)) / 2;
};
var printAllPairs = function (n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
};
var charCount = function (str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (arr[char] > 0) {
            arr[char]++;
        }
        else {
            arr[char] = 1;
        }
    }
    return arr;
};
//  Write a function called same which accepts two arrays. The function should return true if every value in the array has its
//  coresponding value squared in the second array.
var same = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        var correctIndex = arr2.indexOf(arr1[i] * 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
};
var same2 = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    var frequencyCounter1 = {};
    var frequencyCounter2 = {};
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var val = arr1_1[_i];
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
        var val = arr2_1[_a];
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (var key in frequencyCounter1) {
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
var isAnagram = function (a, b) {
    if (a.length !== b.length)
        return false;
    return a.split("").sort().join("") === b.split("").sort().join("");
};
var isAnagram2 = function (a, b) {
    if (a.length !== b.length)
        return false;
    var frequencyCounter1 = {};
    for (var i = 0; i < a.length; i++) {
        var letter = a[i];
        // if letter exists, increment, otherwise set value to 1
        frequencyCounter1[letter]
            ? (frequencyCounter1[letter] += 1)
            : (frequencyCounter1[letter] = 1);
    }
    for (var i = 0; i < b.length; i++) {
        var letter = b[i];
        // cant find letter or letter is zero then its not an anagram return false
        if (!frequencyCounter1[letter]) {
            return false;
            //  we subtract 1 if a letter is found to account for multiple letters
        }
        else {
            frequencyCounter1[letter] -= 1;
        }
    }
    return true;
};
// write a function called sumZero which accepts a sorted array of integers. The funciton should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.
var sumZero = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
};
var sumZero2 = function (arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        else if (sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
};
// Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array.
var countUnique = function (arr) {
    if (arr.length === 0)
        return 0;
    var a = 0;
    for (var b = 1; b < arr.length; b++) {
        if (arr[a] !== arr[b]) {
            a++;
            arr[a] = arr[b];
        }
    }
    return a + 1;
};
countUnique([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]);
var maxSum = function (arr, num) {
    if (num > arr.length)
        return null;
    var max = -Infinity;
    for (var i = 0; i < arr.length - num + 1; i++) {
        var temp = 0;
        for (var j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
};
var maxSum2 = function (arr, num) {
    var maxSum = 0;
    var tempSum = 0;
    if (arr.length < num)
        return null;
    for (var i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (var i = num; i < arr.length; i++) {
        var temp = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
};
var search = function (arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
};
var search2 = function (arr, val) {
    var min = 0;
    var max = arr.length - 1;
    while (min <= max) {
        var middle = Math.floor((max + min) / 2);
        var currentElement = arr[middle];
        if (arr[middle] < val) {
            min = middle + 1;
        }
        else if (arr[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
};
// Write a function called sameFrequency. given two positive intergers find out if the two numbers have the same frequency ofdigits.
// Ex. sameFrequency(182, 281) == true
var sameFrequency = function (a, b) {
    if (a.toString().length != b.toString().length)
        return false;
    var tracker = {};
    var tracker2 = {};
    for (var _i = 0, _a = a.toString(); _i < _a.length; _i++) {
        var num = _a[_i];
        tracker[num] = (tracker[num] || 0) + 1;
    }
    for (var _b = 0, _c = b.toString(); _b < _c.length; _b++) {
        var num = _c[_b];
        tracker2[num] = (tracker2[num] || 0) + 1;
    }
    for (var key in tracker) {
        if (tracker[key] != tracker2[key]) {
            return false;
        }
        else {
            return true;
        }
    }
};
// Example of a recursive function
var countdown = function (num) {
    if (num <= 0) {
        console.log("All Done");
        return;
    }
    num--;
    countdown(num);
};
// Another example of a recursive function
var sumRange = function (num) {
    if (num === 1)
        return 1;
    return num + sumRange(num - 1);
};
// one more recursion function
var factorial = function (num) {
    if (num === 1)
        return 1;
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
var linearSearch = function (arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            return i;
    }
};
var binarySearch = function (arr, target) {
    var left = 0;
    var right = arr.length - 1;
    var middle = Math.floor((left + right) / 2);
    while (arr[middle] !== target && left <= right) {
        if (target < arr[middle]) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    if (arr[middle] == target) {
        return middle;
    }
    else {
        return -1;
    }
};
var naiveBubbleSort = function (arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
};
var selectionSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var tiny = i;
        for (var j = i + 1; arr.length; j++) {
            if (arr[tiny] > arr[j]) {
                tiny = j;
            }
        }
        if (i !== tiny) {
            var temp = arr[i];
            arr[i] = arr[tiny];
            arr[tiny] = temp;
        }
    }
};
var insertionSort = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
};
var merge = function (a, b) {
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] < b[i + 1]) {
            arr.push(a[i]);
            arr.push(b[i + 1]);
        }
        else {
            arr.push(b[i + 1]);
            arr.push(a[i]);
        }
    }
    return arr;
};
console.log(merge([1, 2, 3], [4, 5, 6]));
