const add = function(number1, number2) {

    return number1 + number2

};

const subtract = function(number1, number2) {
	
    return number1 - number2


};

const sum = function(numbers) {
	
  let total = 0; 
    for (let i = 0; i < numbers.length; i++) { 
        total += numbers[i];
    }
    return total; 

};

const multiply = function(numbers) {

  let total = 1; 
    for (let i = 0; i < numbers.length; i++) { 
        total = total * numbers[i];
    }
    return total;

};

const power = function(numbers1, numbers2) {
	

    
    return Math.pow(numbers1, numbers2)

};

const factorial = function(n) {
	
  if (n < 0) return undefined; // factorial not defined for negative numbers
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
