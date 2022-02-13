/*
*
输入两棵二叉树A，B，判断B是不是A的子结构。（我们约定空树不是任意一个树的子结构）
假如给定A为{8,8,7,9,2,#,#,#,#,4,7}，B为{8,9,2}，2个树的结构如下，可以看出B是A的子结构
*
* */

function HasSubtree(pRoot1, pRoot2) {
  let result = false;
  if (pRoot1 && pRoot2) {
    if (pRoot1.value === pRoot2.value) {
      result = compare(pRoot1, pRoot2);
    }
    if (!result) {
      result = HasSubtree(pRoot1.right, pRoot2);
    }
    if (!result) {
      result = HasSubtree(pRoot1.left, pRoot2);
    }
  }
  return result;
}

function compare(pRoot1, pRoot2) {
  if (pRoot2 === null) {
    return true;
  }
  if (pRoot1 === null) {
    return false;
  }
  if (pRoot1.value !== pRoot2.value) {
    return false;
  }
  return compare(pRoot1.right, pRoot2.right) && compare(pRoot1.left, pRoot2.left);
}