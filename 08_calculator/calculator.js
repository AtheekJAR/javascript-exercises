const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2
};

const sum = function(arr) {
	return arr.reduce(function(value, number){
    return value + number;
  },0)
};

const multiply = function(arr) {
  return arr.reduce(function(value, number){
    return value * number;
  },1)
};

const power = function(number, toThePower) {
  let answer = 1;
	for(let i = 0; i < toThePower; i++) {
    answer *= number;
  }
  return answer;
};

const factorial = function(n) {
	return n === 0 ? 1 : n * factorial(n-1);
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
