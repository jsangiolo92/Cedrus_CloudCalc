module.exports = {
  calculate: function(numOne, numTwo, operator) {
    let result;
    if (operator === '+') {
      result = parseFloat(numOne) + parseFloat(numTwo);
    }
    else if (operator === '-') {
      result = parseFloat(numOne) - parseFloat(numTwo);
    }
    else if (operator === '*') {
      result = parseFloat(numOne) * parseFloat(numTwo);
    }
    else {
      result = parseFloat(numOne) / parseFloat(numTwo);
    }

    return result;
  }
}