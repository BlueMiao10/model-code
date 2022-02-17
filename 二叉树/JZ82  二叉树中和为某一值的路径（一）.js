/*
给定一个二叉树root和一个值 sum ，判断是否有从根节点到叶子节点的节点值之和等于 sum 的路径。
1.该题路径定义为从树的根结点开始往下一直到叶子结点所经过的结点
2.叶子节点是指没有子节点的节点
3.路径只能从父节点到子节点，不能从子节点到父节点
4.总节点数目为n
* */

function hasPathSum(root, sum) {
  if (!root) return false
  const stack = []

  function countPath(root, count, sum, stack) {
    count += root.val
    if (root.left) {
      countPath(root.left, count, sum, stack)
    }
    if (root.right) {
      countPath(root.right, count, sum, stack)
    }
    if (!root.left && !root.right && count === sum) {
      stack.push('true')
    }
  }

  countPath(root, 0, sum, stack)
  if (stack.length) return true
}

