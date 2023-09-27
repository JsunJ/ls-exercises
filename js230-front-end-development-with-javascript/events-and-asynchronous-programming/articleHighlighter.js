function walk(element, callback) {
  callback(element);
  for (let index = 0; index < element.children.length; index += 1) {
    walk(element.children[index], callback);
  }
}

function removeHighlight() {
  walk(document.body, element => {
    element.classList.remove('highlight');
  });
}

document.addEventListener('click', (event) => {
  removeHighlight();
  const main = document.querySelector('main');
  let tag = event.target.tagName;

  if (tag === 'A') {
    event.stopPropagation();
    let id = event.target.href.match('#article-[0-9]+')[0];
    let article = document.querySelector(id);
    article.classList.add('highlight');
  } else if (tag === 'ARTICLE') {
    event.stopPropagation();
    event.target.classList.add('highlight');
  } else {
    tag = event.target.parentNode.tagName;
    if (tag !== 'ARTICLE') {
      main.classList.add('highlight');
    } else {
      event.stopPropagation();
      event.target.parentNode.classList.add('highlight');
    }
  }
});


// function highlight({target}) {
//   let element;
//   let id;

//   removeHighlight();

//   if (target.tagName === 'A') {
//     id = target.href.match('#article-[0-9]+')[0]
//     element = document.querySelector(id);
//   } else {
//     element = document.querySelector('main');
//   }

//   element.classList.add('highlight');
// }

// function removeHighlight() {
//   const highlighted = document.querySelector('.highlight');
//   if (highlighted) {
//     highlighted.classList.remove('highlight');
//   }
// }

// const nav = document.querySelector('header ul');
// const main = document.querySelector('main');

// nav.addEventListener('click', highlight);
// document.addEventListener('click', highlight);
// main.addEventListener("click", e => {
//   e.preventDefault();
//   let article = e.target;
//   if (article.tagName !== 'ARTICLE') { article = article.parentNode; }

//   if (article.tagName === "ARTICLE") {
//     e.stopPropagation();
//     removeHighlight();
//     article.classList.add("highlight");
//   }
// });