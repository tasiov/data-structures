function generateStack(obj) {
  var temp = 2000;
  while (temp >= 0) {
    var rand = Math.floor(Math.random() * 100);
    if (obj.__proto__.hasOwnProperty('push')) {
      obj.push(rand);
    } else if (obj.__proto__.hasOwnProperty('enqueue')){
      obj.enqueue(rand);
    }
    temp--;
  }
}

function generateQueue(obj) {
  var temp = 2000;
  while (temp >= 0) {
    var rand = Math.floor(Math.random() * 100);
    if (obj.__proto__.hasOwnProperty('push')) {
      obj.push(rand);
    } else if (obj.__proto__.hasOwnProperty('enqueue')){
      obj.enqueue(rand);
    }
    temp--;
  }
}

function testProfile() {
  var temp = 2000;
  while (temp >= 0) {
    var s = new Stack();
    var q = new Queue();
    generateStack(s);
    generateQueue(q); 
    temp--;
  }
}

testProfile();
console.log("Finished");