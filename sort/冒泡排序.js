const arr = [45, 16, 15, 45, 56, 16, 57, 58, 59]

/*
* 冒泡排序:升序排列，想是小鱼吐泡泡一样，将大的数放上边，小的数放下边
* 先拿到第一项，依次与后边的项进行比较，如果当前项比后边大，则交换位置，一直到到后边的项都比我们拿到的第一项大
*
* 交换元素的方式
* [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
* const a = arr[i]; const b = arr[i + 1]; const c = null; c = a; a = b;b = c;
*
* 时间复杂度:最坏的情况就是倒序 O(n2)   最好情况是正序 O(n)    空间复杂度:交换变量是用到的中间变量所占的空间  O(1)
* */
//第一层循环是确定比较的轮数，由于最后一个数的那一轮 不需要比较，所以这里的最大长度是arr.length-1
//第二层循环，是拿到的某项依次与后边的每一项进行比较，由于不需要跟自己比较,也不需要跟已经比较好的值进行比较，所以最大比较的次数是arr.length-i
function bumbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    //边界的限制，不做多余的比较，如果不再发生交换说明已经排好顺序了
    let complete = true
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        complete = false
      }
    }
    if (complete) {
      break
    }
  }
  return arr
}

console.log(bumbleSort(arr))


