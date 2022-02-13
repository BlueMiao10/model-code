/*
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 *
 * */


const findKthLargest = function(nums, k) {
  function quickSort (array,start,end){
    if(end - start < 1){
      return;
    }
    const target = array[start]
    let l = array[start]
    let r = array[end]

    while (l < r){
      while (l < r && array[r] >= target){
        r--
      }
      array[l] = array[r]
      while (l < r && array[l] < target){
        l++
      }
      array[r] = array[l]
    }
    array[l] = target
    quickSort(array,start,l-1)
    quickSort(array,l+1,end)
    return array;
  }
  const array = quickSort(nums,0,nums.length-1).reverse()

};