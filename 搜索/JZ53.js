function GetNumberOfK(data, k) {
  let count = 0
  let start = 0
  let end = data.length - 1
  while (start <= end) {                             
    let mid = (start + end) >>> 1
    if (data[mid] === k) {
      count++
      end = mid
    } else if (data[mid] > k) {
      end = mid - 1
    } else if (data[mid] < k) {
      start = mid + 1
    }
  }
  return count
}

console.log(GetNumberOfK([1, 2, 3, 3, 3, 3, 4, 5], 3));