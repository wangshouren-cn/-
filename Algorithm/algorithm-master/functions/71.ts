/* 

一些项目要占用一个会议室宣讲，会议室不能同时容纳两个项目 的宣讲。 给你每一个项目开始的时间和结束的时间(给你一个数 组，里面 是一个个具体的项目)，你来安排宣讲的日程，要求会 议室进行 的宣讲的场次最多。返回这个最多的宣讲场次。
*/
import PriorityQueue from '../utils/PriorityQueue'

class Talk {
  constructor(public s: number, public e: number) {}
}

function getMax(talks: Talk[]) {
  const q = new PriorityQueue<Talk>((a, b) => a.e < b.e, talks)
  let s = 0,
    r = 0
  while (!q.isEmpty()) {
    const t = q.poll()
    if (t.s >= s) {
      r += 1
      s = t.e
    }
  }
  return r
}

console.log(
  getMax([
    new Talk(1, 3),
    new Talk(3, 5),
    new Talk(2, 7),
    new Talk(1, 2),
    new Talk(3, 4),
    new Talk(5, 6),
    new Talk(7, 10),
  ])
)
