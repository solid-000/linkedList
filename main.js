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

  function pop() {
    let tmp = head;
    while (true) {
      if (tmp.next.next === null) {
        tmp.next = null;
        return;
      }
      tmp = tmp.next;
    }
  }

  function contains(item) {
    let tmp = head;
    while (tmp !== null) {
      if (tmp.name === item) {
        console.log(`List contains ${item}.`);
        return;
      }
      tmp = tmp.next;
    }
    console.log(`Couldn't find ${item}.`);
  }

  function find(item) {
    let tmp = head;
    let i = 0;
    while (tmp !== null) {
      if (tmp.name === item) {
        console.log(`(${item}) found at index ${i}.`);
        return;
      }
      tmp = tmp.next;
      i++;
    }
    console.log(`Couldn't find (${item}).`);
  }

  function toString() {
    let tmp = head;
    let result = "";
    while (tmp !== null) {
      result = result + `(${tmp.name}) -> `;
      tmp = tmp.next;
    }
    result = result + "null";
    console.log(result);
  }

  function insertAt(value, index) {
    let tmp = head;
    let i = 0;
    if (index === 0) {
      this.prepend(value);
      return;
    }
    while (i < index - 1) {
      if (tmp.next === null) {
        this.append(value);
        console.log(
          `Item was added to the last place since index ${index} is not defined.`
        );
        return;
      }
      tmp = tmp.next;
      i++;
    }
    let tempNext = tmp.next;
    tmp.next = new Node(value);
    tmp.next.next = tempNext;
  }

  return {
    append,
    prepend,
    getSize,
    printHead,
    printTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
  };
};

const myList = new List(0);
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);

console.log(myList);
