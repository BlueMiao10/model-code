function Find(target, array) {
  let bool = false
  array.forEach(item => {
    let start = 0
    let end = item.length - 1
    while (start <= end) {
      let mid = (end + start) >>> 1
      if (item[mid] === target) {
        bool = true
        return bool
      } else if (item[mid] > target) {
        end = mid - 1
      } else if (item[mid] < target) {
        start = mid + 1
      }
    }
  })
  return bool
}