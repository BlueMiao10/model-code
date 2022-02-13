function findNthDigit(n) {
  let count = 1
  let bottom = 0
  let top = 10
  while (n > (top - bottom) * count) {
    n -= (top - bottom) * count
    count += 1
    bottom = top;
    top = top * count
  }
  let num = (n / count) + bottom;
  let r = n % count;
  return num.toString()[r]
}

console.log(findNthDigit(19));