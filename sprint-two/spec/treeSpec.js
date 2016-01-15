describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly remove node from parent', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[1].removeFromParent();
    expect(tree.contains(6)).to.equal(false);
    expect(tree.contains(8)).to.equal(false);
  });

  it('should correctly use callback on each item in the tree when traverse is called', function() {
    tree = Tree(2);
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(-1);
    tree.children[0].addChild(7);
    tree.children[0].addChild(15);
    tree.children[1].addChild(8);
    tree.children[2].addChild(0);
    tree.children[2].addChild(13);
    var results = [];

    var doubl = function(val) {
      results.push(val * 2);
    };

    tree.traverse(doubl);
    expect(results.toString()).to.equal([4,10,14,30,12,16,-2,0,26].toString());

  });

});
