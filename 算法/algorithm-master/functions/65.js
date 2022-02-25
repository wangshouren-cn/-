/*
何为前缀树？ 如何生成前缀树？
一个字符串类型的数组arr1，另一个字符串类型的数组arr2。
arr2中有哪些字符，是arr1中出现的？请打印
arr2中有哪些字符，是作为arr1中某个字符串前缀出现的？请 打印
arr2中有哪些字符，是作为arr1中某个字符串前缀出现的？请打印 arr2中出现次数最大的前缀。
*/
var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.path = 0;
        this.end = 0;
        this.nexts = Array(26);
    }
    return TrieNode;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TrieNode();
    }
    Trie.prototype.getIndex = function (c) {
        return c.charCodeAt(0) - 97;
    };
    Trie.prototype.insert = function (word) {
        if (!word)
            return;
        var stringArr = word.split('');
        var node = this.root;
        for (var i = 0, c = void 0; (c = stringArr[i++]);) {
            var index = this.getIndex(c);
            if (!node.nexts[index]) {
                node.nexts[index] = new TrieNode();
            }
            node = node.nexts[index];
            node.path++;
        }
        node.end++;
    };
    Trie.prototype.search = function (word) {
        if (!word)
            return 0;
        var stringArr = word.split('');
        var node = this.root;
        for (var i = 0, c = void 0; (c = stringArr[i++]);) {
            var index = this.getIndex(c);
            if (!node.nexts[index]) {
                return 0;
            }
            node = node.nexts[index];
        }
        return node.end;
    };
    Trie.prototype["delete"] = function (word) {
        console.log('----', this.search(word));
        if (this.search(word) > 0) {
            var stringArr = word.split('');
            var node = this.root;
            for (var i = 0, c = void 0; (c = stringArr[i++]);) {
                var index = this.getIndex(c);
                if (--node.nexts[index].path == 0) {
                    node.nexts[index] = null;
                    return;
                }
                node = node.nexts[index];
            }
            node.end--;
        }
    };
    Trie.prototype.prefixNumber = function (word) {
        var stringArr = word.split('');
        var node = this.root;
        for (var i = 0, c = void 0; (c = stringArr[i++]);) {
            var index = this.getIndex(c);
            if (!node.nexts[index]) {
                return 0;
            }
            node = node.nexts[index];
        }
        return node.path;
    };
    return Trie;
}());
var trie = new Trie();
console.log(trie.search('zuo'));
trie.insert('zuo');
console.log(trie.search('zuo'));
trie["delete"]('zuo');
console.log(trie.search('zuo'));
trie.insert('zuo');
trie.insert('zuo');
trie["delete"]('zuo');
console.log(trie.search('zuo'));
trie["delete"]('zuo');
console.log(trie.search('zuo'));
trie.insert('zuoa');
trie.insert('zuoac');
trie.insert('zuoab');
trie.insert('zuoad');
trie["delete"]('zuoa');
console.log(trie.search('zuoa'));
console.log(trie.prefixNumber('zuo'));
/*
0
1
0
1
0
0
3
*/
