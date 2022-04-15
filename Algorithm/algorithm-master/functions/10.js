/*
堆排序
知识点：完全二叉树、大根堆
堆结构非常重要
1，堆结构的heapInsert与heapify
2，堆结构的增大和减少
3，如果只是建立堆的过程，时间复杂度为O(N) 4，优先级队列结构，就是堆结构
*/
import swap from './../utils/swap';
function heapSort(arr) {
    if (!arr || arr.length < 2)
        return;
    let heapSize = 0;
    for (; heapSize < arr.length; heapSize++) {
        heapInsert(arr, heapSize);
    }
    for (--heapSize; heapSize > 0; heapSize--) {
        swap(arr, heapSize, 0);
        heapify(arr, 0, heapSize - 1);
    }
    return arr;
}
function heapInsert(arr, heapSize) {
    if (heapSize < 1)
        return;
    let father = Math.floor((heapSize - 1) / 2);
    while (arr[father] < arr[heapSize]) {
        swap(arr, father, heapSize);
        heapSize = father;
        father = Math.floor((heapSize - 1) / 2);
    }
}
function heapify(arr, l, heapSize) {
    let left = 2 * l + 1;
    while (left <= heapSize) {
        let largest = left + 1 <= heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
        largest = arr[l] > arr[largest] ? l : largest;
        if (largest === l)
            return;
        swap(arr, largest, l);
        l = largest;
        left = 2 * l + 1;
    }
}
console.log(heapSort([3, 5, 6, 8, 1, 5, 2, 5, 4, 63]));
