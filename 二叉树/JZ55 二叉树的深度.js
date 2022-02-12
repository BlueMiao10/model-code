/*
*
* 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度，根节点的深度视为 1 。
*
* */

function TreeDepth(pRoot){
  if(pRoot === null){
    return 0
  }
  let dLeft = TreeDepth(pRoot.left)
  let dRight = TreeDepth(pRoot.right)
  return Math.max(dLeft,dRight) + 1
}
