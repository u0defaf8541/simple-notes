// quick notes in code

const sum = (xs) => xs.reduce((a, b) => a + b, 0);

function debounce(fn, ms) {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), ms);
  };
}

console.log(uniq(["a", "a", "b"]));
