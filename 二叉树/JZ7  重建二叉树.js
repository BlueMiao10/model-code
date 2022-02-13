/*
*
给定节点数为 n 的二叉树的前序遍历和中序遍历结果，请重建出该二叉树并返回它的头结点。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建出如下图所示。
*
* */

function reConstructBinaryTree(pre, vin) {
  if (pre.length === 0) {
    return null;
  }
  if (pre.length === 1) {
    return new TreeNode(pre[0]);
  }

  let value = pre[0]
  let index = vin.indexOf(value)
  let vinL = vin.slice(0, index)
  let vinR = vin.slice(index + 1)
  let preL = pre.slice(1, index+1)
  let preR = pre.slice(index + 1)

  let node = new TreeNode(value)
  node.left = reConstructBinaryTree(preL, vinL)
  node.right = reConstructBinaryTree(preR, vinR)
  return node
}