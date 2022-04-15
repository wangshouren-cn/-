module.exports = (size, value, ...stacks) => {
  for (let i = 0; i < size; i++) {
    const x = Math.floor(Math.random() * value + 1)
    stacks.forEach((s) => s.push(x))
  }
}
