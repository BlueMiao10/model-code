/*
* 回溯算法实现字符串的排列
*
* 记录一个字符（temp）,存储当前需要进入排列的字符
* 记录一个字符串（current）,记录当前已经排列好的字符
* 记录一个队列（queue），存储还未被排列的字符
*
*
* 每次排列将temp添加到current
* 如果queue为空，排列完成，将当前排列好的字符（current）加入到结果数组（result）中返回
* 如果queue不为空，递归排列未排列的字符
* 每次递归完成，将当前递归的字符加回队列
* */


function Permutation(str) {
  const result = []
  if (str) {
    const queue = str.split('')
    PermutationCore(queue, result)
  }

  result.sort()
  return [...new Set(result)]

  function PermutationCore(queue, result, temp = '', current = '') {
    current += temp
    if (queue.length === 0) {
      result.push(current)
      return result
    }

    for (let i = 0; i < queue.length; i++) {
      temp = queue.shift()
      PermutationCore(queue, result, temp, current)
      queue.push(temp)
    }
  }
}

console.log(Permutation(''));