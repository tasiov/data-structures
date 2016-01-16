var BinarySearchTree = function(value) {
  var newBTree = Object.create(bTreeMethods);
  newBTree.value = value;
 
  var left;
  var right;

  return newBTree;
};

var bTreeMethods = {};

bTreeMethods.insert = function(value) {
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  } else {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  }
};

bTreeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } 
  if (target > this.value && this.right) {
    return this.right.contains(target);
  } else if (target < this.value && this.left) {
    return this.left.contains(target);
  } else {
    return false;
  }
};

bTreeMethods.depthFirstLog = function(func) {
  func(this.value);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right 
    .depthFirstLog(func);
  }
};

bTreeMethods.breadthFirstLog = function(func) {
  var breadthFirstTraverse = function(node) {
    console.log(node);
    func(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    queue.shift();
    if (queue.length > 0) {
      breadthFirstTraverse(queue[0]);  
    }
  };

  var queue = [this];
  breadthFirstTraverse(queue[0]);
};

bTreeMethods.balanceTree = function() {
  var pseudoNode = Tree();
  pseudoNode.right = this;
  var x = pseudoNode.retrieveSortedList();
  while (x) {
    console.log(x.value);
    x = x.right;
  }
};

bTreeMethods.retrieveSortedList = function() {
  // var tail = this;
  var rest = this.right;
  while (rest) {
    if (!rest.left) {
      // tail = rest;
      rest = rest.right;
    } else {
      var temp = rest.left;
      rest.left = temp.right;
      temp.right = rest;
      rest = temp;
      // tail.right = rest;
    }
  }
  return this;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *  insert: O(log(n))
 *  contains: O(log(n))
 *  depthFirstLog: O(n)
 */
