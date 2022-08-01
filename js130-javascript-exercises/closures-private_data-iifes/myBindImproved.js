function myBind(func, ctx) {
  let partialArgs = [].slice.apply(arguments);

  return function() {
    let remainingArgs = [].slice.apply(arguments);
    let fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(ctx, fullArgs);
  };
}

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

addFive(10); // 15

// function myBind(func, context, ...args) {
//   return function() {
//     return func.apply(context, [...args, ...arguments]);
//   };
// }