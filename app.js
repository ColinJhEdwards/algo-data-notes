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
        frequencyCounter1[letter]
            ? (frequencyCounter1[letter] += 1)
            : (frequencyCounter1[letter] = 1);
    }
    for (var i = 0; i < b.length; i++) {
        var letter = b[i];
        if (!frequencyCounter1[letter])
            return false;
    }
    return true;
};
