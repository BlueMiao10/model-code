/*
*
输入一棵节点数为 n 二叉树，判断该二叉树是否是平衡二叉树。
在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树
平衡二叉树（Balanced Binary Tree），具有以下性质：它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。
*
* */

function ISBalanced_Solution(pRoot) {
  function balanced(root) {
    if (!root) return 0
    let left = balanced(root.left)
    let right = balanced(root.right)
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1
    }
    return Math.max(left, right) + 1
  }
  return balanced(pRoot) !== -1
}