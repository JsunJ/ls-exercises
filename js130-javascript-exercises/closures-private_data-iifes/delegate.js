function delegate(obj, method, ...args) {
  return function() {
    return obj[method].apply(obj, args);
  }
}

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'

// function delegate(context, methodName) {
//   let args = Array.prototype.slice.call(arguments, 2)
//   return function() {
//     return context[methodName].apply(context, args);
//   };
// }