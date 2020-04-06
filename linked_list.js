///////////////////////////////////////////////////////////
// Name: Tommy Cao
// Date: 4/6/20
// Description: Single Linked-List

class Node {
  constructor(data, next = null) {  
    this.data = data;
    this.next = next;
  }
}

// Create/Get/Remove dNodes From Double Linked List
class LinkedList {
  constructor() {
    this.head = null; // empty list
    this.size = 0;
  }

  // Insert head node
  insertFirst = data => {
    console.log("Insert at Head of list with data " + data);    
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node, ie. insert at the Null or tail
  insertLast = data => {
    let node = new Node(data);
    let current;

    console.log('Insert last in list with data ' + data); 
    // If empty, make head
    if (!this.head) {
      this.head = node;
    } 
    else {
      current = this.head;
      while (current.next) { // Traverse through the loop
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at index
  insertAt = (data, index) => {
    //  If index is out of range
    if (index > 0 && index > this.size) {
      console.log('Insert at index ' + index + ' is outside of range.');
      return;
    }

    console.log('Insert at index = ', + index + ' with data = ' + data)
    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;
    // Set current to first
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt = index => {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log('Node with index ' + index + ' found with data = ' + current.data);
        return null;
      }
      count++;
      current = current.next;
    }

    console.log('Node with index ' + index + ' was not found.');
    return null;
  }

  // Remove at index
  removeAt = index => {
    if (index > 0 && index >= this.size) {
      console.log('Remove node at index ' + index + ' is outside of range.');
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;
    console.log('Remove node at index ' + index);
    
    if (index === 0) { // Remove first
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
    this.size--;
  }

  // Clear list
  clearList = () => {
    this.head = null;
    this.size = 0;
    console.log('Clear list.');
  }

  // Print list data
  printListData = () => {
    let current = this.head;
    let index = 0;
    console.log("Print list...");
    while (current) {
      console.log(current.data, index++);
      current = current.next;
    }
  }

  // Find data in list
  findListData = findData => {
    let current = this.head;
    let count = 0;

    while (current) { // traverse the linked list
      if (current.data == findData) {
        console.log('Data ' + findData +  ' found at index ' + count);
        return null;
      }
      count++;
      current = current.next;
    }
    console.log('Data ' + findData + ' was not found.');
    return null;    
  }
 
  // Reverse list
  reverseList = () => {
    let current = this.head;
    let previous = null, next = null;

    console.log("Reverse list.");
    while (current) {
      next = current.next;
      current.next = previous
      previous = current;         
      current = next; // Goto the next link node.
    }  
    this.head = previous;  
  }

}

const ll = new LinkedList();

ll.insertFirst(100);
console.log(ll);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertFirst(500);
ll.insertFirst(600);
ll.insertFirst(700);
ll.insertFirst(800);
ll.insertLast(60);
console.log(ll);
ll.printListData();
ll.insertAt(550, 3);
ll.printListData();
ll.removeAt(3);
ll.printListData();
ll.removeAt(0); // Remove head node
ll.printListData();
ll.removeAt(7); // Remove node at null or last node
ll.printListData(); 
ll.removeAt(7); // Remove node just outside of maximum index
ll.printListData();
ll.findListData(400); // Data is in list
ll.findListData(1000); // Data not in list
ll.findListData(700); // Find last or null node data
ll.getAt(3);
ll.getAt(33); // Find node not in list
ll.getAt(6); // Find node data at null or last node
ll.getAt(7); // Find node data just outside of maximum index
console.log(ll);
ll.reverseList();
//ll.clearList();
ll.printListData(); // Print empty list
