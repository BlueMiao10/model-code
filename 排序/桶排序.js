const bucketSort = function (array, size) {
  function swap(arr, i, j) {
    [arr[i],arr[j]] = [arr[j],arr[i]]
  }

  const max = Math.max(...array)
  const min = Math.min(...array)
  const buckets = []
  const bucketSize = Math.floor((max - min) / size) + 1

  for (let i = 0; i < array.length; i++) {
    const index = ~~(array[i] / bucketSize)
    console.log(index);
    !buckets[index] && (buckets[index] = [])
    buckets[index].push(array[i])
    let l = buckets[index].length
    while (l > 0) {
      buckets[index][l] < buckets[index][l - 1] && swap(buckets[index], l, l - 1)
      l--
    }
  }
  let wrapBuckets = []
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] && (wrapBuckets = wrapBuckets.concat(buckets[i]))
  }
 return wrapBuckets
}

const arr = [45, 65, 16, 15, 48, 56, 18, 47, 24, 35,458,485,1,54,54,5,4,7,15,15,45,4]
console.log(bucketSort(arr,10));