module.exports = function generateRandomArray(size, value) {
  return Array.from(
    { length: ~~(Math.random() * size + 1) },
    () => ~~(Math.random() * (value + 1))
  )
}
