const arr = [45, 65, 16, 15, 48, 56, 18, 47, 24, 35, 25]

/*
* 先把数组从中间分为两部分，对两部分分别排序
*
*
* */

//测试
// let arr = randomArr(10000, 100)
// console.time('sectionSort')
// mergeSort(arr)
// console.timeEnd('sectionSort')
//
//
// function randomArr(arrLen = 100, maxValue = 1000) {
//   let arr = []
//   for (let i = 0; i < arrLen; i++) {
//     arr[i] = Math.floor((maxValue + 1) * Math.random())
//   }
//   return arr
// }

function merge(left, right) {
  let temp = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      temp.push(left.shift())
    } else {
      temp.push(right.shift())
    }
  }
  while (left.length) {
    temp.push(left.shift());
  }
  while (right.length) {
    temp.push(right.shift());
  }

  return temp
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left),mergeSort(right))
}

console.log(mergeSort(arr))

//低空间复杂度

// function mergeSort(array, left, right, temp) {
//   if (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     mergeSort(array, left, mid, temp)
//     mergeSort(array, mid + 1, right, temp)
//     merge(array, left, right, temp);
//   }
//   return array;
// }

// function merge(array, left, right, temp) {
//   const mid = Math.floor((left + right) / 2);
//   let leftIndex = left;
//   let rightIndex = mid + 1;
//   let tempIndex = 0;
//   while (leftIndex <= mid && rightIndex <= right) {
//     if (array[leftIndex] < array[rightIndex]) {
//       temp[tempIndex++] = array[leftIndex++]
//     } else {
//       temp[tempIndex++] = array[rightIndex++]
//     }
//   }
//   while (leftIndex <= mid) {
//     temp[tempIndex++] = array[leftIndex++]
//   }
//   while (rightIndex <= right) {
//     temp[tempIndex++] = array[rightIndex++]
//   }
//   tempIndex = 0;
//   for (let i = left; i <= right; i++) {
//     array[i] = temp[tempIndex++];
//   }
// }
