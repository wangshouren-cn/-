//https://www.bilibili.com/video/av62621532?from=search&seid=18078115607164089076&spm_id_from=333.337.0.0
//不稳定nlgn
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  let _left = left, _right = right;//备份数据

  let index = right/* 从右往左操作数据 */, selectedEl = arr[left];

  while (left != right) {

    const el = arr[index];

    if (el >= selectedEl) {
      arr[right--] = el;
      index = right;
    } else {
      arr[left++] = el;
      index = left;
    }

  }

  arr[index] = selectedEl;

  quickSort(arr, _left, index);
  quickSort(arr, index + 1, _right);

}

for (let i = 0; i < 10; i++) {
  let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
  console.log("source:" + randomAry);
  quickSort(randomAry);
  console.log("sorted:" + randomAry);
}


