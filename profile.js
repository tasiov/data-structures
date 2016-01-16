function generate(obj) {
  var temp = 2000;
  while (temp >= 0) {
    var rand = Math.floor(Math.random() * 100);
    if (obj.push) {
      obj.push(rand);
    } else if (obj.enqueue){
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
    generate(s);
    generate(q); 
    temp--;
  }
}

testProfile();
console.log("Finished");