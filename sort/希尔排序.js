//const arr = [45, 65, 16, 15, 48, 56, 18, 47, 24, 35]

/*希尔排序:本质是一种插入排序，对数组进行了等间隔的分组处理，在每一组中做插入排序
*
*
*这里的时间复杂度是怎么样的呢？
*
* */

let arr = randomArr(10000, 100)
console.time('sectionSort')
shellSort(arr)
console.timeEnd('sectionSort')


function randomArr(arrLen = 100, maxValue = 1000) {
  let arr = []
  for (let i = 0; i < arrLen; i++) {
    arr[i] = Math.floor((maxValue + 1) * Math.random())
  }
  return arr
}

function shellSort(arr) {
  let gap = Math.floor(arr.length / 2)
  while (gap > 0) {
    let temp = null

    for (let i = 1; i < arr.length; i++) {
      let j = i;
      temp = arr[i]

      while (j > 0 && arr[j - 1] > temp) {
        arr[j] = arr[j - 1]
        j--
      }
      arr[j] = temp
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}


