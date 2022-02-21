function ReverseList(pHead) {
  let currentNode = null;
  let headNode = pHead;
  while (pHead && pHead.next) {
    currentNode = pHead.next;
    pHead.next = currentNode.next;
    currentNode.next = headNode;
    headNode = currentNode;
  }
  return headNode;
}

