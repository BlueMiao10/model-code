/*
*
 给定一个二叉树root和一个整数值 sum ，求该树有多少路径的的节点值之和等于 sum 。
1.该题路径定义不需要从根节点开始，也不需要在叶子节点结束，但是一定是从父亲节点往下到孩子节点
2.总节点数目为n
3.保证最后返回的路径个数在整形范围内(即路径个数小于231-1)
*
* */

// function FindPath(root, sum) {
//   const result = []
//
//   function preOrderTraversal(root, array) {
//     if (root) {
//       array.push(root)
//       preOrderTraversal(root.left, array)
//       preOrderTraversal(root.right, array)
//     }
//     return array
//   }
//
//   preOrderTraversal(root, []).forEach(item => {
//     FindPathNumber(item, sum, 0, result, [])
//   })
//
//   function FindPathNumber(root, sum, count, result, stack) {
//     stack.push(root.val)
//     count += root.val
//     if (count === sum) {
//       result.push(stack.slice(0))
//     }
//     if (root.left) {
//       FindPathNumber(root.left, sum, count, result, stack)
//     }
//     if (root.right) {
//       FindPathNumber(root.right, sum, count, result, stack)
//     }
//     stack.pop()
//   }
//
//   return result.length
// }

let count = 0
function FindPath( root ,  sum ) {
  if(!root)return count
  FindPathNumber(root,sum)
  FindPath(root.left,sum)
  FindPath(root.right,sum)
  return count
}
function FindPathNumber(node,sum){
  if(!node) return
  sum -= node.val
  if(sum === 0) count++
  FindPathNumber(node.left,sum)
  FindPathNumber(node.right,sum)
}