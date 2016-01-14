var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
};

treeMethods.contains = function(target) {
};

var Node = function(value) {
  var node = {};
  node.children = [];
  node.value = value || null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
