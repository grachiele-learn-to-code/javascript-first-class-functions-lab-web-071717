function countdown(callback) {
  setTimeout(callback, 2000)
}

function createMultiplier(num) {
  return function(num2) {
    return num * num2
  }
}

function multiplier(argument, argument2) {
  return argument * argument2
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
