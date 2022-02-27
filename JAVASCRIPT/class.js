// class Dog{

//     say()=>console.log("123")
// }

// let obj = {};
// obj.__proto__ = Array.prototype
// console.log(obj instanceof Array);

// class Dog{
//    static str = "abc"
// }
// console.log(Dog.str);
class Dog {
  constructor(name) {
    this.name = name;
  }
  say = () => {
    console.log(this.name + "：汪");
  };
  eat() {
    console.log(`${this.name}:eat`);
  }
}
function Cat(name) {
  this.name = name;
}
Cat.prototype.eat = function () {
  console.log(`${this.name}:eat`);
};
Cat.prototype.say = () => {
  console.log(`${this.name}:eat`);
};
let dog1 = new Dog("dog1");
let dog2 = new Dog("dog2");
const say1 = dog1.say;
const say2 = dog2.say;
dog1.eat();
dog2.eat();
say1();
say2();
let cat1 = new Dog("cat1");
let cat2 = new Dog("cay2");
const cat1say = cat1.say;
const cat2say = cat2.say;
cat1.eat();
cat2.eat();
cat1say();
cat2say();

console.log(dog1, dog2, say1 === say2, dog1.eat === dog2.eat);
