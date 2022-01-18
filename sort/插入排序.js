//const arr = [45, 16, 15, 45, 56, 16, 57, 58, 59]


/*插入排序:在第一轮循环中，将第二项作为基准，如果第一项大于第二项，将第二项的值插入到第一项前，并删除原先位置上的值
 *然后开始第二轮循环，第二轮循环以第三项作为基准，将前两项的值分别与此时的基准作比较，如果基准小于其中一项，则插入到之前，并删除原先位置上的值
 * 依次，直到最后一项
 *
 *
 * 时间复杂度:最坏的情况 O(n2)   最好情况 O(n)    空间复杂度:交换变量是用到的中间变量所占的空间  O(1)
 * */

//方法二,计算次数更少
let arr = randomArr(10000, 100)
console.time('sectionSort')
insertSort(arr)
console.timeEnd('sectionSort')


function randomArr( arrLen = 100, maxValue = 1000 ) {
  let arr = []
  for(let i = 0; i < arrLen; i++) {
    arr[i] = Math.floor((maxValue+1)*Math.random())
  }
  return arr
}

function insertSort(arr) {
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
  return arr
}


