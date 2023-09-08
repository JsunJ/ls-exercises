function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function childNodes(nodeId) {
  let parent = document.getElementById(nodeId);
  let totalChildren = 0;
  let directChildren = parent.childNodes.length;

  walk(parent, child => {
    totalChildren += 1;
  });

  return [directChildren, totalChildren - directChildren];
}