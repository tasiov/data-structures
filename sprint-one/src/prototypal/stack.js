var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj['stackSize'] = 0;
  obj['storage'] = {};
  return obj;
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
    console.log(this);
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },

  size: function() {
    return this.stackSize;
  } 
};
