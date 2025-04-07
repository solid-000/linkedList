const List = function (data) {
  const Node = function (data = null) {
    this.name = data;
    this.next = null;
  };
  let head = new Node(data);

  function append(data) {
    let tmp = head;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    if (tmp.next === null) {
      tmp.next = new Node(data);
    }
  }

  function prepend(data) {
    let tmp = head;
    head = new Node(data);
    head.next = tmp;
  }

  function getSize() {
    let tmp = head;
    let i = 0;
    while (tmp) {
      i++;
      tmp = tmp.next;
    }
    console.log(`Size of List: ${i}`);
  }

  function printHead() {
    console.log(head);
  }

  function printTail() {
    let tmp = head;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    console.log(tmp);
  }

  function at(index) {
    let tmp = head;
    let i = 0;
    while (i < index) {
      if (tmp.next === null) {
        console.log(`List ends at index ${i}`);
        return;
      }
      tmp = tmp.next;
      i++;
    }
    console.log(tmp);
  }

  return { append, prepend, getSize, printHead, printTail, at };
};

const myList = new List(0);
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);

console.log(myList);
