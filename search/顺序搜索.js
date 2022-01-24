/*顺序搜索算法：遍历数组返回数组中给定值的位置，或者计算其在数组中出现的次数
*可以利用for循环实现
*
*
*  */
function sequentialSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (item === arr[i]) {
      return i
    }
  }
  return -1
}

let arr = [1, 2, 3, 3, 3, 3, 4, 5]

console.log(sequentialSearch(arr, 5));

