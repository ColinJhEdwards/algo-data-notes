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
