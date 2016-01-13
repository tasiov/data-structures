var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.front = 0;
  obj.back = 0;
  obj.queueSize = 0;
  obj.storage = {};

  return obj;
};

var extend = function(toObj, fromObj) {
  for (var key in fromObj) {
    toObj[key] = fromObj[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
  this.queueSize++;
};

queueMethods.dequeue = function() {
  var dequeued = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  this.queueSize = Math.max(0, this.queueSize - 1);
  return dequeued;
};

queueMethods.size = function() {
  return this.queueSize;
};
