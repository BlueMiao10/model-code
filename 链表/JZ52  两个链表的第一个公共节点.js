/*
*
* 输入两个无环的单向链表，找出它们的第一个公共结点，如果没有公共节点则返回空。
*（注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）
*
* */

function FindFirstCommonNode(pHead1, pHead2)
{
  if(!pHead1 || !pHead2) return null
  function getHeadLength(pHead){
    let current = pHead
    let count = 0
    while(current.next){
      count += 1
      current = current.next
    }
    return count+1
  }
  let length1 = getHeadLength(pHead1)
  let length2 = getHeadLength(pHead2)
  let long,short,interval
  if(length1 >= length2){
    long = pHead1
    short = pHead2
    interval = length1 - length2
  }else{
    long = pHead2
    short = pHead1
    interval = length2 - length1
  }
  while(interval--){
    long = long.next
  }
  while(long){
    if(long.val === short.val){
      return long
    }
    long = long.next
    short = short.next
  }
  return null
}