function fn1(a, b, c) {
  return a + b + c;
}
function fn2(s) {
  return s.toLowerCase();
}
function fn3(s) {
  return `***${s}***`;
}
const compose =
  (...fns) =>
  (...args) =>
    fns.reduce((val, fn) => fn(val), fns.shift()(...args));

compose(fn1, fn2, fn3)("a", "b", "c"); //=> ***abc***
