function isArrayEqual(arr1, arr2, compareFn) {
  if (
    !(Array.isArray(arr1) && Array.isArray(arr2)) ||
    arr1.length !== arr2.length
  )
    return false

  for (let i = 0; i < arr1.length; i++) {
    if (typeof compareFn === 'function') {
      if (!compareFn(arr1[i], arr2[i])) return false
    } else {
      if (arr1[i] !== arr2[i]) return false
    }
  }
  return true
}

module.exports = {
  isArrayEqual,
}
