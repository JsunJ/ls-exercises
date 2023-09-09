function walkGenerations(node, generation, callback) {
  callback(node, generation);

  for (let index = 0; index < node.children.length; index += 1) {
    walkGenerations(node.children[index], generation += 1, callback);
  }
}

function colorGeneration(targetGeneration) {
  walkGenerations(document.body, 1, (node, generation) => {
    if (generation === targetGeneration) {
      node.classList.add('generation-color');
    }
  });
}

// function colorGeneration(targetGeneration) {
//   let generation = 0;
//   let parents = [document.body];
//   let elements;

//   while (generation < targetGeneration) {
//     generation += 1;
//     elements = getAllChildrenOf(parents);
//     parents = elements;
//   }

//   if (elements) {
//     color(elements);
//   }
// }

// function color(elements) {
//   elements.forEach(({classList}) => {
//     classList.add("generation-color");
//   });
// }

// function getAllChildrenOf(parents) {
//   return parents.map(({children}) => Array.prototype.slice
//                                                     .call(children))
//                                                     .reduce((collection, children) => collection.concat(children), []);
// }



// function colorGeneration(level) {
//   if (level < 1) return;

//   let currentGen = [document.body];
//   for (let i = 0; i < level; i += 1) {
//     currentGen = currentGen.flatMap(child => [...child.children]);
//   }

//   currentGen.forEach(el => el.classList.add('generation-color'));
// }



// function walk(node, callback) {
//   callback(node);

//   for (let index = 0; index < node.children.length; index += 1) {
//     walk(node.children[index], callback);
//   }
// }

// function nestingLevel(node) {
//   let level = 1;
//   let parent = node.parentNode;
//   while (parent !== document.body) {
//     parent = parent.parentNode;
//     level += 1;
//   }

//   return level;
// }

// function colorGeneration(level) {
//   walk(document.body.firstElementChild, (n) => {
//     if (nestingLevel(n) === level) n.classList.add('generation-color');
//   });
// }