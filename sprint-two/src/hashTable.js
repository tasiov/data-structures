

var HashTable = function() {
  this._limit = 8;
  this._numEntries = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  this._numEntries++;

  if (this._numEntries/this._limit >= 0.75) {
    this._resize(this._limit * 2);
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v, k);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index, k);
};

HashTable.prototype.remove = function(k) {
  this._numEntries--;

  if (this._numEntries/this._limit <= 0.25) {
    this._resize(Math.ceil(this._limit / 2));
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.remove(index, k);
};

HashTable.prototype._resize = function(newLimit) {
  this._limit = newLimit;
  var allEntries = this._storage.returnAll();
  this._storage = LimitedArray(this._limit);
  this._numEntries = 0;

  for (var i = 0; i < allEntries.length; i++) {
    this.insert(allEntries[i][0], allEntries[i][1]);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 *  s = num chars in key string
 *  insert: O(s) <-- hash function
 *  retrieve: O(s) <-- hash function
 *  remove: O(s) <-- hash function 
 */


