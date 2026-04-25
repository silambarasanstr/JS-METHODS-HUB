// 1. Function as Argument (Basic HOF)

function greet(name) {
  return "Hello " + name;
}

function processUserInput(callback) {
  const name = "Simbu";
  console.log(callback(name));
}

// call
processUserInput(greet);

// 2. Function Returning Function

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
