/*
*
不分行从上往下打印出二叉树的每个节点，同层节点从左至右打印。例如输入{8,6,10,#,#,2,1}，
如以下图中的示例二叉树，则依次打印8,6,10,2,1(空节点不打印，跳过)，请你将打印的结果存放到一个数组里面，返回。
*
* */

//跟之子形打印一样的原理

function PrintFromTopToBottom(root) {
  const result = []
  const stack = []
  if (!root) return result
  stack.push(root)
  while (stack.length > 0) {
    let len = stack.length
    while (len) {
      let current = stack.shift()
      result.push(current.value)
      if (current.left) {
        stack.push(current.left)
      }
      if (current.right) {
        stack.push(current.left)
      }
      len--
    }
  }
  return result
}