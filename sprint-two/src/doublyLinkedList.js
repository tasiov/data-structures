var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
  };

  list.removeHead = function() {
    if (this.head === this.tail && this.head !== null) {
      var val = this.head.value;
      this.head = null;
      this.tail = null;
      return val;
    } else if (this.head !== null) {
      var temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.head.prev = null; 
      return temp.value;      
    }
    return null;
  };

  list.contains = function(target) {
    var pointer = this.head; 
    while (pointer != null) {
      if (pointer.value === target) {
        return true;
      } else {
        pointer = pointer.next;
      }
    }
    return false;
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if (this.head === null) {
      this.tail = newNode;  
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
    }
    this.head = newNode;
  };

  list.removeTail = function(target) {
    if (this.head === null) {
      return null;
    } else {
      var tailVal = this.tail.value;
      this.tail = this.tail.prev;
      this.tail.next = null;
      return tailVal;
    }
  };
  
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *  addToTail: O(1)
 *  removeHead: O(1)
 *  contains: O(n)
 */
