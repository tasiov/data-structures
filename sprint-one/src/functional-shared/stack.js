var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj['stackSize'] = 0;
  obj['storage'] = {};

  extend(obj, stackMethods);

  return obj;
};

var extend = function(toObj, fromObj) {
  for (var key in fromObj) {
    toObj[key] = fromObj[key];
  }
};

var stackMethods = {

  pop: function() {
    if (this.stackSize > 0) {
      this.stackSize--;
      var popped = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      return popped;
    }
  },

  push: function(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },

  size: function() {
    return this.stackSize;
  } 
};
