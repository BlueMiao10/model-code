/*
* 给定一个包含红色、白色和蓝色、共n 个元素的数组nums，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 0、1 和 2 分别表示红色、白色和蓝色。

必须在不使用库的sort函数的情况下解决这个问题。

*
* 快排不是最优选，可以想一下双指针怎么实现一趟排序
*
* */
let sortColors = function(nums){
  function quickSort(nums,start,end){
    if((end - start)<1){
      return
    }
    let l = start
    let r = end
    let target = nums[start]
    while (l<r){
      while(l<r && nums[r]>=target){
        r--
      }
      nums[l] = nums[r]
      while(l<r && nums[l]<target){
        l++
      }
      nums[r] = nums[l]
    }
    nums[l] = target
    quickSort(nums,start,l-1)
    quickSort(nums,l+1,end)
    return nums
  }
  let start = 0
  let end = nums.length -1
  quickSort(nums,start,end)
}