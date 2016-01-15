/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];
    for (var i = 0; i < limit; i++) {
    storage.push([]);
  }


  var limitedArray = {};
  limitedArray.get = function(index, key) {
    checkLimit(index);
    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] == key) {
        return storage[index][i][1];
      }
    }
    return undefined;
  };
  limitedArray.set = function(index, value, key) {
    checkLimit(index);
    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] == key) {
        storage[index][i][1] = value;
        return;
      }
    }
    storage[index].push([key, value]);
  };
  limitedArray.remove = function(index, key) {
    checkLimit(index);
    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] == key) {
        return storage[index].splice(i,1)[0];
      }
    }
    return null;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      for (var j = 0; j < storage[i].length; j++) {
        callback(storage[i][j][1], storage[i][j][0], storage[i]);
      }
    }
  };
  limitedArray.returnAll = function() {
    var allEntries = [];
    for (var i = 0; i < storage.length; i++) {
      for (var j = 0; j < storage[i].length; j++) {
        allEntries.push(storage[i][j]);
      }
    }
    return allEntries;
  };



  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *   get: O(1)
 *   set: O(1)
 *   each: O(n)
 *   getIndexBelowMaxForKey: O(s)
 */
