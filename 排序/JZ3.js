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

function mergeSort(numbers) {
  if (numbers.length <= 1) {
    return numbers
  }
  let mid = Math.floor(numbers.length / 2)
  let left = numbers.slice(0, mid)
  let right = numbers.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}


function duplicate(numbers) {
  if (numbers.length < 1) {
    return -1
  } else if (numbers.length === 1) {
    return numbers[0]
  } else {
    const arr = mergeSort(numbers)
    return arr.filter(item => arr.indexOf(item) !== arr.lastIndexOf(item))[0];
  }
}

console.log(duplicate([2, 3, 1, 0, 2, 5, 3]));