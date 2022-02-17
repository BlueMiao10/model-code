/*
*
* 输入一颗二叉树的根节点root和一个整数expectNumber，找出二叉树中结点值的和为expectNumber的所有路径。
1.该题路径定义为从树的根结点开始往下一直到叶子结点所经过的结点
2.叶子节点是指没有子节点的节点
3.路径只能从父节点到子节点，不能从子节点到父节点
4.总节点数目为n
*
* */

function FindPath(root, expectNumber) {
  const result = []

  function FindPathNumber(root, sum, expectNumber, stack) {
    stack.push(root.val)
    sum += root.val
    if (!root.left && !root.right && sum === expectNumber) {
      result.push(stack.slice(0))
    }
    if (root.left) {
      FindPathNumber(root.left, sum, expectNumber, stack)
    }
    if (root.right) {
      FindPathNumber(root.right, sum, expectNumber, stack)
    }
    stack.pop()
  }

  if (root) {
    FindPathNumber(root, 0, expectNumber, [])
  }
  return result
}