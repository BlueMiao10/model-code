function merge(left, right) {
  let temp = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      temp.push(left.shift())
    } else {
      temp.push(right.shift())
    }
  }
  return temp.concat(left, right)
}

function mergeSort(input) {
  if (input.length === 1) {
    return input
  }
  let mid = Math.floor(input.length / 2)
  let left = input.slice(0, mid)
  let right = input.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function GetLeastNumbers_Solution(input, k) {
  if (input.length === 0) {
    return input
  } else if (input.length === 1) {
    if (k >= 1) {
      return input
    } else {
      return []
    }
  } else {
    const arr = mergeSort(input)
    return arr.slice(0, k)
  }
}

console.log(GetLeastNumbers_Solution(
  [4, 5, 1, 6, 2, 7, 3, 8], 4));