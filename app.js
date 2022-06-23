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
