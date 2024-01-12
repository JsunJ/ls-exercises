const languages = [
  {
    name: 'Ruby',
    description: "Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, including functional, object-oriented, and imperative. It also has a dynamic type system and automatic memory management."
  },
  {
    name: 'JavaScript',
    description: "JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles."
  },
  {
    name: 'Lisp',
    description: "Lisp (historically, LISP) is a family of computer programming languages with a long history and a distinctive, fully parenthesized prefix notation. Originally specified in 1958, Lisp is the second-oldest high-level programming language in widespread use today. Only Fortran is older, by one year. Lisp has changed since its early days, and many dialects have existed over its history. Today, the best known general-purpose Lisp dialects are Common Lisp and Scheme."
  },
  {
    name: 'Go',
    description: "This is less than 120 characters."
  }
];

function renderLanguages() {
  languages.forEach(lang => {
    let $langDiv = $('<div class="lang"></div>');

    $langDiv.attr('data-lang', lang.name);
    $langDiv.append($('<h2>').text(lang.name));

    if (lang.description.length < 120) {
      $langDiv.append($('<p>').text(lang.description));
    } else {
      $langDiv.append($('<p>').text(lang.description.slice(0, 120) + ' ...'));
      $langDiv.append($('<a href="#" class="more">').text('Show More'));
    }

    $('#languages').append($langDiv);
  });
}

renderLanguages();

$('.more').on('click', event => {
  let $btn = $(event.target);
  let $langDiv = $btn.closest('.lang');
  let langName = $langDiv.attr('data-lang');
  let langObj = languages.filter(language => {
    return langName === language.name;
  })[0];

  if ($btn.text() === 'Show More') {
    $langDiv.find('p').text(langObj.description);
    $btn.text('Show Less');
  } else {
    $langDiv.find('p').text(langObj.description.slice(0, 120) + ' ...');
    $btn.text('Show More');
  }
});