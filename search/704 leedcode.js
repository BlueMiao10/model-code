/*给定一个n个元素"有序"的（升序）整型数组nums 和一个目标值target，写一个函数搜索nums中的 target，
 * 如果目标值存在返回下标，否则返回 -1。
 *
 *
 * */

function search(nums, target) {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    let mid = (end + start) >>> 1
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      start = mid + 1
    } else if (nums[mid] > target) {
      end = mid - 1
    }
  }
  return -1
}
