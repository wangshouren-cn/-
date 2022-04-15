export default function swap(ary, i, j) {
    let temp = ary[i];
    ary[i] = ary[j];
    ary[j] = temp;
}
