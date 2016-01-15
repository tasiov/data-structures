var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.parent = null;
 
  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length === 0) {
    return false;
  }
  var foundTarget = false;
  for (var i = 0; i < this.children.length; i++) {
    foundTarget = foundTarget || this.children[i].contains(target);
  }
  return foundTarget;
};

treeMethods.removeFromParent = function() {
  var pChild = this.parent.children;
  pChild.splice(pChild.indexOf(this.value),1);
  this.parent = null;
  return this.value;
};

treeMethods.traverse = function(callback) {
  callback(this.value);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *  addChild: O(1)
 *  contains: O(n)
 */