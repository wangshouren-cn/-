/* 
实现一种狗猫队列的结构，要求如下：
● 用户可以调用add方法将cat类或dog类的实例放入队列中；
● 用户可以调用pollAll方法，将队列中所有的实例按照进队列的先后顺序依次弹 出；
● 用户可以调用pollDog方法，将队列中dog类的实例按照进队列的先后顺序依次弹 出；
● 用户可以调用pollCat方法，将队列中cat类的实例按照进队列的先后顺序依次弹 出；
● 用户可以调用isEmpty方法，检查队列中是否还有dog或cat的实例；
● 用户可以调用isDogEmpty方法，检查队列中是否有dog类的实例；
● 用户可以调用isCatEmpty方法，检查队列中是否有cat类的实例。
【难度】
士　★☆☆☆
*/

const Queue = require('../utils/Queue')
class Pet {
  constructor(type, name) {
    this.type = type
    this.name = name
  }
}
class Dog extends Pet {
  constructor(name) {
    super('dog', name)
  }
}
class Cat extends Pet {
  constructor(name) {
    super('cat', name)
  }
}

class PetEnter {
  constructor(pet, count) {
    this.pet = pet
    this.count = count
  }
  getPet() {
    return this.pet
  }
  getCount() {
    return this.count
  }
}
class CatDogQueue {
  constructor() {
    this.dogQueue = new Queue()
    this.catQueue = new Queue()
    this.count = 0
  }
  add(pet) {
    this[`${pet.type}Queue`].add(new PetEnter(pet, this.count++))
  }
  pollAll() {
    const firstDogEnter = this.dogQueue.peek()
    const firstCatEnter = this.catQueue.peek()
    if (firstDogEnter || firstCatEnter) {
      if (
        !firstCatEnter ||
        (firstDogEnter && firstDogEnter.getCount() < firstCatEnter.getCount())
      ) {
        return this.dogQueue.poll().getPet()
      } else {
        return this.catQueue.poll().getPet()
      }
    }
  }
  pollDog() {
    const firstDogEnter = this.dogQueue.poll()
    return firstDogEnter && firstDogEnter.getPet()
  }
  pollCat() {
    const firstCatEnter = this.catQueue.poll()
    return firstCatEnter && firstCatEnter.getPet()
  }
  isEmpty() {
    return this.dogQueue.isEmpty() && this.catQueue.isEmpty()
  }
  isDogEmpty() {
    return this.dogQueue.isEmpty()
  }
  isCatEmpty() {
    return this.catQueue.isEmpty()
  }
}
/* 
const catDogQueue = new CatDogQueue()
catDogQueue.add(new Dog('1'))
catDogQueue.add(new Dog('2'))
catDogQueue.add(new Dog('3'))
catDogQueue.add(new Dog('4'))

catDogQueue.add(new Cat('1'))
catDogQueue.add(new Cat('2'))
catDogQueue.add(new Cat('3'))
catDogQueue.add(new Cat('4'))

console.log(catDogQueue.pollCat())
console.log(catDogQueue.pollCat())
console.log(catDogQueue.pollCat())
console.log(catDogQueue.pollCat())
console.log(catDogQueue.isCatEmpty())
console.log(catDogQueue.pollDog())
console.log(catDogQueue.pollDog())
console.log(catDogQueue.pollDog())
console.log(catDogQueue.pollDog())
console.log(catDogQueue.isDogEmpty())
console.log(catDogQueue.isEmpty())
 */