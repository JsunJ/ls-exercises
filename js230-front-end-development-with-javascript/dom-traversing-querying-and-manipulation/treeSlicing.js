function sliceTree(startId, endId) {
  let startNode = document.getElementById(startId);
  let endNode = document.getElementById(endId);

  if (!startNode || !endNode) return undefined;

  const slicedTree = [];
  let currentNode;

  do {
    currentNode = endNode;
    slicedTree.unshift(currentNode.tagName);
    endNode = endNode.parentNode;
  } while (currentNode.id !== String(startId) && endNode.tagName !== 'BODY');

  return (endNode.tagName === 'BODY' && currentNode.id !== String(startId) ? undefined : slicedTree);
}

// start = article
// end = a

// working backwards

// loop while current.id !== start.id AND end !== body

// current = a
// [A]
// end = span

// current = span
// [SPAN, A]
// end = header

// current = header
// [HEADER, SPAN, A]
// end = article

// current = article
// [ARTICLE, HEADER, SPAN, A]
// end = body

// end loop trigger

// start = article
// end = body
// current = article