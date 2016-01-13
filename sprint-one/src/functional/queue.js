var Queue = function() {
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
    size++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[front];
    delete storage[front];
    front++;
    size = Math.max(0, size - 1);
    return dequeued;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
