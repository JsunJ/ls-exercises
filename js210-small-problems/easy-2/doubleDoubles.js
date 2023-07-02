function twice(num) {
  if (isDouble(num)) {
    return num;
  } else {
    return num * 2;
  }
}

function isDouble(num) {
  let numStr = num.toString();
  if (numStr.length % 2 !== 0) return false;

  let leftDigitsStr = numStr.slice(0, numStr.length / 2);
  let rightDigitsStr = numStr.slice(numStr.length / 2);

  if (leftDigitsStr === rightDigitsStr) {
    return true;
  } else {
    return false;
  }
}

console.log(twice(6));           // 12
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676