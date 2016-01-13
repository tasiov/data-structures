var Stack = function() {
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  someInstance.show = function() {
    return storage;
  };

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    size = Math.max(0, size - 1);
    var popped = storage[size];
    delete storage[size];
    return popped;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
