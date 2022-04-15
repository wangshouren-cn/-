"use strict";
/*
何为前缀树？ 如何生成前缀树？
一个字符串类型的数组arr1，另一个字符串类型的数组arr2。
arr2中有哪些字符，是arr1中出现的？请打印
arr2中有哪些字符，是作为arr1中某个字符串前缀出现的？请 打印
arr2中有哪些字符，是作为arr1中某个字符串前缀出现的？请打印 arr2中出现次数最大的前缀。
*/
class TrieNode {
    constructor() {
        this.path = 0;
        this.end = 0;
        this.nexts = Array(26);
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    getIndex(c) {
        return c.charCodeAt(0) - 97;
    }
    insert(word) {
        if (!word)
            return;
        const stringArr = word.split('');
        let node = this.root;
        for (let i = 0, c; (c = stringArr[i++]);) {
            const index = this.getIndex(c);
            if (!node.nexts[index]) {
                node.nexts[index] = new TrieNode();
            }
            node = node.nexts[index];
            node.path++;
        }
        node.end++;
    }
    search(word) {
        if (!word)
            return 0;
        const stringArr = word.split('');
        let node = this.root;
        for (let i = 0, c; (c = stringArr[i++]);) {
            const index = this.getIndex(c);
            if (!node.nexts[index]) {
                return 0;
            }
            node = node.nexts[index];
        }
        return node.end;
    }
    delete(word) {
        if (this.search(word) > 0) {
            const stringArr = word.split('');
            let node = this.root;
            for (let i = 0, c; (c = stringArr[i++]);) {
                const index = this.getIndex(c);
                if (--node.nexts[index].path == 0) {
                    node.nexts[index] = null;
                    return;
                }
                node = node.nexts[index];
            }
            node.end--;
        }
    }
    prefixNumber(word) {
        const stringArr = word.split('');
        let node = this.root;
        for (let i = 0, c; (c = stringArr[i++]);) {
            const index = this.getIndex(c);
            if (!node.nexts[index]) {
                return 0;
            }
            node = node.nexts[index];
        }
        return node.path;
    }
}
let trie = new Trie();
console.log(trie.search('zuo'));
trie.insert('zuo');
console.log(trie.search('zuo'));
trie.delete('zuo');
console.log(trie.search('zuo'));
trie.insert('zuo');
trie.insert('zuo');
trie.delete('zuo');
console.log(trie.search('zuo'));
trie.delete('zuo');
console.log(trie.search('zuo'));
trie.insert('zuoa');
trie.insert('zuoac');
trie.insert('zuoab');
trie.insert('zuoad');
trie.delete('zuoa');
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
