/*
*
 输入一个长度为 n 的链表，设链表中的元素的值为 ai ，返回该链表中倒数第k个节点。
 如果该链表长度小于k，请返回一个长度为 0 的链表。
*
* */

function FindKthToTail( pHead ,  k ) {
  if(!pHead) return null
  function getHeadLength(pHead){
    let current = pHead
    let count = 0
    while(current.next){
      current = current.next
      count += 1
    }
    return count + 1
  }
  let length = getHeadLength(pHead)
  if(length < k) {
    return null
  }else{
    let interval = length - k
    while(interval-- > 0){
      pHead = pHead.next
    }
    return pHead
  }
}