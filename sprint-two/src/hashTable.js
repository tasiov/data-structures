

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v, k);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index, k);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined, k);
};



/*
 * Complexity: What is the time complexity of the above functions?
 *  s = num chars in key string
 *  insert: O(s) <-- hash function
 *  retrieve: O(s) <-- hash function
 *  remove: O(s) <-- hash function 
 */


