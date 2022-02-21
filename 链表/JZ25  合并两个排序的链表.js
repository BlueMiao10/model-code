/*
*
* 输入两个递增的链表，单个链表的长度为n，合并这两个链表并使新链表中的节点仍然是递增排序的。
*
* */

function Merge(pHead1, pHead2) {
  if(!pHead1) {
    return pHead2
  }else if(!pHead2){
    return pHead1
  }

  let head
  if(pHead1.val <= pHead2.val){
    head = pHead1
    head.next = Merge(pHead1.next,pHead2)
  }else if(pHead1.val > pHead2.val){
    head = pHead2
    head .next = Merge(pHead1,pHead2.next)
  }
  return head
}


