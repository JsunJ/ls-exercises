function nodesToArr(node = document.body) {
  let children = Array.prototype.slice.call(node.children)
  let dom = [node.tagName, []];

  // Base Case
  if (children.length === 0) {
    return dom;
  } 

  // Recursive Step
  children.forEach(childElement => {
    dom[1].push(nodesToArr(childElement))
  });

  return dom;
}

// function nodesToArr(currentGen = document.body) {
//   return  [currentGen.tagName, [...currentGen.children].map(nodesToArr)];
// }

// function nodesToArr(element = document.body) {
//   let resultArr = [element.tagName, []];

//   for (let index = 0; index < element.children.length; index++) {
//       resultArr[1].push(nodesToArr(element.children[index]));
//   }

//   return resultArr;
// }