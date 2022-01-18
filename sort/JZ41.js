function Insert(num) {
  return num
}

function GetMedian() {
  const array = Insert()
  let gap = Math.floor(array.length / 2)
  while (gap > 0) {
    let temp = null

    for (let i = 1; i < array.length; i++) {
      let j = i;
      temp = array[i]

      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1]
        j--
      }
      arr[j] = temp
    }
    gap = Math.floor(gap / 2)
  }
}