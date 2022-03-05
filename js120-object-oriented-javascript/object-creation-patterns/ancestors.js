// name property added to make objects easier to identify
Object.prototype.ancestors = function() {
  let ancestorList = [];
  let currentAncestor = Object.getPrototypeOf(this);

  do {
    if (currentAncestor === Object.prototype) {
      ancestorList.push('Object.prototype');
    } else {
      ancestorList.push(currentAncestor.name);
    }

    currentAncestor = Object.getPrototypeOf(currentAncestor);

  } while(currentAncestor);

  return ancestorList;
};

let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']