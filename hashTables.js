// const naiveHash = (string, arrLength) => {
//   let sum = 0;
//   for (let i = 0; i < string.length; i++) {
//     sum += string.charCodeAt(i) - 96;
//   }
//   return sum % arrLength;
// };

// const hash = (string, arrLength) => {
//   let sum = 0;
//   let prime = 31;
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     sum += string.charCodeAt(i) - 96 + prime;
//   }
//   return sum % arrLength;
// };

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  hash(key) {
    let sum = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      sum += string.charCodeAt(i) - 96 + prime;
    }
    return sum % this.keyMap.length;
  }
  set(key, value) {
    const index = this.hash(key);
    const array = this.keyMap;
    if (!array[index]) {
      array[index] = [];
    }
    array[index].push([key, value]);
  }
  get(key) {
    const index = this.hash(key);
    const array = this.keyMap;
    if (array[index]) {
      for (let i = 0; i < array[index].length; i++) {
        if (array[index][i][0] === key) return array[index][i][1];
      }
    }
    return undefined;
  }
}
