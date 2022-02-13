/*

给定一个二叉树，返回该二叉树的之字形层序遍历，（第一层从左向右，下一层从右向左，一直这样交替）

*/

function print(pRoot) {
  console.log(pRoot)
  let result = []
  let stack = []
  if (!pRoot) return result
  stack.push(pRoot)
  let count = 1
  while (stack.length > 0) {
    let temp = []
    let len = stack.length
    //实现每一层的放入同一个数组中，这部分最为重要
    while (len) {
      let current = stack.shift()
      temp.push(current.value)
      if (current.left) {
        stack.push(current.left)
      }
      if (current.right) {
        stack.push(current.right)
      }
      len--
    }
    if (count % 2 === 0) {
      result.push(temp.reverse())
    } else {
      result.push(temp)
    }
    count++
  }
  return result
}