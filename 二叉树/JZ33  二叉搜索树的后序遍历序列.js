/*
*输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则返回 true ,否则返回 false 。假设输入的数组的任意两个数字都互不相同
* */
//数组的最后一个是根节点

function VerifySequenceOfBST(sequence) {
  if (sequence.length > 0) {
    const root = sequence[sequence.length - 1];
    for (let i = 0; i < sequence.length - 1; i++) {
      if (sequence[i] > root) {
        break;
      }
    }
    for (let j = i; j < sequence.length - 1; j++) {
      if (sequence[j] < root) {
        return false;
      }
    }
    let left = true;
    if (i > 0) {
      left = VerifySequenceOfBST(sequence.slice(0, i));
    }
    let right = true;
    if (i < sequence.length - 1) {
      right = VerifySequenceOfBST(sequence.slice(i, sequence.length - 1));
    }
    return left && right;
  }
}