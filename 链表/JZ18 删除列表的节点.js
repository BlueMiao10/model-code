function deleteNode(head, val) {
  function preNode(val, head) {
    let curNode = head
    while (!(curNode === null) && curNode.next.val !== val) {
      curNode = curNode.next
    }
    return curNode
  }

  const previousNode = preNode(head, val)
  if (!(previousNode.next === null)) {
    previousNode.next = previousNode.next.next
  }
  return head
}