//const arr = [5, 2, 9, 6, 4, 5, 7]

/*快速排序:通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。
*
* 实现步骤：
*   选择一个基准元素target,一般是选择第一个数
*   将比target小的移到左边，比target大的移到右边
*   分别对左右两侧再进行以上排序
*
* 时间复杂度：平均O(nlogn)，最坏O(n2)，实际上大多数情况下小于O(nlogn）
* 空间复杂度:O(logn)（递归调用消耗）
* */

let arr = randomArr(10000, 100)
console.time('sectionSort')
quickSort(arr)
console.timeEnd('sectionSort')


function randomArr( arrLen = 100, maxValue = 1000 ) {
  let arr = []
  for(let i = 0; i < arrLen; i++) {
    arr[i] = Math.floor((maxValue+1)*Math.random())
  }
  return arr
}

function quickSort(array, start, end) {
  //说明数组内的元素个数小于等于1，那么不需要排序直接返回
  if (end - start < 1) {
    return;
  }
  //基准元素为第一个数
  const target = array[start];
  //两个索引，一个是从最左边开始，一个是从最右边开始
  //这里可不可以直接是0,array.length-1呢？
  let l = start;
  let r = end;

  //只要末尾大于开始，就执行以下循环
  while (l < r) {
    //从右边开始，值如果大与等于基准，r就减一即里边的一个与基准比较。如果比基准小，就把自己的值赋给当前l所在的位置
    while (l < r && array[r] >= target) {
      r--;
    }
    array[l] = array[r];
    //从左边开始，如果左边的值小于基准，l就加一，即里边的一个与基准比较。如果比基准大，就把自己的值赋给当前r所在的位置
    while (l < r && array[l] < target) {
      l++;
    }
    array[r] = array[l];
  }
  //最后，把基准值赋给当前l所在的位置，因为本来l所代表的就是起始值
  array[l] = target;

  //把左右两边再按以上进行排序
  quickSort(array, start, l - 1);
  quickSort(array, l + 1, end);
  return array
}

