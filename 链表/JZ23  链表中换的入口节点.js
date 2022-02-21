/*
*
* 给一个长度为n链表，若其中包含环，请找出该链表的环的入口结点，否则，返回null。
*
* */


function EntryNodeOfLoop(pHead)
{
  if(!pHead || !pHead.next) return null
  let p1 = pHead.next
  let p2 = pHead.next.next
  while(p1 !== p2){
    if(p2===null || p2.next===null) return null
    p1 = p1.next
    p2 = p2.next.next
  }
  let temp = p1
  let count = 1
  p1 = p1.next
  while(temp !== p1){
    p1 = p1.next
    count++
  }
  p1 = p2 = pHead;
  while (count-- > 0) {
    p2 = p2.next;
  }
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}

