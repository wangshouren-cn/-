export default function swap(ary:any[], i:number, j:number) {
  let temp = ary[i]
  ary[i] = ary[j]
  ary[j] = temp
}
