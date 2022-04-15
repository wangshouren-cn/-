import PriorityQueue from '../utils/PriorityQueue'
/* 
输入： 参数1，正数数组costs 参数2，正数数组profits 参数3， 正数k 参数4，正数m
costs[i]表示i号项目的花费 profits[i]表示i号项目在扣除花 费之后还能挣到的钱(利润) k表示你不能并行、只能串行的最多 做k个项目 m表示你初始的资金 
说明：你每做完一个项目，马上获得的收益，可以支持你去做下 一个 项目。
输出： 你最后获得的最大钱数。
*/
class Node {
  constructor(public c: number, public p: number) {}
}
function getMaxMoney(costs: number[], profits: number[], k: number, m: number) {
  const nodes = []
  for (let i = 0; i < costs.length; i++) {
    nodes.push(new Node(costs[i], profits[i]))
  }
  const qC = new PriorityQueue<Node>((a, b) => a.c < b.c, nodes)
  const qP = new PriorityQueue<Node>((a, b) => a.p > b.p)
  while (k-- > 0) {
    while (!qC.isEmpty()&&m > qC.peek().c) {
      qP.add(qC.poll())
    }
    if (qP.isEmpty()) return m
    m += qP.poll().p
  }
  return m
}
console.log(getMaxMoney([1, 2, 3], [1, 2, 3], 1, 10))
