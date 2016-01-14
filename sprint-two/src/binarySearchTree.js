var BinarySearchTree = function(value) {
  var newBTree = Object.create(bTreeMethods);
  newBTree.value = value;
 
  var left = null;
  var right = null;

  return newBTree;
};

var bTreeMethods = {};

bTreeMethods.insert = function(value) {
  if (value > this.value) {
    if (this.right != null) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  } else {
    if (this.left != null) {
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
  if (target > this.value && this.right != null) {
    return this.right.contains(target);
  } else if (target < this.value && this.left != null) {
    return this.left.contains(target);
  } else {
    return false;
  }
};

bTreeMethods.depthFirstLog = function(func) {
  func(this.value);
  if (this.left != null) {
    this.left.depthFirstLog(func);
  }
  if (this.right != null) {
    this.right 
    .depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *  insert: O(log(n))
 *  contains: O(log(n))
 *  depthFirstLog: O(n)
 */
