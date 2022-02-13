/*
*
给定一棵结点数为n 二叉搜索树，请找出其中的第 k 小的TreeNode结点值。
1.返回第k小的节点值即可
2.不能查找的情况，如二叉树为空，则返回-1，或者k大于n等等，也返回-1
3.保证n个节点的值不一样
*
* */

function KthNode(pRoot, k) {
  function preorderTraversal(pRoot, array = []) {
    if (pRoot) {
      preorderTraversal(pRoot.left, array)
      array.push(pRoot.value)
      preorderTraversal(pRoot.right, array)
    }
    return array
  }

  const arr = preorderTraversal(pRoot)
  if (k <= arr.length && k > 0) {
    return arr[k - 1]
  } else {
    return -1
  }
}