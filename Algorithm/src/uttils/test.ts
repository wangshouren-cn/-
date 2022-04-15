


const assert = (condition: boolean, str: string) => {
  if (!condition) {
    console.error(str)
    return false
  }

  return true
}

const testByTime = (time: number, cb: (assert: (condition: boolean, str: string) => boolean) => boolean) => {

  for (let pre = Date.now(); Date.now() <= pre + time;) {
    cb(assert);
  }

}


export {
  testByTime
}