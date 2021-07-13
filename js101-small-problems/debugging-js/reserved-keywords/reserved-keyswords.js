const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      return true;
    }
  });

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

// forEach method is taking the return statement on line 11 (and doing nothing with it)

function isReserved(name) {
  for (let i = 0; i < RESERVED_KEYWORDS.length; i++) {
    if (name === RESERVED_KEYWORDS[i]) {
      return true;
    }
  }

  return false;
}