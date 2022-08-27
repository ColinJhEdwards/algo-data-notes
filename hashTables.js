const hash = (key, range) => {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i) - 96;
  }
  return total % range;
};
