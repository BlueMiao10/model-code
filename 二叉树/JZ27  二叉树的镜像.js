/*
 *
操作给定的二叉树，将其变换为源二叉树的镜像。
数据范围：二叉树的节点数 0 <= n <=1000， 二叉树每个节点的值0≤val≤1000
 *
 */

function Mirror(pRoot) {
  if (pRoot == null || pRoot.left == null && pRoot.right == null) return pRoot;
  else {
    [pRoot.left, pRoot.right] = [pRoot.right, pRoot.left];
  }
  Mirror(pRoot.left);
  Mirror(pRoot.right);

  return pRoot;
}