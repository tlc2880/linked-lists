///////////////////////////////////////////////////////////
// Name: Tommy Cao
// Date: 4/6/20
// Description: Double Linked-List

class dNode {
    constructor(data, next = null, prev = null) {  
      this.data = data;
      this.next = next;
      this.prev = prev;
    }
  }
  
  // Create/Get/Remove dNodes From Double Linked List
  class dLinkedList {
    constructor() {
      this.head = null; // empty list
      this.tail = null; // empty list
      this.size = 0;
    }
  
    // Insert head node
    insertHead = data => {
      let dnode = new dNode(data, this.head, null);
      let current;
  
      console.log('Insert Head-List with data ' + data);     
      // If empty, make head and tail        
      if (!this.head) {
        this.head = dnode;
        this.tail = dnode;
      }
      else { // Not empty 
        this.head = dnode;
  
        // traverse from the Tail to do insertion
        current = this.tail;  
        while (current.prev) { // Traverse through the Tail list
          current = current.prev;
        }
        current.prev = dnode; // add new tail node
      }
      this.size++;
    }
  
    // Insert tail node
    insertTail = data => {
      let dnode = new dNode(data, null ,this.tail);
      let current;
  
      console.log('Insert Tail-List with data ' + data);      
      // If empty, make head and tail        
      if (!this.tail) {
        this.head = dnode;
        this.tail = dnode;
      }
      else { // Not empty       
        this.tail = dnode;
  
        // traverse from the Head to do insertion
        current = this.head;  
        while (current.next) { // Traverse through the Head list
          current = current.next;
        }
        current.next = dnode; // add new head node
      }
      this.size++;
    }
   
    // Print tail list data
    printTailListData = () => {
      let current = this.tail;    
      let index = 0;
      console.log("Print Tail-List Data");
      while (current) {
        console.log(current.data, index++);
          current = current.prev;
      }
    }  
  
    // Print Head list data
    printHeadListData = () => {
      let current = this.head;
      let index = 0;
      console.log("Print Head-List Data");
      while (current) {
        console.log(current.data, index++);
        current = current.next;
      }
    }    
  
    // Remove at index from head
    removeAtHead = index => {
      if (index > 0 && index >= this.size) {
        console.log('Remove Head-List index ' + index + ' is outside of range.');
        return;
      }
  
      let current = this.head;
      let previous;
      let count = 0;
  
      console.log('Remove Head-List at index ' + index);
      // Remove first
      if (index === 0) {
        this.head = current.next;
        current.next.prev = null;
      } else {
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }
        if (index === this.size - 1) { // remove tail node of list
          this.tail = previous; // reassign a new tail
          previous.next = null;
        }
        else { // remove non-tail node of list
          current.next.prev = current.prev; // reassign prev pointer
          previous.next = current.next; // reassign next pointer
        }
      }
      this.size--;
    }
  
    // Insert new node in the Head-List at index with data
    insertHeadAt = (data, index) => {
      //  If index is out of range
      if (index > 0 && index >= this.size) {
        console.log('Insert Head-List index ' + index + ' is outside of range.');
        return;
      }
  
      console.log('Insert Head-List data = ' + data + ' and index = ', + index)
      // If first index
      if (index === 0) {
        this.insertHead(data);
        return;
      }
  
      const dnode = new dNode(data, null, null);
      let current, previous;
  
      // Set current to first
      current = this.head;
      let count = 0;
  
      while (count < index) {
        previous = current; // Node before index
        count++;
        current = current.next; // Node after index
      }
  
      dnode.next = current;
      previous.next = dnode;
      dnode.prev = previous;
      current.prev = dnode;
  
      this.size++;
    }
  }
  
  const dll = new dLinkedList();

  /////// Testing Head-List insert
  // dll.insertHead(100);
  // console.log(dll);
  // dll.insertHead(200);
  // console.log(dll);
  // dll.insertHead(300);
  // dll.insertHead(400);
  // dll.insertHead(500);
  // dll.insertHead(600);
  // dll.insertHead(700);
  // console.log(dll);
  // dll.printHeadListData();
  // dll.printTailListData();
  // dll.removeAtHead(3);
  // console.log(dll);
  // dll.printHeadListData();
  // dll.removeAtHead(5);
  // console.log(dll);
  // dll.printHeadListData();
  // dll.removeAtHead(0);
  // dll.printHeadListData();
  // dll.removeAtHead(20);
  // console.log(dll);
  // dll.printTailListData();
  // console.log(dll);
  // console.log(dll);
  /////////////////////////////////////////////////////////
  //////// Testing Tail-List insert
  // dll.insertTail(100);
  // console.log(dll);
  // dll.insertTail(90);
  // console.log(dll);
  // dll.insertTail(80);
  // dll.insertTail(70);
  // dll.insertTail(60);
  // dll.insertTail(50);
  // dll.insertTail(40);
  // dll.insertTail(30);
  // dll.printHeadListData();
  // dll.printTailListData();
  // dll.removeAtHead(3);
  // console.log(dll);
  // dll.printHeadListData();
  // dll.removeAtHead(6);
  // console.log(dll);
  // dll.printHeadListData();
  // dll.removeAtHead(0);
  // dll.printHeadListData();
  // dll.removeAtHead(20);
  // console.log(dll);
  // dll.printTailListData();
  //////////////////////////////////////////////////////////
  /////// Testing both Head and Tail Lists inserts and remove Head-List index
//   dll.insertTail(100);
//   console.log(dll);
//   dll.insertHead(200);
//   console.log(dll);
//   dll.insertTail(90);
//   dll.insertHead(300);
//   dll.insertTail(80);
//   dll.insertHead(400);
//   dll.insertTail(70);
//   dll.insertHead(500);
//   dll.printHeadListData();
//   dll.printTailListData();
//   dll.removeAtHead(3);
//   console.log(dll);
//   dll.printHeadListData();
//   dll.removeAtHead(6);
//   console.log(dll);
//   dll.printHeadListData();
//   dll.removeAtHead(6); // Just outside of index range. Output error.
//   dll.printHeadListData();
//   dll.removeAtHead(0);
//   dll.printHeadListData();
//   dll.removeAtHead(20); // Far outside of index range. Output error.
//   console.log(dll);
//   dll.printTailListData();
  ///////////////////////////////////////////////////////////////////
  /////// Testing insert Head-List with data and index
  dll.insertTail(100);
  console.log(dll);
  dll.insertHead(200);
  console.log(dll);
  dll.insertTail(90);
  dll.insertHead(300);
  dll.insertTail(80);
  dll.insertHead(400);
  dll.insertTail(70);
  dll.insertHead(500);
  dll.printHeadListData();
  //dll.printTailListData();
  dll.insertHeadAt(666, 0);
  dll.printHeadListData();
  dll.insertHeadAt(66, 8); // Insert at maximum index.
  dll.printHeadListData();  
  dll.insertHeadAt(450, 10); // Just outside of index range. Output error.
  dll.printHeadListData();
  dll.insertHeadAt(350, 5);
  dll.printHeadListData();
  dll.insertHeadAt(350, 55); // Far outside of index range. Output error.