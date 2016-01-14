var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.back = 0;
  this.queueSize = 0;
  this.storage = {};
};

Queue.prototype = {
  constructor: Queue,

  enqueue: function(value) {
    this.storage[this.back] = value;
    this.back++;
    this.queueSize++;
  },

  dequeue: function() {
    var dequeued = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    this.queueSize = Math.max(0, this.queueSize - 1);
    return dequeued;
  },

  size: function() {
    return this.queueSize;
  }
};



