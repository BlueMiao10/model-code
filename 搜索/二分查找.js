/*二分查找：要求必须是排好顺序的数组
找出数组的中间值
如果中间值是待搜索的值，那么直接返回中间值的索引
如果待搜索的值比中间值小，则返回步骤1，将区间范围缩小，在中间值左边的子数组中继续搜索
如果待搜索的值比选中的值大，则返回步骤1，将区间范围缩小，在中间值右边的子数组中继续搜索
如果没有搜到，则返回-1
* */

function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1     //如果这里是arr.length就是半开半闭区间，当前是闭区间，因为arr.length取不到
  //上边是闭区间，这里就需要取到end,但如果是半开半闭，则取不到，为<
  while (start <= end) {
    let mid = (end + start) >>> 1  //无符号右移，相当于Math.floor((end+start)/2)  比如6 >>> 1 === 3  0b000110 位运算右移1位 0b000011 === 3
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] > target) {
      end = mid - 1
    } else if (arr[mid] < target) {
      start = mid + 1
    }
  }
  return -1
}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
