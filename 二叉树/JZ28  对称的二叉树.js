/*
*
* 给定一棵二叉树，判断其是否是自身的镜像（即：是否对称）
*
* */

function isSymmetrical(pRoot) {
//     如果为空树 返回true
    if (pRoot === null) {
      return true;
    }
    return judge(pRoot.left, pRoot.right);
  }

  function judge(left, right) {
//     两个子树都为空
    if (left === null && right === null) {
      return true;
    }
//     两个子树其中有一个为空
    if (left === null || right === null) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }
//     递归判断镜像树是否与原树相同
    return judge(left.left, right.right) && judge(left.right, right.left);
}