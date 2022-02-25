"use strict";
exports.__esModule = true;
/*
认识并查集结构
*/
var Node_1 = require("../utils/Node");
var UnionFindSet = /** @class */ (function () {
    function UnionFindSet(nodes) {
        this.parentMap = new Map();
        this.sizeMap = new Map();
        for (var i = 0, node = void 0; (node = nodes[i++]);) {
            this.parentMap.set(node, node);
            this.sizeMap.set(node, 1);
        }
    }
    UnionFindSet.prototype.findHead = function (node) {
        var parent = this.parentMap.get(node);
        if (parent != node) {
            parent = this.findHead(parent);
        }
        this.parentMap.set(node, parent);
        return parent;
    };
    UnionFindSet.prototype.isSameSet = function (node1, node2) {
        return this.findHead(node1) === this.findHead(node2);
    };
    UnionFindSet.prototype.union = function (node1, node2) {
        var node1Parent = this.findHead(node1);
        var node2Parent = this.findHead(node2);
        if (node1Parent !== node2Parent) {
            var union1Size = this.sizeMap.get(node1Parent);
            var union2Size = this.sizeMap.get(node2Parent);
            if (union1Size <= union2Size) {
                this.parentMap.set(node1Parent, node2Parent);
                this.sizeMap.set(node2Parent, union1Size + union2Size);
            }
            else {
                this.parentMap.set(node2Parent, node1Parent);
                this.sizeMap.set(node1Parent, union1Size + union2Size);
            }
        }
    };
    return UnionFindSet;
}());
var node1 = new Node_1["default"](1);
var node2 = new Node_1["default"](2);
var node3 = new Node_1["default"](3);
var node4 = new Node_1["default"](4);
var node5 = new Node_1["default"](5);
var node6 = new Node_1["default"](6);
var node7 = new Node_1["default"](7);
var unionFindSet = new UnionFindSet([node1, node2, node3, node4, node5, node6, node7]);
console.log(unionFindSet.isSameSet(node1, node2));
unionFindSet.union(node1, node2);
console.log(unionFindSet.isSameSet(node1, node2));
