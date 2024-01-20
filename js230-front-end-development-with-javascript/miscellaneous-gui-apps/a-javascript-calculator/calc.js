document.addEventListener('DOMContentLoaded', () => {
  const operationWindow = document.getElementById('operation-window');
  const entryWindow = document.getElementById('entry-window');
  const controls = document.querySelectorAll('.control');
  const digits = document.querySelectorAll('.digit');
  const operators = document.querySelectorAll('.operation');
  const equalSign = document.getElementById('equals');
  let operatorLockFlag = false; // prevents negative effects from clicking operations back-to-back
  let entryOverwriteFlag = false; // controls when the entry window is appended to, or overwritten entirely

  function handleDigit(event) {
    event.preventDefault();
    let digit = event.target.textContent;

    if (entryOverwriteFlag) {
      entryWindow.textContent = digit;
      entryOverwriteFlag = false;
      operatorLockFlag = false;
      return;
    }

    if (entryWindow.textContent === '0') {
      entryWindow.textContent = digit;
    } else {
      entryWindow.textContent += digit;
    }

    operatorLockFlag = false;
  }

  function handleOperator(event) {
    event.preventDefault();
    let operation = event.target.textContent;

    if (!operatorLockFlag) {
      evaluate(event);
      operationWindow.textContent += entryWindow.textContent.trim() + ' ' + operation + ' ';
      operatorLockFlag = true;
    } else {
      let regex = /[x\-\+\u00F7\%]\s$/;
      operationWindow.textContent = operationWindow.textContent.replace(regex, `${operation} `);
    }

    entryOverwriteFlag = true;
  }

  function evaluate(event) {
    event.preventDefault();
    if (operationWindow.textContent === '') return;
    let expressionString = operationWindow.textContent + entryWindow.textContent;
    expressionString = expressionString.replace('x', '*').replace('\u00F7', '/');
    
    entryWindow.textContent = eval(expressionString);
    operationWindow.textContent = '';

    entryOverwriteFlag = true;
  }

  function handleControl(event) {
    event.preventDefault();
    let control = event.target.id;

    switch(control) {
      case 'ce':
        entryWindow.textContent = '0';
        break;
      case 'c':
        operationWindow.textContent = '';
        entryWindow.textContent = '0';
        operatorLockFlag = false;
        entryOverwriteFlag = false;
        break;
      case 'neg':
        if (entryWindow.textContent !== '0') {
          entryWindow.textContent = -entryWindow.textContent;
        }
    }
  }

  digits.forEach(digit => {
    digit.addEventListener('click', handleDigit);
  });

  operators.forEach(operator => {
    operator.addEventListener('click', handleOperator);
  });

  controls.forEach(control => {
    control.addEventListener('click', handleControl);
  });

  equalSign.addEventListener('click', evaluate);
});