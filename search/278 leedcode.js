function solution(isBadVersion) {
  return function (n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
      arr.push(i)
    }

    let start = 0
    let end = arr.length - 1
    while (start <= end) {
      let mid = (start + end) >>> 1
      if (isBadVersion(arr[mid])) {
        if (isBadVersion([mid - 1])) {
          end = mid
        } else {
          return arr[mid]
        }
      }else{
        start = mid + 1
      }
    }
  }
}


