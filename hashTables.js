const hash = (key, range) => {
  let total = 0;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    total += char.charCodeAt(0) - 96;
  }
  return (total * 31) % range;
};

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let weird_prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      total += char.charCodeAt(0) - 96;
    }
    return (total * weird_prime) % this.keyMap.length;
  }
}
