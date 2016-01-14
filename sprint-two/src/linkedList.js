var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
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
      return temp.value;      
    }
    return null;
  };

  list.contains = function(target) {
    var pointer = this.head; 
    while (pointer !== null) {
      if (pointer.value === target) {
        return true;
      } else {
        pointer = pointer.next;
      }
    }
    return false;
  };
  
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
