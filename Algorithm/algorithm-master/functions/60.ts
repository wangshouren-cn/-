/* 
设计RandomPool结构
【题目】 设计一种结构，在该结构中有如下三个功能： insert(key)：将某个key加入到该结构，做到不重复加入。 delete(key)：将原本在结构中的某个key移除。 getRandom()： 等概率随机返回结构中的任何一个key。
【要求】 Insert、delete和getRandom方法的时间复杂度都是 O(1)
*/

class RandomPool {
  size: number
  hashMap1: Map<string, number>
  hashMap2: Map<number, string>
  constructor() {
    this.size = 0
    this.hashMap1 = new Map()
    this.hashMap2 = new Map()
  }
  insert(key: string) {
    this.hashMap1.set(key, this.size)
    this.hashMap2.set(this.size++, key)
  }
  delete(key: string) {
    if (this.hashMap1.has(key)) {
      const deleteIndex = this.hashMap1.get(key)
      const lastIndex = --this.size
      if (lastIndex > deleteIndex) {
        const lastKey = this.hashMap2.get(lastIndex)
        this.hashMap2.set(deleteIndex, lastKey)
        this.hashMap1.set(lastKey, deleteIndex)
      } else {
        //删除最后一个
        this.hashMap1.delete(key)
        this.hashMap2.delete(deleteIndex)
      }
    }
  }
  getRandom() {
    const random = Math.floor(Math.random() * this.size)
    return this.hashMap2.get(random)
  }
}

const pool = new RandomPool()
pool.insert('a')
pool.insert('b')
pool.insert('c')
pool.delete('b')
console.log(pool.getRandom())
