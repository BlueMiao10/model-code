//三数之和为0
function threeSum(nums) {
  //定义一个空数组用来存放结果
  const result = [];
  //对数组进行排序，这里使用了原生api，本题的重点不在于排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // 跳过重复数字
    if (i && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        //这里很巧妙，使用了left++，返回的还是left，但自增1
        result.push([nums[i], nums[left++], nums[right--]]);
        // 跳过重复数字
        while (nums[left] === nums[left - 1]) {
          left++;
        }
        // 跳过重复数字
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));