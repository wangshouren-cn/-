/*
设计RandomPool结构
【题目】 设计一种结构，在该结构中有如下三个功能： insert(key)：将某个key加入到该结构，做到不重复加入。 delete(key)：将原本在结构中的某个key移除。 getRandom()： 等概率随机返回结构中的任何一个key。
【要求】 Insert、delete和getRandom方法的时间复杂度都是 O(1)
*/
var RandomPool = /** @class */ (function () {
    function RandomPool() {
        this.size = 0;
        this.hashMap1 = new Map();
        this.hashMap2 = new Map();
    }
    RandomPool.prototype.insert = function (key) {
        this.hashMap1.set(key, this.size);
        this.hashMap2.set(this.size++, key);
    };
    RandomPool.prototype["delete"] = function (key) {
        if (this.hashMap1.has(key)) {
            var deleteIndex = this.hashMap1.get(key);
            var lastIndex = --this.size;
            if (lastIndex > deleteIndex) {
                var lastKey = this.hashMap2.get(lastIndex);
                this.hashMap2.set(deleteIndex, lastKey);
                this.hashMap1.set(lastKey, deleteIndex);
            }
            else {
                //删除最后一个
                this.hashMap1["delete"](key);
                this.hashMap2["delete"](deleteIndex);
            }
        }
    };
    RandomPool.prototype.getRandom = function () {
        var random = Math.floor(Math.random() * this.size);
        return this.hashMap2.get(random);
    };
    return RandomPool;
}());
var pool = new RandomPool();
pool.insert('a');
pool.insert('b');
pool.insert('c');
pool["delete"]('b');
console.log(pool.getRandom());
