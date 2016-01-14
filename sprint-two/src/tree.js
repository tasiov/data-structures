var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
 
  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
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

// var Node = function(value) {
//   var node = {};
//   node.children = [];
//   node.value = value || null;
//   return node;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 *  addChild: O(1)
 *  contains: O(n)
 */
