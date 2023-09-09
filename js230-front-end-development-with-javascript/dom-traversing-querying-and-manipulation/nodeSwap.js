function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function isChild(parent, potentialChild) {
  let answer = false;
  walk(parent, node => {
    if (node.id === potentialChild.id) answer = true;
  });
  return answer;
}

function nodeSwap(firstId, secondId) {
  let firstEl = document.getElementById(firstId);
  let secondEl = document.getElementById(secondId);

  if (!firstEl || !secondEl) return undefined;
  if (isChild(firstEl, secondEl) || isChild(secondEl, firstEl)) {
    return undefined;
  }

  let firstElParent = firstEl.parentNode;
  let secondElParent = secondEl.parentNode;
  let secondElPos = [...secondElParent.childNodes].indexOf(secondEl);

  firstElParent.insertBefore(secondEl, firstEl);
  secondElParent.insertBefore(firstEl, secondElParent.childNodes[secondElPos]);

  return true;
}