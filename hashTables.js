const hash = (key, range) => {
  let total = 0;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    total += char.charCodeAt(0) - 96;
  }
  return (total * 31) % range;
};
