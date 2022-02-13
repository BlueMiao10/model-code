/*给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *

也可以老老实实排序，然后取中间的
 *
 *
 *
 * */
const countSort = function (nums){
  let arr = nums.sort()
  return arr[Math.floor(arr.length/2)]
}

console.log(countSort([2, 2, 1, 1, 1, 2, 2]));


//取巧之计